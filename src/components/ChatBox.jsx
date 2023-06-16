import { useEffect, useRef } from "react";
import bg from "../assets/image/wa.png";
import ChatProfileHeader from "./ChatProfileHeader";
import ChatTextArea from "./ChatTextArea";
import Menu from "./Menu";
import MessageSelf from "./MessageSelf";
import MessageSender from "./MessageSender";
import { useSelector } from "react-redux";

const ChatBox = () => {
  const chatboxRef = useRef(null);
  const selected = useSelector((state) => state.selected.user);
  const user = useSelector((state) => state.user.user);
  const socket = useRef(null)

  useEffect(() => {
    console.log(selected.id);
    let url = `ws://localhost:8000/ws/chat/${selected.id}/`
    const _socket = new WebSocket(url)
    _socket.onmessage = function(e){
      let data = JSON.parse(e.data)
      console.log(data);  
    }
    socket.current =_socket
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, [selected]);
  const send_message = (message) =>{
    message.sender = user
    console.log(message,'send_message');
    socket.current.send(JSON.stringify(message))
  }
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        width: "1000px",
        minWidth: "350px",
      }}
    >
      <ChatProfileHeader user ={selected} />
      <div className="w-full h-[91%]">
        <Menu/>
        <div className="w-full h-[90%] flex flex-1 flex-col relative overflow-y-scroll px-4" ref={chatboxRef}>
          <MessageSender message={{message:'hi', time:"9:30"}} />
          <MessageSelf message={{message:'hello', time:"10:30"}} />
        </div>
        
        <ChatTextArea send_message={send_message} />
      </div>
    </div>
  );
};

export default ChatBox;
