import { SET_IS_LOADING, SET_HAS_LOADED, SET_HAS_FAILED_LOADING } from '../actions/cards.js'

/**
 * Reducer function for cards
 */

function cards(state = {}, action) {
    
  let currentSet
  switch (action.type) {
    case SET_IS_LOADING:
      currentSet = state[action.value.code] || {}
      currentSet.loading = action.value.loading
      break
      
    case SET_HAS_LOADED:
      currentSet = state[action.value.code] || {}
      currentSet.cards = action.value.cards
      break
    case SET_HAS_FAILED_LOADING:
      currentSet = state[action.value.code] || {}
      currentSet.error = action.value.error
      break
    default:
      return state
  }
  
  state[action.value.code] = currentSet
  return Object.assign({}, state, { [action.value.code] : currentSet })
} 

export default cards
 
