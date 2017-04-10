import Cast from './cast';
import Feedback from './feedback';
import Pagination from './pagination';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';

class Index extends React.Component{
  displayName: 'Index';
  constructor(props) {
    super(props);
    this.reload = () => {
      this.initFeed();
    }
  }

  componentWillMount(){
    this.initFeed();
  }

  initFeed(){
    const initLink = this.props.feed.api.init;
    this.props.feedFetch(initLink);
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
      const name = player.name,
        link = name.replace(/\s+/g, '-').toLowerCase();
      return (
        <Cast name={name} link={link}/>
      )
    },this);

    return (
      <Router>
        <div>
          <Route path="/page" render= {() =>(
            <div>
              <h1 className={'h1'}>R3 Star Wars</h1>
              {castList}
              <Pagination link={this.props.feed.feed.next} action={this.fetch} />
            </div>

          )} />
          <Route path="/cast" render= {() =>(
            <div>
              <h1 className={'h1'}>Star Wars Cast</h1>
            </div>
          )} />
          <Redirect from="/" to="/page"/>
        </div>
      </Router>
    )
  }
}

export default Index;
