'use client';
// Importing the hero image
import React from 'react';


export default function navbar() {
const [isOpen, setIsOpen] = React.useState(false);

return (
    <nav className="navbar">
        <div className="navbar-container">
            {/* Mobile Menu Button */}
            <button
                className="menu-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span className="menu-icon">&#9776;</span>
            </button>

            {/* Logo */}
            <div className="logo">
                <a href="#home">Chumba</a>
            </div>

            {/* Nav Links */}
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
                <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
        </div>
        <style jsx>{`
            .navbar {
                width: 100%;
                background: #222;
                color: #fff;
            }
            .navbar-container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.75rem 1.5rem;
            }
            .logo a {
                color: #fff;
                font-size: 1.5rem;
                font-weight: bold;
                text-decoration: none;
            }
            .nav-links {
                display: flex;
                gap: 1.5rem;
                list-style: none;
            }
            .nav-links li a {
                color: #fff;
                text-decoration: none;
                font-size: 1rem;
            }
            .menu-btn {
                display: none;
                background: none;
                border: none;
                color: #fff;
                font-size: 2rem;
                cursor: pointer;
            }
            @media (max-width: 768px) {
                .navbar-container {
                    flex-direction: row-reverse;
                }
                .logo {
                    order: 2;
                }
                .menu-btn {
                    display: block;
                    order: 1;
                }
                .nav-links {
                    position: absolute;
                    top: 60px;
                    left: 0;
                    right: 0;
                    background: #222;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    display: none;
                    padding: 1rem 0;
                    z-index: 100;
                }
                .nav-links.open {
                    display: flex;
                }
            }
        `}</style>
    </nav>
)
}
