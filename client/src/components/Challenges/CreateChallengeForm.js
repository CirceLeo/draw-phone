import {useState} from 'react'
function CreateChallengeForm({drawingId, close}) {

    const [title, setTitle] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        const newChallenge = {
            drawing_id: drawingId,
            challenge_title: title
        }
        console.log(newChallenge)
    }
    
    return (
        <div id="create-challenge-form">
            <button onClick={close}>X</button>
            <h3>Create a new challenge? </h3>
            <p>If you want to see what others can do with the same picture and play time you had for this drawing, you can issue a challenge here!</p>
            <form onSubmit={handleSubmit}>
                <label>Make a name for your challenge:</label>
                <input onChange={(e)=>setTitle(e.target.value)} value={title} type='text' name="challenge_title"></input>
                <br/>
                <button type='submit'> issue challenge!</button>
            </form>
        </div>
    )
}
export default CreateChallengeForm