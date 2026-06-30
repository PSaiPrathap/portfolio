import "./index.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profile from "../../assets/images/profile.png";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hero-left"
        >
          <p className="greeting">👋 Hello, I'm</p>

          <h1>
            Sai Prathap <span>Pulikodi</span>
          </h1>

          <TypeAnimation
            sequence={[
              "MERN Full Stack Developer",
              2000,
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
              "Software Engineer",
              2000,
            ]}
            wrapper="h2"
            speed={40}
            repeat={Infinity}
          />

          <p className="hero-description">
            Passionate Frontend Developer with strong knowledge of
            React.js, JavaScript, HTML, CSS, Java, and REST APIs.
            I enjoy building clean, responsive, and user-friendly
            web applications.
          </p>

          <div className="hero-buttons">
            <a
              href="/resume.pdf"
              className="btn primary-btn"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-icons">

            <a
              href="https://github.com/PSaiPrathap"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/psaiprathap"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:saiprathapaits@gmail.com">
              <FaEnvelope />
            </a>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hero-right"
        >
          <img src={profile} alt="Sai Prathap" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;