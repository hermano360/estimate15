import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'


class App extends Component {
  render(){
    return (
      <div>
      <h1>JustMain</h1>
      <Main />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
