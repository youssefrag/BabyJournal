import React from 'react'
import { useNavigate } from "react-router-dom";

import { Typography, Box } from '@mui/material';

export default function BabyListItem(props) {

  const { name, image, id, goToNewBabyPage } = props

  let navigate = useNavigate();

  const goToBabyDetailsPage = () => {
    navigate(`/babydetails/${id}`)
  }

  if (name) {
    return (
      <Box
        onClick={goToBabyDetailsPage}
      >
        <Typography
          variant='h2'
        >
          {name}
        </Typography>
        { (image)
          ? <img src={image} style={{ width: '400px', height: '400px'}}/>
          : <img src='/baby-avatar.webp' />
        }
      </Box>
    )
  } else {
    return(
      <Box
        onClick={goToNewBabyPage}
      >
        <Typography
          variant='h4'
        >
          New Baby?
        </Typography>
        <img src='/baby-avatar.webp' style={{ width: '400px', height: '400px' }}/>
      </Box>
    )
  }
}
