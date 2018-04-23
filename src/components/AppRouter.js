import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../reducers/index';
import Welcome from './Welcome';
import Application from './Application';

const history = createBrowserHistory();
const store = createStore(rootReducer);

class AppRouter extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact path="/" component={Welcome} />
            <Route path="/dashboard" component={Application} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default AppRouter;
