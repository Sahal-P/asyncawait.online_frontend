import { useEffect, useState } from "react";
import { MESSAGE_TYPE } from "../../../types";
import MediaOption from "../icons/MediaOption";
import AudioRecordMode from "../icons/AudioRecordMode";
import AudioRecordIcon from "../icons/AudioRecordIcon";
// eslint-disable-next-line no-unused-vars
import { Skeleton } from "@mui/material";
import {MdSend} from 'react-icons/md'
const ChatTextArea = ({ send_message }) => {
  const [message, setMessage] = useState("");
  const [audioRecordMode, setAudioRecordMode] = useState(false);
  const [openMediaOption, setopenMediaOption] = useState(false);

  const handlesetAudioRecord = () => {
    setAudioRecordMode(!audioRecordMode)
  }

  useEffect(()=>{

  },[audioRecordMode])

  const handleMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      content: message,
      type: MESSAGE_TYPE.TEXT_MESSAGE,
      sender: "",
      timestampe: "",
      is_group: false,
    };
    send_message(data);
    setMessage("");
  };
  return (
    <div className="w-full max-xs:h-[60px] h-[66px] bg-primary flex items-center max-sm:px-2 px-6 justify-between">
      <button className="text-icon mx-1">
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="ekdr8vow dhq51u3o"
        >
          <path
            fill="currentColor"
            d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"
          ></path>
        </svg>
      </button>
      <MediaOption openMediaOption={openMediaOption} />
      <button
        className={`text-icon ${openMediaOption && "bg-slate-700"} rounded-md mx-1`}
        onClick={() => setopenMediaOption(!openMediaOption)}
      >
        <svg
          viewBox="0 0 24 24"
          height="24"
          width="24"
          preserveAspectRatio="xMidYMid meet"
          className=""
          version="1.1"
          x="0px"
          y="0px"
          enableBackground="new 0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M1.816,15.556v0.002c0,1.502,0.584,2.912,1.646,3.972s2.472,1.647,3.974,1.647 c1.501,0,2.91-0.584,3.972-1.645l9.547-9.548c0.769-0.768,1.147-1.767,1.058-2.817c-0.079-0.968-0.548-1.927-1.319-2.698 c-1.594-1.592-4.068-1.711-5.517-0.262l-7.916,7.915c-0.881,0.881-0.792,2.25,0.214,3.261c0.959,0.958,2.423,1.053,3.263,0.215 c0,0,3.817-3.818,5.511-5.512c0.28-0.28,0.267-0.722,0.053-0.936c-0.08-0.08-0.164-0.164-0.244-0.244 c-0.191-0.191-0.567-0.349-0.957,0.04c-1.699,1.699-5.506,5.506-5.506,5.506c-0.18,0.18-0.635,0.127-0.976-0.214 c-0.098-0.097-0.576-0.613-0.213-0.973l7.915-7.917c0.818-0.817,2.267-0.699,3.23,0.262c0.5,0.501,0.802,1.1,0.849,1.685 c0.051,0.573-0.156,1.111-0.589,1.543l-9.547,9.549c-0.756,0.757-1.761,1.171-2.829,1.171c-1.07,0-2.074-0.417-2.83-1.173 c-0.755-0.755-1.172-1.759-1.172-2.828l0,0c0-1.071,0.415-2.076,1.172-2.83c0,0,5.322-5.324,7.209-7.211 c0.157-0.157,0.264-0.579,0.028-0.814c-0.137-0.137-0.21-0.21-0.342-0.342c-0.2-0.2-0.553-0.263-0.834,0.018 c-1.895,1.895-7.205,7.207-7.205,7.207C2.4,12.645,1.816,14.056,1.816,15.556z"
          ></path>
        </svg>
      </button>
      <form onSubmit={handleSubmit} className="max-xs:min-w-[150px] max-sm:w-[250px] max-md:w-[300px] max-lg:w-[450px] mx-2 w-[786px] h-[39px]">
        <input
          onChange={handleMessage}
          value={message}
          type="text"
          className="bg-secondary/50 h-full rounded-lg w-full outline-none px-3 max-sm:text-sm text-slate-300"
          placeholder="Type a message"
        />
      </form>
      {/* <Skeleton sx={{ bgcolor: "#32444c", width:"30px" }} variant="rounded" height={30} />
      <Skeleton sx={{ bgcolor: "#32444c", width:"30px" }} variant="rounded" height={30} />
      <Skeleton sx={{ bgcolor: "#32444c", width:"85%" }} variant="rounded" height={30} />
      <Skeleton sx={{ bgcolor: "#32444c", width:"30px" }} variant="rounded" height={30} /> */}
      {audioRecordMode ? <div className="relative w-10 h-10 mt-0">
      <AudioRecordMode handlesetAudioRecord={handlesetAudioRecord}/>
      </div> :
      <MdSend onClick={handleSubmit} className="text-xl cursor-pointer text-icon"/>
      // <AudioRecordIcon handlesetAudioRecord={handlesetAudioRecord}/>
      }
    </div>
  );
};

export default ChatTextArea;
