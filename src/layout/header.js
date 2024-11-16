import { Link } from "../components/link";
import Button from "../components/button";
import { ThreeHorizontalLines, Close } from "../components/icons";
import { useState } from "react";
import "./header.css";

const Header = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header">
      <nav className="container">
        <Link url="/">
          <img className="logo" src="/images/logo-horizontal.png" alt="logo" />
        </Link>
        <Button
          className="burger-menu"
          variant="primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Close /> : <ThreeHorizontalLines />}
        </Button>
        <ul className={`menu ${isMenuOpen && "active"}`}>
          {links.map((link, index) => (
            <li key={index}>
              <Link url={link.url} type={link.type}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
