"use client"

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Stats = () => {

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate the stats when they come into view
    gsap.fromTo(
      ".stat", // Target all elements with class "stat"
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.2, // Optional: stagger the animations for a smoother effect
        scrollTrigger: {
          trigger: ".stats-container", // Trigger the animation when Stats section enters the viewport
          start: "top 80%", // Start when the top of the section is 80% from the top of the viewport
          end: "top 50%",
          toggleActions: "play none none reverse", // Play on enter, reverse on exit
          markers: false, // Set to `true` to visualize trigger points while debugging
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
