import Header from "./Header"
import Footer from "./Footer";

import { useContext, useEffect } from "react"
import { UserContext, userObject } from "../context/user";
import RecentDrawingDisplay from "./RecentDrawingDisplay";

function UserPage(props) {
    const [user, setUser] = useContext(UserContext)
    // const [userPics, setUserPics] = useState([])

    // useEffect( () => {
    //     console.log("fetching from the userpage")
    //     fetch("http://localhost:4000/me")
    //     .then(res => {
    //         if (res.ok) {
    //             console.log(res)
    //         // res.json().then(user => setUser(user))
    //         }
    //         else {
    //         console.log("fetch failed")
    //         }
    //     })}, []) 

    // useEffect(() => {
    //     fetch('/drawings')
    //     .then(resp => resp.json())
    //     .then(data => setRecentPics(data))
    // }, [])

    console.log(user.drawings)
    
    return (
        <div id="user-page">
            <Header />
            <p>You are a user, good job, babe</p>
            <p>{user.username}</p>
            <h3>Here are some of your masterpieces</h3>
            <RecentDrawingDisplay displayPics={user.drawings}/>
            <Footer />
        </div>

    )
}
export default UserPage