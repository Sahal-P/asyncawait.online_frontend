import OptionChatBox from "./OptionChatBox";
import ThreeDotOptionIcon from "./ThreeDotOptionIcon";

const ChatProfileHeader = ({user}) => {

  const option = false;
  return (
    <div className="z-40 w-full h-[60px] bg-primary flex items-center pl-3 pr-6 relative">
      {/* <OptionChatBox/> */}
      <div
        className="w-[45px] h-[45px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer"
        onClick={() => setProfile(true)}
      >
        <img
          src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_boy_person_avatar_people_white_tone_icon_159357.png"
          alt=""
        />
      </div>
      <div className="ml-3">
        <h1 className="text-lg text-white font-medium">{user.username}</h1>
        <p className="text-xs text-slate-400">last seen today at 2:30pm</p>
      </div>
      <div className="ml-auto h-full flex gap-4 items-center">
        <button className="text-icon" onClick={() => setSearhMsg(true)}>
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
              d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"
            ></path>
          </svg>
        </button>
        <button
          className={`text-icon ${option && "bg-slate-700"} p-1 rounded-full`}
          onClick={() => setOption(!option)}
        >
          <ThreeDotOptionIcon/>
        </button>
      </div>
    </div>
  );
};

export default ChatProfileHeader;