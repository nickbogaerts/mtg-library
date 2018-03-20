import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MuiThemeProvider><Card /></MuiThemeProvider>, div)
});



