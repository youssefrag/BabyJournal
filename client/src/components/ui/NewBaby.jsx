import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Stack, TextField } from '@mui/material';
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
    console.log(baby);

    const name = e.target.name
    const value = e.target.value
    setBaby(prev => ({...baby, [name]: value}))
  }

  const [date, setDate] = useState(() => moment())
  const handleDateChange = (e) => {
    setDate(e.date);
 }

 console.log(date)

  return (
    <Stack
      spacing={4}
      sx={{ width: '250px'}}
    >
      <DatePicker 
        label='Date of Birth' 
        renderInput={(params) => <TextField {...params}/>}
        value={date}
        onChange={(newValue) => {
          setDate(newValue)
        }}
      />
    </Stack>
  )
}
