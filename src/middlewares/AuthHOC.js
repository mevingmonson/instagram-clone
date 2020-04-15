import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const AuthHOC = (ComposedComponent, path) => class extends Component {
  constructor(props) {
    super(props);
    const authStatus = window.localStorage.getItem('isLoggedIn');
    this.state = {
      authStatus: authStatus === 'true',
    };
  }

  render() {
    const isBeforeLogin = ['/', '/register', '/reset-password'].includes(path);

    let componentToBeRendered = <ComposedComponent {...this.props} />;

    if (isBeforeLogin && this.state.authStatus) {
      // When User tries to access Login, Register or Reset Password Page but he is already Logged In
      componentToBeRendered = <Redirect to="/feeds" />;
    } else if (!isBeforeLogin && !this.state.authStatus) {
      // When User Tries to Access other than Login, Register and Reset Password and He is not Logged In already.
      componentToBeRendered = <Redirect to={`/?next=${path}`} />;
    }

    return componentToBeRendered;
  }
};

export default AuthHOC;
