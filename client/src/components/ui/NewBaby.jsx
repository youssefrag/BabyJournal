import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Stack, TextField, Typography, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import moment from 'moment';

export default function NewBaby() {

  let navigate = useNavigate();

  const [baby, setBaby] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    birth_location: '',
    picture_url: ''
  })

  const handleChange = (e) => {

    const name = e.target.name
    const value = e.target.value
    setBaby(prev => ({...baby, [name]: value}))
  }

  const [date, setDate] = useState(() => moment())
  const handleDateChange = (e) => {
    setDate(e.date);
 }

  const handleSubmit = () => {
    const { first_name, last_name, birth_location } = baby
    if ( !first_name || !last_name || !birth_location || !date ) {
      alert('Empty values!')
      return
    }
    baby['date_of_birth'] = date.toString().slice(0, 15)
    console.log(baby)
  }

  return (
    <>
      <Typography
        variant='h4'
        sx={{
          marginBottom: '40px',
          marginLeft: '40px'
        }}
      >
        Register your baby
      </Typography>
      <Stack
        spacing={4}
        sx={{ 
          width: '350px',
          marginLeft: '40px'
        }}
        >
        <TextField 
          type="text"
          label="First name"
          name="first_name"
          color="secondary"
          required
          value={baby.first_name}
          onChange={handleChange}
        />
        <TextField 
          type="text"
          label="Last name"
          name="last_name"
          color="secondary"
          required
          value={baby.last}
          onChange={handleChange}
        />
        <DatePicker 
          label='Date of Birth' 
          renderInput={(params) => <TextField {...params}/>}
          value={date}
          onChange={(newValue) => {
            setDate(newValue)
          }}
        />
        <TextField 
          type="text"
          label="Birth Location"
          name="birth_location"
          color="secondary"
          required
          value={baby.birth_location}
          onChange={handleChange}
        />
        <TextField 
          type="text"
          label="Picture Url"
          name="picture_url"
          color="secondary"
          required
          value={baby.picture_url}
          onChange={handleChange}
        />
        <Button
          variant='contained'
          size='large'
          onClick={handleSubmit}
          sx={{
            width: '200px'
          }}
        >
          Register baby
        </Button>      
      </Stack>
    </>
  )
}
