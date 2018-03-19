import { combineReducers } from 'redux'
import sets from './sets'
import cards from './cards'
import savedCards from './savedCards'
import singleCards from './singleCards'

const rootReducer = combineReducers({ sets, cards, savedCards, singleCards })

export default rootReducer
