import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import presets from "./presets";
import players from "./players";
import progress from "./progress";
import gameState from "./gameState";

const createRootReducer = (history) => (
  combineReducers({
    router: connectRouter(history),
    presets,
    players,
    progress,
    gameState
  })
)
export default createRootReducer;
