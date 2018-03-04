import axios from 'axios'
const baseUrl = '/api/login'

const login = (username, password) => {

  const payload = {
    username, password
  }

  // console.log("Logging in with: ", payload)

  const request = axios.post(baseUrl, payload)
  return request.then(response => response.data)
}

export default { login }