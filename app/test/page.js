'use client'

import { useEffect, useState } from 'react'

async function getBlogs() {
  const response = await fetch('https://67b497e8a9acbdb38ecf9de4.mockapi.io/blogs')
  
  if (!response.ok) {
    throw new Error('Failed to fetch blogs')
  }

  return response.json()
}
  export default function Page() {
    

    const [blogState, setBlogState] = useState([]) //UseEffect ไม่ Support การใช้ Async Await
    // Async Await ใช้แค่กับ Server component จะไม่ใช้ กับ Client component

    // สร้างตัวแปรใหม่
    const initBlog = async () => {
        try {
            const result = await getBlogs()
            setBlogState(result)
        } catch (error) {
            console.error(error)
        }
    }
     
    useEffect(() => {
      initBlog()
    //   console.log('useEffect');
      
    }, [])


    // console.log(blogState);
    
    return(
      <div>
        <h1>Blog</h1>
        <ul>
          {
            blogState.map((blog, index) => (
            <div key={index}>
              {blog.id} {blog.content} {blog.name} {blog.imageURl} {blog.description}
            </div>
          ))}
        </ul>
      </div>
    )
  }