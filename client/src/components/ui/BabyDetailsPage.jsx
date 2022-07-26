import React, { useState, useEffect } from 'react'
import axios from 'axios';

import LogEventModal from './LogEventModal';
import LogMeasurementModal from './LogMeasurementModal';

import { Typography, Box, Button } from '@mui/material';
import { Modal } from '@mui/material';
import { makeStyles } from "@mui/styles";

import { useParams } from "react-router-dom";

import Graph from "./Graph"
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";

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

const useStyles = makeStyles({
  graphs: {
    paddingTop: '60px'
  },
  calender: {
    border: '1px solid',
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '20px',
    // width: '80%',
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  mainSection: {
    border: '1px solid',
    marginLeft: '20px',
    marginRight: '20px',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '20px',
    display: 'flex'
  },
  eventLogSection: {
    border: '1px solid',
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    width: '85%'
  },
  growthSection: {
    border: '1px solid',
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    width: '600px'
  },
  logsAndCalender: {
    display: 'flex',
    justifyContent: 'space-between',
  }
})

export default function BabyDetailsPage() {

  const classes = useStyles()

  const [selectedDate, setSelectedDate] = useState(new Date());  

  const [eventsForDate, setEventsForDate] = useState([])
  
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

  function formatDate(oldDate) {
    const date = oldDate.toString().slice(0, 15)
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

  useEffect(() => {
    axios.get(`http://localhost:5050/log/event/${formatDate(selectedDate)}`, {
      withCredentials: true,
    })
    .then((result) => {
      setEventsForDate(result.data)
    })
  }, [selectedDate, refreshState])

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

  const getHeightLogs = (logs) => {
    let headLogs = []
    logs.forEach(log => {
      if (log.measurement_type === 'height') {
        headLogs.push(log)
      }
    });
    return headLogs
  }

  const renderEvents = eventsForDate.map((event) => {
    return(
      <Box
        sx={{
          alignSelf: 'flex-start',
          border: '1px solid',
          width: '100%',
          height: '100px',
          backgroundColor: '#b3d9ff'
        }}
      >
        <Typography
          variant='h4'
          sx={{
            marginLeft: '15px'
          }}
        >
          {event.event_type}:
        </Typography>
        <Typography
          variant='h4'
          sx={{
            marginLeft: '15px'
          }}
        >
          {event.event_detail}
        </Typography>
      </Box>
    )
  })

  return (
    <div className={classes.root}>
      <Box
        className={classes.mainSection}
      >
        <img 
          src={babyDetails.picture_url}
          style={{
            width: '70px',
            height: '80px',
            marginTop: '30px',
            borderRadius: '50%'
          }}
        />
        <Box
          sx={{
            marginLeft: '30px'
          }}
        >
          <Typography
            variant='h2'
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
      <div
        className={classes.logsAndCalender}
      >
        <div>
          <Box
            className={classes.eventLogSection}
          >
            <Typography
              variant='h4'
              sx={{
                marginBottom: '20px',
                // textAlign: 'center'
              }}
            >
              Log {babyDetails.first_name}'s health
            </Typography>
            <Box
              sx={{
                display: 'flex',
                // justifyContent: 'center'
              }}
            >
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
                sx={{
                  marginLeft: '10px'
                }}
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
                sx={{
                  marginLeft: '10px'
                }}
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
            className={classes.growthSection}
          >
            <Typography
              variant='h4'
              sx={{
                marginBottom: '20px'
              }}
            >
              Log {babyDetails.first_name}'s growth
            </Typography>
            <Box
              sx={{
                display: 'flex'
              }}
            >
              <Button
                variant='contained'
                onClick={handleOpenHeadLog}
                sx={{
                  marginRight: '10px'
                }}
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
                sx={{
                  marginRight: '10px'
                }}
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
            <div
              className={classes.graphs}
            >
              <Graph 
                logs={getHeadLogs(babyMeasurementHistory)} 
                measurement='Head'
              />
              <Graph 
                logs={getWeightLogs(babyMeasurementHistory)} 
                measurement='Weight'
              />
              <Graph 
                logs={getHeightLogs(babyMeasurementHistory)} 
                measurement='Height'
              />
            </div>
          </Box>
        </div>
        <div
          className={classes.calender}
        >
          <Calendar 
            onChange={setSelectedDate}
            value={selectedDate}
          />
          <Typography
            variant='h2'
            sx={{
              marginTop: '30px',
              marginBottom: '30px'
            }}
          >
            Logs for chosen date:
          </Typography>
          {renderEvents}
        </div>
      </div>
    </div>
  )

}
