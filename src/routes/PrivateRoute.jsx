import { Outlet, Navigate } from "react-router-dom";
import Cookies from 'js-cookie';


export const PrivateRoute = () => {
  const Access = Cookies.get(import.meta.env.VITE_ACCESS_TOKEN)
  const Refresh = Cookies.get(import.meta.env.VITE_REFRESH_TOKEN)
  // const user = useSelector((state) => state.user.user);
  if (!Access && !Refresh ) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
};
