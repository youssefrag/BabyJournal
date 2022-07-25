import { useState } from 'react'

import { useNavigate } from "react-router-dom";

import { Typography, Box, TextField, Button } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers';

import moment from 'moment';
import axios from 'axios';

export default function LogGrowthModal(props) {

  const { measurementType, babyId, handleCloseHeadLog, handleCloseWeightLog, handleCloseHeightLog } = props

  let navigate = useNavigate();

  const [measurement, setMasurement] = useState({
    type: measurementType,
    date: '',
    amount: ''
  })

  const [date, setDate] = useState(() => moment())

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
    measurement['date'] = date.toString().slice(0, 15)
    axios.post(`http://localhost:5050/log/measurement/${babyId}`, measurement, {
      withCredentials: true,
    })
    .then(() => {
      if (type === 'head') {
        handleCloseHeadLog()
      } else if (type === 'weight') {
        handleCloseWeightLog()
      } else if (type === 'height') {
        handleCloseHeightLog()
      }
    })
    .catch((err) => {
      console.log(err.message)
    })
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
    <div>{header}</div>
  )
}
