import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = ()=>{
    return (
        <div className="navbar">

            <nav>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Services</Link>
            </nav>

            <div className="title">
                <div className="logo"></div>
                <div className="name">BackupCookie Studio</div>
            </div>

            <div className="others">
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar;