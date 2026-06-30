import "./index.css";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const internships = [
  {
    company: "Excelr",
    role: "Full Stack Java",
    duration: "May 2024 - July 2024",
    description:
      "Worked as a Frontend Developer on a Student Registration Form full-stack application using React.js, JavaScript, HTML5, CSS3, and Bootstrap. Designed and developed responsive, reusable user interface components to deliver a seamless user experience. Integrated frontend pages with backend APIs and implemented client-side form validation for accurate data submission. Optimized the application's responsiveness and performance while following clean coding practices. Collaborated with the development team to ensure smooth frontend-backend integration and timely project delivery.",
    technologies: [
      "React.js",
      "JavaScript",
      "Bootstrap",
      "CSS",
      "HTML",
    ],
  },
];

const Internship = () => {
  return (
    <section className="internship-section" id="internship">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Internship Experience
        </motion.h2>

        <div className="timeline">

          {internships.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="timeline-icon">
                <FaBriefcase />
              </div>

              <div className="timeline-content">

                <h3>{item.role}</h3>

                <h4>{item.company}</h4>

                <span>{item.duration}</span>

                <p>{item.description}</p>

                <div className="tech-list">
                  {item.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Internship;