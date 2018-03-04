import React from 'react'

const Login = ({
  login,
  handleFieldChange,
  password,
  username
}) => (
  <div>
  <h2>login</h2>
  <form onSubmit={login}>
    <div>
      <label>username:</label>
      <input type="text" name="username" value={username} onChange={handleFieldChange} />
    </div>

    <div>
      <label>password:</label>
      <input type="password" name="password" value={password} onChange={handleFieldChange} />
    </div>

    <div>
      <button>submit!</button>
    </div>
  </form>
</div>
)

export default Login