import {NEXT_TURN} from "../actions/types";

export const turnReducer=(state=null,action=[])=>{
  switch ( action.type){
    case NEXT_TURN:
      return !state;
    default:
      return state
  }
}