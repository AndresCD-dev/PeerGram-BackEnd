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



export default function Cards(props) {



  const post = props.post
  return (
    
    <Card variant="outlined" sx={{ width: 614, marginBottom: "100px"}}>
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={post.user.avatar} />
        }
        action={
          <DeleteMenu/>
        }
        title={post.user.username}
        subheader={post.created_at}
      />
      <CardMedia
        component="img"
        height="580"
        image={post.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {post.caption}
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
              {post.comments.map((comment) => (
                <div key={comment.id} sx={{color: "black"}}>
                  <ListItem  alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={comment.user.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={comment.user.username}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            {comment.content}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </div>
              ))}
            </List>
            <CommentForm  post={post} setComments={props.setComments} comments={props.comments} />
    </Card>
  );
}