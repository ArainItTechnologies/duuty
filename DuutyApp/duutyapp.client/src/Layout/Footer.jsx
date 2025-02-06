import { Link } from "react-router-dom";

import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <Link
            href="https://facebook.com"
            target="_blank"
            className="social-link"
          >
            <IoLogoFacebook />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="social-link"
          >
            <IoLogoTwitter />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="social-link"
          >
            <IoLogoLinkedin />
          </Link>
        </div>
        <div className="about-link">
          <Link href="/about" className="about-us-link">
            About Us
          </Link>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2025 Duuty</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
