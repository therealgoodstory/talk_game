import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import sidebar from "./sidebar";
import userCard from './userCard'

const createRootReducer = (history) => (
  combineReducers({
    router: connectRouter(history),
    sidebar,
    userCard,
  })
)
export default createRootReducer;
