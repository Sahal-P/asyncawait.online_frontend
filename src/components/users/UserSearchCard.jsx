import { useDispatch } from "react-redux";
import { MESSAGE_UNKNOWN } from "../../redux/sagas/types";
import { Suspense } from "react";
import Image from "../common/Image";

const UserSearchCard = ({ user }) => {
  const dispatch = useDispatch();
  const imgUrl = `${user?.profile_picture ? user.profile_picture : import.meta.env.VITE_S3_MEDIA_URL+user?.default_avatar }`
  const handleAddtoFriends = () => {
    dispatch({ type: MESSAGE_UNKNOWN, id: user?.user });
  };
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
      <div className="max-w-xs mx-auto mt-8 bg-secondary shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-24 overflow-hidden">
          {/* <img
            className="object-cover object-top w-full h-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
            // LjF?FexFShf6?wjZWqay5SR*n$Wq
          /> */}
          <Image 
            url={"https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"}
            Imgclass={"object-cover object-top w-full h-full"}
            hash={"LjF?FexFShf6?wjZWqay5SR*n$Wq"}
            width={"100%"}
            height={"100%"}
          />

        </div>
        <div className="mx-auto w-24 h-24 relative -mt-12 border-4 border-white rounded-full overflow-hidden">
        <Suspense fallback={<div>Loading...</div>}>
          {/* <img
            className="object-cover object-center w-full h-full"
            src={`http://localhost:8000${user?.profile_picture ? user.profile_picture : "/media/"+user?.default_avatar }`}
            alt="Woman looking front"
          /> */}
          <Image 
            url={imgUrl}
            Imgclass={"object-cover object-center w-full h-full"}
            hash={user?.picture_blurhash}
            width={"100%"}
            height={"100%"}
          />
          </Suspense>
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold text-white text-sm">{user.username}</h2>
          {/* <p className="text-gray-500 text-xs">Freelance Web Designer</p> */}
        </div>
        
        <div className="p-2 mx-4 mt-2">
          <button
            onClick={handleAddtoFriends}
            className="mb-4 w-full block rounded-full bg-line hover:shadow-lg font-semibold text-white px-4 py-1 text-xs"
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSearchCard;
