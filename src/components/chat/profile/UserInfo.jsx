const UserInfo = () => {
  const name = "sahal";
  return (
    <div className="mt-[60px] w-full ">
      <div className="w-full h-[315px] bg-[#111B21] flex flex-col items-center justify-center">
        <div className="w-[200px] rounded-full overflow-hidden">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <h1 className="text-white text-2xl">{name}</h1>
        <p className="text-slate-500">+91 95446 33437</p>
      </div>

      <div className="w-full h-[88px] bg-secondary mt-3 px-8 flex flex-col justify-center">
        <h3 className="text-slate-500">About</h3>
        <p className="text-white">Battery about to die</p>
      </div>

      <div className="w-full h-[55px] bg-secondary mt-3 flex items-center px-8 justify-between">
        <p className="text-slate-500 text-sm">Media, links and docs</p>
        <div className="flex items-center h-full text-slate-500 gap-3">
          <p>1</p>
          <button>
            <span
              data-testid="chevron-right-alt"
              data-icon="chevron-right-alt"
              className="aft2yglh"
            >
              <svg
                viewBox="0 0 10 21"
                height="21"
                width="10"
                preserveAspectRatio="xMidYMid meet"
                className=""
                version="1.1"
                x="0px"
                y="0px"
                enableBackground="new 0 0 10 21"
              >
                <path
                  fill="currentColor"
                  d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div className="w-full h-[454px] bg-secondary mt-3 pl-10 pr-8 flex flex-col gap-3">
        <div className="flex items-center w-full h-[50px]">
          <div className="flex text-icon gap-5">
            <button>
              <svg
                viewBox="0 0 16 15"
                height="20"
                preserveAspectRatio="xMidYMid meet"
                className=""
              >
                <path
                  fill="currentColor"
                  d="m8.3 10.2-2.5 1.7c-.3.2-.8-.1-.7-.5L6 8.6c.1-.2 0-.4-.2-.5L3.5 6.3c-.4-.3-.2-.8.2-.8l3-.1c.2 0 .3-.1.4-.3l1-2.8c.1-.4.7-.4.8 0l1 2.8c.1.2.2.3.4.3l3 .1c.4 0 .6.5.3.8l-2.4 1.8c-.1.1-.2.3-.2.5l.9 2.9c.1.4-.3.7-.7.5l-2.5-1.7c-.1-.2-.3-.2-.4-.1z"
                ></path>
              </svg>
            </button>
            <h1 className="text-white">Starred messages</h1>
          </div>
          <button className="text-icon ml-auto">
            <svg
              viewBox="0 0 10 21"
              height="21"
              width="10"
              preserveAspectRatio="xMidYMid meet"
              className=""
              version="1.1"
              x="0px"
              y="0px"
              enableBackground="new 0 0 10 21"
            >
              <path
                fill="currentColor"
                d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex items-center w-full h-[50px]">
          <div className="flex text-icon gap-5">
            <button>
              <svg
                viewBox="0 0 24 24"
                height="20"
                preserveAspectRatio="xMidYMid meet"
                className=""
              >
                <path
                  fill="currentColor"
                  d="M12 21.7c.9 0 1.7-.8 1.7-1.7h-3.4c0 .9.8 1.7 1.7 1.7zm5.6-5.2v-4.7c0-2.7-1.8-4.8-4.3-5.4v-.6c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3v.6c-2.5.6-4.3 2.7-4.3 5.4v4.7l-1.7 1.7v.9h14.6v-.9l-1.7-1.7z"
                ></path>
              </svg>
            </button>
            <h1 className="text-white">Mute Notifications</h1>
          </div>
          <div className="h-4 w-10 bg-slate-600 ml-auto rounded-full flex items-center relative">
            <div className="w-5 h-5 rounded-full absolute bg-icon -top-[2px] cursor-pointer left-5"></div>
          </div>
        </div>

        <div className="flex items-center w-full h-[50px]">
          <div className="flex text-icon gap-5">
            <button>
              <svg
                height="20"
                viewBox="0 0 36 36"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
                className=""
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 31.5c.09 0 .182 0 .272-.003a1.5 1.5 0 0 0-.06-3c-.07.002-.14.003-.212.003v3Zm0-24c.071 0 .142 0 .213.002a1.5 1.5 0 0 0 .06-3L18 4.5v3Zm6.515-1.326a1.5 1.5 0 0 0-1.45 2.626c.124.068.246.139.367.212a1.5 1.5 0 1 0 1.554-2.566 13.503 13.503 0 0 0-.47-.272Zm5.039 4.84a1.5 1.5 0 0 0-2.566 1.554c.073.12.144.243.212.366a1.5 1.5 0 0 0 2.626-1.45 13.535 13.535 0 0 0-.272-.47Zm1.943 6.714a1.5 1.5 0 0 0-3 .06 10.76 10.76 0 0 1 0 .425 1.5 1.5 0 0 0 3 .06 13.693 13.693 0 0 0 0-.545Zm-1.67 6.787a1.5 1.5 0 0 0-2.627-1.45c-.068.124-.139.246-.212.367a1.5 1.5 0 1 0 2.566 1.554c.094-.155.185-.312.272-.47Zm-4.841 5.039a1.5 1.5 0 0 0-1.554-2.566c-.12.073-.243.144-.366.212a1.5 1.5 0 0 0 1.45 2.626c.158-.087.315-.178.47-.272ZM18 4.5C10.544 4.5 4.5 10.544 4.5 18S10.544 31.5 18 31.5v-3c-5.8 0-10.5-4.701-10.5-10.5S12.2 7.5 18 7.5v-3Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23.325 12.01a.865.865 0 0 1 1.21 1.21l-4.564 6.087a1.951 1.951 0 1 1-2.732-2.732l6.086-4.564Z"
                ></path>
              </svg>
            </button>
            <div>
              <h1 className="text-white">Disappearing messages</h1>
              <p className="text-slate-500 text-sm">off</p>
            </div>
          </div>
          <button className="text-icon ml-auto">
            <svg
              viewBox="0 0 10 21"
              height="21"
              width="10"
              preserveAspectRatio="xMidYMid meet"
              className=""
              version="1.1"
              x="0px"
              y="0px"
              enableBackground="new 0 0 10 21"
            >
              <path
                fill="currentColor"
                d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex items-center w-full h-[50px] mt-3">
          <div className="flex text-icon gap-5">
            <button>
              <svg
                viewBox="0 0 24 24"
                height="20"
                preserveAspectRatio="xMidYMid meet"
                className=""
              >
                <path
                  fill="currentColor"
                  d="M17.3 7.6h-.9V5.8c0-2.5-1.9-4.4-4.4-4.4S7.6 3.3 7.6 5.8v1.8h-.9c-1 0-1.8.8-1.8 1.8v8.9c0 1 .8 1.8 1.8 1.8h10.6c1 0 1.8-.8 1.8-1.8V9.4c0-1-.8-1.8-1.8-1.8zM12 15.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm2.7-8.2H9.2V5.8c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7v1.8h.1z"
                ></path>
              </svg>
            </button>
            <div>
              <h1 className="text-white">Encryption</h1>
              <p className="text-slate-500 text-sm">
                Messages are end-to-end encrypted. Click to verify.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full h-[50px] mt-3">
          <div className="flex text-red-400 gap-5">
            <button>
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                className=""
                version="1.1"
                x="0px"
                y="0px"
                enableBackground="new 0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12,2.8c-5.3,0-9.7,4.3-9.7,9.7s4.3,9.7,9.7,9.7s9.7-4.3,9.7-9.7S17.3,2.8,12,2.8z  M4.7,12.5c0-4,3.3-7.3,7.3-7.3c1.6,0,3.1,0.5,4.3,1.4L6.1,16.8C5.2,15.6,4.7,14.1,4.7,12.5z M12,19.8c-1.6,0-3-0.5-4.2-1.4 L17.9,8.3c0.9,1.2,1.4,2.6,1.4,4.2C19.3,16.5,16,19.8,12,19.8z"
                ></path>
              </svg>
            </button>
            <div>
              <h1 className="text-red-400">{`Block ${name}`}</h1>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full h-[50px] mt-3">
          <div className="flex text-red-400 gap-5">
            <button>
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                className=""
                version="1.1"
                x="0px"
                y="0px"
                enableBackground="new 0 0 24 24"
              >
                <g>
                  <g id="thumb-down">
                    <path
                      fill="currentColor"
                      d="M14.091,4.2H6.318c-0.691,0-1.295,0.432-1.555,1.036l-2.591,6.132C2.086,11.541,2,11.714,2,11.973v1.641 l0,0V13.7c0,0.95,0.777,1.727,1.727,1.727h5.441L8.305,19.4c0,0.086,0,0.173,0,0.259c0,0.345,0.173,0.691,0.345,0.95l0.95,0.864 l5.7-5.7c0.345-0.345,0.518-0.777,0.518-1.209V5.927C15.818,4.977,15.041,4.2,14.091,4.2z M17.545,4.2v10.364H21V4.2H17.545z"
                    ></path>
                  </g>
                </g>
              </svg>
            </button>
            <div>
              <h1 className="text-red-400">{`Report ${name}`}</h1>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full h-[50px] mt-3">
          <div className="flex text-red-400 gap-5">
            <button>
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                className=""
                version="1.1"
                x="0px"
                y="0px"
                enableBackground="new 0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6,18c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V6H6V18z M19,3h-3.5l-1-1h-5l-1,1H5v2h14V3z"
                ></path>
              </svg>
            </button>
            <div>
              <h1 className="text-red-400">{`Delete Chat`}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
