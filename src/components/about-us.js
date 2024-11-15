import React from "react";

const AboutUs = ({ image1, image2, title, subtitle, description }) => (
  <section className="about-us">
    <div className="container">
      <div className="featured-image">
        <img src={image1} alt="" className="image-1" />
        <img src={image2} alt="" />
      </div>
      <div className="content">
        {title && <h1>{title}</h1>}
        {subtitle && <h3>{subtitle}</h3>}
        {description && <p>{description}</p>}
      </div>
    </div>
  </section>
);

export default AboutUs;
