import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Sets from './Sets'
import Set from './Set'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Sets} />
            <Route path='/sets/:code' render={(props) => <Set {...props.match.params} />} />
            </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
