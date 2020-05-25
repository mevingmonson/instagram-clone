import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { storage, db } from '../../lib/firebase';

import Button from '../Button';
import { logout } from '../../redux/actions/actions-auth';

import dpPlaceholder from '../../assets/profile-placeholder.jpg';

const UserInfo = ({
  profileData,
  userData,
  isOtherUser,
  ...props
}) => {
  // profileData contains the details of loggedInUser
  let details = profileData;
  if (isOtherUser) {
    // userData contains the details of other user
    details = userData;
  }
  const {
    username, posts, followers, following, bio, profilePic, uid,
  } = details;


  return (
    <div className="row user-info">
      <div className="col-12 col-md-4">
        <div className="profile-pic">
          {!isOtherUser && (
            <input
              id="profilePicLoader"
              type="file"
              className="d-none"
              onChange={(event) => {
                const file = event.target.files[0];
                const profilePicRef = storage.ref().child(`profilePics/${uid}`);
                profilePicRef.put(file).then(() => {
                  profilePicRef.getDownloadURL().then((url) => {
                    db.collection('users').doc(uid).update({
                      profilePic: url,
                    });
                    alert('Profile picture updated');
                  });
                });
              }}
              accept="image/png, image/jpg, image/jpeg"
            />
          )}
          <img
            role="presentation"
            onClick={() => {
              if (!isOtherUser) {
                document.getElementById('profilePicLoader').click();
              }
            }}
            src={profilePic || dpPlaceholder}
            alt="Profile-Pic"
          />
        </div>
      </div>
      <div className="col-12 col-md-8">
        <div className="username d-flex align-items-center">
          <h2>{username}</h2>
          {!isOtherUser && <Button className="btn btn-sm btn-dark ml-3" onClick={props.logout}>Logout</Button>}
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
          {isOtherUser && <button type="button" className="btn btn-sm btn-primary px-5 ">Follow</button>}
        </div>
      </div>
    </div>
  );
};
UserInfo.defaultProps = {
  userData: null,
  isOtherUser: false,
};

UserInfo.propTypes = {
  logout: PropTypes.func.isRequired,
  profileData: PropTypes.object.isRequired,
  userData: PropTypes.object,
  isOtherUser: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  profileData: state.auth.userData,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
