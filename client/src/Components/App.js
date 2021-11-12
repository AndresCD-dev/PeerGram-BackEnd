import "../App.css"
import React, {Fragment} from 'react';
import Login from './Login';
import SignUp from "./SignUp";
import Post from "./Post";
import { useEffect } from "react"
import { useState } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Profile from "./Profile";
import EditProfile from "./EditProfile";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [formDetails, setFormDetails] = useState({})
  const [userInfo, setUserInfo] = useState({});
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/posts`)
      .then((r) => r.json())
      .then(setPosts);
  }, [])


  useEffect(() => {
    if (!userInfo.id){
      fetch(`http://localhost:3000/user`, {
        method: "GET",
        headers: {
          'Accept':  'application/json',
         'Content-Type': 'application/json',
         'Cache': 'no-cache'
        },
        credentials: 'include'
      })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        if (data.id){
          setUserInfo({
            username: data.username,
            id: data.id
          })
          setLoggedIn(true)
        }
      })
    }
  }, [userInfo.id])

  useEffect(() => {
      console.log(loggedIn)
      fetch(`http://localhost:3000/user`, {
        method: "GET",
        headers: {
          'Accept':  'application/json',
         'Content-Type': 'application/json',
         'Cache': 'no-cache'
        },
        credentials: 'include'})
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setUserInfo({
          username: data.username,
          id: data.id
        })
      })
    }, [loggedIn])
  return (
    <Router>
      
    <div className="App">
    <Fragment>
      { loggedIn ? <NavBar setLoggedIn={setLoggedIn} posts={posts} setPosts={setPosts}/> : null}
      <Routes>
            <Route exact path='/' element={<Login login={loggedIn} setLogin={setLoggedIn} />} />
            <Route exact path='/signup' element={<SignUp setLogin={setLoggedIn}/>} />
            <Route exact path='/main' element={<Post posts={posts}/>}/>
            <Route exact path='/profile' element={<Profile posts={posts}/>}/>
            <Route exact path='/edit' element={<EditProfile formDetails={formDetails} setFormDetails={setFormDetails}/>}/>
      </Routes>
    </Fragment>
    </div>
    </Router>
  );
}

export default App;