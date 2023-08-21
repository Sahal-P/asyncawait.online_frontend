import { useContext, useEffect, useRef, useState } from "react";
import bg from "../assets/image/wa.png";
import ChatProfileHeader from "./ChatProfileHeader";
import ChatTextArea from "./ChatTextArea";
import Menu from "./Menu";
import MessageSelf from "./MessageSelf";
import MessageSender from "./MessageSender";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../pages/Home";
import moment from "moment";
import { MESSAGE_TYPE } from "../types";
import { GET_CHAT_DETAILS } from "../redux/sagas/types";
import { CHAT_WS, WS } from "../apis/socket";
import { Skeleton } from "@mui/material";
import { MESSAGE_DELIVERD, MESSAGE_READED, TEXT_MESSAGE } from "../types/Message";
import { ChatActions } from "../redux/slice/chatDetailsSlice";
import { v4 as uuidv4 } from 'uuid';
import MessageDateInfo from "./MessageDateInfo";


const ChatBox = () => {
  const chatboxRef = useRef(null);
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selected.user);
  const chat_id = useSelector((state) => state.chat.chat_id);
  const history = useSelector((state) => state.chat.messages);
  const user = useSelector((state) => state.user.user);
  const socket = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let chat_ws_url = `${WS}${CHAT_WS}${chat_id}/`;
    const _socket = new WebSocket(chat_ws_url);
    const handleSocketMessage = (e) => {
      let data = JSON.parse(e.data);

      if (data.message_type === MESSAGE_TYPE["TEXT_MESSAGE"]) {
        if (data.sender !== user.id){
          dispatch(ChatActions.addMessage({
                id: data.id,
                content: data.content,
                sender: data.sender,
                timestampe: data.timestampe,
                status: data.status,
              },))
          notify_deliverd_and_seen({
            temp_id: data.temp_id,
            content: data.id,
            sender: data.sender,
            type: MESSAGE_READED
          })
        }
        else {
          dispatch(ChatActions.editMessageStatus({id:data.temp_id, status:"SENT"}))
        }
        // setMessages((prevMessages) => [
        //   ...prevMessages,
        //   
        // ]);
      }

      if (data.message_type === MESSAGE_TYPE[MESSAGE_READED]) {
        if (data.sender === user.id){
          // handleReadedMessage(data.content)
          console.log(data, user.id);
          console.log('before', history);
          dispatch(ChatActions.editMessageStatus({id:data.temp_id, status:"SEEN"}))
          
        }
      }


      // switch (data.message_type) {
      //   case MESSAGE_TYPE[TEXT_MESSAGE]:
      //     console.log(data);
      //     setMessages((prevMessages) => [
      //       ...prevMessages,
      //       {
      //         id: data.id,
      //         content: data.content,
      //         sender: data.sender,
      //         timestampe: data.timestampe,
      //         status: data.status,
      //       },
      //     ]);
      //     if (data.sender !== user.id){
      //       notify_deliverd_and_seen({
      //         content: data.id,
      //         sender: data.sender,
      //         type: MESSAGE_READED
      //       })
      //     }
          
      //     break;
      //   // Add more cases here if needed
      //   case MESSAGE_TYPE[MESSAGE_READED]:
      //     if (data.sender === user.id){
      //       handleReadedMessage(data.content)
      //     }
      //     // Default case
      //     break;

      //   case MESSAGE_TYPE[MESSAGE_DELIVERD]:
      //     if (data.sender === user.id){
      //       console.log(data);
      //       console.log('got',data.sender, user.id);
      //     }
      //     // Default case
      //     break;
      // }
    };

    const handleSocketOpen = (e) => {
      console.log(`%cConnection Opened`, "color: green");
    };
    const handleSocketError = (e) => {
      console.log("%cConnection Error", "color:red", e);
    };
    _socket.addEventListener("open", handleSocketOpen);
    _socket.addEventListener("error", handleSocketError);
    _socket.addEventListener("message", handleSocketMessage);

    socket.current = _socket;
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    // Cleanup function to unsubscribe the event listener
    return () => {
      _socket.removeEventListener("message", handleSocketMessage);
    };
  }, [chat_id]);

  useEffect(() => {
    dispatch({ type: GET_CHAT_DETAILS, id: selected?.contact?.id });
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, []);

  useEffect(() => {
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, [history, messages]);

  const notify_deliverd_and_seen = (notify) => {
    socket.current.send(JSON.stringify(notify))
  }

  const handleReadedMessage = (id) => {
    console.log('before', messages);
    const newMessage = messages.map( obj => {
      if (obj.id === id) {
        return {...obj, status: "SEEN"}
      }
      return obj
    })
    setMessages(newMessage)
    console.log('changed seen ',messages);
  }

  const send_message = (message) => {
    message.id = uuidv4();
    message.sender = user.id;
    message.timestampe = moment().format("YYYY-MM-DD HH:mm:ss.SSSSSS");
    message.status = "PENDING"
    dispatch(ChatActions.addMessage(message))
    socket.current.send(JSON.stringify(message));
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        width: "1000px",
        minWidth: "350px",
      }}
    >
      <ChatProfileHeader user={selected} />
      <div className="w-full h-[91%]">
        <Menu />
        <div
          className="w-full h-[93%] flex flex-1 flex-col relative overflow-y-scroll px-4"
          ref={chatboxRef}
        >
          {/* <Skeleton
  sx={{ bgcolor: '#35444c', borderRadius: '10px' }}
  variant="rectangular"
  width={210}
  height={118}
/> */}
          {history.map((message) =>
            message.sender === user.id ? (
              <MessageSelf key={message.id} message={message} />
            ) : (
              <MessageSender key={message.id} message={message} />
            )
          )}
          {/* {messages.map((message) =>
            message.sender === user.id ? (
              <MessageSelf key={message.id} message={message} messages={messages} />
            ) : (
              <MessageSender key={message.id} message={message} />
            )
          )} */}
          <MessageDateInfo/>
        </div>

        <ChatTextArea send_message={send_message} />
      </div>
    </div>
  );
};

export default ChatBox;
