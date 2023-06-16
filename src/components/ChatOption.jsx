const ChatOption = ({ option }) => {
  return (
    <>
      {option && (
        <div className="absolute w-[197px] h-[176px] flex bg-primary top-[40px] shadow-sm rounded-md shadow-slate-700 right-4 py-1 origin-top-right">
          <ul className="text-white w-full cursor-pointer">
            <li className="py-2 hover:bg-secondary px-4">New group</li>
            <li className="py-2 hover:bg-secondary px-4">Starred messages</li>
            <li className="py-2 hover:bg-secondary px-4">Settings</li>
            <li className="py-2 hover:bg-secondary px-4">Log out</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ChatOption;
