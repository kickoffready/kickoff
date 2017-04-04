import React from 'react';
import {applyMiddleware,combineReducers,createStore} from 'redux';
import {render} from 'react-dom';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import axios from 'axios';

const imagesReducer = (state = {}, action) => {
  switch(action.type) {
    case 'add': {
      state = {...state, image: action.content};
      break;
    }
  }

  return state;
}

const imagesFetch = (state = {}, action) => {
  switch(action.type) {
    case 'RECEIVE': {
      console.log('RECEIVE')
      state = {...state,images:action.content};
    }
    case 'ERROR': {
     state = {...state, error:action.content};
    }
  }
  return state;
}

const reducers = combineReducers({
  imagesReducer: imagesReducer,
  imagesFetch: imagesFetch
})

const checkStatus = (store) => (next) => (action) => {
  console.log('update', action);
  next(action);
}

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducers, {}, middleware);

store.subscribe(() => {
  console.log('new store input', store.getState());
});

store.dispatch((dispatch) => {
  axios.get('//localhost:8080/api/images.json')
    .then((response) => {
      dispatch({type: 'RECEIVE', content: response.data})
    })
    .catch((err) => {
      dispatch({type: 'ERROR', content: err})
    })
});

class Demo extends React.Component{
  displayName: 'Demo';
  render(){
    return (
      <section className={'react-demo'}>
        <h1>here is my react demo</h1>
        <h2>something new</h2>
      </section>
    );
  }
}

render(<Demo/>, document.getElementById('app'));
