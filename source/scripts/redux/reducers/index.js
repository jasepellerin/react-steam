import { combineReducers } from 'redux'
import query from './query'
import games from './games'

const reducers = combineReducers({
  query,
  games
})

export default reducers
