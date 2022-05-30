import {useState, useEffect} from 'react'
function PlayableChallenges({close}) {
    
    const [currentSelected, setCurrentSelected] = useState({
        play_time: 0,
        challenge_title: ''
    })
    const [challenges, setChallenges] = useState([])

    let currentIndex = -1
    const renderedChallengeOptions = challenges.map(challenge => {
        // console.log(challenge)
        currentIndex = currentIndex + 1
        return(
            <option value={currentIndex}>{challenge.challenge_title}</option>
        )
    })

    useEffect(() => {
        fetch('/challenges')
        .then(resp => resp.json())
        .then(data => setChallenges(data))
    }, [])

    function handleChallengeSelect(e){
        setCurrentSelected(challenges[e.target.value])
        console.log(challenges[e.target.value])
    }

    function handleSubmit(e){
        e.preventDefault()
        
    }
    return (
        <div className="playable-challenges">
            <button onClick={close} className="close-button">X</button>
            <form>
                <label>Select from your available challenges!</label>
                <select onChange={handleChallengeSelect}>
                    {renderedChallengeOptions}
                </select>
                <div className='selected-details'>
                    {
                        currentSelected.drawing ? 
                        <>
                            <p>Selected Challenge details</p>
                            <p>Title: {currentSelected.challenge_title}</p>
                            <p>Available Time: {currentSelected.drawing.play_time}</p>
                            <p>challenge's origional result:</p>
                            <img className='blurred-pic' src={currentSelected.drawing.data_url}/>
                            <p>Challenge set by: {currentSelected.drawing.user.username}</p> 
                            <p>number of attempts: {currentSelected.attempts.length}</p>
                        </>
                        :
                        <p>Select a challenge to view details!</p>
                    }
                </div>
                
                <button type="submit"> Start this challenge!</button>
            </form>
        </div>
    )
}
export default PlayableChallenges