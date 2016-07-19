import React from 'react'

var styles = {
  PostList: {
    display: 'flexbox',
    flexDirection: 'row'
  },
  Post: {
    border: 'solid',
    height: 50,
    width: 200
  }
}

let Post = ({id, content}) => (
  <div style={styles.Post}>
    {id}: {content}
  </div>
)

let PostList = ({postData}) => (
  <div style={styles.PostList}>
    {postData.map(data => <Post key={data.id} {...data} />)}
  </div>
)

export default PostList
