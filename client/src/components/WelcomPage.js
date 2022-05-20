import LoginForm from "./LoginForm"
import Header from './Header'
import RecentDrawingDisplay from "./RecentDrawingDisplay"
import SignUpForm from "./SignUpForm"

function WelcomePage(props) {
    
    return (
        <div id="welcome-page">
            <Header />
            <h1>welcome</h1>
            <p>login</p>
            <LoginForm />
            <p>sign up</p>
            <SignUpForm />
            <RecentDrawingDisplay />
        </div>
    )
}
export default WelcomePage