import DisplayChallenge from "./DisplayChallenge"

function ChallengeDisplay({challenges}) {

    const renderedChallenges = challenges.map(challenge => {
        return(
            <DisplayChallenge key={challenge.id} challenge={challenge}/>
        )
    })
    
    return (
        <div className="challenge-display">
            {renderedChallenges.length > 0 ? renderedChallenges : <p>No one's made any challenges yet!</p>}
            {/* {renderedChallenges} */}
        </div>
    )
}
export default ChallengeDisplay