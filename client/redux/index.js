import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createRootReducer from "./reducers";

export const history = createBrowserHistory();

const middleware = [thunk];
const initialState = {};

const composeFunc = process.env.NODE_ENV === "development" ? composeWithDevTools : compose;

const composedEnchanters = composeFunc(
  applyMiddleware(routerMiddleware(history), ...middleware),
);

const store = createStore(
  createRootReducer(history),
  initialState,
  composedEnchanters,
);

export default store;
