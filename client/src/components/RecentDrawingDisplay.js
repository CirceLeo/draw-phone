import {useEffect, useState} from 'react'

function RecentDrawingDisplay(props) {

    const [recentPics, setRecentPics] = useState([])

    useEffect(() => {
        fetch('/drawings')
        .then(resp => resp.json())
        .then(data => setRecentPics(data))
    }, [])

    const renderedDrawings = recentPics.map((drawing) => {
        return <img key={drawing.id} src={drawing.data_url} />
    })
    
    return (
        <div className="drawing-display">
            {renderedDrawings}
        </div>
    )
}
export default RecentDrawingDisplay