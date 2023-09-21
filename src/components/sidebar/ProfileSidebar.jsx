import { BiArrowBack } from "react-icons/bi";
import { RiPencilFill } from "react-icons/ri";
import { IoCameraSharp } from "react-icons/io5";
import { useContext, useEffect } from "react";
import { UserContext } from "../../pages/Home";
import Image from "../common/Image";

const ProfileSidebar = ({ setSidebar, sideBar, user }) => {
  const imgUrl = `http://localhost:8000${user?.profile?.profile_picture ? user.profile.profile_picture : "/media/"+user?.profile?.default_avatar }`
  useEffect(() => {
  },[user])
  return (
    <div
      className={`${
        sideBar ? "block" : "hidden"
      } absolute z-[99] w-full h-full bg-secondary`}
    >
      {/* <div className="w-[160px] h-[182px] bg-primary origin-top-left z-[999] flex fixed items-center rounded-md">
                    <ul className="w-full text-white">
                        <li className="py-2 hover:bg-secondary px-4 cursor-pointer">Lihat foto</li>
                        <li className="py-2 hover:bg-secondary px-4 cursor-pointer">Ambil foto</li>
                        <li className="py-2 hover:bg-secondary px-4 cursor-pointer">Unggah foto</li>
                        <li className="py-2 hover:bg-secondary px-4 cursor-pointer">Hapus foto</li>
                    </ul>
                </div> */}
      <div className="bg-primary h-[110px] w-full flex py-4">
        <div className="flex items-center mt-auto ml-5">
          <BiArrowBack
            className="text-white text-2xl cursor-pointer"
            onClick={() => setSidebar(false)}
          />
          <h1 className="text-xl text-white ml-8 font-medium">Profile</h1>
        </div>
      </div>
      <div className="w-full flex justify-center mt-8">
        <div
          className="w-[205px] rounded-full overflow-hidden group relative cursor-pointer"
          onClick={(e) => fotoProfile(e)}
        >
          {/* <img
            src={`http://localhost:8000${user?.profile?.profile_picture ? user.profile.profile_picture : "/media/"+user?.profile?.default_avatar }`}
            alt=""
          /> */}
          <Image
          url={imgUrl}
          Imgclass={""}
          width={205}
          height={"100%"}
          hash={user?.profile?.picture_blurhash}
        />
          <div className="w-full h-full absolute top-0 z-50 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200 flex flex-col justify-center items-center">
            <IoCameraSharp className="text-white text-2xl" />
            <h1 className="text-center text-white text-xs w-1/2">
              CHANGE PROFILE PHOTO
            </h1>
          </div>
        </div>
      </div>
      <div className="px-7 flex flex-col gap-6 mt-9">
        <h3 className="text-line text-sm">Your name</h3>
        <div className="flex items-center">
          <h1 className="text-xl text-white">{user?.profile?.username}</h1>
          <RiPencilFill className="text-icon ml-auto text-2xl" />
        </div>
        <p className="text-icon text-sm">
          This is not your username or pin. This name will be visibile to your
          AsyncAwait contacts.
        </p>
      </div>
      <div className="px-7 flex flex-col gap-6 mt-9">
        <h3 className="text-line text-sm">About</h3>
        <div className="flex items-center">
          <h1 className="text-lg text-white">{user?.profile?.about}</h1>
          <RiPencilFill className="text-icon ml-auto text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
