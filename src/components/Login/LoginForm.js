import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../Button';
import Alert from '../Alert';
import InputField from '../InputField';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailId: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.emailId && this.state.password) {
      this.props.onSubmit({
        emailId: this.state.emailId,
        password: this.state.password,
      });
    } else {
      alert('Invalid Username or password');
    }
  }

  render() {
    return (
      <>
        <Alert show={!!this.props.formError} type="danger" message={this.props.formError} />
        <form className="w-75 text-center" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <InputField
              type="email"
              className="form-control"
              placeholder="Email Address"
              onChange={(emailId) => this.setState({ emailId })}
            />
          </div>
          <div className="form-group">
            <InputField
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(password) => this.setState({ password })}
            />
          </div>
          <Button
            type="submit"
            className="btn btn-sm btn-primary px-4"
            disabled={!(this.state.emailId && this.state.password)}
            loading={this.props.formLoading}
            loadingText="Loggin In..."
          >
            Sign In
          </Button>
        </form>
      </>
    );
  }
}

LoginForm.defaultProps = {
  formLoading: false,
  formError: null,
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formError: PropTypes.string,
  formLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  formError: state.auth.formError,
  formLoading: state.auth.formLoading,
});

export default connect(mapStateToProps)(LoginForm);
