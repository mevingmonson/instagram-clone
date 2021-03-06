import { authActionTypes } from '../ActionTypes';
import { auth, db } from '../../lib/firebase';

export const validateAuthStatus = () => async (dispatch) => {
  dispatch({
    type: authActionTypes.TOGGLE_LOADING,
    payload: true,
  });

  auth.onAuthStateChanged((userData) => {
    if (userData) {
      db.collection('users').doc(userData.uid).onSnapshot((rec) => {
        if (rec.exists) {
          dispatch({
            type: authActionTypes.SET_AUTH_STATUS,
            payload: {
              uid: userData.uid,
              ...rec.data(),
            },
          });
        }
      });
    } else {
      dispatch({
        type: authActionTypes.SET_AUTH_STATUS,
        payload: null,
      });
    }
  });
};

export const login = ({ emailId, password }) => async (dispatch) => {
  try {
    dispatch({
      type: authActionTypes.LOGIN_START,
    });
    const result = await auth.signInWithEmailAndPassword(emailId, password);
    dispatch({
      type: authActionTypes.LOGIN_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: authActionTypes.LOGIN_FAILED,
      payload: error.code === 'auth/user-not-found' ? 'Invalid Credentials' : error.message,
    });
  }
};


export const register = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: authActionTypes.REGISTER_START,
    });
    const { name, emailId, password } = formData;

    // To check whether username is already present or not
    let isUserNameAvailable = true;
    await db.collection('users')
      .where('username', '==', name.toLowerCase()).get()
      .then((snapShot) => {
        isUserNameAvailable = !snapShot.docs.length;
      });
    if (!isUserNameAvailable) {
      throw new Error('Username is not available');
    }

    // registering the user on firebase
    const result = await auth.createUserWithEmailAndPassword(emailId, password);
    result.user.updateProfile({
      displayName: name,
    });
    db.collection('users').doc(result.user.uid).set({
      username: String(name).toLowerCase(),
      emailId,
      profilePic: null,
      followers: [],
      following: [],
      posts: 0,
      timeStamp: new Date().toISOString(),
      bio: null,
      isPrivate: true,
    });
    result.user.sendEmailVerification();
    dispatch({
      type: authActionTypes.REGISTER_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: authActionTypes.REGISTER_FAILED,
      payload: error.message,
    });
  }
};

export const logout = (redirectPath) => (dispatch) => {
  auth.signOut().then(() => {
    dispatch({
      type: authActionTypes.LOGOUT,
    });
  });
  if (redirectPath) {
    window.location.href = redirectPath;
  }
};


export const sendPasswordResetLink = (emailId) => async (dispatch) => {
  try {
    dispatch({
      type: authActionTypes.RESET_LINK_SEND_START,
    });
    await auth.sendPasswordResetEmail(emailId);
    dispatch({
      type: authActionTypes.RESET_LINK_SEND_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: authActionTypes.RESET_LINK_SEND_FAILED,
      payload: error.code === 'auth/user-not-found' ? 'User Not Found!' : error.message,
    });
  }
};

export const resetPassword = ({ password, token }) => async (dispatch) => {
  try {
    dispatch({
      type: authActionTypes.RESET_PASSWORD_START,
    });
    await auth.confirmPasswordReset(token, password);
    dispatch({
      type: authActionTypes.RESET_PASSWORD_SUCCESS,
    });
    setTimeout(() => {
      window.location.href = '/';
    }, 2500);
  } catch (error) {
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
      case 'auth/weak-password':
        errorMessage = 'Weak Password'; break;
      default: errorMessage = error.message;
    }
    dispatch({
      type: authActionTypes.RESET_PASSWORD_FAILED,
      payload: errorMessage,
    });
  }
};
