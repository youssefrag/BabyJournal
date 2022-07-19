import React from 'react'
import { Typography, Box } from '@mui/material';

export default function BabyListItem(props) {

  const { name, image, id, goToNewBabyPage } = props

  if (name) {
    return (
      <div
        // onClick={goToBabyDetailsPage}
      >
        { (image)
          ? <img src={image} />
          : <img src='/baby-avatar.webp' />
        }
      </div>
    )
  } else {
    return(
      <Box
        onClick={goToNewBabyPage}
      >
        <img src='/baby-avatar.webp'/>
        <Typography
          variant='h4'
        >
          New Baby?
        </Typography>
      </Box>
    )
  }
}
