import { useEffect, useState } from "react";
import UserSearchBar from "./UserSearchBar";
import UserSearchCard from "./UserSearchCard";
import { useQuery } from "react-query";
import { getUsersAPI } from "../../apis";
import UsersCardSkeleton from "../skeleton/UsersCardSkeleton";

const AddUser = () => {
  // const dispatch = useDispatch()
  // const users = useSelector((state) => state.users.users);
  const [users, setUsers] = useState([])

  const {isLoading: usersLoading, isError} = useQuery('users', getUsersAPI, {
    onSuccess: (usersData) => {
      // dispatch(usersActions.setUsers(usersData.data));
      setUsers(usersData.data)
    },
  });
  useEffect(()=>{

  },[users])
  return (
    <div className="bg-hero h-full w-[70%] flex flex-col items-center">
      <div className="flex mt-4 w-full justify-center items-center">
        <UserSearchBar />
      </div>
      {!usersLoading ? 
      (<div className="flex flex-wrap justify-center w-[90%] overflow-y-scroll">
      {users?.map((user) => (
        <UserSearchCard key={user.id} user={user} />
      ))}
    </div>) :
    (
      <div className="flex flex-wrap justify-center w-[90%] overflow-y-scroll">
      <UsersCardSkeleton/>
      <UsersCardSkeleton/>
      <UsersCardSkeleton/>
      <UsersCardSkeleton/>
      <UsersCardSkeleton/>
      <UsersCardSkeleton/>
      <UsersCardSkeleton/>
      <UsersCardSkeleton/>
      <UsersCardSkeleton/>
      <UsersCardSkeleton/>
      </div>
    )
      }
      <span className="w-full h-[6px] bg-line block mt-auto"></span>
    </div>
  );
};

export default AddUser;
