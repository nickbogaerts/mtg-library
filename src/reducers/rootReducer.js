import { combineReducers } from 'redux'
import sets from './sets'
import cards from './cards'
import savedCards from './savedCards'

const rootReducer = combineReducers({ sets, cards, savedCards })

export default rootReducer
