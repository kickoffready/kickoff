import {Link} from 'react-router-dom';

class Pagination extends React.Component{
  displayName: 'Pagination';
  constructor(props) {
    super(props);
  }

  render(){
    if(typeof this.props.link === 'undefined') {
      return null;
    } 
    const nextLink = this.props.link.split('page=')[1];
    return (
      <Link to={`/page/${nextLink}`} className={"button-1"}> next </Link>
    )
  }
}

export default Pagination;