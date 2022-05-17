import '../styling/App.css';
import '../styling/game.css';
import React, {useEffect, useState} from 'react';
import Header from './Header'
import GameCanvas from './GameCanvas';
import GameTimer from './GameTimer';

function GamePage(props) {

    const [picUrl, setPicUrl] = useState('')
    const [drawing, setDrawing] = useState()
    const [isShown, setIsShown] = useState(true)

    const client_id = 'dixX_GB7IbetuPLpQS9-JATQ8GI3j7nJlA3udPSmDZw'

    function loadImg(){
        const url = `https://api.unsplash.com/photos/random?query=dog&client_id=${client_id}`
        fetch(url)
        .then( res => res.json())
        .then(data => setPicUrl(data.urls.raw))
        .catch( error => console.log(error.message));
    }

//   useEffect(() => {
//     loadImg()
//   }, [])

    return (
        <div id="game-page">
            <Header />
            <GameTimer />
            <div id='goal-pic-div'>
                { isShown ? <img src={picUrl} /> : null }
            </div>
            <div 
                id="game-canvas" 
                onMouseEnter={() => setIsShown(false)}
                onMouseLeave={() => setIsShown(true)}
            >
                <GameCanvas setDrawing={setDrawing} />
            </div>

            <img src={drawing}/>
        </div>
    )
}
export default GamePage