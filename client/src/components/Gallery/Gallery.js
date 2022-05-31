import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

import Footer from "../Admin/Footer"
import Header from "../Admin/Header"
import Loader from "../Admin/Loader"
// import HowToPlay from "../Admin/HowToPlay"
// import RecentDrawingDisplay from "../Drawing and other User Displays/RecentDrawingDisplay"
import GallerySubjectModal from "./GallerySubjectModal"

function Gallery(props) {

    const navigate = useNavigate()

    const location = useLocation();
    const isChallenge = location.pathname === "/gallery/challenges"

    const [challenges, setChallenges] = useState([])

    const subjects = ["dog", "cat", "car", "superhero", "flower" ]
    // let challengeTitles = []

    useEffect(() => {
        if(isChallenge)
        {
            fetch('/challenges')
            .then(resp => resp.json())
            .then(data => {
                setChallenges(data)
            })
        }
    }, [isChallenge])
    // console.log(location.pathname);
    
    const [subjOpen, setSubjOpen] = useState(false)
    const [openedTopic, setOpenedTopic] = useState('dog')

    
    function openSubjectModal(topic){
        setSubjOpen(true)
        setOpenedTopic(topic)
    }
    
    const gallerySubjectCards = subjects.map( subject => {
        return(
            <div key={subject} className="subject-card">
                <h1 className="click" onClick={() => openSubjectModal(subject)}>{subject}</h1>
            </div>
        )
    })
    
    const challengeTitleCards = challenges.map(challenge => {
        return (
            <div onClick={() => navigate(`/gallery/challenges/${challenge.id}`)} key={challenge.id} className="subject-card">
                <h1 className="click">{challenge.challenge_title}</h1>
                <h3>Set by: {challenge.drawing.user.username}</h3>
            </div>
        )
    })

    return (
        <div id="gallery">
            <Header />
            {
                subjOpen && (
                    <>
                        <div className="overlay" onClick={() => setSubjOpen(false)}></div>
                        <div className="modal">
                            <GallerySubjectModal topic={openedTopic} close={() => setSubjOpen(false)}/>
                        </div>
                    </>
                )
            }
            <div className="gallery-spacer">

            </div>
            <h1>Welcome to the Sketchee {isChallenge ? "Challenge" : null} Gallery!</h1>
            { isChallenge ? 
                <>
                    <h2>WARNING! Challenge spoilers ahead!</h2>
                    <button onClick={() => navigate('/gallery')}className="gallery-button">Return to Main Gallery?</button>
                </>
                :
                <>
                    <h2>View all artworks by category:</h2>
                    <button onClick={() => navigate('/gallery/challenges')}className="gallery-button">Visit the Challenge Gallery?</button>
                </>

            }
            { isChallenge && challenges.length === 0 ?
            <Loader />
            :
            <div className="subj-grid">
                {isChallenge ? challengeTitleCards : gallerySubjectCards}
            </div>}
            <div className="gallery-spacer">
            </div>
            <Footer />
        </div>
    )
}
export default Gallery