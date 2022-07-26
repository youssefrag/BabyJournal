import React from 'react'
import { useNavigate } from "react-router-dom";

import { Typography, Box } from '@mui/material';

import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  images: {
    width: '200px', 
    height: '200px',
    borderRadius: '50%'
  },
  nameTitle: {
    margin: 'auto',
    fontSize: 200
  },
})

export default function BabyListItem(props) {

  const classes = useStyles()

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
          className={classes.nameTitle}
          sx={{
            fontSize: 45,
          }}
        >
          {name}
        </Typography>
        { (image)
          ? <img src={image} className={classes.images}/>
          : <img src='/baby-avatar.webp' className={classes.images}/>
        }
      </Box>
    )
  } else {
    return(
      <Box
        onClick={goToNewBabyPage}
      >
        <Typography
          variant='h2'
          className={classes.nameTitle}          
          sx={{
            fontSize: 45,
            margin: 'auto'
          }}
        >
          New Baby?
        </Typography>
        <img src='/baby-avatar.webp' className={classes.images}/>
      </Box>
    )
  }
}
