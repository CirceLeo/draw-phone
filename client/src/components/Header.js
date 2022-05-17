import {NavLink} from 'react-router-dom';
import '../styling/header.css'

function Header(props) {
    
    return (
        <div id="header">
            <h3>Im a header look at me go</h3>
            <nav>
                <NavLink to = '/'>Home</NavLink>
                <NavLink to ='/me'>User Page</NavLink>
                <NavLink to = '/play'>Play!</NavLink>

            </nav>
        </div>
    )
}
export default Header