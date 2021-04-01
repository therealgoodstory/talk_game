import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import sidebar from "./sidebar";
import userCard from './userCard';
import exchangeRates from './exchangeRates'

const createRootReducer = (history) => (
  combineReducers({
    router: connectRouter(history),
    sidebar,
    userCard,
    exchangeRates,
  })
)
export default createRootReducer;
