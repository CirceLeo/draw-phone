import LoginForm from "./LoginForm"
import Header from './Header'
import Footer from "./Footer"
import RecentDrawingDisplay from "./RecentDrawingDisplay"
import SignUpForm from "./SignUpForm"

import {useState, useEffect} from 'react'

function WelcomePage(props) {

    const [recentPics, setRecentPics] = useState([])
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        fetch('/drawings')
        .then(resp => resp.json())
        .then(data => setRecentPics(data))
    }, [])

    function openModal(e) {
        setModalOpen(true)
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
            <h1>welcome</h1>
            <button onClick={openModal}>login?</button>
            {
                modalOpen && (
                    <>
                    <div className="overlay"></div>
                    <div className="modal">
                        <LoginForm closeModal={closeModal} />
                    </div>
                    </>
                )
            }
            <p>New user? Click <button onClick={openModal}>here</button> to sign up or head <a href='/play'>here</a> to play as a guest!</p>
            {/* <SignUpForm /> */}
            <h3>Below, we have a few of our recent accusitions</h3>
            <p>Hover over them to see the inspiration behind the piece!</p>
            <RecentDrawingDisplay displayPics={recentPics} />
            <Footer />
        </div>
    )
}
export default WelcomePage