const MessageSender = ({message}) => {
  return (
    <div className="text-white w-fit h-fit max-w-[60%] h-8 rounded-b-lg rounded-tr-lg px-1 mt-5 mr-3 bg-primary relative items-center flex py-1 group">
            {/* <MenuTextMsgL menuTextL={menuTextL} /> */}
            <p className="text-sm px-2 overflow-hidden overflow-ellipsis">{message.message}</p>
            <span className="text-primary absolute top-0 -left-2">
              <svg viewBox="0 0 8 13" width="8" height="13" className="">
                <path
                  opacity=".13"
                  fill="#0000000"
                  d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
                ></path>
                <path
                  fill="currentColor"
                  d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
                ></path>
              </svg>
            </span>
            <p className="text-icon text-xs mt-auto mr-1">{message.time}</p>
            <button
              id="menuTextbtn"
              className="absolute right-1 top-1 text-icon bg-primary/70 rounded-b-full backdrop:blur-xl opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200"
              onClick={() => setMenuTextL(!menuTextL)}
            >
              <svg
                viewBox="0 0 18 18"
                height="18"
                width="18"
                preserveAspectRatio="xMidYMid meet"
                className=""
                version="1.1"
                x="0px"
                y="0px"
                enableBackground="new 0 0 18 18"
              >
                <path
                  fill="currentColor"
                  d="M3.3,4.6L9,10.3l5.7-5.7l1.6,1.6L9,13.4L1.7,6.2L3.3,4.6z"
                ></path>
              </svg>
            </button>
          </div>
  )
}

export default MessageSender
