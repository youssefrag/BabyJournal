import React from 'react'
import { useNavigate } from "react-router-dom";

import { Typography, Box } from '@mui/material';

import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  root: {
    marginLeft: '30px'
  },
  images: {
    width: '200px', 
    height: '200px',
    borderRadius: '50%',
    border: '1px solid'
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
        className={classes.root}
        onClick={goToBabyDetailsPage}
      >
        <Typography
          variant='h2'
          className={classes.nameTitle}
          sx={{
            fontSize: 45,
            textAlign: 'center'
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
        className={classes.root}
        onClick={goToNewBabyPage}
      >
        <Typography
          variant='h2'
          className={classes.nameTitle}          
          sx={{
            fontSize: 45,
            textAlign: 'center'
          }}
        >
          New Baby?
        </Typography>
        <img src='/baby-avatar.webp' className={classes.images}/>
      </Box>
    )
  }
}
