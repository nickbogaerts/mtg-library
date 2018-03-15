import { connect } from 'react-redux'

import { fetchSets } from '../actions/sets.js'
import Sets from '../Sets.js'

function mapDispatchToProps(dispatch) {
  return {
    fetchSets: () => dispatch(fetchSets())
  }
}

function mapStateToProps(state) {
  return state.sets
}

export default connect(mapStateToProps, mapDispatchToProps)(Sets)
