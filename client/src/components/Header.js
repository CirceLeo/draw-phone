import {NavLink, useNavigate} from 'react-router-dom';
import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import '../styling/header.css'
import HowToPlay from './HowToPlay';

function Header(props) {

    const [user, setUser] = useContext(UserContext)
    const [howToOpen, setHowToOpen] = useState(false)

    const navigateTo = useNavigate()

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
            <h3>Im a header look at me go</h3>
            {
                howToOpen && (
                    <>
                        <div className="overlay"></div>
                        <div className="modal">
                            <HowToPlay closeHowTo={closeHowTo}/>
                        </div>
                    </>
                )
            }
            {/* { user.username ? <p>{user.username}</p> : <p> No one is logged in</p>} */}
            <nav>
                <NavLink to = '/'>Home</NavLink>
                { user.username ?
                    <>
                        <NavLink to ='/me'>User Page</NavLink> 
                        <button  onClick={handleLogOut} className='header-btn'>Log Out</button>
                    </>: 
                    null}                
                <NavLink to = '/play'>Play!</NavLink>
                <button onClick={openHowTo}className='header-btn'>How to Play</button>
            </nav>
        </div>
    )
}
export default Header