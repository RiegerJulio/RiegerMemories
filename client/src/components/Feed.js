import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllPosts } from '../redux/actions/postsActions';

import Post from './Post'
import Form from './Form'

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
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </main>
      <aside>
        <Form />
      </aside>
    </div>
  )
}
