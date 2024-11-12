import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6uuz05u', 'template_7at33jm', e.target, 'uxRRLTJhII2wWwEGd')
      .then((result) => {
          console.log(result.text);
          setIsSubmitted(true);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();  
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Me</h2>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <p>shashanks874pm@gmail.com</p>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <p>4255470422</p>
          </div>
          <div className="contact-item">
            <a href="https://www.linkedin.com/in/shashank-shankaregowda-9b09071b9/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="social-icon" /> {/* LinkedIn Icon */}
            </a>
            <a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" /> {/* Instagram Icon */}
            </a>
            <a href="https://github.com/ShashankDimpu" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" /> {/* GitHub Icon */}
            </a>
          </div>
          <div className="resume-download">
            <a href="/shashank resume_FS.pdf" download="Shashank_Sankaregoda_Resume.pdf">
              <button className="download-button">Download Resume</button>
            </a>
          </div>
        </div>

        <div className="contact-form">
          {isSubmitted ? (
            <div className="thank-you-message">
              <h2>Thank You!</h2>
              <p>Your message has been successfully sent.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="text" name="user_name" placeholder="Name" required />
              <input type="email" name="user_email" placeholder="Email" required />
              <textarea name="message" placeholder="Message" required></textarea>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
