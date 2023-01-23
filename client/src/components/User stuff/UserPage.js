import Header from "../Admin/Header"
import Footer from "../Admin/Footer";

import { useContext, useEffect, useState } from "react"
import { UserContext, userObject } from "../../context/user";
import RecentDrawingDisplay from "../Drawing and other User Displays/RecentDrawingDisplay";
import FriendsList from "./FriendList";
import Loader from "../Admin/Loader";
import CreateChallengeForm from "../Challenges/CreateChallengeForm";

function UserPage(props) {
    const [user, setUser] = useContext(UserContext)
    const [userPics, setUserPics] = useState([])
    const [friendships, setFriendships] = useState([])
    
    useEffect(() => {
            if(user.id){
                fetch(`user_details/${user.id}`)
                .then(resp => resp.json())
                .then(data => {
                    setUserPics(data.drawings)
                    setFriendships(data.friendships)
                })
            } else{
                console.log('yeah i couldnt find a user soz')
            }
    }, [user])
    
    return (
        <div id="user-page">
            <Header />
            {/* <Loader /> */}
            <div className="gallery-spacer"></div>
            { user.username ? 
            <>
                <h2 className="user-header">hi there, <em>{user.username}</em></h2>

                <div className="user-drawings lineUp">
                {user.drawings.length > 0 ? 
                    <> 
                        <h3>Here are all of your masterpieces</h3> 
                        <RecentDrawingDisplay displayPics={userPics} artistDetails={false} userPage={true}/> 
                    </> 
                    : 
                    <>
                    <h3>We have no artworks attributed to you! </h3>
                    <h3>Why not <a href="/play" style={{color:"white"}}>play</a> a few rounds?</h3>
                    </>
                }
                </div>
            </>
            :
            <>
            <h1 className="loading-msg">User page loading!</h1>
            <Loader />
            </>
        }
        
        <div className="gallery-spacer"></div>

            <Footer />
        </div>

    )
}
export default UserPage