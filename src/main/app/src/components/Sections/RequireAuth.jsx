import { useLocation, Navigate ,Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const RequirdAuth = ()=>{
    const { auth } =useAuth();
    const location =useLocation();
     return(
          auth?.user
          ? <Outlet />
          :< Navigate to="/login" state={{ from: location}} replace />
     );

}
 export default RequirdAuth;