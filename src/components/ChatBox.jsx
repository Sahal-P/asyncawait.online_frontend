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
    let url = `${WS}${CHAT_WS}${chat_id}/`;
    const _socket = new WebSocket(url);

    const handleSocketMessage = (e) => {
      let data = JSON.parse(e.data);
      console.log(data);
      if (data.message_type === MESSAGE_TYPE["TEXT_MESSAGE"]) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: data.id,
            content: data.content,
            sender: data.sender,
            timestampe: data.timestampe,
            status: data.status,
          },
        ]);
      }
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

  const send_message = (message) => {
    message.sender = user.id;
    message.timestampe = moment().format("YYYY-MM-DD HH:mm:ss.SSSSSS");
    console.log(message);
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
          className="w-full h-[90%] flex flex-1 flex-col relative overflow-y-scroll px-4"
          ref={chatboxRef}
        >
          {history.map((message) =>
            message.sender === user.id ? (
              <MessageSelf key={message.id} message={message} />
            ) : (
              <MessageSender key={message.id} message={message} />
            )
          )}
          {messages.map((message) =>
            message.sender === user.id ? (
              <MessageSelf key={message.id} message={message} />
            ) : (
              <MessageSender key={message.id} message={message} />
            )
          )}
        </div>

        <ChatTextArea send_message={send_message} />
      </div>
    </div>
  );
};

export default ChatBox;
