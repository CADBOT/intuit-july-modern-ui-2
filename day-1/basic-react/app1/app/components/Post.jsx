import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.postData.title}</h2>
        <p>{this.props.postData.content}</p>
      </div>
    )
  }
}
