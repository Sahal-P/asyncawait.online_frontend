import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import FooterMessage from "./FooterMessage";
import SearchBar from "./SearchBar";
import { UserContext } from "../pages/Home";
import { useContext } from 'react';


const SelectSection = () => {
    const [search, setSearch] = useState(false)
    const [filter,setFilter] = useState(false)
    const { user, contacts } = useContext(UserContext);
    useEffect(()=>{
    },[contacts])
  return (
    <>
    <SearchBar filter={filter} setFilter={setFilter}/>
    <div className='w-full h-[83%] overflow-y-scroll'>
    {filter ? (
    <div>
        filter
    </div>
    ):(
        <>
        {contacts.map((friend) => (
          <UserCard key={friend.id} user={friend}/>
        ))}
        
        </>
    )}
    <FooterMessage/>
    </div>
    </>
  );
};

export default SelectSection;
