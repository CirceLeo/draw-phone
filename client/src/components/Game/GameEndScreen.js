import {useState} from 'react'

function GameEndScreen({drawingData, prepNewGame, picUrl, closeModal, newDrawingId}) {

    const [inputTitle, setInputTitle] = useState('')
    const [titleChagned, setTitleChanged] = useState(false)

    function handleAddTitle(){
        fetch(`/drawings/${newDrawingId}`, {
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
            <h2>Time's Up!</h2>
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
                    <button type='submit'>submit title</button>
                </form>
            </>
            }
            <br/>
            <button onClick={prepNewGame}>Play Again?</button>
        </div>
    )
}
export default GameEndScreen