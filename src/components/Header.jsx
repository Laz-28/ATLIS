import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Header.css';

function Header() {
  const linkClass = ({ isActive }) =>
    isActive ? 'nav-link is-active' : 'nav-link';

  return (
    <header className="site-header">
      <NavLink to="/" end className="brand">
        <img src={logo} alt="" className="brand-mark" />
        <span className="brand-name">Axiomstack</span>
      </NavLink>

      <nav className="site-nav">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/services" className={linkClass}>
          Services
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
      </nav>

      <NavLink to="/services" className="cta-button">
        Start a project
      </NavLink>
    </header>
  );
}

export default Header;