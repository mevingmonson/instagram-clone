/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '../components/Login/LoginForm';
import InstaLogo from '../assets/instagram-icon.svg';

import '../styles/Login.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleSubmit = (formData) => {
    if (formData.emailId === 'example@123.com' && formData.password === '123456') {
      window.localStorage.setItem('isLoggedIn', true);
      window.location.reload();
    } else {
      alert('Invalid credentials');
    }
  }

  render() {
    return (

      <div className="row align-items-center justify-content-center login-container">
        <div className="d-none d-md-block col-md-8 text-center info-container">
          <img src={InstaLogo} className="insta-logo" alt="Instagram Icon" />
          <h1>Instagram</h1>
        </div>
        <div className="col-12 col-md-4 bold login-form-container">
          <h1 className="d-block d-md-none text-primary">Instagram</h1>
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
          <Link to="/reset-password" className="mt-5 btn btn-sm btn-link">Trouble Logging?</Link>
        </div>

      </div>
    );
  }
}
