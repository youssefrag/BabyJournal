import React, { useState } from 'react';
import { Stack, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export default function NewBaby() {

  const [selectedDate, setSelectedDate] = useState(null)
  console.log( {selectedDate })

  return (
    <Stack
      spacing={4}
      sx={{ width: '250px'}}
    >
      <DatePicker 
        label='Date of Birth' 
        renderInput={(params) => <TextField {...params}/>}
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue)
        }}
      />
    </Stack>
  )
}
