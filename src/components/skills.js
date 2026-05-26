import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './skills.css';

const categories = [
  {
    label: 'Languages',
    color: '#6366f1',
    skills: ['Python', 'C#', 'TypeScript', 'JavaScript', 'Node.js', 'C++'],
  },
  {
    label: 'AI & Machine Learning',
    color: '#a855f7',
    skills: ['Azure OpenAI', 'LLM / RAG Pipelines', 'Semantic Kernel', 'MCP Framework', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'Keras', 'NLP', 'Computer Vision', 'CNNs'],
  },
  {
    label: 'Cloud & DevOps',
    color: '#0891b2',
    skills: ['Azure', 'AWS (EC2, Lambda, ECS, S3, RDS)', 'Docker', 'Kubernetes', 'Azure DevOps', 'GitHub Actions', 'Terraform', 'CI/CD Pipelines'],
  },
  {
    label: 'Backend & Architecture',
    color: '#10b981',
    skills: ['REST APIs', 'FastAPI', 'Flask', 'Microservices', 'Distributed Systems', 'WebSockets', 'Serverless', 'ETL Pipelines'],
  },
  {
    label: 'Performance & SRE',
    color: '#f59e0b',
    skills: ['Prometheus', 'Grafana', 'JMeter', 'Playwright', 'Load Testing', 'SLAs / SLOs', 'MTTR Optimization', 'Capacity Planning'],
  },
  {
    label: 'Data Management',
    color: '#ec4899',
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'FAISS', 'Azure Cognitive Search'],
  },
];

const Skills = () => {
  const [headerRef, headerIn] = useScrollAnimation();

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div ref={headerRef} className={`animate ${headerIn ? 'in-view' : ''}`}>
          <span className="section-label">Toolkit</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-sub">
            Technologies I use across enterprise AI systems, cloud infrastructure, performance engineering, and full-stack development.
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <SkillCard key={cat.label} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

function SkillCard({ cat, index }) {
  const [ref, inView] = useScrollAnimation();
  return (
    <div ref={ref} className={`skill-cat glass-card animate d${(index % 3) + 1} ${inView ? 'in-view' : ''}`}>
      <div className="skill-cat-header">
        <span className="skill-cat-dot" style={{ background: cat.color }} />
        <h3 className="skill-cat-name">{cat.label}</h3>
      </div>
      <div className="skill-tags">
        {cat.skills.map(s => (
          <span
            key={s}
            className="skill-pill"
            style={{
              background: `${cat.color}14`,
              border: `1px solid ${cat.color}30`,
              color: cat.color,
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
