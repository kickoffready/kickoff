class Index extends React.Component{
  constructor(props) {
    super(props);
    this.reload = () => {
      this.props.feedFetch();
    }
  }
  componentWillMount(){
    this.props.feedFetch();
  }
  displayName: 'Demo';
  render(){
    if(this.props.feed.fetched !== true) {
      return <span className="info"> Loading.. </span>

    }
    return <h1 className={'h1'}>R3 Star Wars</h1>
  }
}

export default Index
