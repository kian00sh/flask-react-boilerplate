import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import itemReducer from './itemReducer';

export default history =>
  combineReducers({
    items: itemReducer,
    router: connectRouter(history),
  });
