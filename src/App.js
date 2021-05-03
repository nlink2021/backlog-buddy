import { Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import env from 'react-dotenv'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Forum from './pages/Forum'

import './App.css';

function App() {
  const [user, setUser] = useState({})

  const fetchUser = () => {
    const userId = localStorage.getItem('userId')
    if (userId) {
      axios.get(`${env.BACKEND_URL}/users/verify`, {
        headers: {
          Authorization: userId
        }
      })
      .then((response) => {
        setUser(response.data.user)
      })
    }
  }

  useEffect(fetchUser, [])

  return (
    <div className="App">

      <h1>backlogbuddy_</h1>

      <NavBar /><br/><br/>

      <Route
        path="/"
        exact
        render={() => {
          return <Home />
        }}
      />

      <Route 
        path="/login"
        render={() => {
          return <Login />
        }}
      />

      <Route 
        path="/signup"
        render={() => {
          return <Signup />
        }}
      />

      <Route 
        path="/dashboard"
        render={() => {
          return <Dashboard />
        }}
      />

      <Route
        path="/forum"
        render={() => {
          return <Forum />
        }}
      />

    </div>
  );
}

export default App;