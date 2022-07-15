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
    <div>Navbar</div>
  )
}
