import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@mui/material/TextField';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: "#fff",
      borderBottom: "1px solid rgba(var(--b6a,219,219,219),1)",
      boxShadow: "0"
    }, 
    button: {
        marginLeft: "auto"
    },
    icons: {
      color: "black"
    },
    text: {
      marginLeft: "100px"
    },
    div: {
      display: "flex"
    }
  }));

export default function NavBar() {
    const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{boxShadow: 0}} >
        <Toolbar variant="dense" className={classes.root} >
          <Typography variant="h6" color="inherit" component="div" sx={{ marginLeft: "112px", color:"black"}}>
            PeerGram
          </Typography>
          <TextField id="outlined-basic" label="search" variant="outlined" size="small" />
          <div className={classes.div}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <HomeIcon className={classes.icons}/>
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <AddBoxTwoToneIcon className={classes.icons}/>
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <AccountCircleRoundedIcon className={classes.icons}/>
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}