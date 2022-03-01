import { SET_ALERT,REMOVE_ALERT } from "../types";
const reducerFunc=(state,action)=>{
    switch(action.type){
        case SET_ALERT:
            const {id,msg} = action.payload;
            return [...state,{id,msg}];
        case REMOVE_ALERT:
            return state.filter(alert=>alert.id!==action.payload);
    }
}
export default reducerFunc;