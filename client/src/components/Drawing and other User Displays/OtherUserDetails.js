import { useEffect, useState, useContext } from "react"
import { UserContext } from "../../context/user"
import RecentDrawingDisplay from "./RecentDrawingDisplay"

function OtherUserDetails({displayID, closeOtherUser}) {
    const [user, setUser] = useContext(UserContext)
    const [displayUser, setDisplayUser] = useState({})

    useEffect(() => {
        if (!user.username || user.id !== displayID){
            fetch(`/users/${displayID}`)
            .then(resp => resp.json())
            .then(shownUser => setDisplayUser(shownUser))
        }
    }, [])

    // console.log(displayUser.drawings)
    let alreadyFriends = false
    if (user.username){
        alreadyFriends = user.followers.find(friend => friend.id === displayID)
    }
    
    return (
        <div id="show-other-user">
            <button onClick={closeOtherUser}>X</button>
            { user.id !== displayID ?
                <>
                    <h2>Artist detail: {displayUser.username}</h2> 
                    { user.username ? 
                    <>{
                        alreadyFriends ? 
                        <p>You're friends already!</p> 
                        :
                        <button>make a friend</button>
                    }</>
                    : null}
                    <p>let's look at what they've done</p>
                    { displayUser.drawings ? <RecentDrawingDisplay artistDetails={false} displayPics={displayUser.drawings} /> : <p>loading artist's recent works!</p>}
                </>
                :
                <>
                    <p>gurl THIS IS YOU get it together</p>
                </>

            }
        </div>
    )
}
export default OtherUserDetails