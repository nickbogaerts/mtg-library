import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import { GridList, GridTile } from 'material-ui/GridList'
import Counter from './Counter'
import store from './store'

class Sets extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      code: props.code,
      loaded: false
    }
    
    fetch((props.uri || 'https://api.scryfall.com/cards/search?order=set&q=s:') + (props.code || 'LEA'))
      .then(response => response.json())
      .then(response => {
        this.setState({
          loaded: true,
          cards: response.data
        })
      })
  }

  handleChangeCardCount (cardId, count) {
    //let cardCount = store[cardId] || { regular: 0, foil: 0}
    //++cardCount.regular
    //store[cardId] = cardCount
  }
  
  render() {
    // show a loading message while loading data
    if (!this.state.loaded) {
      return (<span>Loading...</span>)
    }

    let cards = this.state.cards.map((card) => {
      return (
        <GridTile key={card.id} title={card.name} subtitle={<Counter count={/*store[card.id] ? store[card.id].regular :*/ 0} onChangeCount={this.handleChangeCardCount.bind(this, card.id)} />}>
          <LazyLoad>
            <Link
              to={`/cards/${card.id}` }
              style={{
                display: 'block',
                height: '100%',
                backgroundSize: 'cover',
                backgroundImage: `url(${'card_faces' in card && 'image_uris' in card.card_faces[0] ? card.card_faces[0].image_uris.art_crop : card.image_uris.art_crop})`}} />
          </LazyLoad>
        </GridTile>
      )
    })

    // render the set
    return (
      <GridList>
        {cards}
      </GridList>
    )
  }   
}

export default Sets
