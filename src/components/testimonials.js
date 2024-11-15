import { TestimonialCard } from "./card";

const Menu = ({ title, cards }) => {
  return (
    <section className="testimonials-section">
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
