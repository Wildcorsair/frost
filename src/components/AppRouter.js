import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Welcome from './Welcome';
import Application from './Application';

const history = createBrowserHistory();

class AppRouter extends Component {
  render() {
    return(
      <Router history={history}>
        <div>
          <Route exact path="/" component={Welcome} />
          <Route path="/dashboard" component={Application} />
        </div>
      </Router>
    );
  }
}

export default AppRouter;
