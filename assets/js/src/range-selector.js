import React from 'react';
import Checkbox from './input-checkbox.js';
class RangeSelector extends React.Component{
  displayName: 'RangeSelector';
  propTypes: {
    name: React.PropTypes.string.isRequired,
    range: React.PropTypes.array.isRequired
  }
  isChecked(number) {
    console.log(number);
  }

  render(){
    let inputList=[],
      i ,
      checkboxName,
      rangelist=[],
      rangeStart = this.props.range[0],
      rangeEnd = this.props.range[1];
    for (i = rangeStart; i <= rangeEnd; i++ ) {
      rangelist.push(i);
    }

    inputList = rangelist.map((number,i) => {
      checkboxName = this.props.name + '-' + number;
      return (
      <Checkbox
          key={i}
          linked={checkboxName}
          inputChecked={this.isChecked}
          value={number}
      />)
    }
  );

    return (
      <div className={'range-selector__item'}>
        <b>{this.props.name}</b>
        {inputList}
      </div>
    );
  }
}

module.exports = RangeSelector;
