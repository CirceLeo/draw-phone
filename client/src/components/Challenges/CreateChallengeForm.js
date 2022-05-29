import {useState} from 'react'
function CreateChallengeForm({drawingId, close}) {

    const [title, setTitle] = useState('')
    const [created, setCreated] = useState(false)

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
        .then( res => res.json())
        .then( data => setCreated(true))
        .catch( error => console.log(error.message));
    }
    
    return (
        <div id="create-challenge-form">
            <button className='close-button' onClick={close}>X</button>
            <h3>Create a new challenge? </h3>
            <div className='challenge-form-text'>
                <p>If you want to see what others can do with the same picture and play time </p>
                <p> you had for this drawing, you can issue a challenge here!</p>

            </div>
            <form onSubmit={handleSubmit}>
                <label>Make a name for your challenge:</label>
                <input required onChange={(e)=>setTitle(e.target.value)} value={title} type='text' name="challenge_title"></input>
                <br/>
                { created ? <p>Challenge created!</p> : <button type='submit'> issue challenge!</button>}
            </form>
        </div>
    )
}
export default CreateChallengeForm