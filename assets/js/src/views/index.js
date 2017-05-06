import Page from './page';
import Feedback from './feedback';
import Pagination from './pagination';

import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class Index extends React.Component {
  displayName: 'Index';
  constructor(props) {
    super(props);
    this.reload = () => {
      this.loadFeed();
    };

    this.state = {
      search : ''
    };

    this.routeMatch = this.routeMatch.bind(this);
  }

  routeMatch(params) {
    this.loadFeed(params);
  }

  loadFeed(params) {
    if(typeof params === 'undefined') {
      params = this.props.feed.apiTarget;
    }
    if (params.localeCompare(this.props.feed.apiFetched) !== 0) {
      this.props.feedFetch(params);
    }
  }

  render() {
    const {fetched, fetchError, fetching} = this.props.feed;
    let next,
      PageBundle,
      previous;

    if(fetching === true) {
      return <span className="info"> Loading.. </span>;
    }

    if(fetchError === true) {
      return (
        <Feedback action={this.reload}/>
      );
    }

    if(fetched === true) {
      next = this.props.feed.feed.next;
      previous = this.props.feed.feed.previous;
    }

    PageBundle = (props) => {
      const bundle = {...props, main:this.props.feed};
      return (
        <Page {...bundle}
            action={this.routeMatch}
        />
      );
    };

    return (
      <Router>
        <div>
          <Route exact
              path="/"
              render={() => (
                <Redirect to="/page/1"/>
              )}
          />
          <Route path="/page/:pageLink"
              render={PageBundle}
          />
          <Route path="/cast"
              render= {() =>(
                <div>
                  <h1 className={'h1'}>Star Wars Cast</h1>
                </div>
              )}
          />
          <Route path="/page"
              render= {() =>(
                <Pagination next={next}
                    prev={previous}
                />
              )}
          />
        </div>
      </Router>
    );
  }
}

export default Index;
