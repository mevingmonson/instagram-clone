import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../Button';
import { logout } from '../../redux/actions/actions-auth';

import dpPlaceholder from '../../assets/profile-placeholder.jpg';

const UserInfo = ({
  userData: {
    username, posts, followers, following, bio, profilePic,
  },
  ...props
}) => (
    <div className="row user-info">
      <div className="col-12 col-md-4">
        <div className="profile-pic">
          <img src={profilePic || dpPlaceholder} alt="Profile-Pic" />
        </div>
      </div>
      <div className="col-12 col-md-8">
        <div className="username d-flex align-items-center">
          <h2>{username}</h2>
          <Button className="btn btn-sm btn-dark ml-3" onClick={props.logout}>Logout</Button>
        </div>

        <div className="profile-status">
          <div className="status-item">
            <h4>{posts}</h4>
            <span>Posts</span>
          </div>
          <div className="status-item">
            <h4>{followers}</h4>
            <span>Followers</span>
          </div>
          <div className="status-item">
            <h4>{following}</h4>
            <span>Following</span>
          </div>
        </div>
        <p>{bio || 'bio is not added'}</p>
        <div className="follow-btn">
          <button type="button" className="btn btn-sm btn-primary px-5 ">Follow</button>
        </div>
      </div>
    </div>
  );

UserInfo.propTypes = {
  logout: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  userData: state.auth.userData,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
