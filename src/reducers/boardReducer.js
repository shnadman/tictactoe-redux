import {UPDATE_BOARD, NEXT_TURN, CHANGE_STEP, ADD_STEP} from "../actions/types";


const INITIAL_STATE={0:null,1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null};


export const boardReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case UPDATE_BOARD:
            return {...state,[action.payload.id]:action.payload.turn};
        case CHANGE_STEP:
            return {...action.payload}
        default:
            return state;
    }

}

