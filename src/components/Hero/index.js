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
              "Java Developer",
              2000,
              "Selinium Automation Tester",
              2000,
              "MERN Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Software Testing Engineer",
              2000,
            ]}
            wrapper="h2"
            speed={40}
            repeat={Infinity}
          />

          <p className="hero-description">
            Passionate Frontend Developer with knowledge of React.js, JavaScript, HTML, CSS, Java, and REST APIs, along with Selenium Automation Testing and Manual Testing.
             Familiar with Agile/Scrum methodologies and focused on building responsive, user-friendly, and high-quality applications.


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