const blogs = [
  {
    id: "5a931ecac3327d2b418ef16d",
    title: "Can haz user?",
    author: "Mike Mike",
    url: "/api/blogs",
    user: {
      _id: "5a9308e80f8e571adf5683dd",
      username: "jose",
      name: "Jose",
      adult: true
    }
  },
  {
    id: "5a931eeb546dd32b4ff8e6fc",
    title: "Can haz user?",
    author: "Mike Mike",
    url: "/api/blogs",
    user: {
      _id: "5a9308e80f8e571adf5683dd",
      username: "jose",
      name: "Jose",
      adult: true
    }
  },
  {
    id: "5a931f0d546dd32b4ff8e6fd",
    title: "Now there is user!",
    author: "Jonezy",
    url: "/api/blogs",
    user: {
      _id: "5a9308e80f8e571adf5683dd",
      username: "jose",
      name: "Jose",
      adult: true
    }
  }
]

const getAll = () => {
  return Promise.resolve(blogs)
}

const create = (newBlog) => {
  return Promise.resolve('')
}

export default { getAll, create }