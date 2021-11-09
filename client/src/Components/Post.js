import React from 'react'
import Cards from './Card'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"

    }
  }));

const Post = (posts) => {
    const arrayPosts = posts.posts
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid
                container
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                alignContent="flex-end"
                marginLeft="280px"
                marginTop="100px"
            >
                {arrayPosts.map((post) =>
                 <Grid item key={post.id} xs={12} sm={6} md={4}>
                    <Cards post={post}  />
                 </Grid> )}
                    
            </Grid>
            <Container fixed>
                <Box sx={{ bgcolor: '#cfe8fc', height: '400px', maxWidth: "400px", marginLeft: "15px", position: "static", marginBottom: "266px"}} />
            </Container>
        </div>
    )
}

export default Post
