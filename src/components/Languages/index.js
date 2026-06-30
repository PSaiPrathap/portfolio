import "./index.css";
import { motion } from "framer-motion";
import { FaLanguage } from "react-icons/fa";

const languages = [
  {
    language: "English",
    level: "Professional Working Proficiency",
  },
  {
    language: "Telugu",
    level: "Native Proficiency",
  },
  {
    language: "Hindi",
    level: "Conversational Proficiency",
  },
];

const Languages = () => {
  return (
    <section className="languages-section" id="languages">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Languages
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Languages I can communicate in effectively.
        </motion.p>

        <div className="languages-grid">
          {languages.map((item, index) => (
            <motion.div
              key={index}
              className="language-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
            >
              <div className="language-icon">
                <FaLanguage />
              </div>

              <h3>{item.language}</h3>

              <p>{item.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;