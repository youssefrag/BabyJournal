import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Graph from "./Graph"

import LogEventModal from './LogEventModal';
import LogMeasurementModal from './LogMeasurementModal';

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
  const handleCloseTempLog = () => {
    setOpenTempLog(false)
    setRefreshState(refreshState + 1)
  }

  const [openVacLog, setOpenVacLog] = useState(false)
  const handleOpenVacLog = () => setOpenVacLog(true)
  const handleCloseVacLog = () => {
    setOpenVacLog(false)
    setRefreshState(refreshState + 1)
  } 

  const [openMedLog, setOpenMedLog] = useState(false)
  const handleOpenMedLog = () => setOpenMedLog(true)
  const handleCloseMedLog = () => {
    setOpenMedLog(false)
    setRefreshState(refreshState + 1)
  }

  const [openHeadLog, setOpenHeadLog] = useState(false)
  const handleOpenHeadLog = () => setOpenHeadLog(true)
  const handleCloseHeadLog = () => { 
    setOpenHeadLog(false)
    setRefreshState(refreshState + 1)
  }

  const [openHeightLog, setOpenHeightLog] = useState(false)
  const handleOpenHeightLog = () => setOpenHeightLog(true)
  const handleCloseHeightLog = () => {
    setOpenHeightLog(false)
    setRefreshState(refreshState + 1)
  }

  const [openWeightLog, setOpenWeightLog] = useState(false)
  const handleOpenWeightLog = () => setOpenWeightLog(true)
  const handleCloseWeightLog = () => {
    setOpenWeightLog(false)
    setRefreshState(refreshState + 1)
  }

  const [babyDetails, setBabyDetails] = useState({})
  const [refreshState, setRefreshState] = useState(0)
  const [babyMeasurementHistory, setBabyMeasurementHistory] = useState([])

  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:5050/baby/${id}`, {
      withCredentials: true,
    })
    .then((result) => {
      setBabyDetails(result.data[0])
    })
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:5050/log/measurement/${id}`, {
      withCredentials: true,
    })
    .then((result) => {
      setBabyMeasurementHistory(result.data)
    })
  }, [refreshState])

  const getHeadLogs = (logs) => {
    let headLogs = []
    logs.forEach(log => {
      if (log.measurement_type === 'head') {
        headLogs.push(log)
      }
    });
    return headLogs
  }

  const getWeightLogs = (logs) => {
    let weightLogs = []
    logs.forEach(log => {
      if (log.measurement_type === 'weight') {
        weightLogs.push(log)
      }
    });
    return weightLogs
  }

  const getheadLogs = (logs) => {
    let headLogs = []
    logs.forEach(log => {
      if (log.measurement_type === 'head') {
        headLogs.push(log)
      }
    });
    return headLogs
  }

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
            Temperature
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
              <LogEventModal 
                eventType="temperature"
                babyId={id}
                handleCloseTempLog={handleCloseTempLog}
              />
            </Box>

          </Modal>
          <Button
            variant='contained'
            onClick={handleOpenVacLog}
          >
            Vaccine
          </Button>
          <Modal
            open={openVacLog}
            onClose={handleCloseVacLog}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={style}
            >
              <LogEventModal 
                eventType="vaccine"
                babyId={id}
                handleCloseVacLog={handleCloseVacLog}
              />
            </Box>
          </Modal>
          <Button
            variant='contained'
            onClick={handleOpenMedLog}
          >
            Medication
          </Button>
          <Modal
            open={openMedLog}
            onClose={handleCloseMedLog}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={style}
            >
              <LogEventModal 
                eventType="medicine"
                babyId={id}
                handleCloseMedLog={handleCloseMedLog}
              />
            </Box>
          </Modal>
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
          Log {babyDetails.first_name}'s growth
        </Typography>
        <Button
          variant='contained'
          onClick={handleOpenHeadLog} 
        >
          Head Size
        </Button>
        <Modal
          open={openHeadLog}
          onClose={handleCloseHeadLog}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={style}
          >
            <LogMeasurementModal 
              measurementType="head"
              babyId={id}
              handleCloseHeadLog={handleCloseHeadLog}
            />
          </Box>
        </Modal>
        <Button
          variant='contained'
          onClick={handleOpenWeightLog} 
        >
          Weight
        </Button>
        <Modal
          open={openWeightLog}
          onClose={handleCloseWeightLog}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={style}
          >
            <LogMeasurementModal 
              measurementType="weight"
              babyId={id}
              handleCloseWeightLog={handleCloseWeightLog}
            />
          </Box>
        </Modal>
        <Button
          variant='contained'
          onClick={handleOpenHeightLog} 
        >
          Height
        </Button>
        <Modal
          open={openHeightLog}
          onClose={handleCloseHeightLog}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={style}
          >
            <LogMeasurementModal 
              measurementType="height"
              babyId={id}
              handleCloseHeightLog={handleCloseHeightLog}
            />
          </Box>
        </Modal>
      </Box>
    </>
  )
}
