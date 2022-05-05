import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllPosts } from '../redux/actions/postsActions';

import Post from './Post'
import Form from './Form'
import Loader from './Loader';

export default function Feed() {
  const posts = useSelector((state) => state.postsReducer);
  const dispatch = useDispatch();
  const [toEditPostId, setToEditPostId] = useState(0);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [toEditPostId, dispatch]);

  return (
    <div className="row">
      <main className="col s6">
        {
          !posts ? <Loader /> : posts.map((post) => (
            <Post key={post._id} post={post} setToEditPostId={setToEditPostId}/>
          ))
        }
      </main>
      <aside className="col s6">
        <Form toEditPostId={toEditPostId} setToEditPostId={setToEditPostId}/>
      </aside>
    </div>
  )
}
