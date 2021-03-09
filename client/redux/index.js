import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createRootReducer from "./reducers";

export const history = createBrowserHistory();

const middleware = [thunk, routerMiddleware(history)];
const initialState = {};

const composeFunc = process.env.NODE_ENV === "development" ? composeWithDevTools : compose;
const enhancers = []

const composedEnchanters = composeFunc(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  createRootReducer(history),
  initialState,
  composedEnchanters,
);

export default store;
