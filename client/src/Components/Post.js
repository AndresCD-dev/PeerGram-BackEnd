import React from 'react'
import Cards from './Card'
import { Grid } from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { useEffect } from "react"
import { useState } from "react"
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from 'react-router-dom';


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
    },
    stack: {
        postion: "fixed"
    },
    loader: {
        margin: "200px auto 0 auto",
        display: "flex",
        justifyContent: "center",
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
    if (Object.keys(arrayPosts).length !== 0) {
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
                        <Cards post={post} setComments={props.setComments} comments={props.comments} arrayPosts={arrayPosts} setPosts={props.setPosts} />
                     </Grid> )}
                        
                </Grid>
                 <div className={classes.div}>
                    <Stack direction="column" spacing={2} sx={{position: "fixed"}}>
                        <div className={classes.user}>
                        <Avatar alt="Remy Sharp" src={user.avatar} sx={{marginRight: "10px"}} />
                        <div className={classes.name}>
                        <Typography sx={{fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif", fontWeight: "500"}}>{user.username}</Typography>
                        <Typography sx={{fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif", color: "#8e8e8e"}}>{user.name}</Typography>
                        </div>
                        </div>
                        <Typography sx={{fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif", color: "#8e8e8e", fontWeight: "500"}}>Suggestions For You.</Typography>
                        {allUsers.filter(allUsers => allUsers.id !== user.id).slice(0, 5).map(friends => (
                        <div className={classes.user}>
                        <Avatar alt="Travis Howard" src={friends.avatar} sx={{ width: 24, height: 24, marginRight: "10px" }}  />
                        <div className={classes.name}>
                        <Link to={`/friend/${friends.id}`} className="link">
                        <Typography variant="subtitle2"  sx={{fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif", fontWeight: "500"}}>{friends.username}</Typography>
                        </Link>
                        </div>
                        </div>
                        ))}
                    </Stack>
                 </div>           
            </div>
        ) 
    } else {
        return (
            <div className={classes.loader}>
              <CircularProgress />
            </div>
          );
    }
        
}

export default Post
