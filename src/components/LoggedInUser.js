import React from 'react'
const LoggedInUser = ({user, logout}) => (
    <div>
        <p>{user.name} logged in <button onClick={logout}>logout</button></p>
    </div>  
)

export default LoggedInUser

