import LoginForm from "./LoginForm"
import Header from './Header'
import RecentDrawingDisplay from "./RecentDrawingDisplay"
import SignUpForm from "./SignUpForm"

import {useState, useEffect} from 'react'

function WelcomePage(props) {

    const [recentPics, setRecentPics] = useState([])

    useEffect(() => {
        fetch('/drawings')
        .then(resp => resp.json())
        .then(data => setRecentPics(data))
    }, [])
    
    return (
        <div id="welcome-page">
            <Header />
            <h1>welcome</h1>
            <p>login</p>
            <LoginForm />
            <p>sign up</p>
            <SignUpForm />
            <h3>Below, we have a few of our recent accusitions</h3>
            <p>Hover over them to see the inspiration behind the piece!</p>
            <RecentDrawingDisplay displayPics={recentPics} />
        </div>
    )
}
export default WelcomePage