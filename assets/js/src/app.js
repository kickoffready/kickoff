import React from 'react';
import {createStore} from 'redux';
import {render} from 'react-dom';

const reducer = (state, action) => {
  if(action.type === 'move') {
    return state + action.slide;
  }
  return state;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log('new store input', store.getState());
});

store.dispatch({type:'move', slide: -1})
store.dispatch({type:'move', slide: 1})
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
