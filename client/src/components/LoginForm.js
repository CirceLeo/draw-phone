import {useState} from 'react';

function LoginForm(props) {
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
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
    }

    return (
        <div id="login-form">
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input 
                    type="text" 
                    name="username" 
                    onChange={handleLoginInfoChange}
                    value={loginInfo.username}
                />
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
            </form>
        </div>
    )
}
export default LoginForm