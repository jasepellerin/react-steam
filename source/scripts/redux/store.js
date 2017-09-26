import { createStore } from 'redux'
import query from './reducers/query.js'

export default createStore(query,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
