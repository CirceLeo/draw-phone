function DisplayChallenge({challenge}) {
    
    // console.log(challenge)
    
    return (
        <div className="display-challenge">
            <img src={challenge.drawing.origin_pic_url} className="blurred-pic"/>
            <img src={challenge.drawing.data_url} className="blurred-pic" />
            <p>Subject {challenge.drawing.subject_category}</p>
            <p>Time allowed: {challenge.drawing.play_time} seconds</p>
            <button>Play!</button>
        </div>
    )
}
export default DisplayChallenge