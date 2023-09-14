import { useEffect, useState } from "react";
import "./ConnectingSpinner.css";
import { Snackbar } from "@mui/material";
import Slide from "@mui/material/Slide";

const ConnectingSpinner = ({ userWSConnected }) => {
  const [state, setState] = useState({
    open: true,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  useEffect(() => {
    
  }, [userWSConnected]);
  return (
    <Slide direction="down" in={true} mountOnEnter unmountOnExit>
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={!userWSConnected}
      onClose={handleClose}
      message=""
      key={vertical + horizontal}
      style={{
        backgroundColor: "#1a6b5a",
        borderRadius: "10px",
        width: "10rem",
      }}
    >
      <div className={`flex m-[0.5rem] text-center w-[100wh] bg-[#1a6b5a]`}>
        <div className="text-white mr-5">connecting...</div>
        <div className="ajax_spinner mt-2">
          <div className="bar-1"></div>
          <div className="bar-2"></div>
          <div className="bar-3"></div>
          <div className="bar-4"></div>
          <div className="bar-5"></div>
          <div className="bar-6"></div>
          <div className="bar-7"></div>
          <div className="bar-8"></div>
          <div className="bar-9"></div>
          <div className="bar-10"></div>
          <div className="bar-11"></div>
          <div className="bar-12"></div>
          <div className="bar-13"></div>
          <div className="bar-14"></div>
          <div className="bar-15"></div>
          <div className="bar-16"></div>
        </div>
      </div>
    </Snackbar>
    </Slide>
  );
};

export default ConnectingSpinner;
