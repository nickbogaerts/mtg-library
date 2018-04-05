import { connect } from 'react-redux'

import { fetchCard } from '../actions/singleCards'
import { fetchSets } from '../actions/sets'
import { changeCardCount } from '../actions/savedCards'
import { selectCard, deselectCard } from '../actions/selection'
import Card from '../components/Card'

function mapDispatchToProps(dispatch) {
  return {
    fetchCard: (cardId) => dispatch(fetchCard(cardId)),
    fetchSets: (sets) => dispatch(fetchSets()),
    changeCardCount: (cardId, foil, count) => dispatch(changeCardCount(cardId, foil, count)),
    cardSelectHandler: (card) => dispatch(card ? selectCard(card) : deselectCard())
  }
}

function mapStateToProps({ singleCards, savedCards, sets }) {
  return { singleCards, savedCards, sets: sets.sets }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
