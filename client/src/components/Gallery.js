import { useEffect, useState } from "react"

import Footer from "./Admin/Footer"
import Header from "./Admin/Header"
import RecentDrawingDisplay from "./Drawing and other User Displays/RecentDrawingDisplay"

function Gallery(props) {

    const [dogs, setDogs] = useState([])
    const [cats, setCats] = useState([])


    useEffect(() => {
        fetch('/drawings/subj/dog')
        .then(resp => resp.json())
        .then(data => setDogs(data))

        fetch('/drawings/subj/cat')
        .then(resp => resp.json())
        .then(data => setCats(data))
    }, [])
    
    return (
        <div id="gallery">
            <Header />
            <h1>Welcome to the Sketchee Gallery!</h1>
            <h2>Dogs</h2>
            <RecentDrawingDisplay artistDetails={true} displayPics={dogs}/>
            <h2>Cats</h2>
            <RecentDrawingDisplay displayPics={cats}/>
            {/* TODO:add galleries by category */}
            <Footer />
        </div>
    )
}
export default Gallery