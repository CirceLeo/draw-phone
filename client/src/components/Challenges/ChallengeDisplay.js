import DisplayChallenge from "./DisplayChallenge"

function ChallengeDisplay({challenges}) {

    const renderedChallenges = challenges.map(challenge => {
        return(
            <DisplayChallenge key={challenge.id} challenge={challenge}/>
        )
    })
    
    return (
        <div className="challenge-display">
            {renderedChallenges}
        </div>
    )
}
export default ChallengeDisplay