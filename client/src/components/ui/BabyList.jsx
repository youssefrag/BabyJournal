import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

import axios from 'axios';
import BabyListItem from "./BabyListItem";
import { Box } from "@mui/system";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    // marginTop: '60px'
  }
})

export default function BabyList() {

  const classes = useStyles()

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
      <Box>
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
    <div className={classes.root}>
      <Box
        sx={{
          marginLeft: '20px'
        }}
      >
        {babyListItems}
        <BabyListItem goToNewBabyPage={goToNewBabyPage}/>
      </Box>
    </div>
  )


}
