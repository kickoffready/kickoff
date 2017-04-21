import Nav from './nav';

class Pagination extends React.Component{
  displayName: 'Pagination';
  constructor(props) {
    super(props);
  }

  render(){
    const {next, prev} = this.props;
    return (
      <div>
        <Nav name={'Prev'} link={prev}/>
        <Nav name={'Next'} link={next}/>
      </div>
    )
  }
}

export default Pagination;