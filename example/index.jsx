import React, { Component, PropTypes, Children, createElement } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'

class App extends Component {
  render() {
    return (
      <div></div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
