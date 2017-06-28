import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../components/App';
import Admin from '../views/Admin';
import Trainer from '../views/Trainer';

export default class Root extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route exact path="/" component={Trainer} />
          <Route path="/admin" component={Admin} />
        </App>
      </Router>
    );
  }
}
