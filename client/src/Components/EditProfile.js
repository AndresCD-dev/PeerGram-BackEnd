import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Divider } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';


export default function EditProfile({change, setChange}) {

    const [content, setContent] = useState("")
    const [username, setUserName] = useState("")
    const [bio, setBio] = useState("")
    const [avatar, setAvatar] = useState("")
      const handleSubmit = (event) => {
        const user = {
          name: content,
          username: username,
          avatar: avatar
        }
        const details = {
          name: content,
          bio: bio,
        }
        event.preventDefault();
        const update = {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(details),
        };
        const patch = {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(user),
        };
        fetch(`http://localhost:3000/profiles`, update)
        .then(response => response.json())
        .then(data => {
          if (data){
              setBio("")
              alert("Changed Profile Succesful")
            console.log(data)
          }
          else{
            // error message here...
          }
          
          
        });
        fetch(`http://localhost:3000/users`, patch)
        .then(response => response.json())
        .then(data => {
          if (data){
            setChange(data)
            setContent("")
            setAvatar("")
            setUserName("")
            console.log(data)
          }
          else{
            // error message here...
          }});
      };
  return (
      
    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "100px", marginRight: "90px"}}>
      <Card variant="outlined"  sx={{width: "900px", height: "900px"}}>
          <div >
    <CardContent component="form"   sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
    <Typography variant="h5" sx={{marginTop:"40px"}}>
            Edit Profile
        </Typography>
        <Divider variant="middle" sx={{width: "500px"}}/> 
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginTop: "40px",
        display: "flex"
      }}
    >
       <Typography variant="h7" sx={{marginRight: "10px"}}>
            Username:
        </Typography>
      <TextField fullWidth value={username}  onChange={(e) => setUserName(e.target.value)} size="small" type="text" name="username" label="Username" id="fullWidth"/>
    </Box>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginTop: "40px",
        display: "flex"
      }}
    >
       <Typography variant="h7" sx={{marginRight: "40px"}}>
            Name:
        </Typography>
      <TextField fullWidth value={content} onChange={(e) => setContent(e.target.value)} size="small"  type="text" name="username" label="Username" id="fullWidth"/>
    </Box>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginTop: "40px",
        display: "flex"
      }}
    >
       <Typography variant="h7" sx={{marginRight: "61px"}}>
            Bio:
        </Typography>
      <TextField fullWidth value={bio}  onChange={(e) => setBio(e.target.value)} size="small"  type="text" name="username" label="Username" id="fullWidth"/>
    </Box>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginTop: "40px",
        display: "flex"
      }}
    >
       <Typography variant="h7" sx={{marginRight: "38px"}}>
            Avatar:
        </Typography>
      <TextField fullWidth value={avatar}  onChange={(e) => setAvatar(e.target.value)} size="small" type="text" name="username" label="Username" id="fullWidth"/>
    </Box>
    <Button variant="text" size="large" onClick={handleSubmit} >
          Submit
        </Button>
    </CardContent>
  </div>
  </Card>
    </Box>
  );
}