import { useState } from 'react'

import { useNavigate } from "react-router-dom";

import { Typography, Box, TextField, Button } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers';

import moment from 'moment';
import axios from 'axios';

export default function LogGrowthModal(props) {

  const { measurementType, babyId, handleCloseHeadLog, handleCloseWeightLog, handleCloseHeightLog } = props

  let navigate = useNavigate();

  const [measurement, setMasurement] = useState({
    type: measurementType,
    amount: '',
    date_time: '',
  })

  const [date, setDate] = useState(() => moment())
  const [time, setTime] = useState(() => moment())

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setMasurement(prev => ({...measurement, [name]: value}))
  }

  const handleSubmit = () => {
    const { type, amount } = measurement
    if (!amount) {
      alert('Empty values')
    }
    const dateTimeStr = date.format("YYYY-MM-DD") + "T" + time.format("HH:mm:ssZ");
    const dateTime = moment(dateTimeStr);
    measurement['datetime'] = parseInt(dateTime.format("X"));
    console.log(measurement)
    // measurement['date'] = date.toString().slice(0, 15)
    // axios.post(`http://localhost:5050/log/measurement/${babyId}`, measurement, {
    //   withCredentials: true,
    // })
    // .then(() => {
    //   if (type === 'head') {
    //     handleCloseHeadLog()
    //   } else if (type === 'weight') {
    //     handleCloseWeightLog()
    //   } else if (type === 'height') {
    //     handleCloseHeightLog()
    //   }
    // })
    // .catch((err) => {
    //   console.log(err.message)
    // })
  }

  let header = ''
  let placeHolder = ''

  if (measurementType === 'head') {
    header = 'Log Head Size here'
    placeHolder = 'Head Size in cm'
  } else if (measurementType === 'weight') {
    header = 'Log weight here'
    placeHolder = 'Weight in kg'
  } else if (measurementType === 'height') {
    header = 'Log height here'
    placeHolder = 'Height in cm'
  }

  return (
    <>
      <Typography>
        {header}
      </Typography>
      <Box>
        <TextField 
          type="number"
          label={placeHolder}
          name='amount'
          value={measurement.amount}
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
        <TimePicker
          label="Basic example"
          value={time}
          onChange={(newValue) => {
            setTime(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
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
