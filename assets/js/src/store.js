import {createStore, compose, applyMiddleware} from 'redux';
import middleware from './middleware';
import reducers from './reducers';

// TODO reomve DEVTOOLS in production
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancers = composeEnhancers(middleware);

export default createStore(
  reducers,
  enhancers
);
