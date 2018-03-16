import { connect } from 'react-redux'

import { fetchSet } from '../actions/cards.js'
import { changeCardCount } from '../actions/savedCards.js'
import Set from '../Set.js'

function mapDispatchToProps(dispatch) {
  return {
    fetchSet: (code) => dispatch(fetchSet(code)),
    changeCardCount: (cardId, foil, count) => dispatch(changeCardCount(cardId, foil, count))
  }
}

function mapStateToProps({ cards, savedCards }) {
  return { cards, savedCards }
}

export default connect(mapStateToProps, mapDispatchToProps)(Set)
