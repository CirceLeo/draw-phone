import { useEffect } from "react"

function OtherUserDetails({displayID, closeOtherUser}) {

    // useEffect(() => {
    //     fetch(`/users/${shownUserID}`)
    //     .then(resp => resp.json())
    //     .then(shownUser => console.log(shownUser))
    // }, [])
    
    return (
        <div id="add-friend-form">
            <button onClick={closeOtherUser}>X</button>
        </div>
    )
}
export default OtherUserDetails