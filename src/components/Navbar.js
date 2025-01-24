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
          <a href="#features">Features</a>
          <a href="#preview">Preview</a>
          <a href="#support">Support</a>
        </div>
        <button
          className="letsTry"
          onClick={() => {
            document.getElementById('preview').scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          Let's Try!
        </button>
      </nav>
    </header>
  );
}

export default Navbar;