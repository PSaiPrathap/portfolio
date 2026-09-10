import "./index.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>

        <p>
         I’m <span>Sai Prathap</span>, a passionate MERN Stack Developer with knowledge of Java, Cloud Technologies (AWS), Selenium Automation Testing, and Manual Testing.
          I am dedicated to building modern, scalable, and user-friendly applications while ensuring software quality and reliability. I enjoy developing full-stack web 
          solutions using React.js, Node.js, Express.js, MongoDB, JavaScript, and Java, along with performing functional and automation testing using Selenium.
           I have a good understanding of Agile/Scrum methodologies, software testing processes, and defect identification. 
           With strong problem-solving abilities and a focus on clean, maintainable code and quality-driven development, I strive to deliver efficient and reliable software solutions.
            I am eager to contribute to innovative teams, learn emerging technologies, and grow as a software engineer while creating impactful digital experiences.
        </p>

        <div className="about-cards">

          <div className="card">
            <h3>10+</h3>
            <p>Projects</p>
          </div>

          <div className="card">
            <h3>React</h3>
            <p>Frontend Development</p>
          </div>

          <div className="card">
            <h3>MERN Stack</h3>
            <p>Building Full-Stack Web Applications</p>
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default About;