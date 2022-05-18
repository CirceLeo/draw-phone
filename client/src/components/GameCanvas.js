import React, {useEffect, useState, useRef} from 'react';
import {CirclePicker, GithubPicker} from 'react-color';
import CanvasDraw from 'react-canvas-draw';


function GameCanvas({setDrawing, OriginPicUrl}) {

    const [brushColor, setBrushColor] = useState('#B80000')
    const [brushSize, setBrushSize] = useState(3)
    const canvasRef = useRef(null)

    const handleExport = () => {
        const base64 = canvasRef.current.canvasContainer.childNodes[1].toDataURL();
        setDrawing(base64);
        fetch(`/drawings/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                user_id: 1,
                data_url: base64,
                origin_pic_url: OriginPicUrl
            })
        })
        .then( res => res.json())
        .then( data => console.log(data))
        .catch( error => console.log(error.message));
    };

    const handleColorChange = (e) => {
        setBrushColor(e.hex)
    }

    const handleSizeChange = (e) => {
        setBrushSize(parseInt(e.target.value, 10))
    }

    const canvas =  <CanvasDraw 
        className='canvas'
        brushColor={brushColor}
        hideGrid
        hideInterface
        brushRadius={brushSize}
        lazyRadius={2}
        ref={canvasRef}
        // imgSrc={picUrl} <- try out both ways? would look cleaner
    />

    return (
        <>
            {canvas}
            <GithubPicker triangle='hide' onChange={handleColorChange} />
            <button
            onClick={() => {
            console.log("erase")
            }}>
            Erase
        </button>
        <button
            onClick={() => {
            handleExport()
            }}>
            save
        </button>
        <label>Brush size</label>
        <input 
            type="number" 
            value={brushSize}
            min={2}
            max={50}
            onChange={handleSizeChange}
        />
        </>
    )
}
export default GameCanvas