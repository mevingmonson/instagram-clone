import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

// For Development
import reduxLogger from 'redux-logger';

// Reducer
import reducers from './reducers';

const middleware = applyMiddleware(reduxThunk, reduxLogger);

const configureStore = () => createStore(reducers, middleware);

export default configureStore;
