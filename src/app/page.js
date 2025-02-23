"use client";

import Preview from "@/app/components/Preview";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for text reveal on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top 90%",
        end: "top 50%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    tl.from(".line h1", {
      duration: 1.8,
      y: 200,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.4,
    });

    // Animation for features section
    gsap.from(".features .feature-card", {
      scrollTrigger: {
        trigger: ".features",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        // markers: true,
      },
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.3,
    });

    // Animation for stats section
    gsap.from(".stats .stat", {
      scrollTrigger: {
        trigger: ".stats",
        start: "top 45%",
        end: "top 30%",
        // markers: true,
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: 0.5,
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="app">
      <header>
        <nav className="flex justify-between items-center px-4">
          <a
            className="logo flex items-center space-x-2 text-xl font-semibold"
            href="#"
          >
            <div className="logo-icon w-6 h-6 bg-blue-500 rounded-full"></div>
            <span>TABVIEWER</span>
          </a>
          <div className="nav-links flex space-x-6">
            <a
              href="#features"
              className="hover:text-blue-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#preview"
              className="hover:text-blue-400 transition-colors"
            >
              Preview
            </a>
            <a
              href="#support"
              className="hover:text-blue-400 transition-colors"
            >
              Support
            </a>
          </div>
          <button
            className="letsTry bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            onClick={() => {
              document.getElementById("preview").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Let's Try!
          </button>
        </nav>
      </header>

      <section className="hero py-16">
        <section className="textreveal text-center">
          <div className="line mb-6">
            <h1 className="text-4xl font-bold text-gray-800">
              Hello! <span className="text-blue-500">Community</span>
            </h1>
          </div>
          <div className="line mb-6">
            <h1 className="text-4xl font-semibold text-gray-800">
              Bring Change Together!
            </h1>
          </div>
        </section>
        <div className="btn flex justify-center">
          <button
            id="getStartedBtn"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Let's Get Started
          </button>
        </div>
      </section>

      <section className="features bg-gray-50 py-16" id="features">
        <div className="container mx-auto px-4 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-semibold text-blue-500">#1</h2>
            <p className="mt-4 text-lg text-gray-700">
              TechTap, first in the segment!
            </p>
          </div>
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-semibold text-blue-500">3</h2>
            <p className="mt-4 text-lg text-gray-700">
              Main viewport tabs in only 1 view!
            </p>
          </div>
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-semibold text-blue-500">Cool UI</h2>
            <p className="mt-4 text-lg text-gray-700">
              Simple UI for better User experience!
            </p>
          </div>
        </div>
      </section>

      <Preview />

      <section className="stats bg-gray-100 py-16" id="stats">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2">
          <div className="stat p-6 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-blue-500">5+</h3>
            <p className="mt-2 text-lg text-gray-700">Positive Reviews</p>
          </div>
          <div className="stat p-6 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-blue-500">76%</h3>
            <p className="mt-2 text-lg text-gray-700">Success Rate</p>
          </div>
        </div>
      </section>

      <footer>
        <div id="waChat" className="waChat">
          <div className="waChat-container">
            <a
              className="waChat-toggle"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=93XXXXXXXX&amp;text=Hello, let's discuss more about this product!"
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span className="waChat-text">How can I help you?</span>
            </a>
          </div>
        </div>
        <div className="footer-content" id="support">
          <div className="footer-section">
            <h3>Made with</h3>
            <ul className="bottom-footer">
              <span>❤ by</span>
              <h4>Hariom Singh</h4>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#preview">Preview</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Social</h3>
            <ul className="footer-links social">
              <li>
                <a href="mailto:krishna636471@gmail.com">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hariomsingh97/"
                  target="blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/githbkrishna" target="blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}
