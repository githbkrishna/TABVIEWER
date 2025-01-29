"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Stats = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".stat",
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".stats", // The element that triggers the animation
          start: "top 80%", // When the top of the stats section hits 80% of the viewport
          end: "top 50%", // Animation ends when the top of the stats section hits 50% of the viewport
          toggleActions: "play none none reverse", // Play when entering, reverse when leaving
          markers: true, // For debugging, you can remove this in production
        },
      }
    );
  }, []);

  return (
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
  );
};

export default Stats;
