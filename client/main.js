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
import Test from "./components/test";
import AllTask from "./pages/allTask";

const Main = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => <App />} />
          <Route exact path="/create" component={() => <CreateTask />} />
          <Route exact path="/create1" component={() => <Test />} />
          <Route exact path="/task" component={() => <AllTask />} />
        </Switch>
      </HashRouter>
    </ConnectedRouter>
  </Provider>
);

const target = document.getElementById("root");

ReactDOM.render(<Main />, target);
