import Page from './page';
import Feedback from './feedback';
import Pagination from './pagination';

import React from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

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
    const initLink = this.props.feed.apiTarget;
    this.props.feedFetch(initLink);
  }

  render(){
    const {fetched, fetchError, fetching} = this.props.feed;
    let next,
      previous;

    if(fetching === true) {
      return <span className="info"> Loading.. </span>
    }

    if(fetchError === true) {
      return (
        <Feedback action={this.reload}/>
      )
    }

    if(fetched === true) {
      next = this.props.feed.feed.next;
      previous = this.props.feed.feed.previous;
    }

    const PageBundle = (props) => {
      const bundle = {...props, main:this.props};
      return (
        <Page {...bundle}/>
      );
    }



    return (
      <Router>
        <div>
          <Redirect from="/" to="/page/1"/>
          <Route path="/page/:nextLink" render={PageBundle} />
          <Route path="/cast" render= {() =>(
            <div>
              <h1 className={'h1'}>Star Wars Cast</h1>
            </div>
          )} />
          <Route path="/" render= {() =>(
            <Pagination next={next} prev={previous}/>
          )} />
        </div>
      </Router>
    )
  }
}

export default Index;
