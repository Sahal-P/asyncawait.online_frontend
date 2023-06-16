import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const UserSearchBar = () => {
  return (
    <div className="flex w-[90%] h-[53px] py-[7px] px-3">
      <form action="" className="w-full">
        <div className="h-[90%] w-full bg-secondary rounded-lg overflow-hidden flex items-center px-3 transition-all ease-in-out duration-300">
          <AiOutlineSearch className="text-icon transition-all ease-in-out duration-300 cursor-pointer" />
          <input
            id="search-form"
            type="text"
            className="w-full px-3 bg-transparent text-icon outline-none placeholder:text-sm ml-4"
            placeholder={"Search your friends"}
          />
        </div>
      </form>
      
    </div>
  )
}

export default UserSearchBar
