import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import CommentForm from './CommentForm';
import DeleteMenu from './DeleteMenu';
import moment from "moment"
import CommentsModal from './CommentsModal';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

const BootstrapDialog = styled(ListItem)(({ theme }) => ({

  '& .MuiListItemText-root': {
    display: "flex",
    alignItems: "center"
    
  }
}));



export default function Cards(props) {



  const post = props.post
  const arrayPosts = props.arrayPosts
  const timeArray = post.created_at.split("T")
  const mappedArray = 
    post.comments.map((comment) => (
      <div key={comment.id} sx={{color: "black"}}>
        <BootstrapDialog alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={comment.user.avatar} sx={{ width: 32, height: 32, marginLeft: "10px" }} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
              component="span"
              variant="body2"
              color="textPrimary"
              sx={{fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif", marginRight: "10px", fontWeight: "500"}}
            >
              {comment.user.username}
            </Typography>
            }
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                  sx={{fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif"}}
                >
                  {comment.content}
                </Typography>
              </React.Fragment>
            }
          />
        </BootstrapDialog>
      </div>
    ))
  console.log(timeArray[0])
  return (
    <Card variant="outlined" sx={{ width: 614, marginBottom: "100px"}}>
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={post.user.avatar} />
        }
        action={
          <DeleteMenu post={post} arrayPosts={arrayPosts} setPosts={props.setPosts}/>
        }
        title={
          <React.Fragment>
          <Typography
            component="span"
            variant="body2"
            color="textPrimary"
            sx={{fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif", marginLeft: "-400px", fontWeight: "500"}}
          >
            {post.user.username}
          </Typography>
        </React.Fragment>
        }
      />
      <CardMedia
        component="img"
        height="767"
        image={post.image}
        alt="Paella dish"
        sx={{height: "100%"}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {post.caption}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{marginRight: "490px"}}>
         {moment(post.created_at).fromNow()}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <List>
         {post.comments.length <= 3 ? mappedArray :<>{mappedArray.slice(0,3)} <CommentsModal post={post} image={post.image}/></>}
            </List>
            <CommentForm  post={post} setComments={props.setComments} comments={props.comments} />
    </Card>
  );
}