import React from 'react';

import Button from '../Button';

import dpPlaceholder from '../../assets/profile-placeholder.jpg';

const UserInfo = () => (
  <div className="row user-info">
    <div className="col-12 col-md-4">
      <div className="profile-pic">
        <img src={dpPlaceholder} alt="Profile-Pic" />
      </div>
    </div>
    <div className="col-12 col-md-8">
      <h2 className="username">mevin_gm</h2>
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

export default UserInfo;
