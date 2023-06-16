import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({filter, setFilter}) => {
  return (
    <div className="flex w-full h-[53px] py-[7px] px-3">
      <form action="" className="w-full">
        <div className="h-[90%] w-full bg-primary rounded-lg overflow-hidden flex items-center px-3 transition-all ease-in-out duration-300">
          <AiOutlineSearch className="text-icon transition-all ease-in-out duration-300 cursor-pointer" />
          <input
            id="search-form"
            type="text"
            className="px-3 bg-transparent text-icon outline-none placeholder:text-sm ml-4"
            placeholder={
              filter ? "Search unread chats" : "Search or start new chat"
            }
          />
        </div>
      </form>
      <button
        className={`text-icon h-7 w-7 flex p-1 ml-2 mt-1 justify-center items-center ${
          filter ? "bg-line rounded-full full" : ""
        }`}
        onClick={() => setFilter(!filter)}
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          preserveAspectRatio="xMidYMid meet"
          className=""
        >
          <path
            fill="currentColor"
            d="M10 18.1h4v-2h-4v2zm-7-12v2h18v-2H3zm3 7h12v-2H6v2z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
