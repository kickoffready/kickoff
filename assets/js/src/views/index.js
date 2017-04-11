import Page from './page';
import Feedback from './feedback';

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
    const initLink = this.props.feed.api.init;
    this.props.feedFetch(initLink);
  }

  render(){
    if(this.props.feed.fetched !== true && this.props.feed.fetchError !== true) {
      return <span className="info"> Loading.. </span>
    }
    if(this.props.feed.fetchError === true) {
      return (
        <Feedback action={this.reload}/>
      )
    }

    return (
      <Router>
        <div>
          <Route path="/page/:nextLink" render= {() =>(
           <Page feed={this.props.feed.feed}/>
          )} />
          <Route path="/cast" render= {() =>(
            <div>
              <h1 className={'h1'}>Star Wars Cast</h1>
            </div>
          )} />
          <Redirect from="/" to="/page/1"/>
        </div>
      </Router>
    )
  }
}

export default Index;
