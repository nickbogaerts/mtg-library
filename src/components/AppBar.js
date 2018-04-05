import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import FlatButton from 'material-ui/FlatButton'
import { withRouter } from 'react-router-dom'
/**
 * Wrapper around the  AppBar controlling its various states
*/


export default withRouter((props) => {
  if (props.card) {
    return (<AppBar
        iconElementLeft={<IconButton><NavigationClose onClose={ props.onClose } /></IconButton>}
        iconElementRight={<FlatButton label="View" onClick={() => { props.history.push('/cards/' + props.card.id)  }} />}
        title={`${props.card.name} (${props.card.set})`}
        style={{ position: 'fixed'}}
        {...props} />)
  } else {
    return (<AppBar title="Card Library" style={{ position: 'fixed'}} {...props} />)
  }
})
