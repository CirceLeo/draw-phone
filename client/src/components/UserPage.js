import Header from "./Header"

import { useContext } from "react"
import { UserContext, userObject } from "../context/user";

function UserPage(props) {
    const [user, setUser] = useContext(UserContext)
    
    return (
        <div id="user-page">
            <Header />
            <p>You are a user, good job, babe</p>
            <p>{user.username}</p>
        </div>

    )
}
export default UserPage