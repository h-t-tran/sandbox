import React from 'react'
import Post from './Post.jsx'

const PostList = ({ posts, foobarData }) => {
  console.log("*** PostList render() posts ", posts);
  return <div>
    <div>These are posts foobarData = {foobarData}</div>
    <ul>
      {posts.map(
        (post, i) =>
          <li key={i.toString()}>
            <Post {...post} />
          </li>
      )}
    </ul>
  </div>
}

export default PostList

