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

  componentDidMount() {
    if (!this.props.singleCards[this.props.cardId]) {
      this.props.fetchCard(this.props.cardId)
    }
  }
  
  render() {
    // show a loading message while loading data
    let card = this.props.singleCards[this.props.cardId],
      palette = this.props.muiTheme.palette
    
    if (!card || card.loading) {
      return (<span>Loading...</span>)
    }
      
    return (
      <div>
        <CardViewer card={card.details} />

        <div className="card-details" style={{ backgroundColor: palette.canvasColor }}>
          { 'card_faces' in card ? (
            <div>
              <CardDetails face={card.details.card_faces[0]} />
              <CardDetails face={card.details.card_faces[1]} />
            </div>
          ) : (
            <CardDetails face={card.details} />
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
   * @property cardid
   * @type string
   */
  cardId: PropTypes.string
}

export default muiThemeable()(Card)
