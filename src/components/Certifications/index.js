import "./index.css";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

import Python from "../../assets/certificates/Python.png";
// import aws from "../../assets/certificates/aws.png";
import MERN from "../../assets/certificates/MERN FullStack.png";
import react from "../../assets/certificates/React JS.png";

const certificates = [
  {
    title: "Python Programming",
    organization: "NxtWave",
    image: Python,
    date: "2024",
    link: "https://certificates.ccbp.in/intensive/programming-foundations?id=AWTSBZMCFQ",
  },
  {
    title: "React JS",
    organization: "NxtWave",
    image: react,
    date: "2025",
    link: "https://certificates.ccbp.in/intensive/react-js?id=CVUOBBQFBO",
  },
  {
    title: "MERN Stack Development",
    organization: "NxtWave",
    image: MERN,
    date: "2025",
    link: "https://certificates.ccbp.in/intensive/irc?id=AEJ3LFZ6XW",
  },
//   {
//     title: "AWS Cloud Foundations",
//     organization: "AWS Academy",
//     image: aws,
//     date: "2025",
//     link: "#",
//   },
];

const Certifications = () => {
  return (
    <section className="certifications-section" id="certifications">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Certificates
        </motion.h2>

        <p className="section-subtitle">
          Professional Certificates that demonstrate my technical knowledge and continuous learning.
        </p>

        <div className="certifications-grid">

          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              className="certificate-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
              />

              <h3>{certificate.title}</h3>

              <h4>{certificate.organization}</h4>

              <p>{certificate.date}</p>

              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
                <FaExternalLinkAlt />
              </a>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certifications;