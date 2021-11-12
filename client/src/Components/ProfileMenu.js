import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { makeStyles } from "@material-ui/core/styles";
import {useNavigate} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    icons: {
      color: "black"
    },
  }));

export default function ProfileMenu({setLoggedIn}) {
    let history = useNavigate();
    

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfile =() => {
    setAnchorEl(null);
    history("/profile")
  }
  const handleLogout = (event) => {
    event.preventDefault();
    handleClose()
    fetch(`http://localhost:3000/logout`,{
    credentials: 'include'})
    .then(resp => resp.json())
    .then(data => {
        if (data.message){
            setLoggedIn(false)
            console.log(data)
        }})
    history("/");
  };
  const classes = useStyles();
  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}  aria-controls="demo-positioned-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
            <AccountCircleRoundedIcon className={classes.icons}/>
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >

        <MenuItem to="/profile" onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}