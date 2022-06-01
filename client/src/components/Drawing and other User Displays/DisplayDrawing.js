import {useState} from 'react'
import CreateChallengeForm from '../Challenges/CreateChallengeForm'

function DisplayDrawing({drawing, artistDetails, userPage, openAddFriend}) {

    console.log(drawing)

    const [backPicLoaded, setBackPicLoaded] = useState(false)
    const [challengeOpen, setChallengeOpen] = useState(false)

    function closeChallenge(){
        setChallengeOpen(false)
    }

    function openChallenge(){
        setChallengeOpen(true)
    }

    const contentLoading = <div className='display-pic-loading'><p>origin pic loading!</p></div>

    return (
        <div key={drawing.id} className=" display-drawing flip-card">
            {
                challengeOpen && (
                    <>
                    <div className="overlay" onClick={closeChallenge}></div>
                    <div className="modal challenge-modal">
                        <CreateChallengeForm drawingId={drawing.id} close={closeChallenge}/>
                    </div>
                    </>
                )
            }
            <div className='flip-card-content'>
                <div className='flip-card-front'>
                    <img src={drawing.data_url} />
                </div>
                <div className='flip-card-back'>
                    {backPicLoaded ? null : <>{contentLoading}</>}
                    <img onLoad={() => setBackPicLoaded(true)} src={drawing.origin_pic_url}/> 
                </div>
            </div>
            <div className='display-drawing-text'>
                    {artistDetails ?  <p><strong>Artist: </strong> {drawing.user.username !== "guest"  ? <em className='clickable-username' onClick={() => openAddFriend(drawing.user.id)}>{drawing.user.username}</em>: "anon"}</p> : null}
                    <p><strong>Title: </strong> <em> {drawing.title ? drawing.title :` untitled piece ${drawing.id}`}</em></p>
                    <p><strong>Completed in:</strong> {drawing.play_time ? <em>{drawing.play_time} seconds</em> : "unknown" }  </p>
                    {userPage ? 
                        <button className="create-chal-btn" onClick={openChallenge}>create a challenge?</button>
                        : null
                    }
                    {/* {challengeOpen ? <CreateChallengeForm  drawingId={drawing.id} close={()=> setChallengeOpen(false)}/> : null} */}
                    {/* var dataURI = canvas.toDataURL("image/jpeg", 0.2);  // type, enc. option <0.0, 1.0] */}
            </div>
        </div>
    )
}
export default DisplayDrawing