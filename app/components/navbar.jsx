'use client';
// Importing the hero image
import React from 'react';


export default function navbar() {
const [isOpen, setIsOpen] = React.useState(false);

return (
    <nav className=" w-full bg-blue-50 text-black">
        <div className="navbar-container ">
            {/* Mobile Menu Button */}
            <button
                className="menu-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span className="menu-icon">&#9776;</span>
            </button>

            {/* Logo */}
            <div className=" text-blue text-3xl font-bold">
                <a href="#home"><img src='/logo/main.png' className='w-12 h-12'/></a>
            </div>

            {/* Nav Links */}
            <ul className={`nav-links ${isOpen ? 'open' : ''} text-black flex gap-4`} >
                <li className='text-black'><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                <li className='text-black'><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
                <li className='text-black'><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            </ul>
        </div>
        <style jsx>{`
            
            .navbar-container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.75rem 1.5rem;
            }
            
            .nav-links {
                display: flex;
                gap: 1.5rem;
                list-style: none;
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
