import React from 'react';
import {applyMiddleware,combineReducers,createStore} from 'redux';
import {render} from 'react-dom';

const imagesReducer = (state = {}, action) => {
  switch(action.type) {
    case 'add': {
      state = {...state, image: action.content};
      break;
    }
  }

  return state;
}

const reducers = combineReducers({
  images: imagesReducer
})

const checkStatus = (store) => (next) => (action) => {
  console.log('update', action);
  next(action);
}

const middleware = applyMiddleware(checkStatus);
const store = createStore(reducers, {}, middleware);

store.subscribe(() => {
  console.log('new store input', store.getState());
});

store.dispatch({
    type:'add',
    content: {
      size:'320x240',
      color:'fff'
    }
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
