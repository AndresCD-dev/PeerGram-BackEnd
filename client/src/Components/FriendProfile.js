import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/styles";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect } from "react"
import { useState } from "react"
import CircularProgress from "@material-ui/core/CircularProgress";
import { useParams } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root:{
        width: "920px",
        marginLeft: "465px",
        marginTop: "150px"
    }, text: {
        marginRight: "10px"
    }
  }));
  
 

const FriendProfile = (props) => {
    let  { id }  = useParams();
    let idNumber = { id }.id;
    const [profile, setProfile] = useState([])
    const [bio, setBio] = useState()
    const classes = useStyles();
    // console.log(props.user)

    useEffect(() => {
        fetch(`https://peer-gram.herokuapp.com/profiles/${idNumber}`, {
            method: "GET",
            headers: {
              'Accept':  'application/json',
             'Content-Type': 'application/json',
             'Cache': 'no-cache'
            },
            credentials: 'include'
          })
          .then((r) => r.json())
          .then(setBio);
      }, [idNumber])

    useEffect(() => {
        fetch(`https://peer-gram.herokuapp.com/posts/${idNumber}`, {
            method: "GET",
            headers: {
              'Accept':  'application/json',
             'Content-Type': 'application/json',
             'Cache': 'no-cache'
            },
            credentials: 'include'
          })
          .then((r) => r.json())
          .then(setProfile);
      }, [idNumber])
      if (bio !== undefined ) {  
    return (
        <>
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "100px", marginRight: "380px"}}>
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginRight: "30px"}}>
            <Avatar
                alt="Remy Sharp"
                src={bio.user.avatar}
                sx={{ width: 150, height: 150, }}
            />
        </Box>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <Box sx={{display: "flex", flexDirection: "row", }}>
            <Typography variant="h4" gutterBottom component="div" sx={{fontWeight: "200", paddingRight: "20px", fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif"}}>
                {bio.user.username}
            </Typography>
            </Box>
            <Box sx={{display: "flex", flexDirection: "row"}}>
            <Typography variant="h6" gutterBottom component="div" sx={{marginRight: "20px", fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif"}}>
                {profile.length} <span className="span">Posts</span> 
            </Typography>
            <Typography variant="h6" gutterBottom component="div" sx={{marginRight: "20px", fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif"}}>
                {bio.followers} <span className="span">Followers</span>
            </Typography>
            <Typography variant="h6" gutterBottom component="div"sx={{fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif"}}>
                {bio.following} <span className="span">Following</span>
            </Typography>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <Typography variant="h6" gutterBottom component="div"sx={{fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif"}}>
                {bio.name}
            </Typography>
            <Typography variant="h7" gutterBottom component="div"sx={{fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif"}}>
                {bio.bio}
            </Typography>
            </Box>
        </Box>
        </Box>
        <Divider variant="middle" className={classes.root} />
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginRight: "67px"}}>
        <ImageList sx={{ width: 935, height: 640 }} cols={3} rowHeight={293}>
            {profile.map((item) => (
                <ImageListItem key={item.id} sx={{marginLeft: "15px"}}>
                    <img
                        sx={{ width: 500, height: 450 }}
                        src={item.image}
                        srcSet={item.image}
                        alt={item.caption}
                        loading="lazy"
                />
                </ImageListItem>
      ))}
        </ImageList>
        </Box>
        </>
    )}
    else {
        return (
          <div className={classes.loader}>
            <CircularProgress />
          </div>
        );
      }
}

export default FriendProfile
