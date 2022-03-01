import React,{useEffect,useContext, Fragment} from "react";
import AuthContext from "../context/auth/authContext";

const LoadUser = ()=>{
    const authContext = useContext(AuthContext);
    const {loadUser} = authContext;
    useEffect(()=>{
        loadUser();
        // eslint-disable-next-line
    },[]);
    return <Fragment/>
}
export default LoadUser;