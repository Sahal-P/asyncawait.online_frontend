/* eslint-disable no-unused-vars */
import { useEffect, useRef} from "react";
import Stack from "@mui/material/Stack";
import bg from "../../assets/image/wa.png";
import ChatProfileHeader from "../header/ChatProfileHeader";
import ChatTextArea from "./message/ChatTextArea";
import Menu from "../Menu";
import MessageSelf from "./message/MessageSelf";
import MessageSender from "./message/MessageSender";
import { useSelector } from "react-redux";
import MessageDateInfo from "./message/MessageDateInfo";
import ChatBoxSkeleton from "../skeleton/ChatBoxSkeleton";
import useFetchChatDetails from "../../hooks/useFetchChatDetails";
import { useChatWebSocket } from "../../hooks/useChatWebSocket";

const ChatBox = ({ NetworkOnline }) => {
  const chatboxRef = useRef(null);
  const selected = useSelector((state) => state.selected.user);
  const history = useSelector((state) => state.chat.messages);
  const user = useSelector((state) => state.user.user);

  const { data, error, isSuccess, isLoading } = useFetchChatDetails(
    selected?.contact?.id
  );

  const { socket, chatWSConnected, send_message } =
    useChatWebSocket(NetworkOnline);

  const handleScroll = () => {
    if (!chatboxRef.current) return;
    if (chatboxRef.current.getBoundingClientRect().y <= -580 || null) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    handleScroll();
    
  }, [history, isLoading]);

  useEffect(()=>{
    
    return () => {
      if (socket){
        socket?.current?.close()
      }
    }
  },[])

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
        </div>

        <ChatTextArea send_message={send_message} />
      </div>
    </div>
  );
};

export default ChatBox;
