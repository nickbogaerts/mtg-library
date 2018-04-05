import React, { Component } from 'react'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import './App.css'
import AppBar from './containers/AppBar'
import Sets from './containers/Sets'
import Set from './containers/Set'
import Card from './containers/Card'
import store from './store'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <BrowserRouter>
            <div className="App">
              <header className="App-header">
                <AppBar />
              </header>
              <div>
                <Route exact path='/' component={Sets} />
                <Route path='/sets/:code' render={(props) => <Set {...props.match.params} />} />
                <Route path='/cards/:cardId' render={(props) => <Card {...props.match.params} />} />
              </div>
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App;
