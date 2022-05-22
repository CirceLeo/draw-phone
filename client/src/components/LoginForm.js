import {useState} from 'react';

function LoginForm(props) {
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
            body: JSON.stringify({
                loginInfo
            })
        })
        .then( res => res.json())
        .then( data => console.log(data))
        .catch( error => console.log(error.message));
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
                <br />
                <label>email: </label>
                
                <input 
                    type="email" 
                    name="email" 
                    onChange={handleLoginInfoChange}
                    value={loginInfo.email}
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