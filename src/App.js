import React, { Component } from 'react'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './App.css'
import Sets from './containers/Sets'
import Set from './containers/Set'
import Card from './containers/Card'
import store from './store'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div className="App">
            <header className="App-header">
              <AppBar title="Card Library" />
            </header>
            <BrowserRouter>
              <div>
                <Route exact path='/' component={Sets} />
                <Route path='/sets/:code' render={(props) => <Set {...props.match.params} />} />
                <Route path='/cards/:cardId' render={(props) => <Card {...props.match.params} />} />
                </div>
            </BrowserRouter>
          </div>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App;
