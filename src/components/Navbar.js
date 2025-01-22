'use client';

import React from 'react';
import '../app/main.css';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  
  return (
    <header>
      <nav>
        <div className="logo">
          <div className="logo-icon"></div>
          TABVIEWER
        </div>
        <div className="nav-links">
          <a href="#about" onClick={() => router.push(Footer)}>About</a>
          <a href="#letsTry">Features</a>
          <a href="#support">Support</a>
        </div>
        <button className="letsTry">Let's Try!</button>
      </nav>
    </header>
  );
}

export default Navbar;