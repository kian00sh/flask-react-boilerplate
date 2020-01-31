import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App';
import { store, history } from './helpers/store';
import Themes from './themes';
import './assets/styles';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Themes.default}>
      <CssBaseline />
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
