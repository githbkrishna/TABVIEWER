import React from 'react'
import '../app/main.css'

const Navbar = () => {
  return (
    <header>
        <nav>
            <div className="logo">
                <div className="logo-icon"></div>
                {/* <img src="/assets/logoo.png" alt=""> */}
                TABVIEWER
            </div>
            <div className="nav-links">
                <a href="#about">About</a>
                <a href="#letsTry">Features</a>
                <a href="#support">Support</a>
            </div>
            <button className="letsTry">Let's Try!</button>
        </nav>
    </header>
  )
}

export default Navbar