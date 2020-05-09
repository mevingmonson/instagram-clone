import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../Button';
import { logout } from '../../redux/actions/actions-auth';

import dpPlaceholder from '../../assets/profile-placeholder.jpg';

const UserInfo = (props) => (
  <div className="row user-info">
    <div className="col-12 col-md-4">
      <div className="profile-pic">
        <img src={dpPlaceholder} alt="Profile-Pic" />
      </div>
    </div>
    <div className="col-12 col-md-8">
      <div className="username d-flex align-items-center">
        <h2>{props.username}</h2>
        <Button className="btn btn-sm btn-dark ml-3" onClick={props.logout}>Logout</Button>
      </div>

      <div className="profile-status">
        <div className="status-item">
          <h4>47</h4>
          <span>Posts</span>
        </div>
        <div className="status-item">
          <h4>302</h4>
          <span>Followers</span>
        </div>
        <div className="status-item">
          <h4>612</h4>
          <span>Following</span>
        </div>
      </div>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
      </p>
      <div className="follow-btn">
        <button type="button" className="btn btn-sm btn-primary px-5 ">Follow</button>
      </div>
    </div>
  </div>
);

UserInfo.propTypes = {
  logout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  username: state.auth.userData?.displayName,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
