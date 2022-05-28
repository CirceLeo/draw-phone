import {useEffect, useState} from 'react'
import DisplayDrawing from './DisplayDrawing'
import OtherUserDetails from './OtherUserDetails'

function RecentDrawingDisplay({displayPics, artistDetails, userPage}) {

    const [userToShow, setUserToShow] = useState({})
    const [otherUserOpen, setOtherUserOpen] = useState(false)

    function openAddFriend(clickedUser){
        setUserToShow(clickedUser)
        openOtherUser()
    }

    function openOtherUser(){
        setOtherUserOpen(true)
    }

    function closeOtherUser(){
        setOtherUserOpen(false)
    }

    const renderedDrawings = displayPics.map((drawing) => {
        return (
                <DisplayDrawing 
                    drawing={drawing} 
                    artistDetails={artistDetails} 
                    openAddFriend={openAddFriend}
                    userPage={userPage} 
                />
            )
    })
    
    return (
        <div className="drawing-display">
            {otherUserOpen && (
                        <>
                            <div className="overlay"></div>
                            <div className="modal">
                                <OtherUserDetails closeOtherUser={closeOtherUser} displayID={userToShow}/>
                            </div>
                        </>
                    )}
            {renderedDrawings}
        </div>
    )
}
export default RecentDrawingDisplay