import React from 'react'
import { useNavigate } from "react-router-dom";

import { Typography } from '@mui/material';

export default function BabyListItem(props) {

  const { name, image, id, goToNewBabyPage } = props

  let navigate = useNavigate();

  const goToNewBabyPage = () => {
    navigate('/newbaby')
  }

  if (name) {
    return (
      <div
        // onClick={goToBabyDetailsPage}
      >
        { (image)
          ? <img src={image} />
          : <img src='/../public/baby-avat.webp' />
        }
      </div>
    )
  } else {
    return(
      <div
        onClick={goToNewBabyPage}
      >
        <img src='/../public/baby-avat.webp'/>
        <Typography
          variant='h4'
        >
          New Baby?
        </Typography>
      </div>
    )
  }
}
