import React, { Component } from 'react'

export default class AddPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textInput: ''
    }

    this.handleText = this.handleText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleText(e) {
    this.setState({
      textInput: e.target.value
    })
  }

  handleSubmit() {
    var post = { id: 3, content: this.state.textInput }
    this.props.addPost(post)
    this.setState({
      textInput: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Add a new post</h3>
        <input onChange={this.handleText} value={this.state.textInput}/> 
        <button onClick={this.handleSubmit}>Submit Post</button>
      </div>
    )
  }
}
