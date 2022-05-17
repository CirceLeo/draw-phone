import './styling/App.css';
import React, {useEffect, useState, useRef, useContext} from 'react';
import ReactDOM from 'react-dom';
import CanvasDraw from 'react-canvas-draw';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {UserProvider} from './components/context/user'
import WelcomePage from './components/WelcomPage';
import GamePage from './components/GamePage';
import UserPage from './components/UserPage';



function App() {

  // const [user, setUser] = useContext(UserContext)

  // useEffect( () => {
  //   fetch("/me")
  //   .then(res => {
  //     if (res.ok) {
  //       // console.log(res)
  //       res.json().then(user => setUser(user))
  //     }
  //     else {
  //       console.log("fetch failed")
  //     }
  //   })}, []) 

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
