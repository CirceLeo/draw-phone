import { useState, useEffect } from "react"
import RecentDrawingDisplay from "../Drawing and other User Displays/RecentDrawingDisplay"

function GallerySubjectModal({topic, close}) {

    const [displayPics, setDisplayPics] = useState([])

    useEffect(() => {
        fetch(`/drawings/subj/${topic}`)
        .then(resp => resp.json())
        .then(data => setDisplayPics(data))
    }, [])
    return (
        <div className="subject-display">
            <button className="close-button" onClick={close}> X</button>
            {/* TODO: conditional render the daily topic to say something else */}
            {displayPics.length > 0 ? 
            <>
                <h3>Here are our works inspired by {topic}s!</h3>
                <RecentDrawingDisplay artistDetails={true} displayPics={displayPics} /> :
            </>
            :
            <>
                <p>Oh no! We have no drawings about {topic}s</p>
                <p>click <a href="/play">here</a> if you want to fix that</p>
            </>
            }

        </div>
    )
}
export default GallerySubjectModal