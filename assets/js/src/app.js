import React from 'react';
import {combineReducers,createStore} from 'redux';
import {render} from 'react-dom';

const imagesReducer = (state = {}, action) => {
  switch(action.type) {
    case 'size': {
      state = {...state, size: action.content};
      break;
    }
    case 'color': {
      state = {...state, color: action.content};
      break;
    }
  }

  return state;
}

const reducers = combineReducers({
  images: imagesReducer
})
const store = createStore(reducers);

store.subscribe(() => {
  console.log('new store input', store.getState());
});

store.dispatch({type:'size', content: '320x240'})
store.dispatch({type:'color', content: 'fff'})
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
