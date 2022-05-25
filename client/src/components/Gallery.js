import Footer from "./Admin/Footer"
import Header from "./Admin/Header"

function Gallery(props) {
    
    return (
        <div id="gallery">
            <Header />
            <h1>Welcome to the Sketchee Gallery!</h1>
            {/* TODO:add galleries by category */}
            <Footer />
        </div>
    )
}
export default Gallery