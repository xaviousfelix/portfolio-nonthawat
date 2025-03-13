import { get } from "http"


async function getBlogs() {
  const response = await fetch('https://67b497e8a9acbdb38ecf9de4.mockapi.io/blogs')
  
  if (!response.ok) {
    throw new Error('Failed to fetch blogs')
  }

  return response.json()
}
  export default async function Page() {
    const blogs = await getBlogs()

    return(
      <div>
        <h1>Blog</h1>
        <ul>
          {
            blogs.map((blog, index) => (
            <div key={index}>
              {blog.id} {blog.content} {blog.name} {blog.imageURl} {blog.description}
            </div>
          ))}
        </ul>
      </div>
    )
  }