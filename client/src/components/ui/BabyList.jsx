import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';

import axios from 'axios';
import BabyListItem from "./BabyListItem";
import { Box } from "@mui/system";

export default function BabyList() {

  let navigate = useNavigate();

  const { userContextParentId } = useContext(UserContext);

  const [babies, setBabies] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5050/baby/babies_of_parent/${userContextParentId}`, {
      withCredentials: true
    })
    .then((result) => {
      setBabies(result.data)
    })
  }, [])

  let babyListItems = []

  babyListItems = babies.map((baby) => {
    return(
      <Box
        sx={{
          marginBottom: '100px'
        }}
      >
        <BabyListItem
          key={baby.id}
          id={baby.id}
          name={baby.first_name}
          image={baby.picture_url}
        />
      </Box>
    )
  })



  const goToNewBabyPage = () => {
    navigate('/newbaby')
  }

  return (
    <Box
      sx={{
        marginLeft: '20px'
      }}
    >
      {babyListItems}
      <BabyListItem goToNewBabyPage={goToNewBabyPage}/>
    </Box>
  )


}
