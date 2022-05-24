import './styling/App.css';
import './styling/App.css';
import './styling/game.css';
import './styling/welcome.css';
import './styling/modal.css'
import './styling/userAdmin.css'

import React, {useEffect, useState, useRef, useContext} from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import WelcomePage from './components/WelcomPage';
import GamePage from './components/Game/GamePage';
import UserPage from './components/User stuff/UserPage';

import { UserContext, userObject } from "./context/user";


function App() {
  const [user, setUser] = useContext(UserContext)

  useEffect( () => {
    console.log("ok let's look for a user")
    fetch("/me")
    .then(res => {
      if (res.ok) {
        res.json().then(recievedUser => {setUser(recievedUser) 
          console.log("set user as", recievedUser.username)})
      }
      else {
        console.log("fetch failed")
      }
    })}, []) 

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/play' element={<GamePage />} />
          <Route path='/me' element={<UserPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
