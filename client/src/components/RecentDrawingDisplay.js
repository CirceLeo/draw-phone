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
                <div key={drawing.id}  className="display-drawing flip-card">
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img 
                                src={drawing.data_url} 
                                // onMouseOver={e => (e.currentTarget.src = drawing.origin_pic_url)}
                                // onMouseOut={e => (e.currentTarget.src = drawing.data_url)}
                            />
                        </div>
                        <div className='flip-card-back'>
                            <img src={drawing.origin_pic_url}/>
                            {/* TODO: change schema of drawings to include origin topics and time spent, then put here */}
                        </div>
                        <div className='display-drawing-text'>
                            <p>Artist: {drawing.user ? drawing.user.username: "anon"}</p>
                            <p>Title: {drawing.title ? drawing.title :` untitled piece ${drawing.id}`}</p>
                        </div>
                    </div>
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