import './styling/App.css';
import './styling/App.css';
import './styling/game.css';
import './styling/welcome.css';
import './styling/modal.css'
import './styling/userAdmin.css'
import './styling/Gallery.css'
import './styling/drawingDisplay.css'
import './styling/challenges.css'


import React, {useEffect, useState, useRef, useContext} from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import WelcomePage from './components/WelcomPage';
import GamePage from './components/Game/GamePage';
import UserPage from './components/User stuff/UserPage';

import { UserContext, userObject } from "./context/user";
import Gallery from './components/Gallery/Gallery';
import GalleryChallengePage from './components/Gallery/GalleryChallengePage';


function App() {
  const [user, setUser] = useContext(UserContext)

  useEffect( () => {
    fetch("/me")
    .then(res => {
      if (res.ok) {
        res.json().then(recievedUser => {setUser(recievedUser)})
      }
      else {
        console.log("couldn't find a saved user")
      }
    })}, []) 

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='*' element={<WelcomePage />} />

          <Route path='/me' element={<UserPage />} />

          <Route path='/play/challenge/:id' element={<GamePage challenges={true} />} />
          <Route path='/play' element={<GamePage challenges={false}/>} />

          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/gallery/challenges' element={<Gallery/>} />
          <Route path='/gallery/challenges/:id' element={<GalleryChallengePage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
