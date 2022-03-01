import { AUTH_ERROR, CLEAR_ERRORS, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED,LOGOUT } from "../types";

const reducerfunc = (state,action) => {
    switch(action.type){
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token",action.payload.token)
            return{
                ...state,
                ...action.payload, // doubt
                isAuthenticated:true,
                loading:false

            };
        case LOGIN_FAIL:
        case LOGOUT:
        case AUTH_ERROR:
        case REGISTER_FAIL:
            localStorage.removeItem("token")
            return{
                ...state,
                token:null, // doubt
                isAuthenticated:false,
                error:action.payload,
                loading:false,
                user:null // doubt

            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }

        case USER_LOADED:
            return{
                ...state,
                user:action.payload,
                isAuthenticated:true,
                loading:false
            }
        default:
            return state;
    }


}

export default reducerfunc;