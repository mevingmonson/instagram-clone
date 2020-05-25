import { combineReducers } from 'redux';

import auth from './reducer-auth';
import search from './reducer-search';
import profile from './reducer-profile';
// import feeds from './reducer-feeds';

const reducers = combineReducers({
  auth,
  search,
  profile,
  // feeds,
});

export default reducers;
