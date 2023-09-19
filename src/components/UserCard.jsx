import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectedActions } from "../redux/slice/selectedUserSlice";
import { GET_CHAT_DETAILS } from "../redux/sagas/types";
import useFetchChatDetails from "../hooks/useFetchChatDetails";

const UserCard = ({ user }) => {
  const [isReaded, setIsReaded] = useState(true);
  const [friend, setFriend] = useState(user);
  const dispatch = useDispatch();

  useEffect(()=>{

  },[user])
  
  function readed() {
    setIsReaded(false);
    dispatch(selectedActions.setUser(user));
    // dispatch({ type: GET_CHAT_DETAILS, id: user.contact.id });
    // useFetchChatDetails(user.contact.id)
  }
  return (
    <div
      className="h-[65px] w-full hover:bg-primary pl-4 flex items-center justify-between transition-all ease-in-out duration-100 cursor-pointer"
      onClick={readed}
    >
      <div className="w-[50px] rounded-full overflow-hidden h-[50px] flex items-center justify-center">
        <img
          src={`http://localhost:8000${user?.contact?.profile?.profile_picture ? user.contact.profile.profile_picture : "/media/"+user?.contact?.profile?.default_avatar }`}
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="h-full w-[80%] py-3 border-b-[1px] border-slate-700 border-wid mr-3 hover:border-0 flex justify-between group">
        <div>
          <h1 className="capitalize text-white">{user?.contact?.profile?.username}</h1>
          <p
            className={`${isReaded ? "text-white" : "text-slate-500"} text-sm`}
          >
            Hello world!
          </p>
        </div>
        <div className="flex flex-col items-end">
          <p
            className={
              isReaded
                ? "text-line text-xs font-medium"
                : "text-slate-700 font font-medium text-xs"
            }
          >
            12.00
          </p>
          <div className="flex w-full">
            {isReaded ? (
              <div className="w-[20px] h-[20px] bg-line rounded-full flex items-center justify-center">
                <p>1</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
