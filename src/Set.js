import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {GridList, GridTile} from 'material-ui/GridList';

class Sets extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
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

  render() {
    // show a loading message while loading data
    if (!this.state.loaded) {
      return (<span>Loading...</span>)
    }

    let cards = this.state.cards.map((card) => {
      return (
        <GridTile key={card.id} title={card.name}>
          <Link to={`/card/${card.id}` } style={{
              display: 'block',
              height: '100%',
              'background-size': 'cover',
              'background-image': `url(${card.card_faces ? card.card_faces[0].image_uris.art_crop : card.image_uris.art_crop})`}} />
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
