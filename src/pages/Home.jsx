import { Suspense, useEffect, useState } from "react";
import NavBar from "../components/header/NavBar";
import SelectSection from "../components/contacts/SelectSection";
import ChatBox from "../components/chat/ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { createContext } from "react";
import { SET_LOADING } from "../redux/sagas/types";
import AddUser from "../components/users/AddUser";
import ImageDetails from "../components/ImageDetails";
import ProfileSidebar from "../components/sidebar/ProfileSidebar";
import ChatDetails from "../components/chat/profile/ChatDetails";
import { USER_WS, WS } from "../apis/socket";
import ConnectingSpinner from "../components/common/ConnectingSpinner";
import InitialSideBarSkeleton from "../components/skeleton/InitialSideBarSkeleton";
import { useQuery } from "react-query";
import { getContactsAPI } from "../apis";
import { userActions } from "../redux/slice/userSlice";
import ChatSkeleton from "../components/skeleton/ChatSkeleton";
import { NOTIFICATION_TYPE } from "../types";
import Status from "../components/status/Status";

export const UserContext = createContext(null);

const Home = () => {
  const dispatch = useDispatch();
  const [NetworkOnline, setNetworkOnline] = useState(navigator.onLine);
  const [chatBox, setChatBox] = useState(false);
  const [userWSConnected, setUserWSConnected] = useState(false);
  const selected = useSelector((state) => state.selected.user);
  const user = useSelector((state) => state.user.user);
  const [sideBar, setSidebar] = useState(false);
  const [chatDetails, setChatDetails] = useState(false);

  const {
    data: contactsData,
    isLoading: contactsLoading,
    isError: contactsError,
  } = useQuery("contacts", getContactsAPI, {
    onSuccess: (contactsData) => {
      // setContacts(contactsData.data)
      dispatch(userActions.setContacts(contactsData.data));
    },
    staleTime: Infinity,
    cacheTime: 0,
  });

  useEffect(() => {
    // const db = new Dexie("messageDB");
    // db.version(1).stores({
    //   messages: "id, chatId",
    // });

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
      setUserWSConnected(false);
    }

    let user_ws_url = `${WS}${USER_WS}${user.id}/`;
    let _socket = null;

    const handleSocketMessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.message_type === NOTIFICATION_TYPE["NEW_MESSAGE"]) {
        dispatch(userActions.editContact(data));
      }
    };
    const handleSocketOpen = (e) => {
      setUserWSConnected(true);
    };

    const handleSocketError = (e) => {
      setUserWSConnected(false);
      setTimeout(connectWebSocket, 5000);
    };

    const connectWebSocket = () => {
      const _socket = new WebSocket(user_ws_url);

      _socket.addEventListener("open", handleSocketOpen);
      _socket.addEventListener("close", handleSocketError);
      _socket.addEventListener("message", handleSocketMessage);
    };
    if (user_ws_url) {
      connectWebSocket();
    }
    dispatch({ type: SET_LOADING, payload: false });
    return () => {
      if (_socket) {
        _socket.close(); // Close the socket when the component unmounts
        _socket.removeEventListener("message", handleSocketMessage);
        _socket.removeEventListener("open", handleSocketOpen);
        _socket.removeEventListener("close", handleSocketError);
      }
    };
  }, [NetworkOnline]);

  useEffect(() => {
    if (Object.keys(selected).length > 0) {
      setChatBox(true);
    } else {
      setChatBox(false);
    }
  }, [selected, chatBox]);

  return (
    <UserContext.Provider
      value={{ user, chatDetails, setChatDetails, NetworkOnline }}
    >
      <ConnectingSpinner userWSConnected={userWSConnected} />
      <Suspense fallback={<ChatSkeleton />}>
        <section className="w-full h-screen flex bg-chat-bg overflow-hidden md:justify-center pt-4 pb-4">
          <ImageDetails />
          <Status />
          <div className="h-full w-[410px] bg-secondary border-r border-slate-700 relative">
            {contactsLoading ? (
              <InitialSideBarSkeleton />
            ) : (
              <>
                <ProfileSidebar
                  setSidebar={setSidebar}
                  sideBar={sideBar}
                  user={user}
                />
                <NavBar setSidebar={setSidebar} />
                <SelectSection />
              </>
            )}
          </div>

          {chatBox ? (
            <>
              <ChatBox NetworkOnline={NetworkOnline} />
              <ChatDetails
                chatDetails={chatDetails}
                setChatDetails={setChatDetails}
              />
            </>
          ) : (
            <AddUser />
          )}
        </section>
      </Suspense>
    </UserContext.Provider>
  );
};

export default Home;
