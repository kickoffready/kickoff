import React from 'react';
import Checkbox from './input-checkbox.js';
import _ from 'lodash';
class RangeSelector extends React.Component{
  displayName: 'RangeSelector';
  propTypes: {
    name: React.PropTypes.string.isRequired,
    range: React.PropTypes.array.isRequired,
    initalSelected: React.PropTypes.array
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: props.initalSelected ? props.initalSelected : []
    };

    this.updateSelected = this.updateSelected.bind(this);
  }

  updateSelected(number) {
    let newlySelected = this.state.selected.slice();
    if (newlySelected.length === 1 && newlySelected[0] === number) {
      newlySelected = [];
    } else if (newlySelected.length === 2) {
      newlySelected = [];
      newlySelected.push(number);
      newlySelected = _.sortBy(_.takeRight(newlySelected, 2));
    } else {
      newlySelected.push(number);
      newlySelected = _.sortBy(_.takeRight(newlySelected, 2));
    }

    this.setState({
      selected: newlySelected
    });
  }

  isInSelected(number) {
    let start = this.state.selected[0],
      end = this.state.selected[1];
    if(!end) {
      if (number === start) {
        return true;
      }
    } else {
      if (number >= start && number <= end) {
        return true;
      }
    }
    return false;
  }

  stateClasslist(number) {
    const inRangeClass = 'is-in-range';
    if (this.isInSelected(number)){
      if(!this.state.selected[1]) {
        return 'is-start';
      } else if  (number === this.state.selected[0]) {
        return 'is-start' + ' ' + inRangeClass;
      } else if (number === this.state.selected[1]) {
        return 'is-end' + ' ' + inRangeClass;
      }
      return inRangeClass;
    }
    return '';
  }

  render(){
    let inputList=[],
      selected,
      checkboxName,
      stateClassSet,
      i ,
      rangelist=[],
      rangeStart = this.props.range[0],
      rangeEnd = this.props.range[1];

    for (i = rangeStart; i <= rangeEnd; i++ ) {
      rangelist.push(i);
    }

    inputList = rangelist.map(
      (number,i) => {
        checkboxName = this.props.name + '-' + number;
        selected = this.isInSelected(number);
        stateClassSet = this.stateClasslist(number);
        return (
          <Checkbox
              inputChecked={this.updateSelected}
              isSelected={selected}
              key={i}
              linked={checkboxName}
              stateClass={stateClassSet}
              value={number}
          />
        );
      },this);

    return (
      <div className={'range-selector__item'}>
        <b>{this.props.name}</b>
        {inputList}
      </div>
    );
  }
}

module.exports = RangeSelector;
