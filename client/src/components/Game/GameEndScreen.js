function GameEndScreen({drawingData, picURL, closeModal}) {
    
    return (
        <div className="gameEnd">
            <button onClick={closeModal}>X</button>
            <p>This is what you were trying to draw:</p>
            <img src={picUrl} />
            <p>And this is what you did:</p>
            <img src={drawingData}/>
            <label>Would you like to give your drawing a title?</label>
            <input type='text'/>
            <button>Play Again?</button>
        </div>
    )
}
export default GameEndScreen