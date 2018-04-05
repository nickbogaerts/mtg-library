import { combineReducers } from 'redux'
import sets from './sets'
import cards from './cards'
import savedCards from './savedCards'
import selection from './selection'
import singleCards from './singleCards'

const rootReducer = combineReducers({ sets, cards, savedCards, singleCards, selection })

export default rootReducer
