import { useState } from 'react'

import { useNavigate } from "react-router-dom";

import { Typography, Box, TextField, Button } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers';

import moment from 'moment';
import axios from 'axios';

export default function LogEventModal(props) {

  const { eventType, babyId, handleCloseTempLog, handleCloseVacLog, handleCloseMedLog } = props

  let navigate = useNavigate();

  const [event, setEvent] = useState({
    type: eventType,
    date: '',
    details: ''
  })

  const [date, setDate] = useState(() => moment())

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setEvent(prev => ({...event, [name]: value}))
  }

  const handleSubmit = () => {
    const { type, details } = event
    if (!details) {
      alert('Empty values')
    }
    event['date'] = date.toString().slice(0, 15)
    if (type === 'temperature') {
      event['details'] = `${event.details} degrees celcius`
    }
    console.log(event)
    axios.post(`http://localhost:5050/log/event/${babyId}`, event, {
      withCredentials: true,
    })
    .then(() => {
      if (type === 'temperature') {
        handleCloseTempLog()
      } else if (type === 'vaccine') {
        handleCloseVacLog()
      } else if (type === 'medicine') {
        handleCloseMedLog()
      }
    })
    .catch((err) => {
      console.log(err.message)
    })
  }


  if (eventType === 'temperature') {
    return (
      <>
        <Typography>
          log {eventType} here
        </Typography>
        <Box>
          <TextField 
            type="number"
            label="Amount in Celcius"
            name='details'
            value={event.details}
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
  } else {
    return(
      <>
        <Typography>
          log {eventType} here
        </Typography>
        <Box>
          <TextField 
            type='text'
            label="Details"
            name='details'
            value={event.details}
            onChange={handleChange}
          />
        </Box>
        <DatePicker 
          label='Date' 
          renderInput={(params) => <TextField {...params}/>}
          value={date}
          onChange={(newValue) => {
            setDate(newValue)
          }}
        />
        <Button
          variant='contained'
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </>
    )
  }
}
