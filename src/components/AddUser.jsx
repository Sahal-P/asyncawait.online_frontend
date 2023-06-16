import UserSearchBar from "./UserSearchBar"
import UserSearchCard from './UserSearchCard'

const AddUser = () => {
  return (
    <div className='bg-hero h-full w-[70%] flex flex-col items-center'>
      <div className="flex mt-4 w-full justify-center items-center">
      <UserSearchBar/>
      </div>
      
      <div className="flex flex-wrap justify-center w-[90%] overflow-y-scroll">
      <UserSearchCard/>
      <UserSearchCard/>
      <UserSearchCard/>
      <UserSearchCard/>
      <UserSearchCard/>
      <UserSearchCard/>
      <UserSearchCard/>
      <UserSearchCard/>
      <UserSearchCard/>
      <UserSearchCard/>
      <UserSearchCard/>
      <UserSearchCard/>
      <UserSearchCard/>
      <UserSearchCard/>
      <UserSearchCard/>
      <UserSearchCard/>
      </div>
      <span className='w-full h-[6px] bg-line block mt-auto'></span>
    </div>
  )
}

export default AddUser
