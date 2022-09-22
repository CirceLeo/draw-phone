import {NavLink, useNavigate, useLocation} from 'react-router-dom';
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/user";
import '../../styling/header.css'
import HowToPlay from './HowToPlay';
import logo from '../../images/sketcheelogo.png'

import LoginForm from '../User stuff/LoginForm';
import SignUpForm from '../User stuff/SignUpForm';

import useSound from "use-sound"


function Header(props) {

    const [user, setUser] = useContext(UserContext)
    const visited = localStorage.getItem("everVisited")
    const [howToOpen, setHowToOpen] = useState(!visited)

    const [modalOpen, setModalOpen] = useState(false);
    const [modalDisplay, setModalDisplay] = useState('')

    
    function openLoginModal(e) {
        setModalOpen(true)
        setModalDisplay("login")
    }

    function openSignupModal(e) {
        setModalOpen(true)
        setModalDisplay("signup")
    }

    function closeModal(){
        setModalOpen(false)
    }

    const navigateTo = useNavigate()
    let location = useLocation()

    function handleLogOut(){
        console.log("bye")
        fetch(`/logout`, { method: "DELETE" })
        .then( res => console.log(res))
        .then(() => 
        { navigateTo("/play") 
            setUser({})
        })
        .catch( error => console.log(error.message));
    }
    
    function openHowTo(){
        setHowToOpen(true)
    }

    function closeHowTo(){
        setHowToOpen(false)
    }
    
    return (
        <div id="header">
            {
                modalOpen && (
                    <>
                    <div className="overlay" onClick={closeModal}></div>
                    <div className="modal">
                        { modalDisplay==="login" ? <LoginForm closeModal={closeModal} openSignupModal={openSignupModal} /> : null}
                        { modalDisplay==="signup" ? <SignUpForm closeModal={closeModal} /> : null}
                    </div>
                    </>
                )
            }
            <div className='header-content'>
            <img src={logo} onClick={() => navigateTo('/')} className='logo'/>

            {
                (howToOpen && location.pathname === '/play') && (
                    <>
                        <div className="overlay" onClick={closeHowTo}></div>
                        <div className="modal">
                            <HowToPlay closeHowTo={closeHowTo}/>
                        </div>
                    </>
                )
            } 
            {/* { user.username ? <p>{user.username}</p> : <p> No one is logged in</p>} */}
            <nav>
                {/* <NavLink to = '/'>Home</NavLink> */}
                {/* <NavLink to = '/gallery'>Gallery</NavLink> */}
                <NavLink to = '/play'>Play!</NavLink> 
                { location.pathname === '/play' ? <button onClick={openHowTo}className='header-btn'>How to Play</button> : null}
                { user.username ?
                    <>
                        <NavLink to ='/me'>User Page</NavLink> 
                        <button  onClick={handleLogOut} className='header-btn'>Log Out</button>
                    </>: 
                        <button className='header-btn' onClick={openLoginModal}>Login?</button>
                }                
            </nav>
        </div>
        </div>
    )
}
export default Header