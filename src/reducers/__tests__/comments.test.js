import { turnReducer } from "../turnReducer";
import { NEXT_TURN } from "../../actions/types";

it("Handles reducers", () => {
  const state = false;
  const action = { type: NEXT_TURN };
  const newState = turnReducer(state, action);
  expect(newState).toEqual(!state);
});
