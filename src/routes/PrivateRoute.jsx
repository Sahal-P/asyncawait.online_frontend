import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const PrivateRoute = () => {
  const user = useSelector((state) => state.user.user);
  if (!user || Object.values(user).every((value) => value === "")) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
};
