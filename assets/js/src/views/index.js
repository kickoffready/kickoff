class Main extends React.Component{
  constructor(props) {
    super(props);
    this.add = () => {
      this.props.addImage('450x456');
    }
  }
  componentWillMount(){
    this.props.imagesFetch();
  }
  displayName: 'Demo';
  render(){
    return (
        <section className={'react-demo'}>
          <h1>here is my react redux demo</h1>
          <button onClick={this.add.bind(this)}>add</button>
        </section>
    );
  }
}

export default Main