import React, { useState } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import './teste.css'

import { createPost, updatePost } from '../redux/actions/postsActions'
import { useEffect } from 'react'

const INITIAL_STATE = {
  name: '',
  title: '',
  location: '',
  message: '',
  file: '',
}

export default function Form({ toEditPost, setToEditPost }) {
  const [post, setPost] = useState({
    name: '',
    title: '',
    location: '',
    message: '',
    file: '',
  })

  const dispatch = useDispatch()

  const singlePost = useSelector((state) => (toEditPost ? state.postsReducer.find((p) => p._id === toEditPost) : null));

  useEffect(() => {
    if (singlePost) setPost(singlePost);
  }, [singlePost]);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (toEditPost === 0) {
      dispatch(createPost(post))
    } else {
      dispatch(updatePost(toEditPost, post));
    }
    setPost(INITIAL_STATE)
  }

  return (
    <div>
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              placeholder="Name"
              id="name" type="text"
              className="validate"
              value={post.name}
              onChange={(e) => setPost({ ...post, name: e.target.value })}
            />
            <label htmlFor="name"></label>
          </div>
          <div className="input-field">
            <input
              placeholder="Title"
              id="title"
              type="text"
              className="validate"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <label htmlFor="title"></label>
          </div>
          <div className="input-field">
            <input
              placeholder="Location"
              id="location"
              type="text"
              className="validate"
              value={post.location}
              onChange={(e) => setPost({ ...post, location: e.target.value })}
            />
            <label htmlFor="location"></label>
          </div>
          <div className="input-field">
            <textarea
              placeholder="Message"
              id="textarea1"
              className="materialize-textarea"
              value={post.message}
              onChange={(e) => setPost({ ...post, message: e.target.value })}  
            />
            <label htmlFor="message"></label>
          </div>
          <div className="file-button">
            <label className="btn waves-effect waves-light col s12">
              Choose File
              <FileBase
                type="file"
                multiple={false}
                onDone={({base64}) => setPost({ ...post, file: base64 })}
              />              
            </label>
          </div>
          <button className="btn waves-effect waves-light col s12" type="submit" name="action">Submit</button>
      </form>
    </div>
  )
}
