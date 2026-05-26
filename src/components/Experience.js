import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import DataLogo from '../assets/DataLogo.jpeg';
import BrightLogo from '../assets/BrightLogo.jpeg';
import HolidayLogo from '../assets/holiday_logo.png';
import QuadrantLogo from '../assets/quadrant_logo.jpeg';
import UBLogo from '../assets/ub_logo.jpeg';
import './Experience.css';

const jobs = [
  {
    id: 'quadrant',
    logo: QuadrantLogo,
    company: 'Quadrant Technologies LLC',
    role: 'Software Engineer',
    period: 'Dec 2025 – Present',
    location: 'Redmond, WA · On-site',
    badge: 'Current',
    bullets: [
      'Designed and developed an AI-powered agent to automatically generate professional Statement of Work (SOW) documents using Azure OpenAI and LLM-based architectures.',
      'Implemented RAG workflows leveraging Azure Cognitive Services and semantic retrieval mechanisms for accurate document context.',
      'Integrated MCP framework and prompt orchestration strategies for structured and compliant document generation.',
      'Improved document drafting time by 80% by automating manual SOW creation processes.',
      'Built RESTful APIs using C# and Python for AI service integration within enterprise systems.',
      'Automated CI/CD pipelines using Docker, Kubernetes, Azure DevOps, and Git-based workflows to ensure reliable deployments.',
    ],
  },
  {
    id: 'holidaychannel',
    logo: HolidayLogo,
    company: 'Holiday Channel',
    role: 'Software Engineer',
    period: 'Feb 2025 – Dec 2025',
    location: 'Colorado, USA · Remote',
    badge: 'SRE',
    bullets: [
      'Designed and supported high-availability backend systems with an SRE mindset, focusing on reliability, performance, and observability.',
      'Analyzed CPU, memory, and application performance metrics using Prometheus, Grafana, and Azure/AWS monitoring tools.',
      'Built monitoring dashboards and alerting strategies, reducing MTTR by ~40% across distributed services.',
      'Conducted performance and load testing using Playwright, JMeter, Postman, and REST API validation strategies.',
      'Deployed and managed services across AWS (Lambda, ECS, S3) and Azure environments.',
      'Collaborated with DevOps teams to define SLAs, SLOs, and reliability best practices.',
    ],
  },
  {
    id: 'ub-ta',
    logo: UBLogo,
    company: 'University at Buffalo',
    role: 'Graduate Teaching Assistant',
    period: 'Sep 2024 – Dec 2024',
    location: 'Buffalo, NY',
    badge: 'UB',
    bullets: [
      'Guided students on cloud application deployment using AWS and Azure fundamentals.',
      'Taught DevOps best practices including CI/CD pipelines, Docker, Kubernetes, Jenkins, and Terraform.',
    ],
  },
  {
    id: 'ub-ra',
    logo: UBLogo,
    company: 'University at Buffalo',
    role: 'Research Assistant',
    period: 'Sep 2023 – Aug 2024',
    location: 'Buffalo, NY',
    badge: 'UB',
    bullets: [
      'Designed experiments to evaluate model performance, system throughput, and inference latency for LLM-based systems.',
      'Built backend services with Python, Docker, PostgreSQL, and WebSockets, emphasizing scalability and reliability.',
    ],
  },
  {
    id: 'datalyzer',
    logo: DataLogo,
    company: 'Datalyzer International Inc.',
    role: 'Software Engineer',
    period: 'Feb 2021 – Jul 2023',
    location: 'Bengaluru, India',
    badge: '2.5 yrs',
    bullets: [
      'Built NLP-based internal support chatbot (proof-of-concept) using NLTK and spaCy, resolving frequent user queries autonomously.',
      'Developed automated ETL pipelines using AWS CodePipeline, CloudFormation, and Docker, improving data ingestion and reporting efficiency by 40%.',
      'Designed and integrated RESTful APIs for user management, product handling, and billing services, improving data consistency and throughput by 30%.',
    ],
  },
  {
    id: 'brightchamps',
    logo: BrightLogo,
    company: 'BrightChamps Pvt. Ltd.',
    role: 'Software Engineer (Freelance)',
    period: 'Mar 2021 – Jul 2023',
    location: 'Bengaluru, India',
    badge: 'Freelance',
    bullets: [
      'Led architecture improvements to backend data flows using PostgreSQL, reducing query latency by 35%.',
      'Contributed to AI-driven learning assistance features, leveraging NLP and recommendation algorithms to personalize student engagement.',
    ],
  },
];

const Experience = () => {
  const [open, setOpen] = useState(null);
  const [headerRef, headerIn] = useScrollAnimation();

  return (
    <section id="services" className="exp-section">
      <div className="container">
        <div ref={headerRef} className={`animate ${headerIn ? 'in-view' : ''}`}>
          <span className="section-label">Work History</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-sub">
            4+ years across AI-driven enterprise systems, SRE, full-stack engineering, and academic research —
            spanning India and the United States.
          </p>
        </div>

        <div className="timeline">
          {jobs.map((job, i) => (
            <TimelineCard
              key={job.id}
              job={job}
              index={i}
              isOpen={open === job.id}
              onToggle={() => setOpen(open === job.id ? null : job.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function TimelineCard({ job, index, isOpen, onToggle }) {
  const [ref, inView] = useScrollAnimation();

  return (
    <div ref={ref} className={`tl-item animate d${(index % 3) + 1} ${inView ? 'in-view' : ''}`}>
      <div className="tl-marker">
        <div className="tl-dot" />
      </div>

      <div className={`tl-card glass-card ${isOpen ? 'tl-open' : ''}`}>
        <div
          className="tl-header"
          onClick={onToggle}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && onToggle()}
        >
          <div className="tl-logo-wrap">
            {job.logo ? (
              <img src={job.logo} alt={job.company} className="tl-logo" />
            ) : (
              <div className="tl-logo-letter" style={{ background: job.avatarColor }}>
                {job.letterAvatar}
              </div>
            )}
          </div>

          <div className="tl-info">
            <div className="tl-top">
              <div>
                <h3 className="tl-company">{job.company}</h3>
                <p className="tl-role">{job.role}</p>
              </div>
              <span className="tl-badge">{job.badge}</span>
            </div>
            <div className="tl-meta">
              <span>{job.period}</span>
              <span className="tl-dot-sep">·</span>
              <span>{job.location}</span>
            </div>
          </div>

          <span className={`tl-chevron ${isOpen ? 'up' : ''}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>

        <div className={`tl-body ${isOpen ? 'tl-body-open' : ''}`}>
          <ul className="tl-bullets">
            {job.bullets.map((b, i) => (
              <li key={i} className="tl-bullet">
                <span className="bullet-dot" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
