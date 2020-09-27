import { SET_WINNER_CELLS} from "../actions/types";

export const winnerReducer=(state=null,action)=>{
    switch ( action.type){
        case SET_WINNER_CELLS:
            return action.payload[0] === null? null : action.payload;
        default:
            return state
    }
}