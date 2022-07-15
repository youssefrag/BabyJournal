
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material'

import Cookies from 'js-cookie';

import RegistrationPage from "./ui/RegistrationPage";
import LoginPage from "./ui/LoginPage";

import { makeStyles } from "@mui/styles";
import Navbar from "./ui/Navbar";

const useStyles = makeStyles({
  root: {
    marginTop: '80px',
  },
});

function App() {

  const classes = useStyles();

  const isLoggedIn = Cookies.get('user_id') && Cookies.get('babyjournal')
  const [isUserLoggedIn, setUserLoggedIn] = useState(isLoggedIn);

  return (
    <div className={classes.root}>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element = {<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
