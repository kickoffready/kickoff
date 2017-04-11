import Cast from './cast';
import Pagination from './pagination';

class Page extends React.Component{
  displayName: 'Page';
  constructor(props) {
    super(props);
  }

  render(){
    const {results, next} = this.props.feed,
      castList = results.map((player,i) => {
        const name = player.name,
          link = name.replace(/\s+/g, '-').toLowerCase();
        return (
          <Cast name={name} link={link}/>
        )
      },this);

    return (
        <div>
          <h1 className={'h1'}>R3 Star Wars</h1>
          {castList}
          <Pagination link={next} />
        </div>
    )
  }
}

export default Page;