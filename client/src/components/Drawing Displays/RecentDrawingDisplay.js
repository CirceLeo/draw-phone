import {useEffect, useState} from 'react'
import OtherUserDetails from './OtherUserDetails'

function RecentDrawingDisplay({displayPics}) {

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
                <div key={drawing.id} className=" display-drawing flip-card">
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img 
                                src={drawing.data_url} 
                                onMouseOver={e => (e.currentTarget.src = drawing.origin_pic_url)}
                                onMouseOut={e => (e.currentTarget.src = drawing.data_url)}
                            />
                        </div>
                        {/* <div className='flip-card-back'>
                            <img src={drawing.origin_pic_url}/>
                        </div> */}
                        <div className='display-drawing-text'>
                            <p><strong>Artist: </strong> {drawing.user.username !== "guest"  ? <em className='clickable-username' onClick={() => openAddFriend(drawing.user.id)}>{drawing.user.username}</em>: "anon"}</p>
                            <p><strong>Title: </strong> <em> {drawing.title ? drawing.title :` untitled piece ${drawing.id}`}</em></p>
                            <p><strong>Completed in:</strong> {drawing.play_time ? <em>{drawing.play_time} seconds</em> : "unknown" }  </p>
                            {/* var dataURI = canvas.toDataURL("image/jpeg", 0.2);  // type, enc. option <0.0, 1.0] */}
                        </div>
                    </div>
                </div>
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