import React from 'react'

export default function footer() {
return (
    <footer style={{ background: "#f8f9fa", padding: "1rem 0", textAlign: "center" }}>
        <div style={{ marginBottom: "0.5rem" }}>
            <img src="/logo.png" alt="Logo" style={{ height: "40px" }} />
        </div>
        <nav>
            <a href="#home" style={{ margin: "0 1rem" }}>Home</a>
            <a href="#about" style={{ margin: "0 1rem" }}>About</a>
            <a href="#services" style={{ margin: "0 1rem" }}>Services</a>
            <a href="#contact" style={{ margin: "0 1rem" }}>Contact</a>
        </nav>
    </footer>
)
}
