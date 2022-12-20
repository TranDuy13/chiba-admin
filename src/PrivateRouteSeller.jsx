import { Outlet, Navigate } from "react-router";

import { LoginStatusSeller } from "./hook/checkLgSeller";

const PrivateRouteSeller=()=>{
    const {loginSeller,checkingSeller}=LoginStatusSeller()
    if(checkingSeller){
        return(
            <>
            <div></div>
            </>
        )
    }
    return loginSeller?<Outlet/> :<Navigate to ='/registerSeller'/>
   
}
export default PrivateRouteSeller;