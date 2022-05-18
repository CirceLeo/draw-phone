import React, {useEffect, useState} from 'react';
import Header from '../Header'
import GameCanvas from './GameCanvas';
import GameTimer from './GameTimer';

function GamePage(props) {

    const [gameActive, setGameActive] = useState(false)
    const [picUrl, setPicUrl] = useState('')
    const [drawingData, setDrawingData] = useState()
    const [isShown, setIsShown] = useState(false)
    // console.log(isShown)

    const client_id = 'dixX_GB7IbetuPLpQS9-JATQ8GI3j7nJlA3udPSmDZw'

    useEffect(() => {
        loadImg()
    }, [])

    function loadImg(){
        const url = `https://api.unsplash.com/photos/random?query=dog&client_id=${client_id}`
        fetch(url)
        .then( res => res.json())
        .then(data => setPicUrl(data.urls.raw))
        .catch( error => console.log(error.message));
    }

    function handleStart(){
        // loadImg()
        setIsShown(true)
        setGameActive(true)
    }

    function handleGameEnd(){
        setGameActive(false)
        setIsShown(true)
    }

    const handleExport = () => {
        console.log(drawingData)
        fetch(`/drawings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                user_id: 1,
                data_url: drawingData,
                origin_pic_url: picUrl
            })
        })
        .then( res => res.json())
        .then( data => console.log(data))
        .catch( error => console.log(error.message));
    };

    return (
        <div id="game-page">
            <Header />
            <GameTimer handleGameEnd={handleGameEnd} gameActive={gameActive} />
            <button onClick={handleStart}> Start</button>
            <div id='goal-pic-div'>
                { isShown ? <img src={picUrl} /> : null }
            </div>
            <div 
                id="game-canvas" 
                onMouseEnter={() => {if(gameActive){setIsShown(false)}}}
                onMouseLeave={() => {if(gameActive){setIsShown(true)}}}
            >
                <GameCanvas setDrawingData={setDrawingData} OriginPicUrl={picUrl} handleExport={handleExport} />
            </div>

            <img src={drawingData}/>
        </div>
    )
}
export default GamePage