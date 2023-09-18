import { useContext, useEffect, useRef, useState } from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
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
import {
  MESSAGE_DELIVERD,
  MESSAGE_READED,
  TEXT_MESSAGE,
} from "../types/Message";
import { ChatActions } from "../redux/slice/chatDetailsSlice";
import { v4 as uuidv4 } from "uuid";
import MessageDateInfo from "./MessageDateInfo";
import ChatBoxSkeleton from "./skeleton/ChatBoxSkeleton";
import useFetchChatDetails from "../hooks/useFetchChatDetails";
import { useChatWebSocket } from "../hooks/useChatWebSocket";

const ChatBox = ({ NetworkOnline }) => {
  const chatboxRef = useRef(null);
  const dispatch = useDispatch();
  const [chatWSConnected, setChatWSConnected] = useState(false);
  const selected = useSelector((state) => state.selected.user);
  const chat_id = useSelector((state) => state.chat.chat_id);
  const history = useSelector((state) => state.chat.messages);
  const user = useSelector((state) => state.user.user);
  const socket = useRef(null);
  // const [messages, setMessages] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  // const {data, isLoading, error} = useGetChatDetails(selected?.contact?.id)
  // const { data, error, isSuccess, isLoading } = useFetchChatDetails(
  //   selected?.contact?.id
  // );

  console.log(chat_id);
  useEffect(() => {
    if (!NetworkOnline) {
      setChatWSConnected(false);
    }
    let _socket = null;
    let chat_ws_url = `${WS}${CHAT_WS}${chat_id}/`;

    const connectWebSocket = () => {
      console.log("web socket one ---");
      const _socket = new WebSocket(chat_ws_url);
      const handleSocketMessage = (e) => {
        let data = JSON.parse(e.data);

        if (data.message_type === MESSAGE_TYPE["TEXT_MESSAGE"]) {
          console.log("1");
          if (data.sender !== user.id) {
            dispatch(
              ChatActions.addMessage({
                id: data.id,
                content: data.content,
                sender: data.sender,
                timestampe: data.timestampe,
                status: data.status,
              })
            );
            notify_deliverd_and_seen({
              // temp_id: data.temp_id,
              id: data.id,
              sender: data.sender,
              type: MESSAGE_READED,
            });
          } else {
            dispatch(
              ChatActions.editMessageStatus({
                id: data.id,
                status: "SENT",
              })
            );
          }
        }

        if (data.message_type === MESSAGE_TYPE[MESSAGE_READED]) {
          if (data.sender === user.id) {
            // handleReadedMessage(data.content)

            dispatch(
              ChatActions.editMessageStatus({
                id: data.id,
                status: "SEEN",
              })
            );
          }
        }
      };

      const handleSocketOpen = (e) => {
        console.log(`%cConnection Opened`, "color: green");
        setChatWSConnected(true);
      };
      const handleSocketError = (e) => {
        console.log("%cConnection Error", "color:red", e);

        setChatWSConnected(false);
        setTimeout(connectWebSocket, 5000);
      };
      _socket.addEventListener("open", handleSocketOpen);
      _socket.addEventListener("error", handleSocketError);
      _socket.addEventListener("message", handleSocketMessage);

      socket.current = _socket;
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
      // Cleanup function to unsubscribe the event listener
    };
    connectWebSocket();

    return () => {
      if (_socket) {
        _socket.removeEventListener("message", handleSocketMessage);
        _socket.removeEventListener("open", handleSocketOpen);
      _socket.removeEventListener("error", handleSocketError);
        _socket.close(); // Close the socket when the component unmounts
      }
    };
  }, [chat_id, NetworkOnline]);

  useEffect(()  => {
    dispatch({ type: GET_CHAT_DETAILS, id: selected?.contact?.id});
     chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, [chat_id]);

  useEffect(() => {
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, [history, isLoading]);

  const notify_deliverd_and_seen = (notify) => {
    socket.current.send(JSON.stringify(notify));
  };

  // const handleReadedMessage = (id) => {
  //   const newMessage = messages.map((obj) => {
  //     if (obj.id === id) {
  //       return { ...obj, status: "SEEN" };
  //     }
  //     return obj;
  //   });
  //   setMessages(newMessage);
  //   console.log("changed seen ", messages);
  // };

  const send_message = (message) => {
    message.id = uuidv4();
    message.sender = user.id;
    message.timestampe = moment().format("YYYY-MM-DD HH:mm:ss.SSSSSS");
    message.status = "PENDING";
    dispatch(ChatActions.addMessage(message));
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
      <ChatProfileHeader user={selected} chatWSConnected={chatWSConnected} />
      <div className="w-full h-[91%]">
        <Menu />
        <div
          className="w-full h-[93%] flex flex-1 flex-col relative overflow-y-scroll px-4"
          ref={chatboxRef}
        >
          {isLoading ? (
            <ChatBoxSkeleton />
          ) : (
            <>
              <Stack
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                spacing={2}
              ></Stack>

              {history?.map((message) =>
                message.sender === user.id ? (
                  <MessageSelf key={message.id} message={message} />
                ) : (
                  <MessageSender key={message.id} message={message} />
                )
              )}

              <MessageDateInfo />
            </>
          )}

          {/* <LinearProgress color="success" /> */}
          {/* <CircularProgress sx={{ color: "white" }} /> */}
          {/* </Slide> */}

          {/* {messages.map((message) =>
            message.sender === user.id ? (
              <MessageSelf key={message.id} message={message} messages={messages} />
            ) : (
              <MessageSender key={message.id} message={message} />
            )
          )} */}
        </div>

        <ChatTextArea send_message={send_message} />
      </div>
    </div>
  );
};

export default ChatBox;
