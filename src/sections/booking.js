import React from "react";
import "./booking.css";

const Booking = ({ children, title, subTitle, description }) => (
  <section className="section booking">
    <div className="container">
      <div className="content">
        <h1>{title}</h1>
        <h4>{subTitle}</h4>
        <p>{description}</p>
      </div>
      {children}
    </div>
  </section>
);

export default Booking;
