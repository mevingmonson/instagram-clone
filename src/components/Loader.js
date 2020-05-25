import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => (
  <div className="row align-items-center" style={props.height ? { height: props.height } : { height: '100vh' }}>
    <div className="col text-center">
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-dark" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
);

Loader.defaultProps = {
  height: null,
};

Loader.propTypes = {
  height: PropTypes.string,
};

export default Loader;
