import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import "./main.scss";
import store, { history } from "./redux";
import App from "./App";
import CreateTask from "./pages/createTask";
import AllTask from "./pages/allTask";
import Appp from "./pages/test";

const Main = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => <App />} />
          <Route exact path="/create" component={() => <CreateTask />} />
          <Route exact path="/task" component={() => <AllTask />} />
          <Route exact path="/test" component={() => <Appp />} />
        </Switch>
      </HashRouter>
    </ConnectedRouter>
  </Provider>
);

const target = document.getElementById("root");

ReactDOM.render(<Main />, target);
