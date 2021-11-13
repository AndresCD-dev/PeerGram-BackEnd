import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";

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
  
  const handleSubmit = (event) => {
    const data = new FormData(event.currentTarget)
    const details = {
      content: data.get("content"),
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
        label="content"
        name="content"
        style={{ margin: 8 }}
        placeholder="Write your comment here..."
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        type="text"
      />
    </form>
  );
}
