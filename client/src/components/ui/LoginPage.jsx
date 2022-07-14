import React from 'react'
import {Button, TextField, Typography } from '@mui/material';

export default function LoginPage() {
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
          // value={user.email}
          // onChange={handleChange}
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
          // value={user.password}
          // onChange={handleChange}
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
          // onClick={handleSubmit}
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
