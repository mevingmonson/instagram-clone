import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// containers
import Login from './containers/Login';
import Register from './containers/Register';

// NotFound 404
import NotFound from './containers/NotFound';

export default class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
