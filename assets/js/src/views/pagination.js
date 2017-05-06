import Nav from './nav';
import React from 'react';

class Pagination extends React.Component {
  displayName: 'Pagination';
  constructor(props) {
    super(props);
  }

  render() {
    const {next, prev} = this.props;
    return (
      <div>
        <Nav link={prev}
            name={'Prev'}
        />
        <Nav  link={next}
            name={'Next'}
        />
      </div>
    );
  }
}

export default Pagination;
