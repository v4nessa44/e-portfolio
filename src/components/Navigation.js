import React from "react";
import { Link } from "react-router-dom";
import './styles/Navigation.css'

const Navigation = () => {
    return (
        <div className="nav">
            <h1>
                <a href="/">Vanessa Decopin</a>
            </h1>

            <div className="links">
                <a href="/about">About Me</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact</a>
                <a href="/resume">Resume</a>
            </div>
        </div>
    )
}

export default Navigation