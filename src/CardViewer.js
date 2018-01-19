import React, {Component} from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'

import './CardViewer.css'

class CardViewer extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      transformed: false
    }
  }
  
  flipHandler() {
    this.setState({ flipped: !this.state.flipped })
  }
  
  render() {
    let card = this.props.card,
      palette = this.props.muiTheme.palette
    
    return (
      <div className={"card-viewer card-viewer-" + card.layout + (this.state.flipped ? ' card-viewer-flipped' : '')}  onClick={this.flipHandler.bind(this)}>
        { 'card_faces' in card && 'image_uris' in card.card_faces[0] ?
            <div className="card-viewer-wrapper">
              <img className="card-viewer-card card-viewer-card-front" src={card.card_faces[0].image_uris.normal} alt={card.card_faces[0].title} />
              <img className="card-viewer-card card-viewer-card-back" src={card.card_faces[1].image_uris.normal} alt={card.card_faces[1].title} />
            </div>
          :
            <div className="card-viewer-wrapper">
              <img className="card-viewer-card" src={card.image_uris.normal} alt={card.title} />
            </div>
        }
        <p><span role="img" aria-label="artist">🖌️</span> { card.artist }</p>
      </div>
    )
  }
}

export default muiThemeable()(CardViewer)
