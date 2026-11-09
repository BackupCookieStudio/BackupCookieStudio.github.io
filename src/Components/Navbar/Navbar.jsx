import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = ()=>{
    return (
        <div className="navbar">

            <nav className="navLink">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/services">Services</NavLink>
            </nav>

            <div className="title">
                <div className="logo"></div>
                <div className="name">BackupCookie Studio</div>
            </div>

            <div className="others">
                <button className="Btn">Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar;