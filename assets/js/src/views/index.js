import Cast from './cast';
import Feedback from './feedback';
import React from 'react';
import { BrowserRouter as Router, link, Route} from 'react-router-dom';

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

  render(){
    let list,
      castList;
    if(this.props.feed.fetched !== true && this.props.feed.fetchError !== true) {
      return <span className="info"> Loading.. </span>
    }
    if(this.props.feed.fetchError === true) {
      return (
        <Feedback action={this.reload}/>
      )
    }

    list = this.props.feed.feed.results;
    castList = list.map((player,i) => {
      name = player.name
      return <Cast name={name}/>
    },this);

    return (
      <Router>
        <Route exact={true} path="/" render= {() =>(
          <div>
            <h1 className={'h1'}>R3 Star Wars</h1>
            {castList}
          </div>
        )} />
      </Router>
    )
  }
}

export default Index
