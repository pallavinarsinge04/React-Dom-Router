import Navbar from "./Navbar.css"
import { Link } from "react-router-dom"
function navbar(){
    return(
        <div className="navbar">
            <span className="name">
               
            </span>

            <div className="links">
                <Link to="/"className="link">Home</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/contact" className="link">Contact</Link>
            </div>
        </div>
    )
}
export default navbar 
