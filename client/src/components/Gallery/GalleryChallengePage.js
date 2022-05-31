import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Header from '../Admin/Header'
import Footer from '../Admin/Footer'
import Gallery from './Gallery'
import Loader from '../Admin/Loader'

function GalleryChallengePage(props) {

    const params = useParams()
    const challengeId = params.id

    const [challenge, setChallenge] = useState({
        attempts: [],
        drawing: {
            origin_pic_url: '',
            data_url: ''
        },
        challenge_title: ''
    })

    console.log(challenge)

    useEffect(() => {
        fetch(`/challenges/${challengeId}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setChallenge(data)})
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
            {challenge ?
            <div className='challenge-display-page'>
                <h1>Challenge Attempts for <em>{challenge.challenge_title}</em></h1>
                <img src={challenge.drawing.origin_pic_url} />
                <img src={challenge.drawing.data_url} />
                {challenge.attempts.length > 0 ? {renderedAttempts} : <p>There are no attempts for this challenge! Click <a href={`/play/challenge/${challenge.id}`}>here</a>to play the challenge! </p>}
            </div>
            :
            <Loader />
            }

            <Footer />

        </div>
    )
}
export default GalleryChallengePage