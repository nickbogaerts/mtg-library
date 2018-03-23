import React, { Component } from 'react'
import PropTypes from 'prop-types'
import muiThemeable from 'material-ui/styles/muiThemeable'
import {fade} from 'material-ui/utils/colorManipulator'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'

import './Counter.css'

/**
 * Number counterwith increment and decrement buttons
 * 
 * @class Counter
 * @extends Component
 */
class Counter extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = { count: parseInt(props.count, 10) }
  }
  
  render() {

    let palette = this.props.muiTheme.palette

    return (
      <div className="counter">
        <span className="counter-count">{this.state.count}</span>
        
        <IconButton
          style={{padding:0, width: this.props.buttonSize, height: this.props.buttonSize}}
          iconStyle={{fontSize: this.props.buttonSize}}>
          <FontIcon
            className="material-icons"
            color={palette.primary1Color}
            hoverColor={fade(palette.primary1Color, 0.4)}
            onClick={this.incrementCount.bind(this)}>add_circle</FontIcon>
        </IconButton>
        <IconButton
          style={{padding:0, width: this.props.buttonSize, height: this.props.buttonSize}}
          iconStyle={{fontSize: this.props.buttonSize}}
          disabled={!this.state.count}>
          <FontIcon
            className="material-icons"
            color={palette.primary1Color}
            hoverColor={fade(palette.primary1Color, 0.4)}
            onClick={this.decrementCount.bind(this)}>remove_circle</FontIcon>
        </IconButton>
      </div>
    )
  }
  
  incrementCount(e) {
    e.stopPropagation()
    let count = this.state.count + 1
    this.setState({ count: count })
    this.props.onChangeCount(count)
  }
  
  decrementCount(e) {
    e.stopPropagation()
    if (this.state.count > 0) {
    let count = this.state.count - 1
        this.setState({ count: count })
        this.props.onChangeCount(count)
      }
  }
}

Counter.propTypes = {
    /**
     * Current count
     * 
     * @property count
     * @type number
     * @default 0
     */
    count: PropTypes.number.isRequired,
    
    /**
     * Size of the +/- buttons
     * 
     * @property buttonSize
     * @type string
     * @default 28
     */
    buttonSize: PropTypes.number.isRequired,
    
    /**
     * Count change event
     * 
     * @property onChangeCount
     * @type  function
     */
    onChangeCount: PropTypes.func.isRequired
  }
  
Counter.defaultProps = {
    count: 0,
    buttonSize: 28,
    onChangeCount: () => {}
  }
export default muiThemeable()(Counter)
