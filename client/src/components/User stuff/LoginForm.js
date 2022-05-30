import {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext, userObject } from "../../context/user";

function LoginForm({closeModal}) {

    const navigate = useNavigate()
    const [errors, setErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false);
    const [user, setUser] = useContext(UserContext)


    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: '',
        email: ''
    })

    function handleLoginInfoChange(event){
        setLoginInfo({
            ...loginInfo,
            [event.target.name] : event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(loginInfo)
        fetch(`http://localhost:4000/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(loginInfo)
        })
        .then( res => {
            if(res.ok){
                res.json().then(userData => {
                    setUser(userData)
                    navigate('/me')
                })
            } else {
                res.json().then(response => {
                    setErrors(response.error)
                    setShowErrors(true)
                })
            }
        })
        // .then( data => console.log(data))
        .catch( error => console.log(error.message));
    }

    return (
        <div id="login-form">
            <button className='close-button' onClick={closeModal}>X</button>
            {showErrors ? 
                <div className='login-issues'>
                    <p>{errors}</p>
                    <button onClick={()=>setShowErrors(false)} className='close-button'>X</button>
                </div> 
                : null
            }
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input 
                    type="text" 
                    name="username" 
                    onChange={handleLoginInfoChange}
                    value={loginInfo.username}
                />
                {/* <br />
                <label>email: </label>
                
                <input 
                    type="email" 
                    name="email" 
                    onChange={handleLoginInfoChange}
                    value={loginInfo.email}
                /> */}
                <br/>
                <label>Password: </label>
                <input 
                    type="password" 
                    name="password" 
                    onChange={handleLoginInfoChange} 
                    value={loginInfo.password}
                />
                <br/>
                <button type="submit">Login</button>
                <p>new user?</p><button onClick={closeModal}>Sign up!</button>
            </form>
        </div>
    )
}
export default LoginForm