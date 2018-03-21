import React from 'react'
import PropTypes from 'prop-types'
import muiThemeable from 'material-ui/styles/muiThemeable'
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import { withRouter } from 'react-router-dom'
import Counter from './Counter'

const Printings = ({printings, savedCards, selectedPrintingId, history}) => {
  
  let regularTotal = printings.reduce((total, printing) => total + (printing.id in savedCards ? savedCards[printing.id].regular : 0), 0),
    foilTotal = printings.reduce((total, printing) => total + (printing.id in savedCards ? savedCards[printing.id].foil : 0), 0)
    
    console.log(regularTotal, foilTotal);
  return (
    <Table onRowSelection={ (rowNumber) => {
        if (rowNumber.length) {
          history.push('/cards/' + printings[rowNumber[0]].id)
        }
      } }>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
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
      <TableBody displayRowCheckbox={false}>
        {
          printings.map((printing) => {
            let regular = printing.id in savedCards ? savedCards[printing.id].regular : 0,
              foil = printing.id in savedCards ? savedCards[printing.id].foil : 0
            return (
              <TableRow key={printing.id} selected={ printing.id === selectedPrintingId }>
                <TableRowColumn>{printing.set_name}</TableRowColumn>
                <TableRowColumn>{regular}</TableRowColumn>
                <TableRowColumn>{foil}</TableRowColumn>
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
  savedCards: PropTypes.object.isRequired
  
}

Printings.defaultProps = {
  printings: [],
  savedCards: {}
}

export default muiThemeable()(withRouter(Printings))
