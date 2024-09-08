import React, {useState} from "react";
import { Link } from "react-router-dom";
 import {FaBriefcase,FaMoon} from 'react-icons/fa';
 import "./Navbar.css"

function Navbar(){
    const [darkMode, setDarkMode] = useState(false);
    const handleMoonIconClick = ()=>{
        setDarkMode(prevMode => !prevMode);
    }
    return(
        <>
        <nav className={`navbar ${darkMode ? `dark-mode` : ''}`}>
        <FaMoon className="icon moon" size="50px" onClick={handleMoonIconClick}/>
        <div className="option">
            <ul className="list">
           <li className="frt"><Link to="/"> Home</Link> </li>
            <li><Link to="/about"> About Me</Link> </li>
            <li><Link to="/education"> Education</Link> </li>
            <li><Link to="/projects"> Projects</Link> </li>
            <li><Link to="/contact"> Contact</Link> </li>
            </ul>
        </div>
        
            <Link to="/" className="navbar-logo">
            PORTFOLIO
            <FaBriefcase className="icon portfolio"/>
            </Link>
            
        </nav>
        {/* <div>
        <FaBook className="icon book"/>
            <FaTwitter className="icon study"/>
        </div> */}
        
        </>
    );
}
export default Navbar;