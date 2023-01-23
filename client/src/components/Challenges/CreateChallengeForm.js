import {useState} from 'react'
function CreateChallengeForm({drawingId, close}) {

    const [title, setTitle] = useState('')
    const [created, setCreated] = useState(false)

    // const [errors, setErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false);

    let chalId = null

    function handleSubmit(e){
        e.preventDefault()
        const newChallenge = {
            drawing_id: drawingId,
            challenge_title: title
        }
        fetch(`/challenges`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newChallenge)
        })
        .then( res => {
            if(res.ok){
                res.json().then( challenge => {
                    setCreated(true)
                    chalId = challenge.id
                })
            } else {
                res.json().then(response => {
                    // console.log(response)
                    // setErrors(response.errors[0])
                    setShowErrors(true)
                })
            }
        })
        // .then( data => setCreated(true))
        // .catch( error => console.log(error.message));
    }
    
    return (
        <div id="create-challenge-form">
            <button className='close-button' onClick={close}>X</button>
            <h4>Create a new challenge? </h4>
            <div className='challenge-form-text'>
                <p>If you want to see what others can do </p>
                <p> with the same image and play time </p>
                <p>  you can issue a challenge here!</p>

            </div>
            <form onSubmit={handleSubmit}>
                <label>Make a name for your challenge:</label>
                <br/>
                <input required onChange={(e)=>setTitle(e.target.value)} value={title} type='text' name="challenge_title"></input>
                <br/>
                {showErrors ? 
                    <div className='login-issues'>
                        <p>You've already issued a challenge for this drawing!</p>
                        <button onClick={()=>setShowErrors(false)} className='close-button'>X</button>
                    </div> 
                    : null
                }
                { created ? 
                    <p>Challenge created! Here is the <a href={`/play/challenge/${challenge.id}`} style={{color:"white"}}>link</a></p> : 
                    <button className='game-button' type='submit'> issue challenge!</button>}
            </form>
        </div>
    )
}
export default CreateChallengeForm