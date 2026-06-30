import "./index.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_ux77gir",
        "template_xq3hkec",
        form.current,
        "fpK5mE3tDYfc5Pe4c"
      )
      .then(
        () => {
          setLoading(false);
          setMessage("✅ Your message has been sent successfully.");
          form.current.reset();
        },
        () => {
          setLoading(false);
          setMessage("❌ Unable to send your message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">

        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2>Get In Touch</h2>
          <p>
            Have a project, internship, freelance opportunity, or job opening?
            Feel free to contact me using the form below.
          </p>
        </motion.div>

        <div className="contact-wrapper">

          {/* Left */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >

            <div className="info-box">
              <FaEnvelope className="icon" />

              <div>
                <h3>Email</h3>

                <a href="mailto:saiprathapaits@gmail.com">
                  saiprathapaits@gmail.com
                </a>
              </div>
            </div>

            <div className="info-box">
              <FaPhoneAlt className="icon" />

              <div>
                <h3>Phone</h3>

                <a href="tel:+916302301323">
                  +91 63023 01323
                </a>
              </div>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt className="icon" />

              <div>
                <h3>Location</h3>

                <p>Tirupati, Andhra Pradesh, India</p>
              </div>
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
                href="https://linkedin.com/in/saiprathap-pulikodi"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >

            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
            />

            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {message && (
              <p className="status-message">
                {message}
              </p>
            )}

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;




// import "./index.css";
// import { motion } from "framer-motion";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaLinkedin,
//   FaGithub,
// } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <section className="contact-section" id="contact">
//       <div className="container">

//         <motion.h2
//           className="section-title"
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//         >
//           Get In Touch
//         </motion.h2>

//         <p className="section-subtitle">
//           I'm always open to discussing new opportunities,
//           collaborations, or innovative projects.
//         </p>

//         <div className="contact-container">

//           {/* Left Side */}

//           <motion.div
//             className="contact-info"
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//           >

//             <div className="info-card">
//               <FaEnvelope />
//               <div>
//                 <h4>Email</h4>
//                 <p>saiprathapaits@gmail.com</p> 
//               </div>
//             </div>

//             <div className="info-card">
//               <FaPhoneAlt />
//               <div>
//                 <h4>Phone</h4>
//                 <p>+91 63023 01323</p>
//               </div>
//             </div>

//             <div className="info-card">
//               <FaMapMarkerAlt />
//               <div>
//                 <h4>Location</h4>
//                 <p>Andhra Pradesh, India</p>
//               </div>
//             </div>

//             <div className="social-links">

//               <a
//                 href="https://github.com/PSaiPrathap"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <FaGithub />
//               </a>

//               <a
//                 href="https://www.linkedin.com/in/saiprathap-pulikodi/"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <FaLinkedin />
//               </a>

//             </div>

//           </motion.div>

//           {/* Right Side */}

//           <motion.form
//             className="contact-form"
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//           >

//             <input
//               type="text"
//               placeholder="Your Name"
//             />

//             <input
//               type="email"
//               placeholder="Your Email"
//             />

//             <input
//               type="text"
//               placeholder="Subject"
//             />

//             <textarea
//               rows="6"
//               placeholder="Your Message"
//             ></textarea>

//             <button type="submit">
//               Send Message
//             </button>

//           </motion.form>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Contact;