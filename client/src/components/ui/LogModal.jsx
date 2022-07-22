import { useState } from 'react'

import { Typography, Box, TextField } from '@mui/material'

export default function LogEventModal(props) {

  const { eventType } = props

  const [event, setEvent] = useState({
    email:'',
    password:'',
  })

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
        InputProps={{
          inputProps: { min: 0 }
        }}
      />
    </Box>
    </>
  )
}
