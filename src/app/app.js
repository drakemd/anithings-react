import React from 'react';
import './app.scss';
import Header from '../components/header/header';
import { Route, Switch } from 'react-router'; // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../core/configure-store';
import Home from '../pages/home/home';
import Detail from '../pages/detail/detail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail" component={Detail} />
          </Switch>
        </ConnectedRouter>
    </div>
  );
}

export default App;