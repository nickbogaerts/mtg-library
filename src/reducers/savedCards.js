import { CHANGE_CARD_COUNT } from '../actions/savedCards'

function savedCards(state = {}, { type, value } ) {
  if (type !== CHANGE_CARD_COUNT) {
    return state
  }
  
  let cardCount = state[value.cardId] || {}
  cardCount[ value.foil ? 'foil' : 'regular'] = value.count
  
  return Object.assign({}, state, { [value.cardId]: cardCount})
}

export default savedCards
