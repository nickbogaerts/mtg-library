import { SETS_ARE_LOADING, SETS_HAVE_LOADED, SETS_HAVE_FAILED_LOADING } from '../actions/sets.js'

/**
 * Reducer function for sets
 */

const initialState = {
  loading: false,
  error: false,
  sets: []
}

function sets(state = initialState, action) {
  switch (action.type) {
    case SETS_ARE_LOADING:
      return Object.assign({}, state, { loading: action.value })
      
    case SETS_HAVE_LOADED:
      return  Object.assign({}, state, { sets: action.value })
      
    case SETS_HAVE_FAILED_LOADING:
      return Object.assign({}, state, { error: action.value })
      
    default:
      return state
  }
} 

export default sets
