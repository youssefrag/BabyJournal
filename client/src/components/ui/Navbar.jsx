import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import {Button, Typography, AppBar, Toolbar } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { UserContext } from "../../context/userContext"
import axios from "axios";
import Cookies from "js-cookie";

const useStyles = makeStyles({
  tool: {
    width:'100%',
    display: 'inline-flex',
    justifyContent: 'space-between',
  },
})

export default function Navbar() {

  let navigate = useNavigate();

  const classes = useStyles()

  const {userContextUserName, setUserName, isUserLoggedIn, setUserLoggedIn } = useContext(UserContext);
  
  const handleLogout = () => {
    axios.post('http://localhost:5050/auth/logout', {
      withCredentials: true
    })
    .then(() => {
      Cookies.remove('user_id')
      setUserName(undefined)
      setUserLoggedIn(false)
      navigate("/")
    })
  }

  if (isUserLoggedIn === true) {
    return(
      <AppBar 
        color='primary'
      >
        <Toolbar className={classes.tool}>
          <Button
            color="secondary"
            variant='contained' 
            size='large' 
            // onClick={() => navigate("/login")}
          >
            Baby Page!
          </Button>
          <Typography variant="h4">
            Welcome {userContextUserName}
          </Typography>
          <div>
            <Button
              color="secondary"
              style={{ marginLeft: 10, marginRight: 50}}
              variant='contained' 
              size='large' 
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>

    )
  } else {
    return (
      <AppBar 
        color='primary'
      >
        <Toolbar className={classes.tool}>
          <Typography variant="h4">
            BabyJournal
          </Typography>
          <div>
            <Button
              color="secondary"
              variant='contained' 
              size='large' 
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              color="secondary"
              style={{ marginLeft: 10, marginRight: 50}}
              variant='contained' 
              size='large' 
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    )
  }

}
