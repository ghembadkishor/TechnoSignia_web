import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/layout.css";

const Header = ({ onOpenModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      {/* LOGO */}
      <div className="brand-center">
        <img src="/images/technosignia-logo.png" alt="TechnoSignia Logo" />
        <div className="brand-text">
          <span className="techno">Techno</span>
          <span className="signia">Signia</span>
        </div>
      </div>

      {/* DESKTOP NAV (same as your old nav) */}
      <nav className="nav desktop-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/placement">Placement</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <button className="cta-btn" onClick={onOpenModal}>
          Talk to Counsellor
        </button>
      </nav>

      {/* HAMBURGER ICON */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/placement" onClick={() => setMenuOpen(false)}>Placement</NavLink>
          <NavLink to="/courses" onClick={() => setMenuOpen(false)}>Courses</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>

          <button
            className="cta-btn mobile-cta"
            onClick={() => {
              onOpenModal();
              setMenuOpen(false);
            }}
          >
            Talk to Counsellor
          </button>
        </div>
      )}

    </header>
  );
};

export default Header;
