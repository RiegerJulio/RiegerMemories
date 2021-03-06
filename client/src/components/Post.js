import React from 'react';

import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/actions/postsActions';

export default function Post({ post, setToEditPostId }) {

  const dispatch = useDispatch();

  return (
    <div className="col s12 m6">
      <div className="card large">
        <div className="card-image">
          <img src={post.file} alt="img" />
          <span className="card-title">{post.title}</span>
        </div>
        <div className="card-content">
          <p>{post.message}</p>
          <p>Localization: {post.location}</p>
          <p>By: {post.name}</p>
        </div>
        <div className="card-action">
          <button className="btn waves-effect waves-light col s6" onClick={() => setToEditPostId(post._id) }>Update Info</button>
          <button className="btn waves-effect waves-light col s6" onClick={() => dispatch(deletePost(post._id))}>Delete Post</button>
        </div>
      </div>
    </div>
  )
}
