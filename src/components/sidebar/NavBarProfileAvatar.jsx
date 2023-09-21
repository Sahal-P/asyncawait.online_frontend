import { useContext, useEffect } from "react";
import { UserContext } from "../../pages/Home";
import useImageLoader, {
  ImageWrapper,
  StyledBlurhash,
} from "../../hooks/useImageLoader";
import Image from "../common/Image";

const NavBarProfileAvatar = () => {
  const { user } = useContext(UserContext);
  const imgUrl = `http://localhost:8000${
    user?.profile?.profile_picture
      ? user.profile.profile_picture
      : "/media/" + user?.profile?.default_avatar
  }`
  return (
    <Image
      url={imgUrl}
      Imgclass={"w-full h-full"}
      width={50}
      height={50}
      hash={user?.profile?.picture_blurhash}
    />
  );
};

export default NavBarProfileAvatar;
