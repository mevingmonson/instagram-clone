/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../redux/actions/actions-auth';
import LoginForm from '../components/Login/LoginForm';
import InstaLogo from '../assets/instagram-icon.svg';

import '../styles/Login.scss';

const Login = (props) => (
  <div className="row align-items-center justify-content-center login-container">
    <div className="d-none d-md-block col-md-8 text-center info-container">
      <img src={InstaLogo} className="insta-logo" alt="Instagram Icon" />
      <h1>Instagram</h1>
    </div>
    <div className="col-12 col-md-4 bold login-form-container">
      <h1 className="d-block d-md-none text-primary">Instagram</h1>
      <h3>Login</h3>
      <p className="text-center">Start sharing your moments with your loved ones!</p>
      <LoginForm onSubmit={props.login} />
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


Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const dispatchMapToProps = (dispatch) => ({
  login: (formData) => dispatch(login(formData)),
});

export default connect(null, dispatchMapToProps)(Login);
