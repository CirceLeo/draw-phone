import {useState} from 'react'
function GameSettings({closeModal, setPlayTime, setImageTerm}) {
    const [tempPlayTime, setTempPlayTime] = useState(45)
    const [tempSearchTerm, setTempSearchTerm] = useState('dogs')
    // function handleGameStart(){
    //     closeModal()
    // }

    function handleNewPlayTime(e){
        setPlayTime(e.target.value)
    }

    function handleNewSearchTerm(e){
        setImageTerm(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setPlayTime(tempPlayTime)
        setImageTerm(tempSearchTerm)
        closeModal()
    }
    
    return (
        <div id="game-setttings">
            <form onSubmit={handleSubmit}>
                <label>How long do you want?</label>
                <select onChange={handleNewPlayTime}>
                    <option value={5}>testing</option>
                    <option value={45}>short</option>
                    <option value={90}>medium</option>
                    <option value={180}>long</option>
                </select>
                <br/>
                <label>What do you want to draw?</label>
                <select onChange={handleNewSearchTerm}>
                    <option value="dog">Dogs!</option>
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