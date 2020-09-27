import {combineReducers} from "redux";
import {turnReducer} from "./turnReducer";
import {boardReducer} from "./boardReducer";
import {winnerReducer} from "./winnerReducer"

export default combineReducers({
    turn:turnReducer,
    board:boardReducer,
    winnerCells:winnerReducer
});