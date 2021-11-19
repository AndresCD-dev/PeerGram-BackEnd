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
import FriendProfile from "./FriendProfile";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [formDetails, setFormDetails] = useState({})
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [change, setChange] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/posts`)
      .then((r) => r.json())
      .then(setPosts);
  }, [posts.length, comments.length])

  useEffect(() => {
    fetch(`http://localhost:3000/comments`)
      .then((r) => r.json())
      .then(setComments);
  }, [comments.length])

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
        setUser(data)
        setUserInfo({
          username: data.username,
          id: data.id
        })
      })
    }, [loggedIn, change])
  return (
    <Router>
      
    <div className="App">
    <Fragment>
      { loggedIn ? <NavBar setLoggedIn={setLoggedIn} posts={posts} setPosts={setPosts}/> : null}
      <Routes>
            <Route exact path='/' element={<Login login={loggedIn} setLogin={setLoggedIn} />} />
            <Route exact path='/signup' element={<SignUp setLogin={setLoggedIn}/>} />
            <Route exact path='/main' element={<Post setPosts={setPosts} posts={posts} setComments={setComments} comments={comments} user={user} loggedIn={loggedIn}/>}/>
            <Route exact path='/profile' element={<Profile user={user}/>}/>
            <Route exact path='/edit' element={<EditProfile formDetails={formDetails} setFormDetails={setFormDetails} change={change} setChange={setChange}/>}/>
            <Route exact path='/friend/:id' element={<FriendProfile user={user}/>}/>
      </Routes>
    </Fragment>
    </div>
    </Router>
  );
}

export default App;
