import LoginForm from "./LoginForm"
import Header from './Header'

function WelcomePage(props) {
    
    return (
        <div id="welcome-page">
            <Header />
            <h1>welcome</h1>
            <LoginForm />
        </div>
    )
}
export default WelcomePage