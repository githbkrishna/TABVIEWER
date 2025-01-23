import React from "react";
import Image from "next/image";
import red from '../app/red.png'
import fluid from '../app/fluid.png'
import voilet from '../app/voilet.png'

const Features = () => {
  return (
    <section className="features">
      <div className="feature-card">
        <div className="feature-icon">
          {/* <img src={red} alt="Logo" /> */}
          {/* <Image src={red} alt="red"/> */}
        </div>
        <h2>#1</h2>
        <p>TechTap, first in the segment!</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">
          {/* <Image src={fluid} alt="fluid"/> */}
        </div>
        <h2>3</h2>
        <p>Main viewport tabs in only 1 view!</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">
          {/* <Image src={voilet} alt="voilet"/> */}
        </div>
        <h2>Cool UI</h2>
        <p>simple UI for better User experience!</p>
      </div>
    </section>
  );
};

export default Features;
