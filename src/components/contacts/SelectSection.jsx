import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import FooterMessage from "./FooterMessage";
import SearchBar from "./SearchBar";
import { UserContext } from "../../pages/Home";
import { useContext } from "react";
import UserGroup from "./UserGroup";

const SelectSection = ({contacts}) => {
  const [search, setSearch] = useState(false);
  const [filter, setFilter] = useState(false);
  const { user } = useContext(UserContext);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <>
      <SearchBar filter={filter} setFilter={setFilter} />
      <div className="w-full h-[83%] overflow-y-scroll">
        {filter ? (
          <div>filter</div>
        ) : (
          <>
            {contacts?.map((friend) => (
              <UserCard key={friend?.id} user={friend} />
            ))}
          </>
        )}
        <FooterMessage />
      </div>
    </>
  );
};

export default SelectSection;
