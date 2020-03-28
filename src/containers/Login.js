/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import InstaLogo from '../assets/instagram-icon.svg';

import '../styles/Login.scss';

export class Login extends Component {
  handleSubmit = (formData) => {
    console.log(formData);
  }

  render() {
    return (
      <div className="row align-items-center login-container">
        <div className="d-none d-md-block col-md-8 text-center info-container">
          <img src={InstaLogo} className="insta-logo" alt="Instagram Icon" />
          <h1>Instagram</h1>
        </div>
        <div className="col-12 col-md-4 text-center bold login-form-container">
          <h1 className="d-block d-md-none">Instagram</h1>
          <h3>Login</h3>
          <p className="text-center">Start sharing your moments with your loved ones!</p>
          <LoginForm onSubmit={this.handleSubmit} />
          <hr className="w-100" />
          <p>
            Don&apos;t have an account?
            &nbsp;
            <b>Join our community!</b>
          </p>
          <Link
            to="/register"
            className="btn btn-sm btn-success w-25 mx-auto"
          >
            Sign Up
          </Link>
          <p className="mt-5">Trouble Logging?</p>
        </div>
      </div>
    );
  }
}

export default Login;
