import {NavLink, useNavigate} from 'react-router-dom';
import React, { useContext } from "react";
import { UserContext } from "../context/user";
import '../styling/header.css'

function Header(props) {

    const [user, setUser] = useContext(UserContext)

    const navigateTo = useNavigate()

    function handleLogOut(){
        console.log("bye")
        fetch(`/logout`, { method: "DELETE" })
        .then( res => console.log(res))
        .then(() => 
        { navigateTo("/") 
            setUser({})
        })
        // .then(data => console.log(data))
        // .then( data => console.log(data))
        .catch( error => console.log(error.message));
    }
    
    
    return (
        <div id="header">
            { user.username ? <p>{user.username}</p> : <p> No one is logged in</p>}
            <h3>Im a header look at me go</h3>
            <nav>
                <NavLink to = '/'>Home</NavLink>
                <NavLink to ='/me'>User Page</NavLink>
                <NavLink to = '/play'>Play!</NavLink>
                {/* TODO: conditional render logout but */}
                <button  onClick={handleLogOut} className='header-btn'>Log Out</button>

            </nav>
        </div>
    )
}
export default Header