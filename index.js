import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './modules/routes'
//var routes = require('./modules/routes'); // quick fixc

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
)
