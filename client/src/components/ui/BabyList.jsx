import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

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
      <div class="col-3 d-flex justify-content-center">
        <BabyListItem
          key={baby.id}
          id={baby.id}
          name={baby.first_name}
          image={baby.picture_url}
        />
      </div>
    )
  })



  const goToNewBabyPage = () => {
    navigate('/newbaby')
  }

  return (
    <Box>
      {babyListItems}
      <BabyListItem goToNewBabyPage={goToNewBabyPage}/>
    </Box>
  )
}
