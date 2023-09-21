import { useEffect, useRef, useState } from "react";
import { MESSAGE_TYPE } from "../types";
import { CHAT_WS, WS } from "../apis/socket";
import { ChatActions } from "../redux/slice/chatDetailsSlice";
import { MESSAGE_READED } from "../types/Message";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";


export function useChatWebSocket({
  NetworkOnline,
}) {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  // const chatboxRef = useRef(null);
  const [chatWSConnected, setChatWSConnected] = useState(false);
  const socket = useRef(null);
  const chat_id = useSelector((state) => state.chat.chat_id);
  
  useEffect(() => {
    if (!NetworkOnline) {
      setChatWSConnected(false);
    }
    let _socket = null;
    let chat_ws_url = `${WS}${CHAT_WS}${chat_id}/`;

    const connectWebSocket = () => {
      const _socket = new WebSocket(chat_ws_url);
      const handleSocketMessage = (e) => {
        let data = JSON.parse(e.data);
        console.log(data);
        if (data.message_type === MESSAGE_TYPE["TEXT_MESSAGE"]) {
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
      // chatboxRef.current.scrollTop = chatboxRef?.current?.scrollHeight;
      // Cleanup function to unsubscribe the event listener
    };
    if (chat_id) {
      connectWebSocket();
    }

    return () => {
      if (_socket) {
        _socket.removeEventListener(
          "message",
          connectWebSocket.handleSocketMessage
        );
        _socket.removeEventListener("open", connectWebSocket.handleSocketOpen);
        _socket.removeEventListener(
          "error",
          connectWebSocket.handleSocketError
        );
        _socket.close(); // Close the socket when the component unmounts
      }
    };
  }, [chat_id, NetworkOnline]);

  const notify_deliverd_and_seen = (notify) => {
    socket.current.send(JSON.stringify(notify));
  };

  const send_message = (message) => {
    message.id = uuidv4();
    message.sender = user.id;
    message.timestampe = moment().format("YYYY-MM-DD HH:mm:ss.SSSSSS");
    message.status = "PENDING";
    dispatch(ChatActions.addMessage(message));
    socket.current.send(JSON.stringify(message));
  };

  return {socket, chatWSConnected, send_message};
}
