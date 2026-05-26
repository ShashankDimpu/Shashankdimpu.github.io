import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Education.css';

const courses = [
  'Machine Learning', 'Deep Learning', 'Computer Vision',
  'Data Models & Query Languages', 'Algorithm Analysis & Design',
  'Distributed Systems', 'Natural Language Processing', 'Cloud Computing',
];

const Education = () => {
  const [headerRef, headerIn] = useScrollAnimation();
  const [cardRef,   cardIn]   = useScrollAnimation();

  return (
    <section id="education" className="edu-section">
      <div className="container">
        <div ref={headerRef} className={`animate ${headerIn ? 'in-view' : ''}`}>
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div ref={cardRef} className={`edu-card glass-card animate d2 ${cardIn ? 'in-view' : ''}`}>
          <div className="edu-left">
            <div className="edu-icon-wrap">
              <svg viewBox="0 0 64 64" fill="none" className="edu-icon-svg">
                <rect width="64" height="64" rx="14" fill="url(#grad)" />
                <path d="M32 14L8 26l24 12 24-12L32 14z" fill="white" opacity="0.9"/>
                <path d="M14 32v14c0 0 8 7 18 7s18-7 18-7V32" stroke="white" strokeWidth="2.5"
                  strokeLinecap="round" fill="none" opacity="0.7"/>
                <circle cx="56" cy="26" r="3" fill="white" opacity="0.8"/>
                <path d="M56 26v10" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="64" y2="64">
                    <stop offset="0%" stopColor="#6366f1"/>
                    <stop offset="100%" stopColor="#a855f7"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="edu-body">
            <div className="edu-header-row">
              <div>
                <h3 className="edu-school">University at Buffalo</h3>
                <p className="edu-school-sub">State University of New York (SUNY)</p>
              </div>
              <span className="edu-period-badge">2023 – 2025</span>
            </div>

            <div className="edu-degree-row">
              <div className="edu-degree-badge">
                <span>Master of Science</span>
              </div>
              <div>
                <p className="edu-degree">Computer Science · AI Track</p>
                <p className="edu-spec">GPA: 3.6 &nbsp;·&nbsp; Specialization: Artificial Intelligence</p>
              </div>
            </div>

            <div className="edu-divider" />

            <div>
              <p className="edu-courses-label">Relevant Coursework</p>
              <div className="edu-courses">
                {courses.map(c => <span key={c} className="tag">{c}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
