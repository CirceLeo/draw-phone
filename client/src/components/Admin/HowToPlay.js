function HowToPlay({closeHowTo}) {
    
    return (
        <div className="how-to">
            <button className="close-button" onClick={closeHowTo}>X</button>
            <h2>Welcome to the Sketchee artists' studio</h2>
            <h4>how to play:</h4>
            <p>Choose what you want to draw</p>
            <p>Limit your own time</p>
            <p>click start</p>
            <p>draw like the wind! (or at least paint with all its colors)</p>
        </div>
    )
}
export default HowToPlay