import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import reducer from './reducers'

let store = createStore(reducer)

class App extends Component {
  render(){
    return (
      <div>
        <p>Hello!</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
