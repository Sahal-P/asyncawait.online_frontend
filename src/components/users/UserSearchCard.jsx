import { useDispatch } from "react-redux";
import { MESSAGE_UNKNOWN } from "../../redux/sagas/types";
import { Suspense } from "react";
import Image from "../common/Image";

const UserSearchCard = ({ user }) => {
  const dispatch = useDispatch();
  const imgUrl = `http://localhost:8000${user?.profile_picture ? user.profile_picture : "/media/"+user?.default_avatar }`
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
          <p className="text-gray-500 text-xs">Freelance Web Designer</p>
        </div>
        {/* <ul className="py-2 mt-2 text-gray-700 flex items-center justify-around">
        <li className="flex flex-col items-center justify-around">
          <svg
            className="w-3 fill-current text-blue-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <div className="text-xs">2k</div>
        </li>
        <li className="flex flex-col items-center justify-around">
          <svg
            className="w-3 fill-current text-blue-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
          </svg>
          <div className="text-xs">10k</div>
        </li>
        <li className="flex flex-col items-center justify-around">
          <svg
            className="w-3 fill-current text-blue-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
          </svg>
          <div className="text-xs">15</div>
        </li>
      </ul> */}
        <div className="p-2 mx-4 mt-2">
          <button
            onClick={handleAddtoFriends}
            className="w-full block rounded-full bg-line hover:shadow-lg font-semibold text-white px-4 py-1 text-xs"
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSearchCard;
