import { NavLink } from "reactstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <NavLink
            href="https://facebook.com"
            target="_blank"
            className="social-link"
          >
            Facebook
          </NavLink>
          <NavLink
            href="https://twitter.com"
            target="_blank"
            className="social-link"
          >
            Twitter
          </NavLink>
          <NavLink
            href="https://linkedin.com"
            target="_blank"
            className="social-link"
          >
            LinkedIn
          </NavLink>
        </div>
        <div className="about-link">
          <NavLink href="/about-us" className="about-us-link">
            About Us
          </NavLink>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Duuty</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
