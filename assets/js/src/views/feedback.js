import React from 'react';

class Feedback extends React.Component {
  displayName: 'Feedback';
  constructor(props) {
    super(props);
    this.reload = () => {
      this.props.action();
    };
  }
  render() {
    return (
      <div className="feedback">
        <span className={'feedback__title'}> Something went wrong... would you like to try it again?</span>
        <button className={'feedback__button'}
            onClick={this.reload}
        >
          Try it now
        </button>
      </div>
    );
  }
}

export default Feedback;
