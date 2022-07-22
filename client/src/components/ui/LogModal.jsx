import { useState } from 'react'

import { Typography, Box, TextField } from '@mui/material'

export default function LogEventModal(props) {

  const { eventType } = props

  const [event, setEvent] = useState({
    type: eventType,
    amount: null,
  })

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
        label="Amount"
        name='amount'
        value={event.amount}
        onChange={handleChange}
        InputProps={{
          inputProps: { min: 0 }
        }}
      />
    </Box>
    </>
  )
}
