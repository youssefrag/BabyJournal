import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {Button, TextField } from '@mui/material';

export default function RegistrationPage() {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser(prev => ({...user, [name]: value}))
    // console.log(user)
  }

  const handleSubmit = () => {
    const { name, email, password } = user
    if (!name || !email || !password) {
       console.log('Empty values!')
       return
    }
    axios.post('http://localhost:5050/auth/register', user, {
       withCredentials: true,
    })
    .then((result) => { 
       navigate('/login')
    })
    .catch((error) => {
       console.log(error)
    })
  }

  return(
    <>
      <h1>
        Registration Page!
      </h1>
      <form
        id="registration-form"
        noValidate 
        autoComplete="off"
      >
        <TextField
          type="text"
          label="Name"
          name='name'
          color="secondary"
          required
          value={user.name}
          onChange={handleChange}
          style={{ 
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 20,
            display: 'block',
          }}
        />
        <TextField
          type="text"
          label="Email"
          name='email'
          color="secondary"
          required
          value={user.email}
          onChange={handleChange}
          style={{ 
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 20,
            display: 'block',
          }}
        />
        <TextField
          type="password"
          label="Password"
          name='password'
          color="secondary"
          required
          value={user.password}
          onChange={handleChange}
          style={{ 
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 20,
            display: 'block',
          }}
        />
        <Button
          variant='contained' 
          size='large'
          onClick={handleSubmit}
          style={{ 
            marginLeft: 20,
          }}
        >
          Register!
        </Button>
      </form>
    </>
  )
}
