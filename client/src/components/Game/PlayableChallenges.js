import {useState} from 'react'
function PlayableChallenges({challenges}) {
    
    const [currentSelected, setCurrentSelected] = useState({})
    const renderedChallengeOptions = challenges.map(challenge => {
        return(
            <option>{challenge.challenge_title}</option>
        )
    })

    //TODO: on select/change
    return (
        <div className="playable-challenges">
            <form>
                <label>Select from your available challenges!</label>
                <select>
                    {renderedChallengeOptions}
                </select>
                <div className='selected-details'>
                    <p>Selected Challenge details</p>
                    <p>Title: {currentSelected.challenge_title}</p>
                    <p>Available Time: {currentSelected.drawing.play_time}</p>
                    {/* <p>Challenge set by: {currentSelected.drawing.user.username}</p> */}
                    <p>number of attempts: {currentSelected.attempts.length}</p>
                </div>
                
                <button type="submit"> Start this challenge!</button>
            </form>
        </div>
    )
}
export default PlayableChallenges