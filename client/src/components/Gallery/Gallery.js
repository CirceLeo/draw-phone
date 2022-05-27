import { useEffect, useState } from "react"

import Footer from "../Admin/Footer"
import Header from "../Admin/Header"
import HowToPlay from "../Admin/HowToPlay"
import RecentDrawingDisplay from "../Drawing and other User Displays/RecentDrawingDisplay"
import GallerySubjectModal from "./GallerySubjectModal"

function Gallery(props) {


    const [subjOpen, setSubjOpen] = useState(false)
    const [openedTopic, setOpenedTopic] = useState('dog')

    const subjects = ["dog", "cat", "daily", "car", "superhero", "flower" ]

    function openSubjectModal(topic){
        setSubjOpen(true)
        setOpenedTopic(topic)
    }

    const gallerySubjectCards = subjects.map( subject => {
        return(
            <div className="subject-card">
                <h1 className="click" onClick={() => openSubjectModal(subject)}>{subject}</h1>
            </div>
        )
    })
    
    return (
        <div id="gallery">
            <Header />
            {
                subjOpen && (
                    <>
                        <div className="overlay"></div>
                        <div className="modal">
                            <GallerySubjectModal topic={openedTopic} close={() => setSubjOpen(false)}/>
                        </div>
                    </>
                )
            }
            <h1>Welcome to the Sketchee Gallery!</h1>
            <div className="subj-grid">
                {gallerySubjectCards}
            </div>
            <Footer />
        </div>
    )
}
export default Gallery