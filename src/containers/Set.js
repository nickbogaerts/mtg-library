import { connect } from 'react-redux'

import { fetchSet } from '../actions/cards.js'
import Set from '../Set.js'

function mapDispatchToProps(dispatch) {
  return {
    fetchSet: (code) => dispatch(fetchSet(code))
  }
}

function mapStateToProps(state) {
  return { cards: state.cards }
}

export default connect(mapStateToProps, mapDispatchToProps)(Set)
