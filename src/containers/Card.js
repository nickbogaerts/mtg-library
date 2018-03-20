import { connect } from 'react-redux'

import { fetchCard } from '../actions/singleCards.js'
import { changeCardCount } from '../actions/savedCards.js'
import Card from '../components/Card.js'

function mapDispatchToProps(dispatch) {
  return {
    fetchCard: (cardId) => dispatch(fetchCard(cardId)),
    changeCardCount: (cardId, foil, count) => dispatch(changeCardCount(cardId, foil, count))
  }
}

function mapStateToProps({ singleCards, savedCards }) {
  return { singleCards, savedCards }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
