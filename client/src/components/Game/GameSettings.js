import {useState, useContext} from 'react'
import { UserContext } from '../../context/user'
function GameSettings({closeModal, setPlayTime, setImageTerm}) {

    const [user, setUser] = useContext(UserContext)

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
                <select defaultValue={45} onChange={handleNewPlayTime}>
                    {/* <option value={5}>testing</option> */}
                    <option value={30} >short</option>
                    <option value={45}>medium</option>
                    <option value={60}>long</option>
                </select>
                <br/>
                <label>What do you want to draw?</label>
                <select onChange={handleNewSearchTerm}>
                    <option value="dog">Dogs</option>
                    {/* {user.username && !user.did_daily ? <option value="daily">Daily challenge!</option> : null} */}
                    <option value="cat">Cats</option>
                    <option value="flower">Flowers</option>
                    <option value="car">Cars</option> 
                    <option value="superhero">Superheroes</option> 
                    <option value="monster">Monsters</option> 
                    <option value="mountain">Mountains</option>
                </select>
                <br/>
                <button className='game-button' type='submit'>Looks good!</button>
            </form>
        </div>
    )
}
export default GameSettings