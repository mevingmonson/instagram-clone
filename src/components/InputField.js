import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount() {
    if (this.props.defaultValue) {
      this.setState({
        inputValue: this.props.defaultValue,
      });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      inputValue: value,
    }, () => {
      this.props.onChange(value, name, event);
    });
  }

  render() {
    const {
      id, type, className, name, placeholder, onChange, onBlur, value, disabled, onKeyDown,
    } = this.props;
    return (
      <input
        id={id}
        ref={this.props.forwardRef}
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        onChange={(event) => {
          if (typeof value !== 'undefined') {
            onChange(event.target.value, event.target.name, event);
          } else {
            this.handleChange(event);
          }
        }}
        onBlur={onBlur}
        value={value || this.state.inputValue}
        disabled={disabled}
        onKeyDown={onKeyDown}
      />
    );
  }
}

InputField.defaultProps = {
  id: undefined,
  type: 'text',
  name: undefined,
  className: 'form-control',
  placeholder: undefined,
  onChange: () => { },
  onBlur: () => { },
  defaultValue: undefined,
  value: undefined,
  disabled: false,
  forwardRef: undefined,
  onKeyDown: undefined,
};

InputField.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'email', 'password', 'hidden']),
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  defaultValue: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  forwardRef: PropTypes.any,
  onKeyDown: PropTypes.func,
};

export default React.forwardRef((props, ref) => <InputField {...props} forwardRef={ref} />);
