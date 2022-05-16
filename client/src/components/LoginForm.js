function LoginForm(props) {
    
    return (
        <div id="login-form">
            <form>
                <label>Username: </label>
                <input type="text" />
                <br/>
                <label>Password: </label>
                <input type="password" />
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default LoginForm