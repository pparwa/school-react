import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { usercontext } from "../../App";



const AuthGuard = ()=>{
  let {state} = useContext(usercontext)

     return state.login ? <Outlet /> : <Navigate to='/'></Navigate>
}

export default AuthGuard;