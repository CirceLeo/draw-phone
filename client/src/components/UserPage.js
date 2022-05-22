import Header from "./Header"

import { useContext, useEffect } from "react"
import { UserContext, userObject } from "../context/user";

function UserPage(props) {
    const [user, setUser] = useContext(UserContext)
    useEffect( () => {
        console.log("fetching from the userpage")
        fetch("http://localhost:4000/me")
        .then(res => {
            if (res.ok) {
                console.log(res)
            // res.json().then(user => setUser(user))
            }
            else {
            console.log("fetch failed")
            }
        })}, []) 
    
    return (
        <div id="user-page">
            <Header />
            <p>You are a user, good job, babe</p>
            <p>{user.username}</p>
        </div>

    )
}
export default UserPage