import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Header from '../Admin/Header'
import Footer from '../Admin/Footer'

function GalleryChallengePage(props) {

    const params = useParams()
    const challengeId = params.id

    const [challenge, setChallenge] = useState({
        attempts: []
    })

    useEffect(() => {
        fetch(`/challenges/${challengeId}`)
        .then(resp => resp.json())
        .then(data => setChallenge(data))
    }, [])

    const renderedAttempts = challenge.attempts.map(attempt => {
        return (
            <div className='attempt-card'>
                <img src={attempt.attempt_data_url} />
                {/* <p>By: {attempt.user.username}</p> */}
            </div>
        )
    })
    
    return (
        <div className="gallery-challenge-display">
            <Header />
            <div className='gallery-spacer'>
            </div>
            <h1>Challenge Attempts for <em>{challenge.challenge_title}</em></h1>
            <img src={challenge.drawing.origin_pic_url} />
            <img src={challenge.drawing.data_url} />
            {renderedAttempts}
            
            <div className='challenge-display-page'>

            </div>

            <Footer />

        </div>
    )
}
export default GalleryChallengePage