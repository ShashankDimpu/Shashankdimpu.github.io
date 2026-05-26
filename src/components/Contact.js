import { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [sent,    setSent]    = useState(false);
  const [sending, setSending] = useState(false);
  const [error,   setError]   = useState(false);
  const [headerRef, headerIn] = useScrollAnimation();
  const [formRef,   formIn]   = useScrollAnimation();

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    setError(false);
    emailjs.sendForm('service_6uuz05u', 'template_7at33jm', e.target, 'uxRRLTJhII2wWwEGd')
      .then(() => {
        setSent(true);
        setSending(false);
        e.target.reset();
      })
      .catch(() => {
        setSending(false);
        setError(true);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" />
      <div className="container contact-inner">

        {/* Left — info */}
        <div ref={headerRef} className={`contact-info animate ${headerIn ? 'in-view' : ''}`}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="contact-desc">
            Whether you have a role in mind, want to collaborate on a project, or just want to say hi —
            my inbox is always open.
          </p>

          <div className="contact-links">
            <a href="mailto:shashanks874pm@gmail.com" className="contact-link">
              <span className="contact-icon-wrap"><FaEnvelope /></span>
              <div>
                <p className="contact-link-label">Email</p>
                <p className="contact-link-value">shashanks874pm@gmail.com</p>
              </div>
            </a>

            <a href="tel:4255470422" className="contact-link">
              <span className="contact-icon-wrap"><FaPhone /></span>
              <div>
                <p className="contact-link-label">Phone</p>
                <p className="contact-link-value">+1 (425) 547-0422</p>
              </div>
            </a>
          </div>

          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/shashank-shankaregowda-9b09071b9/"
               target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/ShashankDimpu"
               target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaGithub />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div ref={formRef} className={`contact-form-wrap glass-card animate d2 ${formIn ? 'in-view' : ''}`}>
          {sent ? (
            <div className="contact-success">
              <div className="success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h3 className="form-title">Send a message</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="user_name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="user_email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="What's on your mind?" rows={6} required />
              </div>
              {error && (
                <p className="form-error">
                  Something went wrong. Please try again or email me directly at shashanks874pm@gmail.com
                </p>
              )}
              <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
                {sending ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bar">
        <p>© {new Date().getFullYear()} Shashank Shankaregowda · Built with React</p>
      </div>
    </section>
  );
};

export default Contact;
