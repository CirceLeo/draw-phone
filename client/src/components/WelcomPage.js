import LoginForm from "./LoginForm"
import Header from './Header'
import RecentDrawingDisplay from "./RecentDrawingDisplay"

function WelcomePage(props) {
    
    return (
        <div id="welcome-page">
            <Header />
            <h1>welcome</h1>
            <LoginForm />
            <RecentDrawingDisplay />
        </div>
    )
}
export default WelcomePage