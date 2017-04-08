class Cast extends React.Component{
  displayName: 'Cast';
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <span className="info" > {this.props.name} </span>
    )
  }
}

export default Cast
