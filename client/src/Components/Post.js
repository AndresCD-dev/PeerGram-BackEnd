import React from 'react'
import Cards from './Card'
import { Grid } from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



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
        marginLeft: "30px"
    }
  }));

const Post = (props) => {
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
                    <Avatar alt="Remy Sharp" src="" />
                    <Avatar alt="Travis Howard" src="" />
                    <Avatar alt="Cindy Baker" src="" />
                </Stack>
             </div>           
        </div>
    )
}

export default Post
