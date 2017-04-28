import Cast from './cast';
import Pagination from './pagination';

class Page extends React.Component{
  displayName: 'Page';
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.passParams();
  }

  componentDidUpdate() {
    this.passParams();
  }

  generateLink(id) {
    return 'people/?page=' + id;
  }

  passParams(){
    const pageApi = this.generateLink(this.props.match.params.pageLink);
    this.props.action(pageApi);
  }

  render(){
    const {fetched} = this.props.main;
    if(fetched === false) {
      return <h1> loading </h1>
    }
    const {results} = this.props.main.feed,
      castList = results.map((player,i) => {
        const name = player.name,
          link = name.replace(/\s+/g, '-').toLowerCase();
        return (
          <Cast name={name} link={link} key={i}/>
        )
      },this);

    return (
        <div>
          <h1 className={'h1'}>R3 Star Wars</h1>
          {castList}
        </div>
    )
  }
}

export default Page;