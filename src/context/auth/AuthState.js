import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { AUTH_ERROR, CLEAR_ERRORS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED } from "../types";
import setAuthToken from "../../utils/setAuthToken";

const AuthState = props =>{
    
    const initialState = {
        token: localStorage.getItem("token"),
        isAuthenticated:null, // obviously it cant be true , suppose if we keep it as false first its gonna redirect me to login page it is ok at the starting but after logging in(where we set its value as true and we also get the token which gets stored in the localstorage) and getting the home page suppose i refresh the page the application starts again and its value will be false and it redirects to login page but we are authenticated and we have the token in the localstorage after every refresh we have to login which is not feasible so its initial value will be null 
        loading:true, 
        user:null,
        error:null
    }

    const [state,dispatch] = useReducer(authReducer,initialState);
    const {token,isAuthenticated,loading,user,error} = state;

    // Methods 
    const loadUser = async () =>{
        // setting token in the global header ie x-auth-token = token 
        if(localStorage.token){
            setAuthToken(localStorage.token);
        }
        
        try {
            const res = await axios.get("/api/auth");
            dispatch({type:USER_LOADED,payload:res.data});
        } catch (error) {
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
            
        }
    }
    const register = async formData =>{
        const config = {
            headers:{
                "Content-Type":"application/json" // as we are sending the data we have to mention what type of data we are sending in the header
            }
        }
        try {
            const res = await axios.post("/api/companyDetails/addCompanyDetails",formData,config); // after successfull registration we'll get back the token
            dispatch({type:REGISTER_SUCCESS,payload:res.data});
            loadUser();
        } catch (error) {
            dispatch({type:REGISTER_FAIL,payload:error.response.data.msg})
        }
    }
    const login = async formData =>{
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        try {
            const res = await axios.post("/api/auth",formData,config);
            dispatch({type:LOGIN_SUCCESS,payload:res.data});
            loadUser();
        } catch (error) {
            dispatch({type:LOGIN_FAIL,payload:error.response.data.msg});
        }
    }
    const clearError = () =>{
        dispatch({type:CLEAR_ERRORS});
    }
    const logout = ()=>{
        console.log(1);
        dispatch({type:LOGOUT});
    }

    return (
        <AuthContext.Provider
        value={{
            token,
            isAuthenticated,
            loading,
            user,
            error,
            register,
            login,
            loadUser,
            clearError,
            logout
        }} >
            {props.children}
        </AuthContext.Provider>
    )


}
export default AuthState;