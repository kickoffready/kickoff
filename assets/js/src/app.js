import React from 'react';
import {render} from 'react-dom';
import reducers from './reducers';
import * as actions from './actions';
import store from './store';
import {bindActionCreators} from 'redux';
import {Provider,connect} from 'react-redux';
import Index from './views';

function mapStateTOProps(state) {
  return {
    images: store.getState().images,
    feed: store.getState().feed
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actions,dispatch);
}

const ReduxMain = connect(mapStateTOProps,mapDispachToProps)(Index);

class Demo extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <ReduxMain/>
      </Provider>
    );
  }
}

render(<Demo/>, document.getElementById('app'));
