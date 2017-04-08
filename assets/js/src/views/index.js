import Cast from './cast';

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
    let list,
      castList;
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
    console.log(Cast);
    list = this.props.feed.feed.results;
    castList = list.map((player,i) => {
      name = player.name
      return <Cast name={name}/>
    },this);
    return (
      <div>
        <h1 className={'h1'}>R3 Star Wars</h1>
        {castList}
      </div>
    )
  }
}

export default Index
