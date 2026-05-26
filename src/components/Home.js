import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/Home image.png';
import './Home.css';

const roles = ['Software Engineer', 'Full-Stack Developer', 'Machine Learning Engineer', 'Creative Problem Solver'];

const Home = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let t;
    if (!deleting && charIdx < current.length) {
      t = setTimeout(() => setCharIdx(c => c + 1), 90);
    } else if (!deleting && charIdx === current.length) {
      t = setTimeout(() => setDeleting(true), 1900);
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx(c => c - 1), 45);
    } else {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="hero-grid" />
      </div>

      {/* Right-half background photo */}
      <div className="hero-photo-bg">
        <img src={profileImage} alt="Shashank Shankaregowda" className="hero-photo-img" />
        <div className="hero-photo-overlay" />
      </div>

      <div className="hero-content container">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot" />
            Open to new opportunities
          </div>

          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">Shashank</span>
            <br />Shankaregowda
          </h1>

          <div className="hero-role">
            <span className="role-prefix">I'm a&nbsp;</span>
            <span className="role-word">{roles[roleIdx].slice(0, charIdx)}</span>
            <span className="role-cursor">|</span>
          </div>

          <p className="hero-tagline">
            MS Computer Science @ University at Buffalo · AI Specialization.<br />
            Crafting scalable software at the intersection of full-stack engineering and intelligent systems.
          </p>

          <div className="hero-cta">
            <a href="#research" className="btn btn-primary">View My Work</a>
            <a href="/Shashank.pdf" download="Shashank_Shankaregowda_Resume.pdf" className="btn btn-secondary">
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/ShashankDimpu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shashank-shankaregowda-9b09071b9/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="mailto:shashanks874pm@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Empty right column — photo fills this area as absolute background */}
        <div className="hero-right-spacer" />
      </div>

      <a href="#about-me" className="hero-scroll" aria-label="Scroll down">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        <span>Scroll</span>
      </a>
    </section>
  );
};

export default Home;
