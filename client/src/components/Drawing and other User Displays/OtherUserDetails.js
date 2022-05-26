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

    function addFriendship(){
        fetch(`/friendships`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                user_id: user.id,
                friend_id: displayID
            })
        })
        .then( res => res.json())
        .then( data => console.log(data))
        .catch( error => console.log(error.message));
    }

    // console.log(displayUser.drawings)
    let alreadyFriends = false
    if (user.username){
        alreadyFriends = user.friends.find(friend => friend.id === displayID)
    }
    
    return (
        <div id="show-other-user">
            <button className="close-button" onClick={closeOtherUser}>X</button>
            { user.id !== displayID ?
                <>
                    <h2>Artist detail: {displayUser.username}</h2> 
                    { user.username ? 
                    <>{
                        alreadyFriends ? 
                        <p>You're friends already!</p> 
                        :
                        <button onClick={addFriendship}>Befriend this user?</button>
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