import PropTypes from 'prop-types'
import React, { Component } from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import CircularProgress from 'material-ui/CircularProgress'

import CardDetails from './CardDetails'
import CardViewer from './CardViewer'
import Printings from './Printings'

/**
 * Fetches and displays properties of one card from Scryfall
 * Themeable through muiThemes
 * 
 * @class Card
 * @extends Component
 */
class Card extends Component {

  componentDidMount() {
    if (!this.props.sets.length) {
      this.props.fetchSets()
    }
    if (this.props.cardId && !this.props.singleCards[this.props.cardId]) {
      this.props.fetchCard(this.props.cardId)
    }
  }
  
  componentWillUpdate(nextProps) {
    if (nextProps.cardId && !nextProps.singleCards[nextProps.cardId]) {
      nextProps.fetchCard(nextProps.cardId)
    }
  }
  
  render() {
    // show a loading message while loading data
    let card = this.props.cardId ? this.props.singleCards[this.props.cardId] : null,
      palette = this.props.muiTheme.palette
    
    if (!card || card.loading) {
      return (<div className="loading-wheel"><CircularProgress size={80} thickness={5} /></div>)
    }
      
    return (
      <div className="card">
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
        <Printings selectedPrintingId={this.props.cardId} printings={card.printings} sets={this.props.sets} changeCardCount={this.props.changeCardCount} />
      </div>
    )
  }
}

Card.propTypes = {
  /**
   * Scryfall id of the card to display
   * 
   * @property cardId
   * @type string
   */
  cardId: PropTypes.string,
  
  /**
   * { id : details } map of cards available to display
   * 
   * @property singleCards
   * @type Object
   */
  singleCards: PropTypes.object,
  
  /**
   * Callback to retrieve uncached cards from the API
   * 
   * @property fetchCards
   * @type function
   */
  fetchCard: PropTypes.func.isRequired,
  
  /**
   * List ofsets
   * 
   * @property sets
   * @type array
   */
  
  /**
   * Callback to retrieve sets from the API
   * 
   * @property 
   */
  fetchSets: PropTypes.func.isRequired,
  
  /**
   * Action to update card count
   */
  changeCardCount: PropTypes.func.isRequired
}

Card.defaultProps = {
  sets: [],
  singleCards: {},
  fetchCards: () => {},
  fetchSets: () => {},
  changeCardCount: () => {}
}

export default muiThemeable()(Card)
