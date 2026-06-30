import "./index.css";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGit,
  FaJava,
  FaPython,
  FaAws,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact />, color: "#61DBFB" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
  { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Git", icon: <FaGit />, color: "#F05032" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900" },
  { name: "Java", icon: <FaJava />, color: "#EA2D2E" },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <motion.p
          className="skills-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Technologies I use to build modern and scalable web applications.
        </motion.p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
            >
              <div
                className="skill-icon"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;