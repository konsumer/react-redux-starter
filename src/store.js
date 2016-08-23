import { createStore, combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { routerReducer as routing } from 'react-router-redux'

import { reducer as notification } from './api/notification'

const store = createStore(
  combineReducers({
    notification,
    form,
    routing
  }),
  typeof window !== 'undefined' && window.devToolsExtension && process.env.NODE_ENV === 'development' ? window.devToolsExtension() : undefined
)

export default store
