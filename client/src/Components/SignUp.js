import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Card, Link as MuiLink } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <MuiLink>
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp({ setLogin }) {
  let history = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const details = {
      username: data.get('username'),
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation')
    };
    if (details && details['password'] === details['password_confirmation']) {
      alert('Sign Up Successful');
      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(details)
      };
      fetch('http://localhost:3000/signup', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setLogin(data.id)
        if (data.id){
          history("/main")
        }
        else{
          alert("Invalid credentials")
        }
      });

    } else {
      alert('Please make sure all of the data is filled in and correct');
    }
    // eslint-disable-next-line no-console
    // console.log({
    //   email: data.get('email'),
    //   username: data.get('username'),
    //   password: data.get('password'),
    //   password_confirmation: data.get('password_confirmation'),
    // });
  };

  return (
    <Box sx={{paddingBottom: "220px", paddingTop: "50px"}}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: "100px",
            padding: "20px 20px 50px 20px"
          }}
        >
          <Typography component="h1" variant="h5" sx={{fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif", fontWeight: "500"}}>
            PeerGram
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                 <TextField
                margin="normal"
                required
                fullWidth
                name="password_confirmation"
                label="Confirm Password"
                type="password"
                id="password_confirmation"
                autoComplete="password_confirmation"
              />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
            <Grid item xs>
                <MuiLink>
                    Forgot Milk?
                </MuiLink>
              </Grid>
              <Grid item>
                <Link to="/">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Card>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </Box>
  );
}