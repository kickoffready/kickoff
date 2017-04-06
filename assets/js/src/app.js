import React from 'react';
import {render} from 'react-dom';
import reducers from './reducers';
import {addImage,imagesFetch} from './actions';
import store from './store';

store.subscribe(() => {
  console.log('new store input', store.getState());
});

store.dispatch(imagesFetch());

store.dispatch(addImage('320x240'));

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
