import {Link} from 'react-router-dom';
import React from 'react';

class Nav extends React.Component {
  displayName: 'Nav';
  constructor(props) {
    super(props);
  }

  render() {
    let pageLink;
    if(typeof this.props.link !== 'string') {
      return null;
    }
    pageLink = this.props.link.split('page=')[1];
    if(typeof pageLink !== 'string') {
      return null;
    }

    return (
      <Link  className={'button-1'}
          to={`/page/${pageLink}`}
      >
          {this.props.name} </Link>
    );
  }
}

export default Nav;
