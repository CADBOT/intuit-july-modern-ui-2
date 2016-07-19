import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import {incrementCount} from './actions'
import CountStore from './stores/countStore.js'

console.log(incrementCount)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    CountStore.addEventListener(this.onChange)
    this.setState({
      count: CountStore.getState()
    })
  }

  onChange() {
    this.setState({
      count: CountStore.getState()
    })
  }

  increment() {
    console.log('button pressed')
    incrementCount()
    /*
    this.setState({
      count: this.state.count + 1
    })
    */
  }

  render(){
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment Count</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
