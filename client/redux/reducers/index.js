import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import presets from "./presets";
import players from "./players";

const createRootReducer = (history) => (
  combineReducers({
    router: connectRouter(history),
    presets,
    players,
  })
)
export default createRootReducer;
