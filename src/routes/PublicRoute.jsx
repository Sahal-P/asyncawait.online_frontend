import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from 'js-cookie';

export const PublicRoute = () => {
  const user = useSelector((state) => state.user.user);
  if (Object.values(user).every((value) => value !== "") && !!Cookies.get('_X_identifier')) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};
