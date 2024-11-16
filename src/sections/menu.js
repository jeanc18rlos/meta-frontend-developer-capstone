import { Link } from "react-router-dom";
import { MenuCard } from "../components/card";
import "./menu.css";

const Menu = ({ title, linkText, link, cards }) => {
  return (
    <section className="section menu-section" id="menu">
      <div className="container">
        <div className="menu-title">
          <h3>{title}</h3>
          {link && (
            <Link className="button primary" to={link}>
              {linkText}
            </Link>
          )}
        </div>
        <div className="menu-cards">
          {cards.map((card, index) => (
            <MenuCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
