import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// containers
import Login from './containers/Login';
import Register from './containers/Register';
import Feeds from './containers/Feeds';
import ResetPassword from './containers/ResetPassword';


// NotFound 404
import NotFound from './containers/NotFound';

// AuthHOC
import BeforeLoginHOC from './middlewares/BeforeLoginHOC';
import AfterLoginHOC from './middlewares/AfterLoginHOC';
// import AuthHOC from './middlewares/AuthHOC';

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
          {/* <Route path="/" component={AuthHOC(Login, '/')} exact />
          <Route path="/register" component={AuthHOC(Register, '/register')} exact />
          <Route path="/feeds" component={AuthHOC(Feeds, '/feeds')} exact /> */}

          {/* When user has not logged in */}
          <Route path="/" component={BeforeLoginHOC(Login)} exact />
          <Route path="/register" component={BeforeLoginHOC(Register)} exact />
          <Route path="/reset-password" component={BeforeLoginHOC(ResetPassword)} exact />

          {/* When user has logged in  */}
          <Route path="/feeds" component={AfterLoginHOC(Feeds)} exact />

          {/* Its Not Found Page */}
          <Route component={NotFound} />


          <Route component={NotFound} />

        </Switch>
      </BrowserRouter>
    );
  }
}
