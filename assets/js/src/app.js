import React from 'react';
import {render} from 'react-dom';
import reducers from './reducers';
import {addImage,imagesFetch} from './actions';
import store from './store';
import { Provider} from 'react-redux';

class Demo extends React.Component{
  componentWillMount(){
    store.dispatch(imagesFetch());
    store.dispatch(addImage('320x240'));
  }
  displayName: 'Demo';
  render(){
    return (
      <Provider store={store}>
        <section className={'react-demo'}>
          <h1>here is my react redux demo</h1>
          <button>add</button>
        </section>
      </Provider>
    );
  }
}

render(<Demo/>, document.getElementById('app'));
