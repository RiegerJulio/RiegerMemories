import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllPosts } from '../redux/actions/postsActions';

import Post from './Post'
import Form from './Form'
import Loader from './Loader';

export default function Feed() {
  const posts = useSelector((state) => state.postsReducer);
  const dispatch = useDispatch();

  console.log(posts)

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <div className="row">
      <main className="col s6">
        {
          !posts ? <Loader /> : posts.map((post) => (
            <Post key={post.id} post={post} />
          ))
        }
      </main>
      <aside className="col s6">
        <Form />
      </aside>
    </div>
  )
}
