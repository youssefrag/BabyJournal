
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { UserContextProvider } from "../context/userContext";

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import Cookies from 'js-cookie';

import { makeStyles } from "@mui/styles";

import RegistrationPage from "./ui/RegistrationPage";
import LoginPage from "./ui/LoginPage";
import Navbar from "./ui/Navbar";
import BabyList from "./ui/BabyList";
import NewBaby from "./ui/NewBaby";
import BabyDetailsPage from "./ui/BabyDetailsPage";

const useStyles = makeStyles({
  root: {
    paddingTop: '100px',
    paddingBottom: '500px',
    backgroundColor: '#D3D3D3',
  },
});

function App() {

  const classes = useStyles();

  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    if (Cookies.get('user_id')) {
      setUserLoggedIn(true)
    }
  }, [Cookies.get('user_id')])

  return (
    <div className={classes.root}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <UserContextProvider isUserLoggedIn={isUserLoggedIn} setUserLoggedIn={setUserLoggedIn}>
          <header>
            <Navbar />
          </header>
          <Routes>
            <Route path="/" element = { (isUserLoggedIn) ? <BabyList/> : <LoginPage />} />
            <Route path="/register" element = {<RegistrationPage />} />
            <Route path="/login" element = {<LoginPage />} />
            <Route path="/user" element = { (isUserLoggedIn) ? <BabyList /> : <LoginPage /> }/>
            <Route path="/newbaby" element = {<NewBaby /> }/>
            <Route path="/babydetails/:id" element= { (!isUserLoggedIn) ? <Navigate replace to="/login" /> : <BabyDetailsPage /> } />
          </Routes>
        </UserContextProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
