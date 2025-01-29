"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for text reveal on scroll
    gsap.from(".line h1", {
      duration: 1.8,
      y: 200,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".hero",
        start: "top 90%",
        end: "top 50%",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });
  }, []);

  return (
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
  );
};

export default Hero;
