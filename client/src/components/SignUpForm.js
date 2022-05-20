import {useState} from 'react';

function SignUpForm(props) {
    const [newUserData, setNewUserData] = useState({
        email: '',
        username: '',
        password: '',
        // password_confirm: ''
    })

    function handleFormChange(event){
        setNewUserData({
            ...newUserData,
            [event.target.name] : event.target.value
        })
    }

    function handleNewSignup(e){
        e.preventDefault()
        console.log(newUserData)
    }
    
    return (
        <div>
            <form onSubmit={handleNewSignup}>
                <label>Email: </label>
                <input onChange={handleFormChange}  name="email" type="email" value={newUserData.email}/>
                <br />
                <label>Username: </label>
                <input onChange={handleFormChange} name="username" type='username' value={newUserData.username} />
                <br />
                <label>password: </label>
                <input onChange={handleFormChange} name="password" type='password' value={newUserData.password}/>
                <br></br>
                <button type="submit">Sign up</button>
            </form>
        </div>

    )
}
export default SignUpForm