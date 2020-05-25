import React from 'react';
import { Redirect } from 'react-router-dom';

import { auth } from '../lib/firebase';

const FireBaseActions = () => {
  const params = new URLSearchParams(window.location.search);

  switch (params.get('mode')) {
    case 'resetPassword':
      return <Redirect to={`/reset-password?token=${params.get('oobCode')}`} />;
    case 'verifyEmail':
      auth.applyActionCode(params.get('oobCode')).then(() => {
        alert('Email Verification Successful');
      }).catch((error) => {
        let errorMessage = null;
        switch (error.code) {
          case 'auth/expired-action-code':
            errorMessage = 'The reset password link is expired'; break;
          case 'auth/invalid-action-code':
            errorMessage = 'Invalid Link'; break;
          case 'auth/user-disabled':
            errorMessage = 'Your account is disabled'; break;
          case 'auth/user-not-found':
            errorMessage = 'User not found'; break;
          default: errorMessage = 'Something went wrong';
        }
        alert(errorMessage);
      });
    default: return <Redirect to="/" />;
  }
};

export default FireBaseActions;
