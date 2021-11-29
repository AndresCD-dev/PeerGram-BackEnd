import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <MuiLink to="">
        PeerGram
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Login( { login, setLogin } ) {
 let history = useNavigate();

  // if (login !== "") {
  //   history("/main");
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        username: data.get('username'),
        password: data.get('password')
      })
    };
    fetch('http://localhost:3000/login', requestOptions)
    .then(response => response.json())
    .then(data => {
      setLogin(data.id)
      if (data.id){
        history("/main")
      }
      else{
        alert("Invalid credentials")
      }
      
    })
    .catch((e) => console.error(e));
    // console.log({
    //   username: data.get('username'),
    //   password: data.get('password'),
    // });
  };

  return (
    <Box sx={{display: "flex", justifyContent: "space-around", paddingBottom: "320px"}}>
      <Box component="main" maxWidth="xs" sx={{display: "flex", maxWidth: "935px", justifyContent: "space-between", alignItems: "center", flexDirection: "row"}}>
        <CssBaseline />
        <Box sx={{width: "100%", height: "618px", marginTop: "145px"}}>
          <Card sx={{marginRight: "80px"}}>
            <CardMedia 
            component="img"
            height="618"
            image="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg"
            alt="Paella dish"
            sx={{height: "100%", width: "100%"}}/>
          </Card>
        </Box>
        <Box>
        <Card
        variant="outlined"
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '350px',
            height: "420px",
            padding: "40px 30px 0px 30px"
          }}
        >
          <Typography component="h1" variant="h5" sx={{fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif", fontWeight: "500"}}>
            PeerGram
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              size="small"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              size="small"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <MuiLink sx={{marginRight: ""}}>
                    Forgot?
                </MuiLink>
              </Grid>
              <Grid item>
                <Link to="signup">
                  {"Don't have an account?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Card>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </Box>
        
      </Box>
    </Box>
  );
}