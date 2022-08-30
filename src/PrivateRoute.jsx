import { Outlet, Navigate } from "react-router";
import { LoginStatus } from "./hook/checkLg";

const PrivateRoute=()=>{
    const {login,checking}=LoginStatus()
    if(checking){
        return(
            <>
            <div></div>
            </>
        )
    }
    return login?<Outlet/> :<Navigate to ='/login'/>
   
}
export default PrivateRoute;