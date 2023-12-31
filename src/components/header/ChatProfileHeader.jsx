import { useContext, useEffect } from "react";
import OptionChatBox from "../chat/message/OptionChatBox";
import ThreeDotOptionIcon from "../common/ThreeDotOptionIcon";
import { UserContext } from "../../pages/Home";
import Slide from "@mui/material/Slide";
import { Skeleton } from "@mui/material";
import Image from "../common/Image";
import moment from "moment";

// eslint-disable-next-line no-unused-vars
const ProfilePictureSkeleton = () => (
  <div>
    <Skeleton
      sx={{ bgcolor: "#355360", marginRight: "auto", marginLeft: "10px" }}
      variant="circular"
      width={40}
      height={40}
    />
  </div>
);

function formatLastSeen(lastSeen) {
  const now = moment();
  const lastSeenDate = moment(lastSeen);

  const daysDifference = now.diff(lastSeenDate, 'days');

  if (daysDifference === 0) {
    return 'today';
  } else if (daysDifference === 1) {
    return 'yesterday';
  } else if (daysDifference <= 7) {
    return lastSeenDate.format('dddd'); // Get the day name (e.g., "Monday", "Tuesday")
  } else {
    return lastSeenDate.format('MMMM D, YYYY'); // Format for older dates
  }
}

const ChatProfileHeader = ({ user, chatWSConnected }) => {
  const { setChatDetails, chatDetails } = useContext(UserContext);
  const imgUrl = `${
    user?.contact?.profile?.profile_picture
      ? user?.contact?.profile?.profile_picture
      : import.meta.env.VITE_S3_MEDIA_URL + user?.contact?.profile?.default_avatar
  }`;
  const option = false;

  const formatedLastSeen = formatLastSeen(user?.contact?.profile?.last_seen)
  useEffect(() => {

  }, [user, chatWSConnected]);

  return (
    <div className="z-40 w-full h-[60px] bg-primary flex items-center pl-3 pr-6 relative">
      {/* <OptionChatBox/> */}

      <div
        className="w-[45px] h-[45px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer"
        onClick={() => setChatDetails(!chatDetails)}
      >
        <Image
          url={imgUrl}
          Imgclass={""}
          width={45}
          height={45}
          hash={user?.contact?.profile?.picture_blurhash}
        />
      </div>

      <div className="ml-3">
        <h1 className="text-lg text-white font-medium">
          {user?.contact?.profile?.username
            ? user?.contact?.profile?.username
            : user?.contact?.phone_number}
        </h1>
        <Slide direction="down" in={chatWSConnected} mountOnEnter unmountOnExit>
          <div className={chatWSConnected ? "block" : "hidden"}>
            <p className={` text-xs text-slate-400`}>
              {user?.contact?.profile?.is_online === true ? "online" :
              `last seen ${formatedLastSeen} at ${moment(user?.contact?.profile?.last_seen).format("h:mm a")}`
              }
            </p>
          </div>
        </Slide>
      </div>
      {/* <Skeleton sx={{ bgcolor: "#355360", fontSize: "1rem", margin: "10px", width: "200px"}} variant="text" /> */}
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
          <ThreeDotOptionIcon />
        </button>
      </div>
    </div>
  );
};

export default ChatProfileHeader;
