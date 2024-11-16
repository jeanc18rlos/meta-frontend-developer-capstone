import { TestimonialCard } from "../components/card";
import "./testimonials.css";

const Menu = ({ title, cards }) => {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <h2>{title}</h2>

        <div className="testimonials-cards">
          {cards.map((card, index) => (
            <TestimonialCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
