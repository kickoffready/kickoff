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
      return <span> Loading.. </span>
    }
    return (
        <section className={'react-demo'}>
          <h1>R3 Star Wars</h1>
        </section>
    );
  }
}

export default Index
