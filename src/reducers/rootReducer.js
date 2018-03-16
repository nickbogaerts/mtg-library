import { combineReducers } from 'redux'
import sets from './sets'
import cards from './cards'

const rootReducer = combineReducers({
  sets,
  cards
})

export default rootReducer
