import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/userContext'
import { useNavigate } from "react-router-dom";
import {Button, TextField, Typography } from '@mui/material';


export default function LoginPage() {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    email:'',
    password:'',
  })

  const { userContextParentId, setParentId } = useContext(UserContext);
  const { isUserLoggedIn, setUserLoggedIn } = useContext(UserContext);

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser(prev => ({...user, [name]: value}))
  }

  const handleSubmit = () => {
    const { email, password } = user
    if (!email || !password) {
      alert('Empty values!')
      return
    }
    axios.post('http://localhost:5050/auth/login', user, {
      withCredentials: true,
    })
    .then((result) => { 
      // console.log('id:', result.data.user.id)
      const userId = result.data.user.id
      const userName = result.data.user.name
      setParentId(userId)
      setUserLoggedIn(true)
      // navigate("/menu")
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      <Typography
        variant='h2'
      >
        Please login to use application!
      </Typography>
      <form
        id="registration-form"
        noValidate 
        autoComplete="off"
      >
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
          Login!
        </Button>
      </form>
    </>
  )
}
