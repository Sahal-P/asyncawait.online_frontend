import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHAT_WS, WS } from '../apis/socket';
import { ChatActions } from '../redux/slice/chatDetailsSlice';
import { MESSAGE_TYPE } from '../types';
import { MESSAGE_READED } from '../types/Message';

export function useChatWebSocket(NetworkOnline, chatboxRef) {
    const chatId = useSelector((state) => state.chat.chat_id);
  const dispatch = useDispatch();
  const [chatWSConnected, setChatWSConnected] = useState(false);
  const socket = useRef(null);

  useEffect(() => {
    if (!NetworkOnline) {
      setChatWSConnected(false);
    }

    let chat_ws_url = `${WS}${CHAT_WS}${chatId}/`;
    let _socket = null;

    const connectWebSocket = () => {
        const _socket = new WebSocket(chat_ws_url);
        const handleSocketMessage = (e) => {
          let data = JSON.parse(e.data);
  
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
                temp_id: data.temp_id,
                content: data.id,
                sender: data.sender,
                type: MESSAGE_READED,
              });
            } else {
              dispatch(
                ChatActions.editMessageStatus({
                  id: data.temp_id,
                  status: "SENT",
                })
              );
            }
            // setMessages((prevMessages) => [
            //   ...prevMessages,
            //
            // ]);
          }
  
          if (data.message_type === MESSAGE_TYPE[MESSAGE_READED]) {
            if (data.sender === user.id) {
              // handleReadedMessage(data.content)
              console.log(data, user.id);
              console.log("before", history);
              dispatch(
                ChatActions.editMessageStatus({
                  id: data.temp_id,
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
         _socket.close(); // Close the socket when the component unmounts
    }
    };
  }, [chatId, NetworkOnline]);

  const notify_deliverd_and_seen = (notify) => {
    socket.current.send(JSON.stringify(notify));
  };

  const handleReadedMessage = (id) => {
    console.log("before", messages);
    const newMessage = messages.map((obj) => {
      if (obj.id === id) {
        return { ...obj, status: "SEEN" };
      }
      return obj;
    });
    setMessages(newMessage);
    console.log("changed seen ", messages);
  };


  // Add other WebSocket-related functionality here

  return { chatWSConnected, socket };
}