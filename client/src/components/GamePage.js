import '../App.css';
import '../game.css';
import React, {useEffect, useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import CanvasDraw from 'react-canvas-draw';
import Header from './Header'
import {GithubPicker} from 'react-color'

function GamePage(props) {

    const [picUrl, setPicUrl] = useState('')
    const [drawing, setDrawing] = useState()
    const [isShown, setIsShown] = useState(true)
    const canvasRef = useRef(null)

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
  // loadImg()

    const handleExport = () => {
        // console.log(canvasRef)
        const base64 = canvasRef.current.canvasContainer.childNodes[1].toDataURL();
        setDrawing(base64);
        // console.log(base64)
    };

    const canvas =  <CanvasDraw 
        className='canvas'
        brushColor="rgba(155,12,60)"
        hideGrid
        hideInterface
        brushRadius={2}
        ref={canvasRef}
        // imgSrc={picUrl}
    />

    return (
        <div id="game-page">
            <Header />
            <h1>is game wow</h1>
            <div id='goal-pic-div'>
                { isShown ? <img src={picUrl} /> : null }
            </div>
        <div 
            id="main" 
            onMouseEnter={() => setIsShown(false)}
            onMouseLeave={() => setIsShown(true)}
        >
            {canvas}
        </div>
        {/* <input type="color"/> */}
        <GithubPicker />
        <button
            onClick={() => {
            console.log("erase")
            }}>
            Erase
        </button>
        <button
            onClick={() => {
            handleExport()
            // console.log("SAVE")
            }}>
            save
        </button>
        <img src={drawing}/>
        </div>
    )
}
export default GamePage