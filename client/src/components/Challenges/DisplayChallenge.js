import {useNavigate} from 'react-router-dom'

function DisplayChallenge({challenge}) {

    const navigate = useNavigate()
        
    return (
        <div className="display-challenge display-drawing  flip-card">
            <div className='display-chal-text'>
                <div className='display-chal-title-btn'>
                    <p> <strong>{challenge.challenge_title}</strong></p>
                    <button className='display-chal-button' onClick={() => navigate(`/play/challenge/${challenge.id}`)}>Play!</button>
                </div>
                <p>Issued by: {challenge.drawing.user.username}</p>
                <p>Subject: {challenge.drawing.subject_category}</p>
                <p>Time allowed: {challenge.drawing.play_time} seconds</p>
                <p>Sneak peek at the picture:</p>
            </div>
            <div className='flip-card-content'>
                <div className='flip-card-front'>
                    <img src={challenge.drawing.data_url} className="blurred-pic" />
                </div>
                <div className='flip-card-back'>
                    <img src={challenge.drawing.origin_pic_url} className="blurred-pic"/>
                </div>
            </div>
        </div>
    )
}
export default DisplayChallenge