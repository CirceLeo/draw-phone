import {useState} from 'react'

function GameEndScreen({drawingData, picUrl, closeModal, newDrawingId}) {

    const [inputTitle, setInputTitle] = useState('')
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
        .then( res => {console.log(res.json())})
        // .then(recieved )
        .catch( error => console.log(error.message));
    }
    return (
        <div className="gameEnd">
            <button className="close-button" onClick={closeModal}>X</button>
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
            <br/>
            <label>Would you like to give your drawing a title?</label>
            <br/>
            <form onSubmit={handleAddTitle}>
                <input type='text'onChange={(e)=>setInputTitle(e.target.value)}/>
                <button type='submit'>submit title</button>
            </form>
            <br/>
            <button>Play Again?</button>
        </div>
    )
}
export default GameEndScreen