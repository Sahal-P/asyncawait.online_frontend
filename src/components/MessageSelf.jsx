import SeenTick from "./SeenTick";
import SendTick from "./SendTick";
import DeliverdTick from "./DeliverdTick";
import PendingTick from "./PendingTick";
import { useEffect } from "react";
import moment from "moment";

const MessageSelf = ({ message }) => {
  useEffect(() => {}, []);
  return (
    <div className="text-white w-fit h-fit max-w-[50%] h-8 rounded-b-lg rounded-tl-lg px-1 mb-1 mt-2 mr-3 ml-auto bg-[#008069] relative items-center flex py-1 group">
      {/* <MenuTextMsg menuText={menuText} setMenuText={setMenuText} /> */}
      <p className="text-sm px-2 break-all">{message?.content}</p>
      <span className="text-[#008069] absolute top-0 -right-2">
        <svg viewBox="0 0 8 13" width="8" height="13">
          <path
            opacity=".13"
            d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"
          ></path>
          <path
            fill="currentColor"
            d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
          ></path>
        </svg>
      </span>
      {/* <div className="w-fit"> */}
      <p className="text-icon text-xs mt-auto mr-1 whitespace-nowrap">
        {moment(message?.timestampe).format("h:mm a")}
      </p>
      {/* </div> */}
      <span className="text-sky-300 mt-auto ">
        <svg
          width="16"
          height="11"
          viewBox="0 0 16 11"
          fill="none"
          className=""
        >
          {
            (message?.status === "PENDING" && <PendingTick />) ||
            (message?.status === "SENT" && <SendTick />) ||
            (message?.status === "DELIVERD" && <DeliverdTick /> ) ||
            (message?.status === "SEEN" && <SeenTick />)}
        </svg>
      </span>
      <button
        id="menuTextbtn"
        className="absolute right-1 top-1 text-icon bg-[#008069]/70 rounded-b-full backdrop:blur-xl opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200"
        onClick={() => setMenuText(!menuText)}
      >
        <svg
          viewBox="0 0 18 18"
          height="18"
          width="18"
          preserveAspectRatio="xMidYMid meet"
          className=""
          version="1.1"
          x="0px"
          y="0px"
          enableBackground="new 0 0 18 18"
        >
          <path
            fill="currentColor"
            d="M3.3,4.6L9,10.3l5.7-5.7l1.6,1.6L9,13.4L1.7,6.2L3.3,4.6z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default MessageSelf;
