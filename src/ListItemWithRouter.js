import React from 'react'
import { withRouter } from 'react-router-dom'
import { ListItem } from 'material-ui/List'

export default withRouter(({ staticContext, ...props }) => {
  return <ListItem {...props} />
})
