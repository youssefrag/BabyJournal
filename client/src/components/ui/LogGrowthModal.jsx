import { useState } from 'react'

import { useNavigate } from "react-router-dom";

import { Typography, Box, TextField, Button } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers';

import moment from 'moment';
import axios from 'axios';

export default function LogGrowthModal(props) {

  const { eventType, babyId, handleCloseHeadLog, handleCloseWeightLog, handleCloseHeightLog } = props

  return (
    <div>LogGrowthModal</div>
  )
}
