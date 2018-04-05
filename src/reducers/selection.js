import { CARD_SELECTED, CARD_DESELECTED } from '../actions/selection'

function selection(state = {}, { type, value } ) {
  
  switch (type) {
    case CARD_SELECTED:
        return { card: value }
    case CARD_DESELECTED:
        return {}
    default:
      return state
  }
}

export default selection
