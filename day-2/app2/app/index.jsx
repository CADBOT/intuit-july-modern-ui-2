import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import PostList from './components/PostList.jsx'
import AddPost from './components/AddPost.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postData: [
        {id: 0, content: 'lorem ip sum'}, 
        {id: 1, content: 'some content'} 
      ]
    }
    this.addPost = this.addPost.bind(this)
  }

  addPost(post) {
    this.setState({
      postData: [...this.state.postData, post]
    })
  }

  render(){
    return (
      <div>
        <PostList {...this.state} />
        <AddPost addPost={this.addPost}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
