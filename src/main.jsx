import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const navItems = [
  ['home', 'Home'],
  ['career', 'Career'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['education', 'Education'],
  ['languages', 'Languages'],
];

const careerEntries = [
  {
    period: '2022 – Present',
    role: 'Front-End Developer',
    company: 'Medicover (via Ashreya Technologies)',
    desc: 'Led front-end development for hospital management and medical supply chain web platforms across multiple partner-hospital networks including Bharat Hospital, Ashoka Hospital (Nashik), and Milann.',
    responsibilities: [
      'Engineered dynamic, multi-level dropdown selectors (state → hospital → department) with jQuery/Select2 for staff filtering across hospital locations.',
      'Integrated multiple RESTful API endpoints into unified dashboards for purchase orders, GRNs, invoices, and sales returns.',
      'Achieved a ~20% performance improvement in dashboard load times via front-end code and asset optimization.',
      'Collaborated directly with backend engineers on API contracts and data structure alignment.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'jQuery', 'Bootstrap', 'AJAX', 'REST APIs'],
  },
  {
    period: '2021 – 2022',
    role: 'Junior Front-End Developer',
    company: 'Ashreya Technologies',
    desc: 'Developed responsive user interface components, improved cross-browser compatibility, and assisted in building client-facing web applications.',
    responsibilities: [
      'Built reusable HTML5/CSS3 UI modules and form components with robust client-side validation.',
      'Implemented responsive mobile-first layouts using Bootstrap grid systems and media queries.',
      'Fixed cross-browser rendering inconsistencies across Chrome, Firefox, Safari, and Edge.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'Git'],
  },
  {
    period: '2018 – 2021',
    role: 'Bachelor of Computer Applications (BCA)',
    company: 'Dr. B.R. Ambedkar University',
    desc: 'Graduated with 8.6 CGPA. Built comprehensive foundational knowledge in web technologies, database design, data structures, and computer science fundamentals.',
    responsibilities: [
      'Core focus on Computer Applications, Database Management Systems (MySQL), and Web Programming.',
      'Completed academic projects on inventory tracking and relational database structures.',
    ],
    technologies: ['Web Fundamentals', 'JavaScript', 'MySQL', 'Data Structures', 'OOP'],
  },
];

const keyResponsibilities = [
  'Designing responsive web interfaces',
  'Developing reusable UI components',
  'Implementing responsive layouts',
  'Integrating REST APIs',
  'Working with AJAX and JSON',
  'Debugging and improving existing applications',
  'Building user-friendly interfaces',
  'Collaborating with development/business teams',
];

const experienceTechnologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'jQuery',
  'Bootstrap',
  'AJAX',
  'REST APIs',
  'PHP',
  'MySQL',
];

const skillCategories = [
  {
    category: 'Front-End',
    tag: 'Core Stack',
    skills: [
      {
        name: 'HTML5',
        desc: 'Semantic, accessible markup for scalable and SEO-friendly web structures.',
        icon: 'code',
      },
      {
        name: 'CSS3',
        desc: 'Modern styling, Flexbox, CSS Grid, custom properties, and smooth transitions.',
        icon: 'layout',
      },
      {
        name: 'JavaScript (ES6+)',
        desc: 'Used for building interactive, dynamic, and event-driven web interfaces.',
        icon: 'terminal',
      },
      {
        name: 'jQuery',
        desc: 'Efficient DOM manipulation, animated UI widgets, and legacy library support.',
        icon: 'layers',
      },
      {
        name: 'Bootstrap',
        desc: 'Rapid mobile-first responsive layout design and ready-to-use component frameworks.',
        icon: 'grid',
      },
      {
        name: 'Responsive Design',
        desc: 'Fluid layouts and media queries ensuring flawless rendering on all screens.',
        icon: 'smartphone',
      },
    ],
  },
  {
    category: 'API & Integration',
    tag: 'Data Flow',
    skills: [
      {
        name: 'AJAX',
        desc: 'Asynchronous server communication for seamless page updates without reload.',
        icon: 'refresh',
      },
      {
        name: 'REST APIs',
        desc: 'Standardized HTTP endpoints for retrieving and mutating application data.',
        icon: 'link',
      },
      {
        name: 'JSON',
        desc: 'Structured client-server payload parsing, serialization, and schema validation.',
        icon: 'file-text',
      },
      {
        name: 'API Integration',
        desc: 'End-to-end frontend connection to backend endpoints with error handling.',
        icon: 'database',
      },
    ],
  },
  {
    category: 'Backend / Database',
    tag: 'Foundation',
    skills: [
      {
        name: 'PHP',
        desc: 'Server-side scripting for template rendering and API backend development.',
        icon: 'server',
      },
      {
        name: 'MySQL',
        desc: 'Relational database schema querying, indexing, and transactional operations.',
        icon: 'database',
      },
    ],
  },
  {
    category: 'Currently Improving',
    tag: 'Active Focus',
    isImproving: true,
    skills: [
      {
        name: 'React.js — Currently Improving',
        desc: 'Building component architectures, state management, hooks, and modern single-page applications.',
        icon: 'cpu',
      },
    ],
  },
];

const educationData = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Affiliated to Dr. B.R. Ambedkar University',
    location: 'Srikakulam, Andhra Pradesh',
    year: '2018 – 2021',
    score: '8.6',
    scoreLabel: 'CGPA',
  },
  {
    degree: 'Intermediate (Class XII) · MPC',
    institution: 'Gayatri Junior College',
    location: 'Srikakulam, Andhra Pradesh — Mathematics, Physics, Chemistry',
    year: '2016 – 2018',
    score: '92%',
    scoreLabel: 'Overall',
  },
  {
    degree: 'Secondary Schooling (Class X) · CBSE',
    institution: 'Centurion Public School',
    location: 'Parlakhemundi, Odisha',
    year: '2016',
    score: '74%',
    scoreLabel: 'Overall',
  },
];

const languageData = [
  { name: 'English', level: 'Professional', code: 'EN' },
  { name: 'Telugu', level: 'Native', code: 'TE' },
  { name: 'Marathi', level: 'Native', code: 'MR' },
  { name: 'Hindi', level: 'Conversational', code: 'HI' },
  { name: 'Odia', level: 'Fluent', code: 'OD' },
];

function SkillIcon({ type }) {
  switch (type) {
    case 'code':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'layout':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <line x1="3" x2="21" y1="9" y2="9" />
          <line x1="9" x2="9" y1="21" y2="9" />
        </svg>
      );
    case 'terminal':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" x2="20" y1="19" y2="19" />
        </svg>
      );
    case 'layers':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case 'grid':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="7" height="7" x="3" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="14" rx="1" />
          <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
      );
    case 'smartphone':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="20" x="5" y="2" rx="2" />
          <line x1="12" x2="12" y1="18" y2="18" />
        </svg>
      );
    case 'refresh':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path d="M16 16h5v5" />
        </svg>
      );
    case 'link':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case 'file-text':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <line x1="10" x2="14" y1="13" y2="13" />
          <line x1="10" x2="14" y1="17" y2="17" />
        </svg>
      );
    case 'database':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case 'server':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="8" x="2" y="2" rx="2" />
          <rect width="20" height="8" x="2" y="14" rx="2" />
          <line x1="6" x2="6.01" y1="6" y2="6" />
          <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
      );
    case 'cpu':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <rect width="6" height="6" x="9" y="9" />
          <line x1="9" x2="9" y1="1" y2="4" />
          <line x1="15" x2="15" y1="1" y2="4" />
          <line x1="9" x2="9" y1="20" y2="23" />
          <line x1="15" x2="15" y1="20" y2="23" />
          <line x1="20" x2="23" y1="9" y2="9" />
          <line x1="20" x2="23" y1="14" y2="14" />
          <line x1="1" x2="4" y1="9" y2="9" />
          <line x1="1" x2="4" y1="14" y2="14" />
        </svg>
      );
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

function Header({ activeSection, onNavigate, isScrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleNav(id) {
    setMobileOpen(false);
    onNavigate(id);
  }

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="wrap header-inner">
        <a
          href="#home"
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            handleNav('home');
          }}
        >
          <div className="brand-badge">BS</div>
          <div className="brand-title">
            <span className="brand-name">Bharidey Sarayu</span>
            <span className="brand-sub">Front-End Developer</span>
          </div>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNav(id);
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`} role="navigation">
        {navItems.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNav(id);
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}

function Hero({ onNavigate }) {
  return (
    <section id="home">
      <div className="hero-ambient-glow" aria-hidden="true"></div>
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-greeting-pill reveal">
              <span className="beacon-dot" aria-hidden="true"></span>
              <span>Available for new roles · Front-End Developer</span>
            </div>

            <h1 className="hero-name reveal delay-1">Bharidey Sarayu</h1>
            <div className="hero-role reveal delay-1">Front-End Developer</div>

            <p className="hero-description reveal delay-2">
              Front-End Developer with 3+ years of experience building responsive, user-friendly web applications using HTML, CSS, JavaScript, jQuery, Bootstrap, AJAX and REST APIs.
            </p>

            <p className="hero-subline reveal delay-2">
              Building clean, responsive and intuitive digital experiences.
            </p>

            <div className="hero-actions reveal delay-3">
              <a
                className="btn btn-primary"
                href="#career"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('career');
                }}
              >
                View Career <span className="btn-arrow">→</span>
              </a>
              <a
                className="btn btn-secondary"
                href="#connect"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('connect');
                }}
              >
                Contact Me
              </a>
            </div>

            <div className="social-links reveal delay-4">
              <a
                className="social-icon-btn"
                href="https://www.linkedin.com/in/sarayu-bharidey/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                </svg>
              </a>
              <a
                className="social-icon-btn"
                href="https://github.com/bharideysarayu1208-creator"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
              <a
                className="social-icon-btn"
                href="mailto:bharideysarayu1208@gmail.com"
                aria-label="Email Me"
                title="Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              <a
                className="social-icon-btn"
                href="https://wa.me/916370234221?text=Hello%20Sarayu%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%21"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Contact"
                title="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.53-1.1 1.04-1.53 1.08-.41.05-.95.07-2.8-.65-1.92-.74-3.15-2.69-3.25-2.82-.1-.13-.77-1.03-.77-1.96s.49-1.39.66-1.58c.18-.19.39-.24.52-.24.13 0 .26 0 .37.01.12.01.28-.05.44.33.17.38.57 1.39.62 1.49.05.1.08.22.01.35-.06.13-.1.21-.19.32-.1.1-.2.23-.29.31-.1.09-.2.19-.09.39.12.19.51.85 1.1 1.37.76.67 1.4.88 1.6.98.2.1.31.08.43-.05.12-.13.51-.6.65-.8.14-.2.28-.17.47-.1.19.07 1.2.57 1.41.67.21.1.35.15.4.24.05.09.05.53-.14 1.06Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="hero-visual-wrap reveal delay-2">
            {/* Floating technology badge pills */}
            <div className="floating-badge fb-1">
              <span>⚡</span> HTML5 & CSS3
            </div>
            <div className="floating-badge fb-2">
              <span>🚀</span> RESTful APIs
            </div>
            <div className="floating-badge fb-3">
              <span>⚛️</span> React.js
            </div>
            <div className="floating-badge fb-4">
              <span>✨</span> Responsive UI
            </div>

            {/* Main Developer Profile Card */}
            <div className="dev-profile-card">
              <div className="dev-card-header">
                <div className="dev-card-dots">
                  <div className="dev-card-dot dot-red"></div>
                  <div className="dev-card-dot dot-yellow"></div>
                  <div className="dev-card-dot dot-green"></div>
                </div>
                <div className="dev-card-title">developer-spec.ts</div>
                <div style={{ width: '28px' }}></div>
              </div>

              <div className="dev-card-content">
                <div className="dev-badge-role">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  <span>Frontend Developer</span>
                </div>

                <div className="dev-stack-list">
                  {['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'AJAX', 'REST APIs'].map((item) => (
                    <span className="dev-stack-item" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="dev-card-footer">
                <span>Experience: 3+ Years</span>
                <span>Ready to Interview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Career() {
  return (
    <section id="career">
      <div className="wrap">
        <div className="section-badge reveal">01 / Career Progression</div>
        <h2 className="section-title reveal delay-1">My Career Journey</h2>
        <p className="section-desc reveal delay-2">
          A track record of shipping production front-end interfaces, healthcare supply chain portals, and enterprise workflows.
        </p>

        <div className="timeline-container">
          <div className="timeline-line" aria-hidden="true"></div>

          {careerEntries.map((entry, idx) => (
            <div className={`timeline-entry reveal delay-${idx + 1}`} key={entry.period}>
              <div className="timeline-marker" aria-hidden="true"></div>
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">
                      {entry.role} — <span className="timeline-company">{entry.company}</span>
                    </h3>
                  </div>
                  <span className="timeline-period">{entry.period}</span>
                </div>

                <p className="timeline-desc">{entry.desc}</p>

                <ul className="timeline-responsibilities">
                  {entry.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>

                <div className="timeline-badges">
                  {entry.technologies.map((tech) => (
                    <span className="timeline-badge" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-badge reveal">02 / What I Do</div>
        <h2 className="section-title reveal delay-1">Professional Experience</h2>
        <p className="section-desc reveal delay-2">
          Deep dive into my day-to-day deliverables, hands-on production responsibilities, and enterprise modules.
        </p>

        <div className="experience-grid">
          {/* Main Role & Key Responsibilities Card */}
          <div className="exp-hero-card reveal">
            <div className="exp-header">
              <div className="exp-title-block">
                <h3>Front-End Developer</h3>
                <div className="exp-subtitle">Enterprise Web Interfaces & Healthcare ERP Platforms</div>
              </div>
              <div className="exp-years-badge">3+ Years Experience</div>
            </div>

            <div className="exp-section-label">Key Responsibilities</div>
            <div className="responsibilities-grid">
              {keyResponsibilities.map((resp, idx) => (
                <div className="resp-item" key={idx}>
                  <div className="resp-icon">✓</div>
                  <div className="resp-text">{resp}</div>
                </div>
              ))}
            </div>

            <div className="exp-tech-strip">
              <div className="exp-section-label">Core Production Technologies</div>
              <div className="tech-badges-wrap">
                {experienceTechnologies.map((tech) => (
                  <span className="tech-badge-animated" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Real-World Deliverables Grid */}
          <div className="deliverables-grid">
            <div className="deliverable-card reveal delay-1">
              <div className="deliverable-header">
                <h4 className="deliverable-title">Hospital Supply Chain & Inventory (TechPro)</h4>
                <span className="deliverable-tag">Enterprise System</span>
              </div>
              <div className="deliverable-stack">
                HTML5 · CSS3 · Bootstrap · JavaScript · jQuery · RESTful APIs
              </div>
              <p className="deliverable-desc">
                Engineered the core user interface for multi-warehouse tracking, dynamic goods receipt notes (GRNs), purchase order matching, and real-time inventory adjustments. Implemented paginated tables and responsive multi-level filters that significantly reduced user validation errors.
              </p>
            </div>

            <div className="deliverable-card reveal delay-2">
              <div className="deliverable-header">
                <h4 className="deliverable-title">School Management System</h4>
                <span className="deliverable-tag">Full-Stack Application</span>
              </div>
              <div className="deliverable-stack">
                React.js · Node.js · Express.js · REST APIs · JSON
              </div>
              <p className="deliverable-desc">
                Designed and developed a full-stack educational administrative application featuring clean React components, state management, attendance tracking, student record CRUD operations, and unified Express REST API routing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-badge reveal">03 / Capabilities</div>
        <h2 className="section-title reveal delay-1">Technical Skills</h2>
        <p className="section-desc reveal delay-2">
          Structured toolset spanning core web standards, DOM scripting, API integration, and modern React development.
        </p>

        {skillCategories.map((group, gIdx) => (
          <div className={`skills-category-group reveal delay-${gIdx + 1}`} key={group.category}>
            <div className={`skills-cat-title ${group.isImproving ? 'improving' : ''}`}>
              <span>{group.category}</span>
              <span className="cat-pill">{group.tag}</span>
            </div>

            <div className="skills-grid-cards">
              {group.skills.map((skill) => (
                <div
                  className={`skill-card-item ${group.isImproving ? 'improving-card' : ''}`}
                  key={skill.name}
                >
                  <div className="skill-card-top">
                    <div className="skill-icon-wrap">
                      <SkillIcon type={skill.icon} />
                    </div>
                    <div className="skill-card-name">{skill.name}</div>
                  </div>
                  <p className="skill-card-desc">{skill.desc}</p>
                  {group.isImproving && (
                    <span className="improving-badge-tag">Currently Improving</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="section-badge reveal">04 / Education</div>
        <h2 className="section-title reveal delay-1">Education</h2>
        <p className="section-desc reveal delay-2">
          Academic foundation in computer applications, mathematical sciences, and software development.
        </p>

        <div className="education-grid">
          {educationData.map((item, idx) => (
            <div className={`edu-card-modern reveal delay-${idx + 1}`} key={item.degree}>
              <div>
                <div className="edu-top-row">
                  <div className="edu-icon-bubble" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <span className="edu-year-badge">{item.year}</span>
                </div>

                <h3 className="edu-degree">{item.degree}</h3>
                <p className="edu-college">{item.institution}</p>
                <p className="edu-college" style={{ marginBottom: '16px' }}>{item.location}</p>
              </div>

              <div className="edu-score-pill">
                <span className="edu-score-val">{item.score}</span>
                <span className="edu-score-lbl">{item.scoreLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Languages({ onNavigate }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSendWhatsApp(e) {
    e.preventDefault();
    const name = formData.name.trim() || 'Recruiter / Hiring Manager';
    const email = formData.email.trim() || 'Not provided';
    const message = formData.message.trim() || 'I am interested in your profile and would like to discuss an opportunity.';

    const fullMessage = `Hello Sarayu,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from Sarayu's Portfolio.`;
    const whatsappUrl = `https://wa.me/916370234221?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank');
  }

  return (
    <section id="languages">
      <div className="wrap">
        <div className="section-badge reveal">05 / Communication</div>
        <h2 className="section-title reveal delay-1">Languages</h2>
        <p className="section-desc reveal delay-2">
          Effective multilingual communication across regional and cross-functional engineering teams.
        </p>

        <div className="languages-grid">
          {languageData.map((lang, idx) => (
            <div className={`lang-card-box reveal delay-${idx + 1}`} key={lang.name}>
              <div className="lang-avatar">{lang.code}</div>
              <div className="lang-name-text">{lang.name}</div>
              <div className="lang-proficiency-pill">{lang.level}</div>
            </div>
          ))}
        </div>

        {/* Let's Connect / WhatsApp Card (Integrated inside Languages, NOT a separate nav item) */}
        <div id="connect" className="contact-section-wrap reveal">
          <div className="contact-glow-accent" aria-hidden="true"></div>
          <div className="contact-card-grid">
            <div className="contact-left">
              <div className="section-badge">Get in Touch</div>
              <h3>Let's Connect</h3>
              <p>
                Have an opportunity or want to discuss a role? I'd love to hear from you. Fill in the details to generate a pre-filled WhatsApp message or reach out directly.
              </p>

              <div className="contact-details-list">
                <div className="contact-detail-row">
                  <div className="contact-detail-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span>bharideysarayu1208@gmail.com</span>
                </div>
                <div className="contact-detail-row">
                  <div className="contact-detail-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span>Parlakhemundi, Odisha, India · Open to Relocating & Remote</span>
                </div>
              </div>
            </div>

            <div className="contact-right">
              <form className="whatsapp-form" onSubmit={handleSendWhatsApp}>
                <div className="form-group">
                  <label className="form-label" htmlFor="nameInput">Your Name</label>
                  <input
                    className="form-input"
                    id="nameInput"
                    name="name"
                    type="text"
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="emailInput">Your Email</label>
                  <input
                    className="form-input"
                    id="emailInput"
                    name="email"
                    type="email"
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="messageInput">Message</label>
                  <textarea
                    className="form-textarea"
                    id="messageInput"
                    name="message"
                    rows="3"
                    placeholder="Tell me about the role or project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <div className="form-actions-row">
                  <button type="submit" className="btn btn-whatsapp">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.53-1.1 1.04-1.53 1.08-.41.05-.95.07-2.8-.65-1.92-.74-3.15-2.69-3.25-2.82-.1-.13-.77-1.03-.77-1.96s.49-1.39.66-1.58c.18-.19.39-.24.52-.24.13 0 .26 0 .37.01.12.01.28-.05.44.33.17.38.57 1.39.62 1.49.05.1.08.22.01.35-.06.13-.1.21-.19.32-.1.1-.2.23-.29.31-.1.09-.2.19-.09.39.12.19.51.85 1.1 1.37.76.67 1.4.88 1.6.98.2.1.31.08.43-.05.12-.13.51-.6.65-.8.14-.2.28-.17.47-.1.19.07 1.2.57 1.41.67.21.1.35.15.4.24.05.09.05.53-.14 1.06Z" />
                    </svg>
                    Send via WhatsApp
                  </button>

                  <a
                    className="btn btn-secondary"
                    href="https://wa.me/916370234221?text=Hello%20Sarayu%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20chat%21"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="form-notice">
                  * Clicking will open WhatsApp with your message pre-filled. You just need to press Send.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp-btn"
      href="https://wa.me/916370234221?text=Hello%20Sarayu%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%21"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span className="tooltip">Chat on WhatsApp</span>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.53-1.1 1.04-1.53 1.08-.41.05-.95.07-2.8-.65-1.92-.74-3.15-2.69-3.25-2.82-.1-.13-.77-1.03-.77-1.96s.49-1.39.66-1.58c.18-.19.39-.24.52-.24.13 0 .26 0 .37.01.12.01.28-.05.44.33.17.38.57 1.39.62 1.49.05.1.08.22.01.35-.06.13-.1.21-.19.32-.1.1-.2.23-.29.31-.1.09-.2.19-.09.39.12.19.51.85 1.1 1.37.76.67 1.4.88 1.6.98.2.1.31.08.43-.05.12-.13.51-.6.65-.8.14-.2.28-.17.47-.1.19.07 1.2.57 1.41.67.21.1.35.15.4.24.05.09.05.53-.14 1.06Z" />
      </svg>
    </a>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div className="footer-top">
          <div className="brand-title">
            <span className="brand-name">Bharidey Sarayu</span>
            <span className="brand-sub">Front-End Developer</span>
          </div>

          <div className="footer-nav">
            {navItems.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(id);
                }}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="social-links">
            <a
              className="social-icon-btn"
              href="https://www.linkedin.com/in/sarayu-bharidey/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
              </svg>
            </a>
            <a
              className="social-icon-btn"
              href="https://github.com/bharideysarayu1208-creator"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </a>
            <a
              className="social-icon-btn"
              href="mailto:bharideysarayu1208@gmail.com"
              aria-label="Email"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              className="social-icon-btn"
              href="https://wa.me/916370234221?text=Hello%20Sarayu%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%21"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.53-1.1 1.04-1.53 1.08-.41.05-.95.07-2.8-.65-1.92-.74-3.15-2.69-3.25-2.82-.1-.13-.77-1.03-.77-1.96s.49-1.39.66-1.58c.18-.19.39-.24.52-.24.13 0 .26 0 .37.01.12.01.28-.05.44.33.17.38.57 1.39.62 1.49.05.1.08.22.01.35-.06.13-.1.21-.19.32-.1.1-.2.23-.29.31-.1.09-.2.19-.09.39.12.19.51.85 1.1 1.37.76.67 1.4.88 1.6.98.2.1.31.08.43-.05.12-.13.51-.6.65-.8.14-.2.28-.17.47-.1.19.07 1.2.57 1.41.67.21.1.35.15.4.24.05.09.05.53-.14 1.06Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Bharidey Sarayu. All rights reserved.</div>
          <button
            className="back-to-top-btn"
            type="button"
            onClick={() => onNavigate('home')}
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (['home', 'career', 'experience', 'skills', 'education', 'languages'].includes(id)) {
        setActiveSection(id);
        if (window.location.hash !== `#${id}`) {
          window.history.pushState(null, '', `#${id}`);
        }
      }
    }
  }

  useEffect(() => {
    // Scroll shrink navbar detection
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ScrollSpy observer
    const sectionIds = ['home', 'career', 'experience', 'skills', 'education', 'languages'];
    const sectionElements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-25% 0px -45% 0px',
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    // Scroll reveal observer
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    // Handle initial hash in URL
    const initialHash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    if (initialHash) {
      setTimeout(() => {
        const target = document.getElementById(initialHash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          if (sectionIds.includes(initialHash)) {
            setActiveSection(initialHash);
          }
        }
      }, 150);
    }

    // Handle browser back/forward
    const handleHashChange = () => {
      const currentHash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      if (currentHash) {
        const target = document.getElementById(currentHash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          if (sectionIds.includes(currentHash)) {
            setActiveSection(currentHash);
          }
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      revealObserver.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        isScrolled={isScrolled}
      />
      <main>
        <Hero onNavigate={scrollToSection} />
        <Career />
        <Experience />
        <Skills />
        <Education />
        <Languages onNavigate={scrollToSection} />
      </main>
      <Footer onNavigate={scrollToSection} />
      <FloatingWhatsApp />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
