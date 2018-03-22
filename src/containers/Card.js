import { connect } from 'react-redux'

import { fetchCard } from '../actions/singleCards.js'
import { fetchSets } from '../actions/sets.js'
import { changeCardCount } from '../actions/savedCards.js'
import Card from '../components/Card.js'

function mapDispatchToProps(dispatch) {
  return {
    fetchCard: (cardId) => dispatch(fetchCard(cardId)),
    fetchSets: (sets) => dispatch(fetchSets()),
    changeCardCount: (cardId, foil, count) => dispatch(changeCardCount(cardId, foil, count))
  }
}

function mapStateToProps({ singleCards, savedCards, sets }) {
  return { singleCards, savedCards, sets: sets.sets }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
