import "./index.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-left">
          <h2>Sai Prathap</h2>
          <p>MERN Stack Developer</p>

          <p className="footer-description">
            Passionate about building responsive,
            scalable and user-friendly web applications
            using modern technologies.
          </p>
        </div>

        <div className="footer-center">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-right">
          <h3>Connect</h3>

          <div className="footer-icons">

            <a
              href="https://github.com/PSaiPrathap"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/saiprathap-pulikodi/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:saiprathapaits@gmail.com">
              <FaEnvelope />
            </a>

          </div>

          <button
            className="top-button"
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

      <hr />

      <div className="copyright">
        <p>
          © {new Date().getFullYear()} Sai Prathap.
          Built with React <FaHeart className="heart" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;