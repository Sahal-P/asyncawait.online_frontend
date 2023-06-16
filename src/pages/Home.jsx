import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SelectSection from "../components/SelectSection";
import ChatBox from "../components/ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { createContext } from 'react';
import { GET_FRIENDS } from "../redux/sagas/types";
import AddUser from "../components/AddUser";

export const UserContext = createContext(null);

const Home = () => {
  const dispatch = useDispatch();
  const [chatBox, setChatBox] = useState(false)
  const selected = useSelector((state) => state.selected.user);
  const user = useSelector((state) => state.user.user);
  const friends = useSelector((state) => state.user.friends);
  useEffect(()=>{
    //  dispatch({type: GET_FRIENDS});
    if (Object.values(selected).every((value) => value !== "")){
        setChatBox(true)
    }
  },[])

  return (
    <UserContext.Provider value={{user, friends}}>
    <section className='w-full h-screen flex bg-secondary overflow-hidden'>
        <div className='h-full w-[410px] bg-secondary border-r border-slate-700 relative'>            
            <NavBar/>
            <SelectSection/>
        </div>
        {chatBox ? (
          <>
        <ChatBox/>
          </>
        ):(
          <AddUser/>
        )}
      </section>
    </UserContext.Provider>
  )
}

export default Home
