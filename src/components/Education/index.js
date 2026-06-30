import "./index.css";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Computer Science & Engineering",
      college: "Annamacharya Institute of Technology & Sciences, Tirupati",
      duration: "2021 - 2025",
      score: "CGPA: 8.12/10",
    },
    {
      degree: "Intermediate (MPC)",
      specialization: "Mathematics, Physics & Chemistry",
      college: "Sri Chaitanya Junior College, Tirupati",
      duration: "2019 - 2021",
      score: "Percentage: 66%", 
    },
    {
      degree: "Secondary School (SSC)",
      specialization: "",
      college: "Sri Vidyanikenthan English Medium High School",
      duration: "2009 - 2019",
      score: "GPA: 8.7/10", 
    },
  ];

  return (
    <section className="education-section" id="education">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Education
        </motion.h2>

        <div className="timeline">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>

              <div className="timeline-content">
                <h3>{item.degree}</h3>

                {item.specialization && (
                  <h4>{item.specialization}</h4>
                )}

                <p>{item.college}</p>

                <span>{item.duration}</span>

                <strong>{item.score}</strong>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;