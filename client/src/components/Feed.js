import React from 'react'
import Post from './Post'
import Form from './Form'

export default function Feed() {
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
