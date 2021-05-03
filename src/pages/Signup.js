import { useState } from 'react'
import axios from 'axios'
import env from 'react-dotenv'

const Signup = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        axios.post(`${env.BACKEND_URL}/users`, { email, password })
        .then((response) => {
            localStorage.setItem('userId', response.data.user.id)
            props.setUser(response.data.user)
        })
    }

    return (
        <div className="signupContainer">
            <h3>Signup</h3>

            <form className="signup-form" onSubmit={submitForm}>
                <label htmlFor="signName">Display Name</label>
                <input type="text" id="signName" /><br/>
                
                <label htmlFor="signEmail">Email</label>
                <input type="email" value={email} id="signEmail" onChange={(e) => setEmail(e.target.value)} /><br/>

                <label htmlFor="signPass">Password</label>
                <input type="password" value={password} id="signPass" onChange={(e) => setPassword(e.target.value)} /><br/>

                <button type="submit" className="signButton">Register</button>
            </form>

        </div>
    )
}

export default Signup