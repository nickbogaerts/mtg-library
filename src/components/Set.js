import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import CircularProgress from 'material-ui/CircularProgress'
import { GridList, GridTile } from 'material-ui/GridList'
import Counter from './Counter'

class Sets extends Component {

  componentDidMount() {
    if (!this.props.cards[this.props.code]) {
      this.props.fetchSet(this.props.code)
    }
  }

  handleChangeCardCount (cardId, count) {
    this.props.changeCardCount(cardId, false, count)
  }
  
  render() {
    let set = this.props.cards[this.props.code]
    
    // show a loading message while loading data
    if (!set || set.loading) {
      return (<div className="loading-wheel"><CircularProgress size={80} thickness={5} /></div>)
    }
    

    let cards = set.cards || []
    let grid = cards.map((card) => {
      return (
        <GridTile key={card.id} title={card.name} subtitle={<Counter count={ this.props.savedCards[card.id] ? this.props.savedCards[card.id].regular : 0} onChangeCount={this.handleChangeCardCount.bind(this, card.id)} />}>
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
        {grid}
      </GridList>
    )
  }   
}

export default Sets
