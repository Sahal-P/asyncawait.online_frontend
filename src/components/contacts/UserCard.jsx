import { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectedActions } from "../../redux/slice/selectedUserSlice";
import useImageLoader, {
  ImageWrapper,
  StyledBlurhash,
} from "../../hooks/useImageLoader";
import Image from "../common/Image";
import UserCardDetails from "./UserCardDetails";
import { userActions } from "../../redux/slice/userSlice";

const UserCard = ({ user }) => {
  const [isReaded, setIsReaded] = useState(true);
  const [lastMessage, setLastMessage] = useState("")
  const dispatch = useDispatch();
  const imgUrl = `http://localhost:8000${
    user?.contact?.profile?.profile_picture
      ? user.contact.profile.profile_picture
      : "/media/" + user?.contact?.profile?.default_avatar
  }`;

  

  useEffect(() => {
  }, [user]);

  function readed() {
    setIsReaded(false);
    dispatch(selectedActions.setUser(user));
    dispatch(userActions.setContactAsReaded(user.id))
    // dispatch({ type: GET_CHAT_DETAILS, id: user.contact.id });
    // useFetchChatDetails(user.contact.id)
  }
  return (
    <div
      className="h-[65px] w-full hover:bg-primary pl-4 flex items-center justify-between transition-all ease-in-out duration-100 cursor-pointer"
      onClick={readed}
    >
      <div className="w-[50px] rounded-full overflow-hidden h-[50px] flex items-center justify-center">
        <Image
          url={imgUrl}
          Imgclass={""}
          width={50}
          height={50}
          hash={user?.contact?.profile?.picture_blurhash}
        />
      </div>
      <UserCardDetails contact={user} isReaded={isReaded}/>
    </div>
  );
};

export default UserCard;
