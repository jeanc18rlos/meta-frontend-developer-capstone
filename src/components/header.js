import { Link } from "react-router-dom";
import Button from "./button";
import { ThreeHorizontalLines, Close } from "./icons";
import { useState } from "react";

const Header = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header">
      <nav className="container">
        <Link to="/">
          <img className="logo" src="logo.png" alt="logo" />
        </Link>
        <Button
          className="burger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Close /> : <ThreeHorizontalLines />}
        </Button>
        <ul className={`menu ${isMenuOpen && "active"}`}>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
