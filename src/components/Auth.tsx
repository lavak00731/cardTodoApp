import { Navigate, Outlet } from "react-router-dom";
import { appContext } from "../context/appContext";
import { useContext } from "react";

export const Auth = () => {
  const auth = useContext(appContext);
    if(!auth) {
        return <Navigate to="/" />
    }

  return (
    <Outlet />
  )
}
