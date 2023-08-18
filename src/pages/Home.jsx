import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SelectSection from "../components/SelectSection";
import ChatBox from "../components/ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { createContext } from "react";
import {
  GET_CHAT_DETAILS,
  GET_CONTACTS,
  GET_FRIENDS,
  GET_USERS,
} from "../redux/sagas/types";
import AddUser from "../components/AddUser";
import ImageDetails from "../components/ImageDetails";
import ProfileSidebar from "../components/ProfileSidebar";
import ChatDetails from "../components/ChatDetails";
import { USER_WS, WS } from "../apis/socket";
import ConnectingSpinner from "../components/ConnectingSpinner";

export const UserContext = createContext(null);

const Home = () => {
  const dispatch = useDispatch();
  const [NetworkOnline, setNetworkOnline] = useState(navigator.onLine);
  const [chatBox, setChatBox] = useState(false);
  const [userWSConnected, setUserWSConnected] = useState(false);
  const selected = useSelector((state) => state.selected.user);
  const user = useSelector((state) => state.user.user);
  const contacts = useSelector((state) => state.user.contacts);
  const [sideBar, setSidebar] = useState(false);
  const [chatDetails, setChatDetails] = useState(false);

  useEffect(() => {
    dispatch({ type: GET_CONTACTS });
    dispatch({ type: GET_USERS });

    const handleOnline = () => {
      setNetworkOnline(true);
    };
    const handleOffline = () => {
      setNetworkOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    if (!NetworkOnline) {
      setUserWSConnected(false)
    }

    let user_ws_url = `${WS}${USER_WS}${user.id}/`
    const _socket = new WebSocket(user_ws_url)
    const handleSocketOpen = (e) => {
      setUserWSConnected(true)
    }
    const handleSocketError = (e) => {
      setUserWSConnected(false)
    }
    const handleSocketMessage = (e) => {
      const notification = JSON.parse(e.data);
      console.log(notification,'notification');
    }
    _socket.addEventListener("open", handleSocketOpen)
    _socket.addEventListener("close", handleSocketError)
    _socket.addEventListener("message", handleSocketMessage)

    return () => {
      _socket.removeEventListener("message", handleSocketMessage);
    };
    
  },[NetworkOnline])

  useEffect(() => {
    if (Object.keys(selected).length !== 0) {
      setChatBox(true);
    }
  }, [selected]);


  return (
    <UserContext.Provider
      value={{ user, contacts, chatDetails, setChatDetails }}
    >
      <ConnectingSpinner userWSConnected={userWSConnected} />
      <section className="w-full h-screen flex bg-secondary overflow-hidden">
        {/* <ImageDetails /> */}
        <div className="h-full w-[410px] bg-secondary border-r border-slate-700 relative">
          <ProfileSidebar setSidebar={setSidebar} sideBar={sideBar} user={user} />
          <NavBar setSidebar={setSidebar} />
          <SelectSection />
  </div>
        {chatBox ? (
          <>
            <ChatBox />
            <ChatDetails
              chatDetails={chatDetails}
              setChatDetails={setChatDetails}
            />
          </>
        ) : (
          <AddUser />
        )}
      </section>
    </UserContext.Provider>
  );
};

export default Home;
