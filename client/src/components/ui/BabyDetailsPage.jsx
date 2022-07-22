import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Typography, Box } from '@mui/material';
import { useParams } from "react-router-dom";

export default function BabyDetailsPage() {

  const LogTypes = {
    HEAD: "head",
    HEIGHT: "height",
    WEIGHT: "weight",
    TEMPERATURE: "temperature",
    MEDICINE: "medicine",
    VACCINE: "vaccine",
    APPOINTMENT: "appointment"
  }
  const lengthUnits = [
    {name: "Centimeter", value: "cm"}, 
    {name: "Millimeter", value: "mm"},
    {name: "Inch", value: "in"},
    {name: "Foot", value: "ft"}
  ]
  const temperatureUnits = [
    {name: "Celcius", value: "C"}, 
    {name: "Farenheit", value: "F"}
  ]
  const weightUnits = [
    {name: "kilogram", value: "kg"},
    {name: "gram", value: "g"}, 
    {name: "milligram", value: "mg"},
    {name: "ounce", value: "oz"},
    {name: "pound", value: "lb"}
  ]

  const [babyDetails, setBabyDetails] = useState({})

  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:5050/baby/${id}`, {
      withCredentials: true,
    })
    .then((result) => {
      setBabyDetails(result.data[0])
    })
  }, [])

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          marginLeft: '30px',
          border: 1
        }}
      >
        <img 
          src={babyDetails.picture_url}
          style={{
            width: '70px',
            height: '80px',
            marginTop: '40px'
          }}
        />
        <Box
          sx={{
            marginLeft: '30px'
          }}
        >
          <Typography
            variant='h1'
          >
            {babyDetails.first_name} {babyDetails.last_name}
          </Typography>
          <Typography
            variant='h4'
          >
            Born at {babyDetails.date_of_birth} in {babyDetails.birth_location}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          border: 1
        }}
      >
        <Typography
          variant='h4'
        >
          Log {babyDetails.first_name}'s health
        </Typography>
        <Typography
          variant='h4'
        >
          Log {babyDetails.first_name}'s growth
        </Typography>
      </Box>
    </>
  )
}
