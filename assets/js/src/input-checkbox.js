import React from 'react';
class InputCheckbox extends React.Component{
  displayName: 'InputCheckbox';
  constructor(props) {
    super(props);
    this.state = {isChecked: false};

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({isChecked: !this.state.isChecked},() => {
      if (this.state.isChecked) {
        this.props.inputChecked(this.props.value);
      }
    });

  }

  render(){
    let mainClass = 'range-selector__item-input',
      inputClass = mainClass + '-checkbox',
      labelClass = mainClass + '-text',
      linked = this.props.linked;
    return (
      <div className={mainClass}>
        <input
            className={inputClass}
            checked={this.state.isChecked}
            onChange={this.onChange}
            id={linked}
            type={'checkbox'}
            value={linked}
        />
        <label
            className={labelClass}
            htmlFor={linked}
        >
          {this.props.value}
        </label>
      </div>
    );
  }
}

module.exports = InputCheckbox;
