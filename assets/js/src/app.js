import React from 'react';
import {render} from 'react-dom';
import reducers from './reducers';
import * as actions from './actions';
import store from './store';
import {bindActionCreators} from 'redux';
import {Provider,connect} from 'react-redux';
import Main from './views';

function mapStateTOProps(state) {
  return {
    images: store.images,
    imagesFetched: store.imagesFetch
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actions,dispatch);
}

const ReduxMain = connect(mapStateTOProps,mapDispachToProps)(Main);

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
