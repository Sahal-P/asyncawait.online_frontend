import { useContext } from "react";
import { UserContext } from "../pages/Home";

const NavBarProfileAvatar = () => {
  const { user } = useContext(UserContext);
  return (
    <img
      src={`http://localhost:8000${user?.profile?.profile_picture ? user.profile.profile_picture : "/media/"+user?.profile?.default_avatar }`}
      alt=""
      className="w-full h-full"
    />
  );
};

export default NavBarProfileAvatar;
