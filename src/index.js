import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import './style.scss'

import store from './store'
import App from './pages/App'
import Home from './pages/Home'
import Demo from './pages/Demo'

ReactDOM.render(
  <Provider store={store}>
    <Router history={syncHistoryWithStore(browserHistory, store)}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='demo' component={Demo} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
