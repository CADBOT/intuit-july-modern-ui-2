import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Post from './Post.jsx'

class AddPostWidget extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.addPost}>Add new post</button> 
      </div>
    )
  }
}

export default class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postData: [
        {id: 0, title: 'first post', content: 'lorem ip sum'},
        {id: 1, title: 'yet another post', content: 'a blank post'}
      ]
    }

    this.addPost = this.addPost.bind(this)
  }

  addPost() {
    this.setState({ postData: [...this.state.postData, post]})
  }

  render() {
    var posts = this.state.postData.map(data => <Post postData={data} />)
    return (
      <div>
        {posts}
        <AddPostWidget addPost={this.addPost} />
      </div>
    )
  }
}
