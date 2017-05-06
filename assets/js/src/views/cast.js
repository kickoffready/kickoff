import {Link} from 'react-router-dom';
import React from 'react';

class Cast extends React.Component {
  displayName: 'Cast';
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link className="cast"
          to={`/cast/${this.props.link}`}
      >
        {this.props.name}
      </Link>
    );
  }
}

export default Cast;
