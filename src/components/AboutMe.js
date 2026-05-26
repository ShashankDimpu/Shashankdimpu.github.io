import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './AboutMe.css';

const stats = [
  { value: 4,   suffix: '+', label: 'Years Experience' },
  { value: 10,  suffix: '+', label: 'Projects Built'   },
  { value: 20,  suffix: '+', label: 'Technologies'     },
  { value: 3.6, suffix: '',  label: 'MS GPA'           },
];

const tools = [
  'Python', 'C#', 'TypeScript', 'Azure OpenAI', 'LangGraph',
  'RAG / FAISS', 'Semantic Kernel', 'Docker', 'Kubernetes',
  'AWS', 'Azure', 'PostgreSQL', 'Prometheus', 'Grafana',
];

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.6 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const isDecimal = !Number.isInteger(target);
    let cur = 0;
    const step = target / 40;
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) {
        setCount(target);
        clearInterval(t);
      } else {
        setCount(isDecimal ? Math.round(cur * 10) / 10 : Math.ceil(cur));
      }
    }, 35);
    return () => clearInterval(t);
  }, [started, target]);

  const display = Number.isInteger(target) ? count : count.toFixed(1);
  return <span ref={ref}>{display}{suffix}</span>;
}

const AboutMe = () => {
  const [headerRef, headerIn] = useScrollAnimation();
  const [textRef,   textIn]   = useScrollAnimation();

  return (
    <section id="about-me" className="about-section">
      <div className="container">
        <div ref={headerRef} className={`about-header animate ${headerIn ? 'in-view' : ''}`}>
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Building things that <span className="gradient-text">matter</span>
          </h2>
        </div>

        <div className="about-body">
          <div ref={textRef} className={`about-text-col animate ${textIn ? 'in-view' : ''}`}>
            <p className="about-para">
              I'm a Software Engineer with 4+ years of experience building scalable, cloud-native, and AI-driven
              applications. I hold an MS in Computer Science (AI track, GPA 3.6) from the University at Buffalo and
              specialize in the Microsoft/Azure ecosystem.
            </p>
            <p className="about-para">
              At <strong>Quadrant Technologies LLC</strong> (Redmond, WA), I design AI-powered agents using
              Azure OpenAI, RAG architectures, and the MCP framework — automating enterprise document workflows
              and cutting drafting time by 80%. Previously at <strong>Holiday Channel</strong>, I applied SRE
              practices to high-availability distributed systems, reducing MTTR by 40% using Prometheus and Grafana.
            </p>
            <p className="about-para">
              My earlier work at Datalyzer and BrightChamps spanned NLP chatbots, automated ETL pipelines, and
              PostgreSQL performance tuning. At UB, I served as both a Research Assistant (LLM evaluation) and
              Graduate Teaching Assistant (cloud DevOps education).
            </p>

            <div className="stats-row">
              {stats.map((s, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-value gradient-text">
                    <CountUp target={s.value} suffix={s.suffix} />
                  </span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="tools-row">
              <p className="tools-label">I work with</p>
              <div className="tools-tags">
                {tools.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
