import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SET_LOADING } from "./redux/sagas/types";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import CircularIndeterminate from "./components/common/CircularIndeterminate";
import { ToastContainer } from "react-toastify";
import Verify from "./pages/Verify";
import Onboarding from "./pages/Onboarding";
import useOpenIndexedDb from "./hooks/useOpenIndexedDb";

function App() {
  
  const dispatch = useDispatch();

  useOpenIndexedDb()

  useEffect(() => {
    dispatch({ type: SET_LOADING, payload: false });
  }, []);

  return (
    //BEM naming convention
    <>
      <CircularIndeterminate />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/onboarding/:reg_id" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
        </Route>
      </Routes>
      
    </>
  );
}





export default App;
