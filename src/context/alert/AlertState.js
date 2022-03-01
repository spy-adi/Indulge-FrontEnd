import React, {  useReducer } from "react";
import {v4 as uuidv4} from "uuid";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import {  REMOVE_ALERT, SET_ALERT } from "../types";

const AlertState = props =>{

    const initialState = [];
    const [state,dispatch] = useReducer(alertReducer,initialState);
    // Methods

    // Set Alert
    const setAlert = (msg)=>{
        const id = uuidv4();
        dispatch({
            type:SET_ALERT,
            payload:{msg,id}
        });

        setTimeout(function(){dispatch({type:REMOVE_ALERT,payload:id})},1000);
    }

    return (
        <AlertContext.Provider
        value={{
            alerts:state,
            setAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}
export default AlertState;
