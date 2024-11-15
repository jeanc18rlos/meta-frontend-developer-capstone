import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";

const Hero = ({ image, title, subtitle, description, linkText, link }) => (
  <section className="hero">
    <div className="container">
      <img src={image} alt="" className="featured-image" />
      <div>
        {title && <h1>{title}</h1>}
        {subtitle && <h3>{subtitle}</h3>}
        {description && <p>{description}</p>}
        <Button variant={"primary"}>
          <Link to={link}>{linkText}</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default Hero;
