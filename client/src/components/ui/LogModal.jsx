import { useState } from 'react'

import { Typography, Box, TextField, Button } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers';
import moment from 'moment';

export default function LogEventModal(props) {

  const { eventType } = props

  const [event, setEvent] = useState({
    type: eventType,
    amount: null,
  })

  const [date, setDate] = useState(() => moment())

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setEvent(prev => ({...event, [name]: value}))
    console.log(event)
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
    >
      Submit
    </Button>
    </>
  )
}
