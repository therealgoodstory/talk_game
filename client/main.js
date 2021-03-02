import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import "./main.scss";
import store, { history } from "./redux";
import App from "./App";
import Test from "./components/test";

const Main = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <App />} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>
);

const target = document.getElementById("root");

ReactDOM.render(<Main />, target);
