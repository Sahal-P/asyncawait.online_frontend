import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const PublicRoute = () => {
    const user = useSelector((state)=>state.user.user)
    if (Object.values(user).every((value) => value !== "")){
        return <Navigate to={'/'}/>
    }
  return <Outlet/>  
}