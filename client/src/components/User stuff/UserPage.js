import Header from "../Admin/Header"
import Footer from "../Admin/Footer";

import { useContext, useEffect, useState } from "react"
import { UserContext, userObject } from "../../context/user";
import RecentDrawingDisplay from "../RecentDrawingDisplay";

function UserPage(props) {
    const [user, setUser] = useContext(UserContext)
    const [userPics, setUserPics] = useState([])

    useEffect(() => {
        if(user.id){
            fetch(`user_details/${user.id}`)
            .then(resp => resp.json())
            .then(data => setUserPics(data))
        }
    }, [])
    
    return (
        <div id="user-page">
            <Header />
            { user.username ? 
            <>
                <p>hi there, {user.username}</p>

                <div className="user-friends">
                    {
                        user.followers.length > 0 ?
                        <>
                            <p>how do you have a friend</p>
                        </>
                        :
                        <>
                            <p>sorry buddy, you have not friends</p>
                        </>
                    }
                </div>

                <div className="user-drawings">
                {user.drawings.length > 0 ? 
                    <> 
                        <h3>Here are some of your masterpieces</h3> 
                        <RecentDrawingDisplay displayPics={userPics}/> 
                    </> 
                    : 
                    <>
                    <h3>We have no artworks attributed to you, alas</h3>
                    <p>Why not <a href="/play">play</a> a few rounds?</p>
                    </>
                }
                </div>
            </>
            :
            <>
            <p>User page loading!</p>
            <p>Click <a href="/play">here</a>to play instead!</p>
            </>
        }
            <Footer />
        </div>

    )
}
export default UserPage