import React from 'react';
import {render} from 'react-dom';
import reducers from './reducers';
import {addImage,imagesFetch} from './actions';
import store from './store';

class Demo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
    this.add = () => {
      store.dispatch(addImage('450x456'));
    }
  }
  componentWillMount(){
    store.dispatch(imagesFetch());
  }
  displayName: 'Demo';
  render(){
    return (
      <section className={'react-demo'}>
        <h1>here is my react redux demo</h1>
        <button onClick={this.add.bind(this)}>add</button>
      </section>
    );
  }
}

render(<Demo/>, document.getElementById('app'));
