'use client'
import { use } from 'react'
 
export default function Posts({ posts }) {
  const posts = use(posts)
 
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}