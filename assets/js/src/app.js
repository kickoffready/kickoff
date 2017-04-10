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
    feed: store.getState().feed,
    images: store.getState().images
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actions,dispatch);
}

const ReduxMain = connect(mapStateTOProps,mapDispachToProps)(Index);

class Root extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <ReduxMain/>
      </Provider>
    );
  }
}

render(<Root/>, document.getElementById('app'));
