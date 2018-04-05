import { connect } from 'react-redux'
import AppBar from '../components/AppBar'
import { deselectCard } from '../actions/selection'

function mapDispatchToProps(dispatch) {
  return {
    onClose: () => dispatch(deselectCard),
  }
}

function mapStateToProps({ selection }) {
  return {card: selection.card }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar)
