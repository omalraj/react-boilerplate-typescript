import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./App').default;
    ReactDOM.render(<NextApp />, root);
  });
}
