import {useState} from 'react'
function GameSettings({closeModal, setPlayTime, setImageTerm}) {
    const [tempPlayTime, setTempPlayTime] = useState(45)
    const [tempSearchTerm, setTempSearchTerm] = useState('dogs')
    // function handleGameStart(){
    //     closeModal()
    // }

    function handleNewPlayTime(e){
        setTempPlayTime(e.target.value)
    }

    function handleNewSearchTerm(e){
        setTempSearchTerm(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setPlayTime(tempPlayTime)
        setImageTerm(tempSearchTerm)
        closeModal()
    }
    
    return (
        <div id="game-setttings">
            <button className='close-button' onClick={closeModal}>X</button>
            <h3>Choose how you want to draw!</h3>
            <form onSubmit={handleSubmit}>
                <label>How long do you want?</label>
                <select onChange={handleNewPlayTime}>
                    <option value={5}>testing</option>
                    <option value={45} selected>short</option>
                    <option value={90}>medium</option>
                    <option value={180}>long</option>
                </select>
                <br/>
                <label>What do you want to draw?</label>
                <select onChange={handleNewSearchTerm}>
                    <option value="dog" selected>Dogs!</option>
                    <option value="cat">Cats</option>
                    <option value="flower">flowers</option>
                    <option value="car">cars</option> 
                    <option value="superhero">superheroes</option> 
                </select>
                <br/>
                <button type='submit'>Looks good, let's draw!</button>
            </form>
        </div>
    )
}
export default GameSettings