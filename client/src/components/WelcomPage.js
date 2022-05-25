import LoginForm from "./User stuff/LoginForm"
import Header from './Admin/Header'
import Footer from "./Admin/Footer"
import RecentDrawingDisplay from "./Drawing Displays/RecentDrawingDisplay"
import SignUpForm from "./User stuff/SignUpForm"

import {useState, useEffect, useContext} from 'react'
import { UserContext } from "../context/user"


function WelcomePage(props) {

    const [user, setUser] = useContext(UserContext)

    const [recentPics, setRecentPics] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [modalDisplay, setModalDisplay] = useState('')

    useEffect(() => {
        fetch('/drawings')
        .then(resp => resp.json())
        .then(data => setRecentPics(data))
    }, [])

    function openLoginModal(e) {
        setModalOpen(true)
        setModalDisplay("login")
    }

    function openSignupModal(e) {
        setModalOpen(true)
        setModalDisplay("signup")
    }

    function closeModal(){
        setModalOpen(false)
    }

    useEffect(()=> {
        if(modalOpen)
        {document.body.style.overflow = 'hidden';}
        else {
            document.body.style.overflow = 'visible'}
    }, [modalOpen])
    
    return (
        <div id="welcome-page">
            <Header />
            <div id="welcome-text">
                <h1>welcome {user.username ? "back" : null}</h1>
                <h3>Please peruse some of our most recent artistic works</h3>
                <p>Hover over them to see the inspiration behind the piece!</p>
            </div>
            <RecentDrawingDisplay artistDetails={true} displayPics={recentPics} />
            { user.username ? 
                null
                :
                <div id="login-text">
                    <button onClick={openLoginModal}>login?</button>
                    {
                        modalOpen && (
                            <>
                            <div className="overlay"></div>
                            <div className="modal">
                                { modalDisplay==="login" ? <LoginForm closeModal={closeModal} /> : null}
                                { modalDisplay==="signup" ? <SignUpForm closeModal={closeModal} /> : null}
                            </div>
                            </>
                        )
                    }
                    <p>New user? Click <button onClick={openSignupModal}>here</button> to sign up or head <a href='/play'>here</a> to play as a guest!</p>
                </div>
            }
            <Footer />
        </div>
    )
}
export default WelcomePage