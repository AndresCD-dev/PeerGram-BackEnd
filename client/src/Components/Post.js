import React from 'react'
import Cards from './Card'
import { Grid } from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { useEffect } from "react"
import { useState } from "react"


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"

    },
    div:{
        width:"300px",
        height:"575px",
        alignSelf: "baseline",
        marginTop: "100px",
        marginLeft: "30px",
        display: "flex",
        justifyContent: "flex-start"
    },
    user: {
        display: "flex",
        flexDirection: "row"
    },
    name: {
        display: "flex",
        flexDirection: "column"
    }
  }));

const Post = (props) => {
    const [allUsers, setAllUsers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/allusers`)
          .then((r) => r.json())
          .then(setAllUsers);
      },[])
    const user = props.user
    console.log(allUsers)
    const arrayPosts = props.posts
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid
                container
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                alignContent="flex-start"
                width="100%"
                marginTop="100px"
                maxWidth="614px"
                postion="relative"
                marginLeft="-40px"
            >
                {arrayPosts.map((post) =>
                 <Grid item key={post.id} xs={12} sm={6} md={4}>
                    <Cards post={post} setComments={props.setComments} comments={props.comments}  />
                 </Grid> )}
                    
            </Grid>
             <div className={classes.div}>
                <Stack direction="column" spacing={2}>
                    <div className={classes.user}>
                    <Avatar alt="Remy Sharp" src={user.avatar} sx={{marginRight: "10px"}} />
                    <div className={classes.name}>
                    <Typography>{user.username}</Typography>
                    <Typography>{user.name}</Typography>
                    </div>
                    </div>
                    <Typography>Suggestions For You.</Typography>
                    {allUsers.filter(allUsers => allUsers.id !== user.id).slice(0, 5).map(friends => (
                    <div className={classes.user}>
                    <Avatar alt="Travis Howard" src={friends.avatar} sx={{ width: 24, height: 24, marginRight: "10px" }}  />
                    <div className={classes.name}>
                    <Typography>{friends.username}</Typography>
                    <Typography>{friends.name}</Typography>
                    </div>
                    </div>
                    ))}
                </Stack>
             </div>           
        </div>
    )
}

export default Post
