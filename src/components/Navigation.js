import React from "react";
import { Link } from "react-router-dom";
import './styles/Navigation.css'

const Navigation = () => {
    return (
        <div className="nav">
            <h1>
                
                <Link to="/">Vanessa Decopin</Link>
            </h1>

            <div className="links">
                
                <Link to="/about">About Me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to ="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </div>
    )
}

export default Navigation