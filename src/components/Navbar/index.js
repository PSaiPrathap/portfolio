import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <span>Sai Prathap</span> Pulikodi
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onClick={closeMenu}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="education"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onClick={closeMenu}
          >
            Education
          </Link>
        </li>

        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onClick={closeMenu}
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onClick={closeMenu}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </li>

        <li>
          <a
            href="/resume.pdf"
            className="resume-btn"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;