import {applyMiddleware,createStore} from 'redux';
import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import reducers from './reducers';
import middleware from './middleware';

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

store.dispatch({
  type:'add', 
  content: {
    size: '320'
  }
})

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
