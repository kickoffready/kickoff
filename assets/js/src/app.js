import React from 'react';
const Demo = React.createClass({
  displayName: 'Demo',
  render(){
    return (
      <section className={'react-demo'}>
        <h1>here is my react demo</h1>
        <h2>something new</h2>
      </section>
    );
  }
});

React.render(
  <Demo/>,
  document.getElementById('app')
);
