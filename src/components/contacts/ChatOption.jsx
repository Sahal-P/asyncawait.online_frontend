import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT_USER, SET_LOADING } from "../../redux/sagas/types";
import { toast } from "react-toastify";

const ChatOption = ({ option }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogOut = () => {
    dispatch({ type: SET_LOADING, payload: true });
    dispatch({ type: LOGOUT_USER, payload: {} , navigate });
  }
  return (
    <>
      {option && (
        <div className="absolute w-[197px] h-[176px] flex bg-popup_bg top-[40px] shadow-sm rounded-md shadow-slate-700 right-4 py-1 origin-top-right">
          <ul className="text-white w-full cursor-pointer">
            <li className="py-2 hover:bg-secondary px-4" onClick={() =>toast.warning("feature comming soon")}>New group</li>
            <li className="py-2 hover:bg-secondary px-4" onClick={() =>toast.warning("feature comming soon")}>Starred messages</li>
            <li className="py-2 hover:bg-secondary px-4" onClick={() =>toast.warning("feature comming soon")}>Settings</li>
            <li className="py-2 hover:bg-secondary px-4" onClick={handleLogOut}>Log out</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ChatOption;
