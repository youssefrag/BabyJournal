import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Typography, Box, Button } from '@mui/material';
import { Modal } from '@mui/material';

import { useParams } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BabyDetailsPage() {

  
  
  const [openTempLog, setOpenTempLog] = useState(false)
  const handleOpenTempLog = () => setOpenTempLog(true)
  const handleCloseTempLog = () => setOpenTempLog(false)
  
  console.log(openTempLog)

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
        <Box>
          <Button
            variant='contained'
            onClick={handleOpenTempLog}
          >
            Log temperature
          </Button>
          <Modal
            open={openTempLog}
            onClose={handleCloseTempLog}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={style}
            >
              <Typography>
                log temp here
              </Typography>
            </Box>

          </Modal>
        </Box>
        <Typography
          variant='h4'
        >
          Log {babyDetails.first_name}'s growth
        </Typography>
      </Box>
    </>
  )
}
