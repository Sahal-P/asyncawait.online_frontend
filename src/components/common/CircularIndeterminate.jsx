import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function CircularIndeterminate() {
  const loading = useSelector((state) => state.loading.state);
  // const loading = true
  useEffect(() => {}, [loading]);
  return (
    <div
      className={`z-50 w-full h-screen flex justify-center items-center fixed inset-0 backdrop-blur-md  ${
        loading ? "block" : "hidden"
      }`}
    >
      {/* bg-[#00000057] */}
      <CircularProgress color="success" />
    </div>
  );
}
