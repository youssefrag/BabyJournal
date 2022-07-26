import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/userContext'
import { useNavigate } from "react-router-dom";
import {Button, TextField, Typography } from '@mui/material';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  form: {
    border: '1px solid',
    marginLeft: '20px',
    marginRight: '20px',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '20px',
  },
  title: {
    textAlign: 'center',
    paddingBottom: '40px'
  },
  field: {
    width: '400px',
  }
})


export default function LoginPage() {

  const classes = useStyles()

  let navigate = useNavigate();

  const [user, setUser] = useState({
    email:'',
    password:'',
  })

  const {userContextUserName, setUserName, userContextParentId, setParentId } = useContext(UserContext);
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
      const userId = result.data.user.id
      const userName = result.data.user.name
      setParentId(userId)
      setUserName(userName)
      setUserLoggedIn(true)
      navigate('/user')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className={classes.form}>
      <Typography
        variant='h3'
        className={classes.title}
      >
        Please login to use application
      </Typography>
      <form
        id="registration-form"
        noValidate 
        autoComplete="off"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <TextField
          type="text"
          label="Email"
          name='email'
          color="secondary"
          required
          value={user.email}
          onChange={handleChange}
          className={classes.field}
          sx={{
            marginBottom: '20px'
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
          className={classes.field}
          sx={{
            marginBottom: '20px'
          }}
        />
        <Button
          variant='contained' 
          size='large'
          onClick={handleSubmit}
        >
          Login!
        </Button>
      </form>
    </div>
  )
}
