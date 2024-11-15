import { Link } from "react-router-dom";

const Footer = ({ links }) => (
  <footer className="footer">
    <nav className="container">
      <Link to="/">
        <img src="logo-footer.png" alt="logo" />
      </Link>
      {links.map((link) => (
        <div key={link.label}>
          <h4>{link.label}</h4>
          <ul>
            {link.links.map((sublink) => (
              <li key={sublink.label}>
                <Link to={sublink.path}>{sublink.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  </footer>
);

export default Footer;
