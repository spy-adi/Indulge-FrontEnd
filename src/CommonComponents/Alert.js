import React, { useContext } from "react";
import alertContext from "../context/alert/alertContext";

const Alert = ()=>{
    const {alerts} = useContext(alertContext);
    return(
        alerts.length>0 && 
        <div>
            {alerts.map(alert=>{
                return (
                    <div key={alert.id} className={`alert alert-danger`}>
                        <i className="fas fa-info-circle" />{alert.msg}
                    </div>
                )
        })}
        </div>
    );
};
export default Alert