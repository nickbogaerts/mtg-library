import React, { Component } from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import {fade} from 'material-ui/utils/colorManipulator'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'

class Counter extends Component {

  static defaultProps = {
    count: 0,
	onChangeCount: function() {}
  }
  
  constructor(props) {
    super(props)
    
    this.state = { count: parseInt(props.count, 10) }
  }
  
  render() {

	  let palette = this.props.muiTheme.palette
    return (
      <div>
        <span style={{fontSize: '24px'}}>{this.state.count}</span>
        <IconButton
            style={{padding: '0', width: '28px', height: '28px'}}>
          <FontIcon
            className="material-icons"
            color={palette.alternateTextColor}
            hoverColor={fade(palette.alternateTextColor, 0.4)}
            onClick={this.incrementCount.bind(this)}>add_circle</FontIcon>
        </IconButton>
        <IconButton
            style={{padding: '0', width: '28px', height: '28px'}}
            disabled={!this.state.count}>
          <FontIcon
            style={{fontSize: '16px', padding: '0px'}}
            className="material-icons"
            color={palette.alternateTextColor}
            hoverColor={fade(palette.alternateTextColor, 0.4)}
            onClick={this.decrementCount.bind(this)}>remove_circle</FontIcon>
        </IconButton>
      </div>
    )
  }
  
  incrementCount() {
    this.setState({ count: this.state.count + 1 })
	this.props.onChangeCount(this.state.count)
  }
  
  decrementCount() {
	  if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 })
        this.props.onChangeCount(this.state.count)
      }
  }
}

export default muiThemeable()(Counter)
