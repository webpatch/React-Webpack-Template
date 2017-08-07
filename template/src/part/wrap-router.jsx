import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './app';
import About from './views/about';
import User from './views/user';

const Wrap = () => (
  <Router>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/user" component={User} />
      <Route path="/" component={App} />
    </Switch>
  </Router>
);

export default Wrap;
