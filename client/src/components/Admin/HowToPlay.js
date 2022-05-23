function HowToPlay({closeHowTo}) {
    
    return (
        <div className="how-to">
            <button className="close-button" onClick={closeHowTo}>X</button>
            <h2>Welcome to [GAME NAME]</h2>
            <p>how to play</p>
        </div>
    )
}
export default HowToPlay