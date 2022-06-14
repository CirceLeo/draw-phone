import {useParams, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Header from '../Admin/Header'
import Footer from '../Admin/Footer'
import Gallery from './Gallery'
import Loader from '../Admin/Loader'

function GalleryChallengePage(props) {

    const navigate = useNavigate()

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

    const attempts = challenge.attempts

    // const renderedAttempts = attempts.map((attempt) => {
    //     return(
    //         <img />
    //     )
    // })

    const renderedAttempts = attempts.map((attempt) => {
        return (
            <div className='attempt-card challenge-gallery-img'>
                <img src={attempt.attempt_data_url} />
            </div>
        )
    })

    console.log("attempts", renderedAttempts)
    
    return (
        <div className="gallery-challenge-display">

            <Header />
            <div className='gallery-spacer'>
            </div>
            <button onClick={() => navigate('/gallery/challenges')}className="gallery-button">Return to the Challenge Gallery?</button>
            {challenge.challenge_title ?
            <div className='challenge-display-page'>
                <h1>Challenge Attempts for <em>{challenge.challenge_title}</em></h1>
                <div className='origin-pics'>
                    <h2>Origional picture and artwork:</h2>
                    <img className='challenge-gallery-img' src={challenge.drawing.origin_pic_url} />
                    <img className='challenge-gallery-img' src={challenge.drawing.data_url} />
                </div>
                <h2>Challenge Attempts:</h2>
                <div className='attempt-display'>
                    {challenge.attempts.length > 0 ? renderedAttempts : <p>There are no attempts for this challenge! Click <a href={`/play/challenge/${challenge.id}`}>here</a>to play the challenge! </p>}
                </div>
            </div>
            :
            <>
                <Loader />
            </>
            }

            <div className='gallery-spacer'>
                
            </div>

            <Footer />

        </div>
    )
}
export default GalleryChallengePage