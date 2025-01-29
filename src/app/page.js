"use client";

// import Features from "@/components/Features";
// import Footer from "@/components/Footer";
// import Hero from "@/components/Hero";
// import Navbar from "@/components/Navbar";
// import Stats from "@/components/Stats";
// import Image from "next/image";
import Preview from "@/components/Preview";
import Stats from "@/components/Stats";
import Image from "next/image";

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
        start: "top 55%",
        end: "top 30%",
        scrub: true,
        markers: true,
      },
      opacity: 0,
      y: 50,
      duration: 2,
      delay: 0.5,
      stagger: 0.3,
    });

  }, []);

  return (
    <div className="app">

      <header>
        <nav>
          <a className="logo" href="#">
            <div className="logo-icon"></div>
            TABVIEWER
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#preview">Preview</a>
            <a href="#support">Support</a>
          </div>
          <button
            className="letsTry"
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

      <section className="hero">
        <section className="textreveal">
          <div className="line">
            <h1>
              Hello! <span>Community</span>
            </h1>
          </div>
          <div className="line">
            <h1>Bring Change Together!</h1>
          </div>
        </section>
        <div className="btn">
          <button id="getStartedBtn">Let's Get Started</button>
        </div>
      </section>

      <section className="features" id="features">
        <div className="feature-card">
          <h2>#1</h2>
          <p>TechTap, first in the segment!</p>
        </div>
        <div className="feature-card">
          <h2>3</h2>
          <p>Main viewport tabs in only 1 view!</p>
        </div>
        <div className="feature-card">
          <h2>Cool UI</h2>
          <p>Simple UI for better User experience!</p>
        </div>
      </section>

      <Preview />

      <section className="stats">
        <div className="stat">
          <h3>15K+</h3>
          <p>Trusted Users</p>
        </div>
        <div className="stat">
          <h3>4.7K+</h3>
          <p>Positive Reviews</p>
        </div>
        <div className="stat">
          <h3>76%</h3>
          <p>Reply Rate</p>
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
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#letsTry">Features</a>
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