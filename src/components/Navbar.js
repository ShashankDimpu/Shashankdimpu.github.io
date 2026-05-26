import React, { useEffect, useState } from 'react';
import './Navbar.css';

const links = [
  { href: '#home',      label: 'Home' },
  { href: '#about-me',  label: 'About' },
  { href: '#services',  label: 'Experience' },
  { href: '#research',  label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#skills',    label: 'Skills' },
  { href: '#contact',   label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState('home');
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map(l => l.href.slice(1));
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#home" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-badge">SS</span>
          <span className="logo-text">Shashank</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href.slice(1) ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
