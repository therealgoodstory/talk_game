import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import './main.scss';
import store, { history } from './redux';
import App from './App';
import Game from './pages/Game';
import Settings from './pages/Settings';
import Presets from './pages/Presets';
import Players from './pages/Players';

const Main = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => <App />} />
          <Route exact path="/settings" render={() => <Settings />} />
          <Route exact path="/game" render={() => <Game />} />
          <Route exact path="/presets" render={() => <Presets />} />
          <Route exact path="/players" render={() => <Players />} />
        </Switch>
      </HashRouter>
    </ConnectedRouter>
  </Provider>
);

const target = document.getElementById("root");

ReactDOM.render(<Main />, target);
