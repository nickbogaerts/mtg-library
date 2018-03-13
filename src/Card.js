import PropTypes from 'prop-types'
import React, { Component } from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'

import CardDetails from './CardDetails'
import CardViewer from './CardViewer'

/**
 * Fetches and displays properties of one card from Scryfall
 * Themeable through muiThemes
 * 
 * @class Card
 * @extends Component
 */
class Card extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      loaded: false,
      card: null
    }
    
    fetch((props.uri || 'https://api.scryfall.com/cards/') + props.id)
      .then(response => response.json())
      .then(response => {
        this.setState({
          loaded: true,
          card: response
        })
      })
  }
  
  render() {
    // show a loading message while loading data
    if (!this.state.loaded) {
      return (<span>Loading...</span>)
    }

    let card = this.state.card,
      palette = this.props.muiTheme.palette
      
    return (
      <div>
        <CardViewer card={card} />

        <div className="card-details" style={{ backgroundColor: palette.canvasColor }}>
          { 'card_faces' in card ? (
            <div>
              <CardDetails face={card.card_faces[0]} />
              <CardDetails face={card.card_faces[1]} />
            </div>
          ) : (
            <CardDetails face={card} />
          )}
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  /**
   * Scryfall id of the card to display
   * 
   * @property id
   * @type string
   */
  id: PropTypes.string
}

export default muiThemeable()(Card)
