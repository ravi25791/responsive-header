import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className='title'>React Nav</Link>
            <div className="menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
                <li><NavLink to="Home">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
