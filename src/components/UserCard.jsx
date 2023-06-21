import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectedActions } from "../redux/slice/selectedUserSlice";
import { GET_CHAT_DETAILS } from "../redux/sagas/types";

const UserCard = ({ user }) => {
  const [isReaded, setIsReaded] = useState(true);
  const [friend, setFriend] = useState(user);
  const dispatch = useDispatch();

  function readed() {
    setIsReaded(false);
    dispatch(selectedActions.setUser(user));
    dispatch({ type: GET_CHAT_DETAILS, id: user.contact.id });
  }
  return (
    <div
      className="h-[65px] w-full hover:bg-primary pl-4 flex items-center justify-between transition-all ease-in-out duration-100 cursor-pointer"
      onClick={readed}
    >
      <div className="w-[50px] rounded-full overflow-hidden h-[50px] flex items-center justify-center">
        <img
          src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_boy_person_avatar_people_white_tone_icon_159357.png"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="h-full w-[80%] py-3 border-b-[1px] border-slate-700 border-wid mr-3 hover:border-0 flex justify-between group">
        <div>
          <h1 className="capitalize text-white">{user?.contact.username}</h1>
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
