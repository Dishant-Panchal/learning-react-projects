import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName});
    }

  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='User Name' value={userName} onChange={(e)=>setUserName(e.target.value)} /> <br /><br />
        <input type="text" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/> <br /><br />
        <input type="button" onClick={handleSubmit} value="Login"/>
    </div>
  )
}

export default Login
