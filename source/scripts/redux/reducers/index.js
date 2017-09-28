import { combineReducers } from 'redux'
import games from './games'
import query from './query'

const reducers = combineReducers({
  games,
  query
})

export default reducers
