import Header from "../Admin/Header"
import Footer from "../Admin/Footer";

import { useContext, useEffect } from "react"
import { UserContext, userObject } from "../../context/user";
import RecentDrawingDisplay from "../RecentDrawingDisplay";

function UserPage(props) {
    const [user, setUser] = useContext(UserContext)
    console.log("username in userpage", user.username)
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

    // console.log(user.drawings)
    
    return (
        <div id="user-page">
            <Header />
            { user.username ? 
            <>
                <p>hi there, {user.username}</p>

                {user.drawings.length > 0 ? 
                    <> 
                        <h3>Here are some of your masterpieces</h3> 
                        <RecentDrawingDisplay displayPics={user.drawings}/> 
                    </> 
                    : 
                    <>
                    <h3>We have no artworks attributed to you, alas</h3>
                    <p>Why not <a href="/play">play</a> a few rounds?</p>
                    </>
                }
            </>
            :
            <p>User page loading!</p>
        }
            <Footer />
        </div>

    )
}
export default UserPage