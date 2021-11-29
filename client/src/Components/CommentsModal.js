import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from '@mui/material/Avatar';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root':{
    height: "95%",
    maxHeight: "none"
  },

  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    border: "none"
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiListItemText-root': {
    display: "flex",
    alignItems: "center"
    
  }
}));


const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CommentsModal(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen} style={{color: "grey"}}>
        View All Comments
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="Parent"
        open={open}
        fullWidth={true}
        maxWidth="lg"
        style={{
            minHeight: "95%",
            maxHeight: "none"
        }}
      >
        {/* <BootstrapDialogTitle id="Title" onClose={handleClose}>
          Modal title
        </BootstrapDialogTitle> */}
        <DialogContent dividers style={{display: "flex", justifyContent: "space-between", padding: "0px"}}>
         <Card  variant="outlined" style={{height: "100%", width: "80%",border: "none", borderRight: "1px solid rgba(0, 0, 0, 0.12)", borderRadius: "0", backgroundColor: "black"}}>
             <CardMedia
              component="img"
              height="767"
              image={props.image}
              alt="Paella dish"
              sx={{height: "100%", objectFit: "contain"}}/>
         </Card>
         <Box sx={{width: "550px"}}>
           <Box sx={{display: "flex", alignItems: "center", height: "70px"}}>
                <Avatar alt="Remy Sharp" src={props.post.user.avatar} sx={{ width: 48, height: 48, marginLeft: "10px" }} />
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                  sx={{fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif", marginLeft: "10px", fontWeight: "500"}}
                >
                  {props.post.user.username}
                </Typography>
                </Box>
                <Divider />
         { props.post.comments.map((comment) => (
      <div key={comment.id} sx={{color: "black", position: "fixed"}}>
        <ListItem  alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={comment.user.avatar} sx={{ width: 24, height: 24 }} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
              component="span"
              variant="body2"
              color="textPrimary"
              sx={{fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif", fontWeight: "500"}}
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
                  sx={{fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif", marginLeft: "10px"}}
                >
                  {comment.content}
                </Typography>
              </React.Fragment>
              
            }
          />
        </ListItem>
      </div>
    ))}
         </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}