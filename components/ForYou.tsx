import React from 'react'
import { posts } from '@/utilts/page'
import Post from './Post'

export default function ForYou() {
  return (
    <div className='mt-14'>
      {posts.map(post => <Post post={post} key={post.id} />)}
    </div>
  )
}
