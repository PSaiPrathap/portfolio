import "./index.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import MedicalCareApp from "../../assets/projects/Medical-Care-App.png";
import StudentRegistrationForm from "../../assets/projects/Student-Registration-Form.jpeg";
// import superApp from "../../assets/projects/super-app.png";
import EmojiGame from "../../assets/projects/Emoji-Game.png";

const projects = [
  {
    title: "Medical Care App",
    image: MedicalCareApp,
    description:
      "It is an full-stack web application designed to simplify healthcare access for users. It allows users to search for doctors and manage appointments through a clean, responsive interface. Data is stored and managed securely using MongoDB Atlas, ensuring scalability and reliability.",
    tech: ["React", "JavaScript", "CSS", "REST API"],
    github: "https://github.com/PSaiPrathap/Medical-Care-App",
    live: "https://github.com/PSaiPrathap/Medical-Care-App",
  },
    {
    title: "Student Registration Form",
    image: StudentRegistrationForm,
    description:
      "The Student Registration Form is a full-stack Java web application built using Java, Spring Boot, React.js, and MySQL to manage student records efficiently through CRUD operations. It features a responsive user interface, RESTful API integration, form validation, and secure database connectivity for seamless data management.",
    tech: ["React", "MySql", "Bootstrap", "JavaScript"],
    github: "https://github.com/PSaiPrathap/Student-Registration-Form",
    live: "https://github.com/PSaiPrathap/Student-Registration-Form",
  },
//   {
//     title: "Super App",
//     image: superApp,
//     description:
//       "Super App is a single-page React application that enables users to register, select their favorite categories, and explore personalized movie recommendations. It also includes interactive widgets such as Notes, News, Weather, and Timer, with local storage integration for an enhanced user experience.",
//     tech: ["React", "JavaScript", "CSS"],
//     github: "https://github.com/PSaiPrathap/The_Super_App",
//     live: "https://the-super-app-sai-prathap.vercel.app/",
//   },
  {
    title: "Emoji Game",
    image: EmojiGame,
    description:
      "Emoji Game is an interactive React.js game where players earn points by clicking unique emojis without selecting the same emoji twice. The application uses React state management, dynamic UI updates, and a responsive design to deliver an engaging and enjoyable user experience.",
    tech: ["React", "Bootstrap", "CSS", "JavaScript"],
    github: "https://github.com/PSaiPrathap/Emoji-Game",
    live: "https://psaiprathap3.ccbp.tech",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">

        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          My Projects
        </motion.h2>

        <p className="projects-subtitle">
          Some of the projects I've built using modern web technologies.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">

                  {project.tech.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}

                </div>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;