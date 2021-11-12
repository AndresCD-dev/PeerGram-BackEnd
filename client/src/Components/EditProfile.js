import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Divider } from '@mui/material';
import { useState } from 'react';


export default function EditProfile() {

    const [content, setContent] = useState("")
    function handleChange(e) {
        setContent(e.target.value)
    }
    const handleAvatar = (event) => {
        const data = new FormData(event.currentTarget)
        const details = {
          avatar: data.get("avatar"),
        }
        event.preventDefault();
        const update = {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(details),
        };
        fetch(`http://localhost:3000/users`, update)
        .then(response => response.json())
        .then(data => {
          if (data){
            setContent("")
            alert("Changed Avatar Succesful")
            console.log(data)
          }
          else{
            // error message here...
          }
          
        });
      };
      const handleName = (event) => {
        const data = new FormData(event.currentTarget)
        const details = {
          name: data.get("name"),
        }
        event.preventDefault();
        const update = {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(details),
        };
        fetch(`http://localhost:3000/profiles`, update)
        .then(response => response.json())
        .then(data => {
          if (data){
              setContent("")
              alert("Changed Name Succesful")
            console.log(data)
          }
          else{
            // error message here...
          }
          
        });
      };
      const handleSubmit = (event) => {
        const data = new FormData(event.currentTarget)
        const details = {
          username: data.get("username"),
        }
        event.preventDefault();
        const update = {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(details),
        };
        fetch(`http://localhost:3000/users`, update)
        .then(response => response.json())
        .then(data => {
          if (data){
            setContent("")
            alert("Changed Username Succesful")
            console.log(data)
          }
          else{
            // error message here...
          }
          
        });
      };
    const handleBio = (event) => {
        const data = new FormData(event.currentTarget)
        const details = {
          bio: data.get("bio"),
        }
        event.preventDefault();
        const update = {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(details),
        };
        fetch(`http://localhost:3000/profiles`, update)
        .then(response => response.json())
        .then(data => {
          if (data){
            setContent("")
            alert("Changed Bio Succesful")
            console.log(data)
          }
          else{
            // error message here...
          }
          
        });
      };
    
    
  return (
      
    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "100px", marginRight: "90px"}}>
      <Card variant="outlined"  sx={{width: "900px", height: "900px"}}>
          <div >
    <CardContent  sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
    <Typography variant="h5" sx={{marginTop:"40px"}}>
            Edit Profile
        </Typography>
        <Divider variant="middle" sx={{width: "500px"}}/>
        <Typography variant="h7" sx={{marginTop:"40px"}}>
            Username
        </Typography>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginTop: "40px"
      }}
    >
      <TextField fullWidth onSubmit={handleSubmit} onChange={handleChange} component="form" type="text" name="username" label="Username" id="fullWidth" />
    </Box>
    <Typography variant="h7" sx={{marginTop:"40px"}}>
            Name
        </Typography>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginTop: "40px"
      }}
    >
      <TextField fullWidth onSubmit={handleName} onChange={handleChange} component="form" type="text" name="name" label="Name" id="fullWidth" value={content} />
    </Box>
    <Typography variant="h7" sx={{marginTop:"40px"}}>
            Avatar
        </Typography>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginTop: "40px"
      }}
    >
      <TextField fullWidth onSubmit={handleAvatar} onChange={handleChange} component="form" type="text" name="avatar" label="Avatar Url" id="fullWidth" />
    </Box>
    <Typography variant="h7" sx={{marginTop:"40px"}}>
            Bio
        </Typography>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginTop: "40px"
      }}
    >
      <TextField onSubmit={handleBio} onChange={handleChange} component="form" fullWidth type="text" name="bio" label="Bio" id="fullWidth" />
    </Box>
    </CardContent>
  </div>
  </Card>
    </Box>
  );
}