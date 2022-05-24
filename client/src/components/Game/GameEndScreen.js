function GameEndScreen({drawingData, picUrl, closeModal, newDrawingId}) {
    // console.log(newDrawingId)
    function handleAddTitle(){
        
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
            <input type='text'/>
            <button>submit title</button>
            <br/>
            <button>Play Again?</button>
        </div>
    )
}
export default GameEndScreen