import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import NavBar from './components/NavBar.jsx'
import PostList from './components/PostList.jsx'


class App extends Component {
  render(){
    return (
      <div>
        <NavBar/>
        <PostList/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
