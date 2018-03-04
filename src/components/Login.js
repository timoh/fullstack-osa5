import React from 'react'

const Login = ({
  login,
  handleLoginFieldChange,
  password,
  username,
  beginLoginButtonStyle,
  cancelLoginButtonStyle,
  showLoginForm,
  hideLoginForm,
  showLogin
}) => (
  <div>
    <div style={{display: showLogin ? 'block' : 'none' }}>
    <h2>login</h2>
    <form onSubmit={login}>
      <div>
        <label>username:</label>
        <input type="text" name="username" value={username} onChange={handleLoginFieldChange} />
      </div>

      <div>
        <label>password:</label>
        <input type="password" name="password" value={password} onChange={handleLoginFieldChange} />
      </div>

      <div>
        <button>login</button>
      </div>
    </form>
  </div>
  <button onClick={showLoginForm} style={{display: showLogin ? 'none' : 'block' }}>begin login</button>
  <button onClick={hideLoginForm} style={{display: showLogin ? 'block' : 'none' }}>cancel</button> 
</div>
)

export default Login