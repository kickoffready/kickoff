import React from 'react';
import { render } from 'react-dom';

const Root = () => <p> how you doing, joe4 </p>

render(<Root />, document.getElementById('app'));

if (module.hot)
  module.hot.accept()