import React from 'react';
import {render} from 'react-dom';
import RangeSelector from './range-selector.js';
class RangeSelectorGroup extends React.Component{
  displayName: 'RangeSelectorGroup';
  propTypes: {
    option: React.PropTypes.array.isRequired
  }
  render(){
    return (
      <div className={'range-selector'}>
        <RangeSelector name={'Seats'}// should be a loop
            range={[2,7]}
        />
        <RangeSelector name={'Doors'}
            range={[2,5]}
            initalSelected={[2,4]}
        />
      </div>
    );
  }
}

render(
  <RangeSelectorGroup/>, document.getElementById('app'));
