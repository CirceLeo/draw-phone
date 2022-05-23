import {useEffect, useState} from 'react'

function RecentDrawingDisplay({displayPics}) {

    // const [displayPics, setdisplayPics] = useState([])

    // useEffect(() => {
    //     fetch('/drawings')
    //     .then(resp => resp.json())
    //     .then(data => setdisplayPics(data))
    // }, [])

    const renderedDrawings = displayPics.map((drawing) => {
        return (
                <div key={drawing.id}  className="display-drawing"   >
                    <img 
                        src={drawing.data_url} 
                        onMouseOver={e => (e.currentTarget.src = drawing.origin_pic_url)}
                        onMouseOut={e => (e.currentTarget.src = drawing.data_url)}
                    />
                </div>
            )
    })
    
    return (
        <div className="drawing-display">
            {renderedDrawings}
        </div>
    )
}
export default RecentDrawingDisplay