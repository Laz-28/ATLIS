import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="brand-name">Axiomstack</span>
        <p className="footer-tagline">Software built with intent, not templates.</p>
      </div>

      <nav className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
      </nav>

      <div className="footer-contact">
        <a href="mailto:hello@axiomstack.dev">hello@axiomstack.dev</a>
        <a href="https://github.com/axiomstack" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://reddit.com/u/axiomstack" target="_blank" rel="noreferrer">
          Reddit
        </a>
      </div>

      <div className="footer-bottom">
        <span>© {year} Axiomstack</span>
      </div>
    </footer>
  );
}

export default Footer;