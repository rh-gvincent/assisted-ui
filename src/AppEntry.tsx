import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { init } from './store';
import App from './App';
import { getBaseName } from '@redhat-cloud-services/frontend-components-utilities/helpers';
import logger from 'redux-logger';
import { OCM } from './assisted-ui-lib';

const AppEntry = () => (
  <Provider store={init(...(process.env.NODE_ENV !== 'production' ? [logger] : [])).getStore()}>
    <Provider store={OCM.Store.store}>
      <Router basename={getBaseName(window.location.pathname)}>
        <App />
      </Router>
    </Provider>
  </Provider>
);

export default AppEntry;
