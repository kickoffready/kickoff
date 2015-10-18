var React = require('react');
var Demo = React.createClass({
  displayName: 'Demo',
  render: function(){
    return (
      <section className={'react-demo'}>
        <h1> {'here is my react demo'}</h1>
        <h2> {'something new'}</h2>
      </section>
    );
  }
});

React.render(
  <Demo/>,
  document.getElementById('app')
);
