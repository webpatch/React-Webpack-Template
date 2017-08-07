import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './model/reducer';
import App from './app';
import About from './views/about';
import User from './views/user';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = DEBUG ? createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
    applyMiddleware(middleware),
  )) :
  createStore(
    rootReducer,
    compose(
      applyMiddleware(thunkMiddleware),
      applyMiddleware(middleware),
    ),
  );

const StoreWrap = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/user" component={User} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </ConnectedRouter>
  </Provider>
);

export default StoreWrap;
