import {NavLink, useNavigate, useLocation} from 'react-router-dom';
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/user";
import '../../styling/header.css'
import HowToPlay from './HowToPlay';
import logo from '../../images/sketcheelogo.png'

import useSound from "use-sound"


function Header(props) {

    const [user, setUser] = useContext(UserContext)
    const [howToOpen, setHowToOpen] = useState(true)

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
            <img src={logo} onClick={() => navigateTo('/')} className='logo'/>
            {/* TODO: fix the spacing and sizing of the img, 
            also make it clickable and replace the home btn */}
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
                <NavLink to = '/gallery'>Gallery</NavLink>
                <NavLink to = '/play'>Play!</NavLink> 
                { location.pathname === '/play' ? <button onClick={openHowTo}className='header-btn'>How to Play</button> : null}
                { user.username ?
                    <>
                        <NavLink to ='/me'>User Page</NavLink> 
                        <button  onClick={handleLogOut} className='header-btn'>Log Out</button>
                    </>: 
                    null}                
            </nav>
        </div>
    )
}
export default Header