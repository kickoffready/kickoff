class Index extends React.Component{
  displayName: 'Index';
  constructor(props) {
    super(props);
    this.reload = () => {
      this.props.feedFetch();
    }
  }
  componentWillMount(){
    this.props.feedFetch();
  }

  // TODO: move feedback to a module
  render(){
    if(this.props.feed.fetched !== true && this.props.feed.fetchError !== true) {
      return <span className="info"> Loading.. </span>
    }
    if(this.props.feed.fetchError === true) {
      return (
        <div className="feedback">
          <span className={"feedback__title"}>Something went wrong... would you like to try it again?</span>
          <button className={"feedback__button"} onclick={this.reload.bind(this)}>Try it now </button>
        </div>
      )
    }
    return <h1 className={'h1'}>R3 Star Wars</h1>
  }
}

export default Index
