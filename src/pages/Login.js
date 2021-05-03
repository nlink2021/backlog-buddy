import { useState } from 'react'
import axios from 'axios'
import env from 'react-dotenv'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        axios.post(`${env.BACKEND_URL}/users/login`, { email, password })
        .then((response) => {
            localStorage.setItem('userId', response.data.user.id)
            props.setUser(response.data.user)
        })
    }

    return (
        <div className="loginContainer">
            <h3>Login</h3>

            <form className="login-form" onSubmit={submitForm} >
                <label htmlFor="logEmail">Email</label>
                <input type="email" value={email} id="logEmail" onChange={(e) => setEmail(e.target.value)} /><br/>

                <label htmlFor="logPass">Password</label>
                <input type="password" value={password} id="logPass" onChange={(e) => setPassword(e.target.value)} /><br/>

                <button type="submit" className="loginButton">Log In</button>
            </form>

            <p>New to Backlog Buddy? Sign up!</p>
            <button className="signReference">Sign up</button>
        </div>

    )
}

export default Login