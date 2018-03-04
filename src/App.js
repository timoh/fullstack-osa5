import React from 'react'
import Blog from './components/Blog'
import Login from './components/Login'
import NewBlog from './components/NewBlog'
import blogService from './services/blogs'
import loginService from './services/login'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      user: null,
      username: '',
      password: '',
      title: '',
      author: '',
      url: ''
    }
  }

  getUserLSState() {
    const lsUser = window.localStorage.getItem('user')

    if (lsUser !== undefined && lsUser !== null) {
      const user = JSON.parse(lsUser)

      // console.log("User:", user)

      const username = user.username
      const name = user.name

      // console.log("Setting user state from LS: ", user, username, name)

      this.setState({
        user, username, name
      })
    }
    
  }

  componentDidMount() {
    this.getUserLSState()

    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )
  } 

  submitNewBlog = (event) => {

    console.log("Submitting new blog!")

    const title = this.state.title
    const author = this.state.author
    const url = this.state.url
    const token = this.state.user.token

    const payload = {
      title, author, url, token
    }

    blogService.create(payload).then(() =>
      {
        return blogService.getAll()
      }
    ).then(blogs => {
        console.log("Submit successful!")
        this.setState({ blogs })
        return blogs
      }
    ).catch(error => {
      console.log("Error: ", error.message)
    })
  }

  login = (event) => {
    event.preventDefault()
    loginService.login(this.state.username, this.state.password).then(loginResponse => {
      this.setState({ user: loginResponse })
      // console.log("User token: ", loginResponse.token)
      return loginResponse
    }).then(response => {
      const stringifiedUser = JSON.stringify(response)
      window.localStorage.setItem('user', stringifiedUser)
      console.log("Stored user to LS: ", stringifiedUser)
    }).catch(error => {
      console.log("Login failed with the following error: ", error.message)
    })
    
  }

  logout = async () => {
    console.log("Logged out!")
    await this.setState({ user: null })
    await console.log(this.state.user)
  }

  handleNewBlogFieldChange = (event) => {
    const newVal = event.target.value

    if (event.target.name === 'title') {
      this.setState({ title: newVal })
      // console.log("Changed title to: ", newVal )
    }

    if (event.target.name === 'author') {
      this.setState({ author: newVal })
      // console.log("Changed author to: ", newVal )
    }

    if (event.target.name === 'url') {
      this.setState({ url: newVal })
      // console.log("Changed url to: ", newVal )
    }
  }

  handleLoginFieldChange = (event) => {
    const newVal = event.target.value

    if (event.target.name === 'username') {
      this.setState({ username: newVal })
      // console.log("Changed username to: ", newVal )
    }

    if (event.target.name === 'password') {
      this.setState({ password: newVal })
      // console.log("Changed password to: ", newVal )
    }
    
  } 

  render() {
    if (this.state.user === null) {
      return (
        <div>
            <Login login={this.login} handleLoginFieldChange={this.handleLoginFieldChange} password={this.state.password} username={this.state.username}/>
        </div>
      )
    } else {
      return (
        <div>
          <p>{this.state.user.name} logged in <button onClick={this.logout}>logout</button></p>

          <NewBlog submitNewBlog={this.submitNewBlog} handleNewBlogFieldChange={this.handleNewBlogFieldChange} title={this.state.title} author={this.state.author} url={this.state.url} />
          
          <h2>blogs</h2>
          {this.state.blogs.map(blog => 
            <Blog key={blog.id} blog={blog}/>
          )}
        </div>
      )
    }
  }

}

export default App;
