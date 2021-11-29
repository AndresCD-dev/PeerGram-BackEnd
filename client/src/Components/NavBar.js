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
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material'
import ProfileMenu from './ProfileMenu';



const useStyles = makeStyles((theme) => ({

    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "#fff",
      borderBottom: "1px solid rgba(var(--b6a,219,219,219),1)",
      boxShadow: "0",
      marginLeft: "-180px"
    }, 
    button: {
        marginLeft: "auto"
    },
    icons: {
      color: "black"
    },
    text: {
    },
    div: {
      display: "flex",
      width: "266px",
      justifyContent: "flex-end",
      marginLeft: "110px"
    }
  }));

export default function NavBar({setLoggedIn, posts, setPosts}) {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
  setOpen(true);
};
const handleSubmit = (event) => {
  const data = new FormData(event.currentTarget)
  const details = {
    image: data.get("image"),
    caption: data.get("caption")
  }
  event.preventDefault();
  const update = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(details),
  };
  fetch(`https://peer-gram.herokuapp.com/posts`, update)
  .then(response => response.json())
  .then(data => {
    if (data.image){
      handleClose()
      setPosts([...posts, data])
    }
    else{
      // error message here...
    }
    
  });
};
const handleClose = () => {
  setOpen(false);
};
    const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{boxShadow: 0, backgroundColor: "#fff", borderBottom: "1px solid rgba(var(--b6a,219,219,219),1)"}} >
        <Toolbar variant="dense" className={classes.root} >
          <Typography variant="h6" color="inherit" component="div" sx={{ color:"black", fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif", width:"360px", marginRight: "120px"}}>
            PeerGram
          </Typography>
          <TextField id="outlined-basic" label="Search" variant="outlined" size="small" />
          <div className={classes.div}>
          <Link to="/main">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <HomeIcon className={classes.icons}/>
          </IconButton>
          </Link>
          <IconButton onClick={handleClickOpen} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <AddBoxTwoToneIcon className={classes.icons}/>
          </IconButton>
          <ProfileMenu setLoggedIn={setLoggedIn}/>
         
          </div>
        </Toolbar>
      </AppBar>
      <Box  sx={{ mt: 1 }}>
      <Dialog component="form" open={open} onClose={handleClose} onSubmit={handleSubmit} sx={{marginLeft: "-200px"}}>
        <DialogTitle>Create Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Place your caption and image below!
          </DialogContentText>
          <TextField 
            autoFocus
            margin="dense"
            id="image"
            label="Image Url"
            name="image"
            fullWidth
            variant="standard"
          />
          <TextField 
            autoFocus
            margin="dense"
            id="caption"
            label="Caption"
            name="caption"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
      </Box>
    </Box>
    
  );
}