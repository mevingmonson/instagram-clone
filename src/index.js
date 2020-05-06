import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import constructStore from './redux/store';
import App from './App';

const store = constructStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
