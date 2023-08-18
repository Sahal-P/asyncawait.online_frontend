import { useEffect, useState } from "react";
import "./ConnectingSpinner.css";
import { Snackbar } from "@mui/material";

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
          <div class="bar-1"></div>
          <div class="bar-2"></div>
          <div class="bar-3"></div>
          <div class="bar-4"></div>
          <div class="bar-5"></div>
          <div class="bar-6"></div>
          <div class="bar-7"></div>
          <div class="bar-8"></div>
          <div class="bar-9"></div>
          <div class="bar-10"></div>
          <div class="bar-11"></div>
          <div class="bar-12"></div>
          <div class="bar-13"></div>
          <div class="bar-14"></div>
          <div class="bar-15"></div>
          <div class="bar-16"></div>
        </div>
      </div>
    </Snackbar>
  );
};

export default ConnectingSpinner;
