import { useState } from 'react'

import { useNavigate } from "react-router-dom";

import { Typography, Box, TextField, Button } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers';

import moment from 'moment';
import axios from 'axios';

export default function LogEventModal(props) {

  const { eventType, babyId, handleCloseTempLog } = props

  let navigate = useNavigate();

  const [event, setEvent] = useState({
    type: eventType,
    amount: null,
    date: ''
  })

  const [date, setDate] = useState(() => moment())

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setEvent(prev => ({...event, [name]: value}))
  }

  const handleSubmit = () => {
    const { type, amount } = event
    if ( !type || !amount) {
      alert('Empty values!')
      return
    }
    event['date'] = date.toString().slice(0, 15)
    axios.post(`http://localhost:5050/log/event/${babyId}`, event, {
      withCredentials: true,
    })
    .then(() => {
      handleCloseTempLog()
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  return (
    <>
    <Typography>
      log {eventType} here
    </Typography>
    <Box>
      <TextField 
        type="number"
        label="Amount in Celcius"
        name='amount'
        value={event.amount}
        onChange={handleChange}
        InputProps={{
          inputProps: { min: 0 }
        }}
      />
        <DatePicker 
          label='Date' 
          renderInput={(params) => <TextField {...params}/>}
          value={date}
          onChange={(newValue) => {
            setDate(newValue)
          }}
        />
    </Box>
    <Button
      variant='contained'
      onClick={handleSubmit}
    >
      Submit
    </Button>
    </>
  )
}
