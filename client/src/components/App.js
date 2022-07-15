import { Routes, Route, Navigate } from "react-router-dom"
import { Button } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import RegistrationPage from "./ui/RegistrationPage";
import LoginPage from "./ui/LoginPage";

import { makeStyles } from "@mui/styles";
import Navbar from "./ui/Navbar";

// const useStyles = makeStyles({
//   root: {
//     marginTop: '80px',
//   },
// });

function App() {

  // const classes = useStyles();

  return (
    <div>
    {/* <div className={classes.root}> */}
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
