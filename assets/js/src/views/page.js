import Cast from './cast';
import React from 'react';

class Page extends React.Component {
  displayName: 'Page';
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.passParams();
  }

  componentDidUpdate() {
    this.passParams();
  }

  generateLink(id) {
    return 'people/?page=' + id;
  }

  passParams() {
    const pageApi = this.generateLink(this.props.match.params.pageLink);
    this.props.action(pageApi);
  }

  render() {
    const {fetched} = this.props.main;
    let results,
      castList;
    if(fetched === false) {
      return <h1> loading </h1>;
    }

    results = this.props.main.feed.results,
    castList = results.map((player,i) => {
      const name = player.name,
        link = name.replace(/\s+/g, '-').toLowerCase();
      return (
        <Cast key={i}
            link={link}
            name={name}
        />
      );
    },this);

    return (
        <div>
          <h1 className={'h1'}>R3 Star Wars</h1>
          {castList}
        </div>
    );
  }
}

export default Page;
