import React from 'react'

export default function Post({ post }) {
  return (
    <div className="col s12 m6">
      <div className="card large">
        <div className="card-image">
          <img src={post.file} alt="img" />
        </div>
        <div className="card-content">
          <span className="card-title">{post.title}</span>
          <p>{post.message}</p>
          <p>Localization: {post.location}</p>
          <p>By: {post.name}</p>
        </div>
        <div class="card-action">
          <button className="btn waves-effect waves-light col s6">Update Info</button>
          <button className="btn waves-effect waves-light col s6">Delete Post</button>
        </div>
      </div>
    </div>
  )
}
