import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedActions } from "../../redux/slice/selectedUserSlice";
import { ChatActions } from "../../redux/slice/chatDetailsSlice";

const NewChatNavigateButton = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selected.user);
  const setNewChat = () => {
    if (selected) {
      dispatch(selectedActions.removeState());
      dispatch(ChatActions.removeState());
    }
  }
  useEffect(()=>{

  },[])
  return (
    <button
      className="text-icon cursor-pointer p-[7px] rounded-full"
      onClick={() => setNewChat()}
    >
      <svg viewBox="0 0 24 24" width="24" height="24" className="">
        <path
          fill="currentColor"
          d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
        ></path>
      </svg>
    </button>
  );
};

export default NewChatNavigateButton;
