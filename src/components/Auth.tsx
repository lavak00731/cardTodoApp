import { Navigate, Outlet } from "react-router-dom";
import { appContext } from "../context/appContext";
import { useContext } from "react";

export const Auth = () => {
  const auth = useContext(appContext);
 
    /*useEffect(() => {
      auth?.login(true);
      console.log(auth?.isAuthenticated);
    }, [auth])*/

    if(!auth.isAuthenticated) {
        return <Navigate to="/" />
    }

  return (
    <Outlet />
  )
}
