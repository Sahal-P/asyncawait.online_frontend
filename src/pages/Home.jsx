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

export const UserContext = createContext(null);

const Home = () => {
  const dispatch = useDispatch();
  const [chatBox, setChatBox] = useState(false);
  const selected = useSelector((state) => state.selected.user);
  const user = useSelector((state) => state.user.user);
  const contacts = useSelector((state) => state.user.contacts);
  const [sideBar, setSidebar] = useState(false);
  const [chatDetails, setChatDetails] = useState(false);

  useEffect(() => {
    dispatch({ type: GET_CONTACTS });
    dispatch({ type: GET_USERS });
  }, []);

  useEffect(() => {
    if (Object.keys(selected).length !== 0) {
      setChatBox(true);
    }
  }, [selected]);

  return (
    <UserContext.Provider
      value={{ user, contacts, chatDetails, setChatDetails }}
    >
      <section className="w-full h-screen flex bg-secondary overflow-hidden">
        {/* <ImageDetails /> */}
        <div className="h-full w-[410px] bg-secondary border-r border-slate-700 relative">
          <ProfileSidebar setSidebar={setSidebar} sideBar={sideBar} />
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
