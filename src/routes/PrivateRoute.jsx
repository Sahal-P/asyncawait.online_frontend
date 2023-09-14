import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from 'js-cookie';


export const PrivateRoute = () => {
  const user = useSelector((state) => state.user.user);
  if (!user || Object.values(user).every((value) => value === "") && Cookies.get('_X_identifier') === undefined) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
};
