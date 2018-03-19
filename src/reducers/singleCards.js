import { CARD_IS_LOADING, CARD_HAS_LOADED, CARD_HAS_FAILED_LOADING } from '../actions/singleCards.js'

/**
 * Reducer function for cards
 */

function cards(state = {}, action) {
    
  let card
  switch (action.type) {
    case CARD_IS_LOADING:
      card = state[action.value.cardId] || {}
      card.loading = action.value.loading
      break
      
    case CARD_HAS_LOADED:
      card = state[action.value.cardId] || {}
      card.loading = false
      card.error = false
      card.details = action.value.card
      break
    case CARD_HAS_FAILED_LOADING:
      card = state[action.value.cardId] || {}
      card.error = action.value.error
      card.loading = false
      break
    default:
      return state
  }
  
  return Object.assign({}, state, { [action.value.cardId]: card })
} 

export default cards
 
