import React, {useEffect, useState, useRef} from 'react';
import {CirclePicker, GithubPicker} from 'react-color';
import CanvasDraw from 'react-canvas-draw';


function GameCanvas({setDrawingData, gameActive, canvasRef}) {
    
    const [brushColor, setBrushColor] = useState('#B80000')
    const [brushSize, setBrushSize] = useState(3)

    const handleColorChange = (e) => {
        setBrushColor(e.hex)
    }

    const handleSizeChange = (e) => {
        setBrushSize(parseInt(e.target.value, 10))
    }

    const handleUndo = () => {
        canvasRef.current.undo()
    }

    const handleEraseAll = () => {
        canvasRef.current.eraseAll()
    }

    const canvas =  <CanvasDraw 
        className='canvas'
        brushColor={brushColor}
        hideGrid
        hideInterface
        brushRadius={brushSize}
        lazyRadius={2}
        ref={canvasRef}
        disabled={!gameActive}
        // imgSrc={picUrl} <- try out both ways? would look cleaner
    />

    return (
        <>
            {canvas}
            <button
                onClick={handleUndo}
            >
                undo
            </button>
            <button
                onClick={handleEraseAll}
            >
                clear canvas
            </button> 
        <label>Brush size</label>
        <input 
            type="number" 
            value={brushSize}
            min={2}
            max={50}
            onChange={handleSizeChange}
        />
        <GithubPicker triangle='hide' onChange={handleColorChange} />

        </>
    )
}
export default GameCanvas


///LEGACY CODE IN CASE THINGS REALLY BREAK
    // const handleSaveDrawing = () => {
    //     const currentCanvas = canvasRef.current.canvasContainer.childNodes[1].toDataURL();
    //     setDrawingData(currentCanvas);
    // }

        // const [currentDrawing, setCurrentDrawing] = useState('')
    // const canvasRef = useRef(null)

    // useEffect(() => {
    //     if(!gameActive){
    //         // console.log("save the pic tho")
    //         handleSaveDrawing()
    //     }
    // }, [gameActive])