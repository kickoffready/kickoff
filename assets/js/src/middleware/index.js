import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const checkStatus = (store) => (next) => (action) => {
  console.log('update', action);
  next(action);
}

export default applyMiddleware(thunk, createLogger());