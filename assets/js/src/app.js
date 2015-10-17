var React = require('react'),
  Demo = React.createClass({
    render:function(){
          console.log('this');
      return(
        <section className='react-demo'>
          <h1> here is my react demo</h1>
          <h2> something new</h2>
        </section>
      )
    }
  });

React.render(
  <Demo/>,
  document.getElementById('app')
);
