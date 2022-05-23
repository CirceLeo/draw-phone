import {useState} from 'react'
function GameSettings({closeModal, setPlayTime, setImageTerm}) {

    function handleGameStart(){
        closeModal()
    }

    function handleNewPlayTime(e){
        setPlayTime(e.target.value)
    }

    function handleNewSearchTerm(e){
        setImageTerm(e.target.value)
    }
    
    return (
        <div id="game-setttings">
            <form>
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
                </select>
                <br/>
                <button onClick={handleGameStart}>Play!</button>
            </form>
        </div>
    )
}
export default GameSettings