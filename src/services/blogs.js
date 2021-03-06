import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (newBlog) => {
  console.log("New blog: ", newBlog)
  const request = axios.post(baseUrl, newBlog)
  return request.then(response => response.data)
}

export default { getAll, create}