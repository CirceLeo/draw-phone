import {useState} from 'react'

function GameEndScreen({drawingData, prepNewGame, picUrl, closeModal, newDrawingId, challenge}) {

    console.log(challenge)

    const [inputTitle, setInputTitle] = useState('')
    const [titleChagned, setTitleChanged] = useState(false)

    let renderedAttempts = []

    if(challenge.attempts)
        { if (challenge.attempts.length > 0){
        renderedAttempts = challenge.attempts.map(attempt => {
            return(
                <>
                <img src={attempt.attempt_data_url} />
                </>
            )
        })
    }}

    function handleAddTitle(){

        let destination = 'drawings'
        if(challenge.id){
            destination = 'attempts'
        }
        fetch(`/${destination}/${newDrawingId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                title: inputTitle
            })
        })
        .then( res => (res.json()))
        .then(() => setTitleChanged(true) )
        .catch( error => console.log(error.message));
    }

    return (
        <div className="gameEnd">
            <button className="close-button" onClick={prepNewGame}>X</button>
            <h2 className='time-up'>Time's Up!</h2>
            <div id="result-pics">
                <div>
                    <p>This is what you were trying to draw:</p>
                    <img src={picUrl} />
                </div>
                <div>
                    <p>And this is what you did:</p>
                    <img src={drawingData}/>
                </div>
            </div>

            {titleChagned ? 
            <p>Awesome! Your artwork will be known as <strong>{inputTitle}</strong></p>
            :
            <>
                <br/>
                <label>Would you like to give your drawing a title?</label>
                <br/>
                <form onSubmit={handleAddTitle}>
                    <input placeholder='Your title here!' type='text'onChange={(e)=>setInputTitle(e.target.value)}/>
                    <button  className='game-button' type='submit'>submit title</button>
                </form>
            </>
            }

            {
                challenge.id ? 
                <>
                <p>Want to send this challenge to your friends? click 
                    <button  className='game-button' onClick={() => {navigator.clipboard.writeText(`https://mighty-scrubland-25079.herokuapp.com/play/challenge/${challenge.id}`)}}>
                    here!</button> to copy the link to your clipboard!</p>
                <p>Here's what other people did!</p>
                <div className='rendered-attempts'>

                    {renderedAttempts  }
                </div>
                </> :
                null
            }

            
            <br/>
            <button className='game-button' onClick={prepNewGame}>{challenge.id ? 'Play a new game?' : 'Play Again?'}</button>
        </div>
    )
}
export default GameEndScreen