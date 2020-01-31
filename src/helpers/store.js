import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import freeze from 'redux-freeze';

import rootReducer from '../reducers';

const history = createBrowserHistory();
const loggerMiddleware = createLogger({
  collapsed: true,
  timestamp: false,
});

let middlewares = [thunkMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(freeze);
  middlewares.push(loggerMiddleware);
}

const store = createStore(
  rootReducer(history),
  process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
      )
    : applyMiddleware(...middlewares),
);

export { store, history };
