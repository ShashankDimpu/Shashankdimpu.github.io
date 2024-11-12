import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#services">Experience</a></li>
        <li><a href="#research">Projects</a></li>
        {/* <li><a href="#patient-resources">Patient Resources</a></li> */}
        {/* <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#blog">Blog</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
