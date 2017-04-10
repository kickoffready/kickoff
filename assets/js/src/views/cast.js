import {Link} from 'react-router-dom';

class Cast extends React.Component{
  displayName: 'Cast';
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <Link to={`/cast/${this.props.link}`} className="cast" > {this.props.name} </Link>
    )
  }
}

export default Cast
