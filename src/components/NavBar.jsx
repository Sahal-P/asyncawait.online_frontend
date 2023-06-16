import { useState } from "react";
import ChatOption from "./ChatOption";
import NavBarProfileAvatar from "./NavBarProfileAvatar";
import StatusNavigateButton from "./StatusNavigateButton";
import NewChatNavigateButton from "./NewChatNavigateButton";
import ThreeDotOptionIcon from "./ThreeDotOptionIcon";

const NavBar = () => {
  const [option, setOption] = useState(false);
  return (
    <div className="w-full h-[60px] bg-primary flex items-center pl-4 pr-3 justify-between">
      <NavBarProfileAvatar/>
      <div className="flex gap-3 relative">
        <StatusNavigateButton/>
        <NewChatNavigateButton/>
        <button
          className={`text-icon cursor-pointer ${
            option ? "bg-slate-700" : ""
          } p-[7px] rounded-full`}
          onClick={() => setOption(!option)}
        >
          <ThreeDotOptionIcon/>
        </button>
        <ChatOption option={option} />
      </div>
    </div>
  );
};

export default NavBar;
