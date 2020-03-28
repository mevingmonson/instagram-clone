import React, { Component } from 'react';
import PropTypes from 'prop-types';

// SCSS Style File of Register
import '../styles/Register.scss';
import InstaLogo from '../assets/instagram-icon.svg';
import '../styles/Register.scss';


class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="row align-items-center justify-content-center register-container">
        <div className="d-none d-md-block col-md-8 text-center info-container">
          <img src={InstaLogo} className="insta-logo" alt="Instagram Icon" />
          <h1>Instagram</h1>
        </div>
        <div className="col-12 col-md-4 register-form-container">
          <h1 className="d-block d-md-none text-primary display-4">Instagram</h1>
          <h3>Register</h3>
          <p className="text-center">Start sharing your moments with your loved ones!</p>

          <button
            type="button"
            className="btn btn-sm btn-link"
            onClick={() => this.props.history.push('/')}
          >
            Already a user? Logim
          </button>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Register;
