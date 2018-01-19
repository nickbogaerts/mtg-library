import React from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import Symbols from './Symbols'

const CardDetails = (props) => {
  
  let face = props.face, 
    palette = props.muiTheme.palette
  
  return (
    <div>
        <h2 style={{ color: palette.textColor, fontSize: '1.5em', fontWeight: 400 }}>{face.name}<span className="mana-cost"><Symbols>{ face.mana_cost }</Symbols></span></h2>
          <p>{ face.type_line }</p>
          { face.oracle_text.split('\n').map( (text, i) => { return (<p key={i}><Symbols>{ text }</Symbols></p>) } ) }
          { 'power' in face && <p>{ face.power } / { face.toughness }</p> }
          { 'loyalty' in face && <p>{ face.loyalty }</p> }
    </div>
  )
}

export default muiThemeable()(CardDetails)
