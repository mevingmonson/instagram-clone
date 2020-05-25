import { profileActions } from '../ActionTypes';

const initialState = {
  loading: false,
  userDetails: null,
  error: null,
};

const profileReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case profileActions.PROFILE_FETCH_START:
      return { ...state, loading: true };
    case profileActions.PROFILE_FETCH_SUCCESS:
      return { ...state, loading: false, userDetails: actions.payload };
    case profileActions.PROFILE_FETCH_FAILED:
      return { ...state, loading: false, error: actions.payload };
    case profileActions.PROFILE_CLEAR:
      return initialState;
    default: return state;
  }
};

export default profileReducer;
