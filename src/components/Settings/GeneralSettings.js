import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { auth, db } from '../../lib/firebase';

import UserBioForm from './UserBioForm';

class GeneralSettings extends Component {
  handleSaveSettings = (formData) => {
    db.collection('users').doc(auth.currentUser.uid).update({
      ...formData,
    });
    alert('Saved Scuccessfully');
  }

  render() {
    return (
      <div className="settings-item general-settings">
        <h5>General Settings</h5>
        <hr />
        <UserBioForm onSubmit={this.handleSaveSettings} />
      </div>
    );
  }
}

GeneralSettings.defaultProps = {};

GeneralSettings.propTypes = {};

export default GeneralSettings;
