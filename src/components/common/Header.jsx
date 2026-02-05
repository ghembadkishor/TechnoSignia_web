import { NavLink } from "react-router-dom";
import "../../styles/layout.css";

const Header = ({ onOpenModal }) => {
  return (
    <header className="header">
      <div className="brand-center">
        <img src="/images/technosignia-logo.png" alt="TechnoSignia Logo" />
        <div className="brand-text">
          <span className="techno">Techno</span>
          <span className="signia">Signia</span>
        </div>
      </div>

      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/placement">Placement</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <button className="cta-btn" onClick={onOpenModal}>
          Talk to Counsellor
        </button>
      </nav>
    </header>
  );
};

export default Header;
