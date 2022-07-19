import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import BabyListItem from "./BabyListItem";
import { Box } from "@mui/system";

export default function BabyList() {

  let navigate = useNavigate();

  const goToNewBabyPage = () => {
    navigate('/newbaby')
  }

  return (
    <Box>
      <BabyListItem goToNewBabyPage={goToNewBabyPage}/>
    </Box>
  )
}
