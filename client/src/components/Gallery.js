import { useEffect, useState } from "react"

import Footer from "./Admin/Footer"
import Header from "./Admin/Header"
import HowToPlay from "./Admin/HowToPlay"
import RecentDrawingDisplay from "./Drawing and other User Displays/RecentDrawingDisplay"

function Gallery(props) {

    const [dogs, setDogs] = useState([])
    const [cats, setCats] = useState([])
    const [subjOpen, setSubjOpen] = useState(false)

    const subjects = ["dog", "cat", "daily", "car", "superhero", "flower" ]

    function openSubjectModal(){
        setSubjOpen(true)
    }

    const gallerySubjectCards = subjects.map( subject => {
        return(
            <div className="subject-card">
                <h1 className="click" onClick={openSubjectModal}>{subject}</h1>
            </div>
        )
    })


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
            {
                subjOpen && (
                    <>
                        <div className="overlay"></div>
                        <div className="modal">
                            <HowToPlay closeHowTo={()=>setSubjOpen(false)}/>
                        </div>
                    </>
                )
            }
            <h1>Welcome to the Sketchee Gallery!</h1>
            <div className="subj-grid">
                {gallerySubjectCards}
            </div>
            {/* <h2>Dogs</h2> */}
            {/* <RecentDrawingDisplay artistDetails={true} displayPics={dogs}/> */}
            {/* <h2>Cats</h2> */}
            {/* <RecentDrawingDisplay displayPics={cats}/> */}
            {/* TODO:add galleries by category */}
            <Footer />
        </div>
    )
}
export default Gallery