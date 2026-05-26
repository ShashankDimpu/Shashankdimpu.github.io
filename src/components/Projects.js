import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import img1 from '../assets/pr1.jpeg';
import img2 from '../assets/pr2.jpeg';
import img3 from '../assets/pr3.jpeg';
import pr_img1 from '../assets/pr1_img1.png';
import pr_img2 from '../assets/pr1_img2.png';
import './Projects.css';

const projects = [
  {
    id: 'research-agent',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 60%, #ec4899 100%)',
    icon: '🤖',
    title: 'Autonomous AI Research Agent',
    short: 'LangGraph-powered agentic pipeline that decomposes research queries, retrieves documents via RAG, self-reflects on output quality, and synthesizes structured reports.',
    tags: ['Python', 'LangGraph', 'LangChain', 'RAG', 'FAISS', 'OpenAI API', 'FastAPI'],
    detail: {
      intro: `Built a fully autonomous research agent using LangGraph's state-machine architecture. Given a natural-language research question, the agent independently decomposes it into sub-queries, retrieves relevant documents from a FAISS vector store via semantic search, synthesizes findings across sources, and generates a structured report — all without human intervention. The system includes a self-reflection loop that re-queries when confidence falls below a threshold.`,
      highlights: [
        'LangGraph state machine orchestrates agent transitions: decompose → retrieve → synthesize → reflect → report.',
        'RAG pipeline with FAISS vector store and OpenAI text-embedding-3-small for semantic document retrieval.',
        'Self-reflection node evaluates response completeness; re-triggers retrieval if confidence score < 0.7.',
        'Tool-use layer integrates web search, PDF ingestion, and plain-text loaders as callable agent tools.',
        'FastAPI streaming endpoint pushes real-time agent progress events to a React frontend via SSE.',
        'Supports multi-turn memory: previous research sessions stored and reused as context in follow-up queries.',
      ],
      images: [],
    },
  },
  {
    id: 'multi-agent-review',
    gradient: 'linear-gradient(135deg, #0891b2 0%, #6366f1 60%, #a855f7 100%)',
    icon: '🧠',
    title: 'Multi-Agent Code Review System',
    short: 'Collaborative system of specialized AI agents — security, performance, style, and docs — that analyse pull requests in parallel and produce prioritized, actionable feedback.',
    tags: ['Python', 'LangGraph', 'GitHub API', 'FastAPI', 'React', 'OpenAI API', 'Docker'],
    detail: {
      intro: `Designed a multi-agent code review system where an orchestrator agent routes incoming GitHub pull request diffs to four specialized sub-agents running in parallel. Each agent focuses on a distinct concern — security, performance, code style, and documentation. An aggregator agent then synthesizes all outputs into a single prioritized, actionable review report posted back to the pull request.`,
      highlights: [
        'Orchestrator agent parses PR diffs and dispatches tasks to specialized agents in parallel via LangGraph.',
        'Security agent identifies OWASP Top-10 vulnerabilities, injection risks, and insecure dependency patterns.',
        'Performance agent detects N+1 queries, algorithmic inefficiencies, and excessive memory allocations.',
        'Style agent enforces PEP-8 / ESLint standards; documentation agent flags missing docstrings and type hints.',
        'Aggregator agent ranks issues by severity (critical / warning / suggestion) and writes a unified PR comment.',
        'GitHub webhook integration triggers reviews automatically on PR creation or new commit push.',
        'Containerized with Docker; configurable to swap OpenAI for local models via Ollama.',
      ],
      images: [],
    },
  },
  {
    id: 'colorize',
    image: img1,
    title: 'B&W Photo Colorization with Deep Learning',
    short: 'Conditional GAN-based pipeline to restore colour in grayscale images using the LAB colour space — achieving SSIM 0.985 and PSNR 32.5 dB.',
    tags: ['Python', 'PyTorch', 'CNN', 'ResNet', 'GANs', 'OpenCV', 'Kaggle'],
    detail: {
      intro: `Explored the use of CNN, ResNet, and Generative Adversarial Networks to automatically restore colour
      to black-and-white photographs. The pipeline converts images to the LAB colour space, predicts A/B colour
      channels from the L (luminance) channel, and reconstructs full-colour output.`,
      highlights: [
        'Used 7,129 Kaggle landscape images resized to 150×150 for training.',
        'LAB colour space separation kept structural information intact while predicting colour.',
        'GAN architecture (generator + discriminator) produced the most realistic outputs.',
        'SSIM score of 0.985 — structurally near-identical to ground truth.',
        'PSNR of 32.5 dB and histogram similarity of 0.862.',
        'Applied augmentation (flip, rotation, brightness) to improve generalisation.',
      ],
      images: [pr_img1, pr_img2],
    },
  },
  {
    id: 'library',
    image: img2,
    title: 'Library Management System',
    short: 'Full-stack library platform with a 13-table relational DB, SHA-256 auth, automated fine triggers, and PowerBI dashboards.',
    tags: ['MySQL', 'React', 'REST API', 'PowerBI', 'SHA-256', 'SQL Triggers'],
    detail: {
      intro: `Designed and built a centralised library management platform from scratch — covering database architecture,
      secure authentication, real-time transaction tracking, and data visualisation for administrators.`,
      highlights: [
        '13-table relational schema covering Books, Users, Transactions, and Fine Management.',
        'SHA-256 password encryption for secure credential storage.',
        'SQL triggers for automated overdue fine calculation and account updates.',
        'Indexing on frequently queried fields reduced query time by up to 80%.',
        'PowerBI dashboards visualise borrowing trends, popular books, and fine analytics.',
        'Full ER diagram driven design with clearly defined constraints and relationships.',
      ],
      images: [],
    },
  },
  {
    id: 'pricepred',
    image: img3,
    title: 'ML Price Prediction System',
    short: 'Ensemble ML system (XGBoost R²=0.99, Random Forest R²=0.999) with a Flask web interface for real-time price prediction.',
    tags: ['Python', 'XGBoost', 'Random Forest', 'Flask', 'PowerBI', 'Scikit-learn'],
    detail: {
      intro: `Built a machine learning price prediction system backed by an ensemble of XGBoost, Polynomial Ridge Regression,
      and Random Forest models. A Flask web interface lets users submit feature inputs and receive real-time predictions
      with interactive PowerBI visualisations.`,
      highlights: [
        'XGBoost: R² = 0.99, MSE = 26,261 — strong performance with hyperparameter tuning.',
        'Random Forest: R² = 0.999, MSE = 1,693 — best overall accuracy.',
        'Ensemble learning combines model strengths to reduce variance.',
        'Extensive data preprocessing: null handling, normalisation, categorical encoding.',
        'Grid search + cross-validation for systematic hyperparameter optimisation.',
        'Flask backend handles routing, data processing, and model inference in real time.',
      ],
      images: [],
    },
  },
];

const Projects = () => {
  const [modal, setModal]     = useState(null);
  const [headerRef, headerIn] = useScrollAnimation();

  const active = projects.find(p => p.id === modal);

  return (
    <section id="research" className="projects-section">
      <div className="container">
        <div ref={headerRef} className={`animate ${headerIn ? 'in-view' : ''}`}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-sub">
            A selection of projects spanning agentic AI, deep learning, full-stack engineering, and data science.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => setModal(p.id)} />
          ))}
        </div>
      </div>

      {active && (
        <div className="modal-backdrop" onClick={() => setModal(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModal(null)} aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="modal-scroll">
              {active.image ? (
                <img src={active.image} alt={active.title} className="modal-cover" />
              ) : (
                <div className="modal-cover-gradient" style={{ background: active.gradient }}>
                  <span className="modal-cover-icon">{active.icon}</span>
                </div>
              )}
              <div className="modal-content">
                <div className="modal-tags">
                  {active.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <h2 className="modal-title">{active.title}</h2>
                <p className="modal-intro">{active.detail.intro}</p>
                <h4 className="modal-section-head">Key Highlights</h4>
                <ul className="modal-bullets">
                  {active.detail.highlights.map((h, i) => (
                    <li key={i}><span className="bullet-acc" />{h}</li>
                  ))}
                </ul>
                {active.detail.images.map((src, i) => (
                  <img key={i} src={src} alt={`detail-${i}`} className="modal-img" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

function ProjectCard({ project, index, onOpen }) {
  const [ref, inView] = useScrollAnimation();
  const delay = `d${(index % 3) + 1}`;
  return (
    <div ref={ref} className={`proj-card glass-card animate ${delay} ${inView ? 'in-view' : ''}`}>
      <div className="proj-img-wrap">
        {project.image ? (
          <img src={project.image} alt={project.title} className="proj-img" />
        ) : (
          <div className="proj-gradient" style={{ background: project.gradient }}>
            <span className="proj-icon">{project.icon}</span>
          </div>
        )}
        <div className="proj-img-overlay">
          <button className="proj-view-btn" onClick={onOpen}>View Details</button>
        </div>
      </div>
      <div className="proj-body">
        <div className="proj-tags">
          {project.tags.slice(0, 4).map(t => <span key={t} className="tag">{t}</span>)}
          {project.tags.length > 4 && (
            <span className="tag">+{project.tags.length - 4}</span>
          )}
        </div>
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-short">{project.short}</p>
        <button className="proj-btn btn btn-secondary" onClick={onOpen}>
          Read more →
        </button>
      </div>
    </div>
  );
}

export default Projects;
