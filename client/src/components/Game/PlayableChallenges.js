import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function PlayableChallenges({close}) {

    //TODO: auto select the first one?

    const navigate = useNavigate()

    const [currentIndex, setCurrentIndex] = useState(0)
    
    const [currentSelected, setCurrentSelected] = useState({
        play_time: 0,
        challenge_title: '',
        id: 1
    })
    const [challenges, setChallenges] = useState([])

    let tempIndex = -1

    const renderedChallengeOptions = challenges.map(challenge => {
        tempIndex = tempIndex + 1
        // console.log(challenge)
        return(
            <option key={challenge.id} value={tempIndex}>{challenge.challenge_title}</option>
        )
    })

    useEffect(() => {
        fetch('/challenges')
        .then(resp => resp.json())
        .then(data => {
            setChallenges(data)
            setCurrentSelected(data[0])
        })
    }, [])

    function handleChallengeSelect(e){
        setCurrentSelected(challenges[e.target.value])
        console.log(currentSelected)
    }

    function handleSubmit(e){
        e.preventDefault()
        navigate(`/play/challenge/${currentSelected.id}`)
        close()
    }
    return (
        <div className="playable-challenges">
            <button onClick={close} className="close-button">X</button>
            <form onSubmit={handleSubmit}>
                <label>Select from your available challenges!</label>
                <br/>
                <select onChange={handleChallengeSelect}>
                    <option value="" disabled selected>Select your option</option>
                    {renderedChallengeOptions}
                </select>
                <br/>
                <button className='game-button' type="submit"> Start this challenge!</button>
                <div className='selected-details'>
                    {
                        currentSelected.drawing ? 
                        <>
                            <p><strong>Selected Challenge Details:</strong></p>
                            <p>Title: {currentSelected.challenge_title}</p>
                            <p>Available Time: {currentSelected.drawing.play_time}</p>
                            <p>challenge's origional result:</p>
                            <img className='blurred-pic challenge-list-pic' src={currentSelected.drawing.data_url}/>
                            <p>Challenge set by: {currentSelected.drawing.user.username}</p> 
                            <p>number of attempts: {currentSelected.attempts.length}</p>
                        </>
                        :
                        <p>Select a challenge to view details!</p>
                    }
                </div>
                
            </form>
        </div>
    )
}
export default PlayableChallenges