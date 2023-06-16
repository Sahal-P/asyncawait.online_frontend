const StatusNavigateButton = () => {
  return (
    <button
      className="text-icon cursor-pointer p-[7px] rounded-full"
      onClick={() => setStatus(true)}
    >
      <svg
        version="1.1"
        id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className=""
      >
        <path
          fill="currentColor"
          d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"
        ></path>
        <path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>
      </svg>
    </button>
  );
};

export default StatusNavigateButton;
