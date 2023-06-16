import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GET_FRIENDS, GET_USER } from "./redux/sagas/types";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import CircularIndeterminate from "./components/CircularIndeterminate";

function App() {

  return (
    //BEM naming convention
    <>
      <CircularIndeterminate/>
      <Routes>
        <Route element={<PrivateRoute/>}>
            <Route path="/" element={<Home />} />
        </Route>
        <Route element={<PublicRoute/>}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
