import React from 'react'
import PropTypes from 'prop-types'
import muiThemeable from 'material-ui/styles/muiThemeable'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import { withRouter } from 'react-router-dom'
import Counter from './Counter'

import './Printings.css'

const Printings = ({printings, savedCards, selectedPrintingId, sets, history, changeCardCount}) => {
  
  let regularTotal = printings.reduce((total, printing) => total + (printing.id in savedCards ? (savedCards[printing.id].regular || 0) : 0), 0),
    foilTotal = printings.reduce((total, printing) => total + (printing.id in savedCards ? (savedCards[printing.id].foil || 0) : 0), 0),
    setsMap = {}
    
  sets.forEach(set => { setsMap[set.code] = set} ) 
  return (
    <Table className="printings">
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Printing</TableHeaderColumn>
          <TableHeaderColumn>Regular</TableHeaderColumn>
          <TableHeaderColumn>Foil</TableHeaderColumn>
          <TableHeaderColumn>Total</TableHeaderColumn>
        </TableRow>
        <TableRow>
          <TableHeaderColumn>Total</TableHeaderColumn>
          <TableHeaderColumn>{regularTotal}</TableHeaderColumn>
          <TableHeaderColumn>{foilTotal}</TableHeaderColumn>
          <TableHeaderColumn>{ regularTotal + foilTotal }</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          printings.map((printing) => {
            let regular = printing.id in savedCards ? (savedCards[printing.id].regular || 0) : 0,
              foil = printing.id in savedCards ? (savedCards[printing.id].foil || 0) : 0,
              set = setsMap[printing.set]
            
            return (
              <TableRow key={printing.id} striped={ printing.id === selectedPrintingId }>
                <TableRowColumn>{ set ? (<img width="48px" height="48px" src={set.icon_svg_uri} alt={printing.set_name} title={printing.set_name} />) : printing.set_name }</TableRowColumn>
                <TableRowColumn><Counter count={regular} buttonSize={18} onChangeCount={ (count) => { changeCardCount(printing.id, false, count) }} /></TableRowColumn>
                <TableRowColumn><Counter count={foil} buttonSize={18} onChangeCount={ (count) => { changeCardCount(printing.id, true, count) }} /></TableRowColumn>
                <TableRowColumn>{ regular + foil }</TableRowColumn>
              </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  )
}

Printings.propTypes = {
  /**
   * List of sets
   * @property sets
   * @type array
   * @default {}
   */
  sets: PropTypes.array.isRequired,

  /**
   * List of different printings of this card
   * @property printings
   * @type array
   * @default []
   */
  printings: PropTypes.array.isRequired,
  
  /**
   * ID of the currently selected printing
   * @property selectedPrintingId
   * @type string
   */
  selectedPrintingId: PropTypes.string,
  
  /**
   * { id: details } map of saved cards
   * @property savedCards
   * @type Object
   * @default {}
   */
  savedCards: PropTypes.object.isRequired,
  
  /**
   * Action to update card count
   */
  changeCardCount: PropTypes.func.isRequired
  
}

Printings.defaultProps = {
  printings: [],
  savedCards: {},
  sets: [],
  changeCardCount: () => {}
}

export default muiThemeable()(withRouter(Printings))
