import logo from '../../images/sketcheelogo.png'

function HowToPlay({closeHowTo}) {
    
    return (
        <div id="how-to">
            <button className="close-button" onClick={closeHowTo}>X</button>
            <h2 id="how-to-header">Welcome to the <em>Sketchee</em> artists' studio</h2>
            <h4>how to play:</h4>
            <p>Choose what you want to draw</p>
            <p>Pick your time limit</p>
            <p>Click start</p>
            <p>draw like the wind! (or at least paint with all its colors)</p>
        </div>
    )
}
export default HowToPlay