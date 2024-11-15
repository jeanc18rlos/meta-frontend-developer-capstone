import { Link } from "react-router-dom";
import Button from "./button";
import { MenuCard } from "./card";

const Menu = ({ title, linkText, link, cards }) => {
  return (
    <section className="menu-section">
      <div className="container">
        <div className="menu-title">
          <h3>{title}</h3>
          <Button variant={"primary"}>
            <Link to={link}>{linkText}</Link>
          </Button>
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
