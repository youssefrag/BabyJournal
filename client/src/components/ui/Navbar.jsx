import {Button, Typography, AppBar, Toolbar } from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tool: {
    width:'100%',
    display: 'inline-flex',
    justifyContent: 'space-between',
  },
})

export default function Navbar() {

  const classes = useStyles()

  return (
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
          BabyJournal
        </Typography>
        <div>
          <Button
            color="secondary"
            variant='contained' 
            size='large' 
            // onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            color="secondary"
            style={{ marginLeft: 10, marginRight: 50}}
            variant='contained' 
            size='large' 
            // onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}
