/*
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

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
*/
var initialState = {
  count: 0
}
function reducer(state=initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        count: state.count + 1
      })
    default:
      return state
  }
}

import {createStore} from 'redux'
let store = createStore(reducer)

store.subscribe(() => {
  console.log('state changed!')
  console.log(store.getState())
})
