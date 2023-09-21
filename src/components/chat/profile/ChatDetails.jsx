import { useEffect } from "react";
import GroupInfo from "./GroupInfo";
import UserInfo from "./UserInfo";

const ChatDetails = ({ setChatDetails, chatDetails }) => {
  const selectedChat = false;

  return (
    <div
      className={`${
        chatDetails ? "block " : "hidden "
      }w-[410px] z-50 h-full border-l bg-black/30 border-slate-700 fixed right-0 overflow-y-scroll`}
    >
      <div className="h-[60px] w-full bg-primary flex items-center gap-6 fixed z-30 top-0">
        <button
          className="text-icon ml-6"
          onClick={() => setChatDetails(!chatDetails)}
        >
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            className=""
            fill="currentColor"
            enableBackground="new 0 0 24 24"
          >
            <path
              enableBackground="new"
              d="M19.1,17.2l-5.3-5.3l5.3-5.3l-1.8-1.8L12,10.2L6.7,4.9L4.9,6.6 l5.3,5.3l-5.3,5.3L6.7,19l5.3-5.3l5.3,5.3L19.1,17.2z"
            ></path>
          </svg>
        </button>
        <h1 className="text-white text-lg">{`${
          selectedChat ? "Group" : "Contact"
        } info`}</h1>
      </div>
      <UserInfo />
      {/* <GroupInfo /> */}
    </div>
  );
};

export default ChatDetails;
