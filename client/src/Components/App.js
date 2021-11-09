import "../App.css"
import React, {Fragment} from 'react';
import Login from './Login';
import SignUp from "./SignUp";
import Post from "./Post";
import { useEffect } from "react"
import { useState } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  const [login, setLogin] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/posts`)
      .then((r) => r.json())
      .then(setPosts);
  }, [])


  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      console.log("user found")

      console.log(loggedInUser)

      fetch(`http://localhost:3000/user/${login}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setUserInfo({
          username: data.username,
          id: data.id
        })
        setLogin(loggedInUser)
      })
    }
  }, [])

  useEffect(() => {
    if (login !== "") {
      console.log(login)
      fetch(`http://localhost:3000/user/${login}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setUserInfo({
          username: data.username,
          id: data.id
        })
        localStorage.setItem('user', login)
      })
    }
    }, [login])
  return (
    <Router>
      
    <div className="App">
    <Fragment>
        <NavBar/>
      <Routes>
            <Route exact path='/' element={<Login login={login} setLogin={setLogin} />} />
            <Route exact path='/signup' element={<SignUp setLogin={setLogin}/>} />
            <Route exact path='/main' element={<Post posts={posts}/>}/>
      </Routes>
    </Fragment>
    </div>
    </Router>
  );
}

export default App;
