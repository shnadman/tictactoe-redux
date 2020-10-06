import {
  CHANGE_STEP,
  NEXT_TURN,
  SET_WINNER_CELLS,
  UPDATE_BOARD,
} from "./types";

export const changeTurn = () => {
  return {
    type: NEXT_TURN,
  };
};

export const changeStep = (step) => {
  return {
    type: CHANGE_STEP,
    payload: step,
  };
};

export const setWinnerCells = (a, b, c) => {
  return {
    type: SET_WINNER_CELLS,
    payload: [a, b, c],
  };
};

export const updateBoard = (id, turn) => {
  return {
    type: UPDATE_BOARD,
    payload: { id, turn },
  };
};
