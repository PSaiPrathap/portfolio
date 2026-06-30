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
          I'm <span>Sai Prathap</span>, a passionate MERN Stack Developer with knowledge of Python and Cloud Technologies (AWS),
           dedicated to building modern, scalable, and user-friendly applications. I enjoy developing full-stack web solutions using React.js, Node.js,
            Express.js, MongoDB, JavaScript, and Python. I continuously enhance my technical skills by working on real-world projects and exploring 
            cloud-based technologies. With strong problem-solving abilities and a focus on clean, maintainable code, I strive to deliver efficient and 
            high-quality software solutions. I am eager to contribute to innovative teams, learn emerging technologies, and grow as a software engineer 
            while creating impactful digital experiences.

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