import React from 'react'
import { Typography } from '@mui/material';

export default function BabyListItem(props) {

  const { name, image, id, goToNewBabyPage } = props

  if (name) {
    return (
      <div
        onClick={goToNewBabyPage}
      >
        { (image)
          ? <img src={image} />
          : <img src='/../public/baby-avat.webp' />
        }
      </div>
    )
  }
}
