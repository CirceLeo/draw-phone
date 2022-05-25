import {useEffect, useState} from 'react'

function RecentDrawingDisplay({displayPics}) {

    const [friendToAdd, setFriendToAdd] = useState({})

    function openAddFriend(friendToAdd){
        console.log(friendToAdd)
    }

    const renderedDrawings = displayPics.map((drawing) => {
        return (
                <div key={drawing.id}  className="display-drawing flip-card">
                    {/* TODO: change schema of drawings to include origin topics and time spent, then put here */}
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
                            <p><strong>Title: </strong> {drawing.title ? drawing.title :` untitled piece ${drawing.id}`}</p>
                            {/* var dataURI = canvas.toDataURL("image/jpeg", 0.2);  // type, enc. option <0.0, 1.0] */}
                        </div>
                    </div>
                </div>
            )
    })
    
    return (
        <div className="drawing-display">
            {renderedDrawings}
        </div>
    )
}
export default RecentDrawingDisplay