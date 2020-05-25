import { db } from '../../lib/firebase';
import { profileActions } from '../ActionTypes';

export const fetchUserDetails = (username) => async (dispatch) => {
  if (!username) {
    throw new Error('Invalid Link');
  }
  try {
    dispatch({
      type: profileActions.PROFILE_FETCH_START,
    });
    // fetching the (other)userDetails from profile URL
    const details = await db.collection('users')
      .where('username', '==', username.toLowerCase()).get()
      .then((snapshot) => {
        // if the username is present
        if (snapshot.docs.length) {
          const user = snapshot.docs.pop();
          return {
            uid: user.id,
            ...user.data(),
          };
        }
        // if the username is not present
        return null;
      });
    if (!details) {
      throw new Error('User Not Found!');
    }
    dispatch({
      type: profileActions.PROFILE_FETCH_SUCCESS,
      payload: details,
    });
  } catch (error) {
    dispatch({
      type: profileActions.PROFILE_FETCH_FAILED,
      payload: error.message,
    });
  }
};

export const clearData = () => (dispatch) => {
  dispatch({
    type: profileActions.PROFILE_CLEAR,
  });
};
