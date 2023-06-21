import { useEffect } from "react";
import UserSearchBar from "./UserSearchBar";
import UserSearchCard from "./UserSearchCard";
import { useSelector } from "react-redux";

const AddUser = () => {
  const users = useSelector((state) => state.users.users);
  return (
    <div className="bg-hero h-full w-[70%] flex flex-col items-center">
      <div className="flex mt-4 w-full justify-center items-center">
        <UserSearchBar />
      </div>

      <div className="flex flex-wrap justify-center w-[90%] overflow-y-scroll">
        {users.map((user) => (
          <UserSearchCard key={user.id} user={user} />
        ))}
      </div>
      <span className="w-full h-[6px] bg-line block mt-auto"></span>
    </div>
  );
};

export default AddUser;
