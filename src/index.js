// Built-in Modules
import './assets/css/font-awesome.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/mdb.min.css';
import './assets/css/style.min.css';
import './assets/css/main.css';

import './assets/js/jquery-3.3.1.min.js';
import './assets/js/bootstrap.min.js';

import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';

// Custom Modules
import App from './components/App';
import storeHouse from './storehouse';

const render = () => {
  ReactDOM.render(
    <Provider store={storeHouse.STORE}>
      <ConnectedRouter history={storeHouse.HISTORY}>
        <AppContainer>
          <App />
        </AppContainer>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};

render();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render();
  });
}
