import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
  },
  btn: {
    background: "#1a2b23",
  },
  textfield: {
  },
  text: {
    color: "White",
    margin: "auto"
  }
}));

export default function CommentForm({comments, post, setComments}) {
  
  const classes = useStyles();
  const [comment, setComment] = useState("")
  const handleSubmit = (event) => {
    // const data = new FormData(event.currentTarget)
    const details = {
      content: comment,
      post_id: post.id
    }
    event.preventDefault();
    const update = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(details),
    };
    fetch(`http://localhost:3000/comments`, update)
    .then(response => response.json())
    .then(data => {
      if (data.content){
        setComments(...comments, data)
        console.log(data)
        setComment("")

      }
      else{
        // error message here...
      }
      
    });
  };
  return (
    <form component="form" className={classes.form} onSubmit={handleSubmit}>
      <TextField
        className={classes.textfield}
        id="filled-full-width"
        label="Comment Here!"
        name="content"
        variant="standard"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={{ margin: 8 }}
        placeholder="Add A Comment..."
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        type="text"
      />
    </form>
  );
}
