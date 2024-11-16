import { Link } from "../components/link";
import "./footer.css";
const Footer = ({ links }) => (
  <footer className="footer">
    <nav className="container">
      <Link url="/">
        <img src="/images/logo-vertical.png"  alt="logo" />
      </Link>
      {links.map((link) => (
        <div key={link.label}>
          <h4>{link.label}</h4>
          <ul>
            {link.links.map((sublink) => (
              <li key={sublink.label}>
                <Link url={sublink.url} type={sublink.type}>{sublink.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  </footer>
);

export default Footer;
