import React from "react";
import "./hero.css";

const Hero = ({ image, children }) => (
  <section className="section hero">
    <div className="container">
      <img src={image} alt="" className="featured-image" />
      <div className="content">{children}</div>
    </div>
  </section>
);

export default Hero;
