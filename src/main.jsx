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
    desc: 'Led front-end modules for hospital management and medical supply chain platforms across Bharat Hospital, Ashoka Hospital (Nashik), and Milann.',
    responsibilities: [
      'Engineered dynamic, multi-level dropdown selectors (state → hospital → department) with jQuery/Select2.',
      'Integrated multiple RESTful API endpoints for purchase orders, GRNs, invoices, and sales returns.',
      'Achieved a ~20% performance improvement in dashboard load times through front-end tuning.',
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
      'Implemented responsive mobile-first layouts using Bootstrap grid systems.',
      'Resolved cross-browser rendering inconsistencies across modern browsers.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'Git'],
  },
  {
    period: '2018 – 2021',
    role: 'Bachelor of Computer Applications (BCA)',
    company: 'Dr. B.R. Ambedkar University',
    desc: 'Graduated with 8.6 CGPA. Built comprehensive foundational knowledge in web technologies, database design, data structures, and computer science.',
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
  'Debugging & improving applications',
  'Building user-friendly interfaces',
  'Collaborating with engineering teams',
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
      { name: 'HTML5', desc: 'Semantic, accessible markup for scalable web structures.' },
      { name: 'CSS3', desc: 'Modern styling, Flexbox, CSS Grid, and smooth transitions.' },
      { name: 'JavaScript (ES6+)', desc: 'Dynamic, interactive, and event-driven web interfaces.' },
      { name: 'jQuery', desc: 'DOM manipulation, animations, and library integrations.' },
      { name: 'Bootstrap', desc: 'Rapid mobile-first responsive layout design.' },
      { name: 'Responsive Design', desc: 'Fluid media queries ensuring flawless rendering on all screens.' },
    ],
  },
  {
    category: 'API & Integration',
    tag: 'Data Flow',
    skills: [
      { name: 'AJAX', desc: 'Asynchronous server data calls without full page reloads.' },
      { name: 'REST APIs', desc: 'Standardized HTTP endpoints for retrieving and mutating data.' },
      { name: 'JSON', desc: 'Structured payload parsing, serialization, and schema validation.' },
      { name: 'API Integration', desc: 'End-to-end frontend connection to backend data contracts.' },
    ],
  },
  {
    category: 'Backend / Database',
    tag: 'Foundation',
    skills: [
      { name: 'PHP', desc: 'Server-side scripting for template rendering and API logic.' },
      { name: 'MySQL', desc: 'Relational database schema querying and transactional data.' },
    ],
  },
  {
    category: 'Currently Improving',
    tag: 'Active Focus',
    isImproving: true,
    skills: [
      {
        name: 'React.js — Currently Improving',
        desc: 'Component architecture, state hooks, and modern single-page applications.',
      },
    ],
  },
];

const educationData = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Dr. B.R. Ambedkar University · Srikakulam, AP',
    year: '2018 – 2021',
    score: '8.6 CGPA',
  },
  {
    degree: 'Intermediate (Class XII) · MPC',
    institution: 'Gayatri Junior College · Srikakulam, AP',
    year: '2016 – 2018',
    score: '92%',
  },
  {
    degree: 'Secondary Schooling (Class X) · CBSE',
    institution: 'Centurion Public School · Parlakhemundi, Odisha',
    year: '2016',
    score: '74%',
  },
];

const languageData = [
  { name: 'English', level: 'Professional' },
  { name: 'Telugu', level: 'Native' },
  { name: 'Marathi', level: 'Native' },
  { name: 'Hindi', level: 'Conversational' },
  { name: 'Odia', level: 'Fluent' },
];

function BackgroundAtmosphere() {
  const [cursorPos, setCursorPos] = useState({ x: -500, y: -500 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
        setOpacity(1);
      });
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="bg-mesh-container" aria-hidden="true">
      <div className="bg-grid-layer"></div>
      <div className="mesh-orb mesh-orb-1"></div>
      <div className="mesh-orb mesh-orb-2"></div>
      <div className="mesh-orb mesh-orb-3"></div>
      <div className="mesh-orb mesh-orb-4"></div>
      <div className="mesh-sparkle sp-1"></div>
      <div className="mesh-sparkle sp-2"></div>
      <div className="mesh-sparkle sp-3"></div>
      <div className="mesh-sparkle sp-4"></div>
      <div
        className="cursor-spotlight"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          opacity: opacity,
        }}
      ></div>
    </div>
  );
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

            <div className="social-links reveal delay-3">
              <a
                className="social-icon-btn"
                href="https://www.linkedin.com/in/sarayu-bharidey/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
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
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
              <a
                className="social-icon-btn"
                href="mailto:bharideysarayu1208@gmail.com"
                aria-label="Email Me"
                title="Email"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.53-1.1 1.04-1.53 1.08-.41.05-.95.07-2.8-.65-1.92-.74-3.15-2.69-3.25-2.82-.1-.13-.77-1.03-.77-1.96s.49-1.39.66-1.58c.18-.19.39-.24.52-.24.13 0 .26 0 .37.01.12.01.28-.05.44.33.17.38.57 1.39.62 1.49.05.1.08.22.01.35-.06.13-.1.21-.19.32-.1.1-.2.23-.29.31-.1.09-.2.19-.09.39.12.19.51.85 1.1 1.37.76.67 1.4.88 1.6.98.2.1.31.08.43-.05.12-.13.51-.6.65-.8.14-.2.28-.17.47-.1.19.07 1.2.57 1.41.67.21.1.35.15.4.24.05.09.05.53-.14 1.06Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ANIMATED DEVELOPER WORKSTATION ILLUSTRATION */}
          <div className="hero-visual-wrap reveal delay-2">
            <div className="hero-illustration-stage">
              {/* Floating Metric 1: ~20% Dashboard Speedup */}
              <div className="floating-metric-card">
                <div className="metric-chart-icon">⚡</div>
                <div>
                  <div className="metric-text-val">~20% Faster</div>
                  <div className="metric-text-lbl">Dashboard Load Optimization</div>
                </div>
              </div>

              {/* Floating Metric 2: Live Hospital Partner Network */}
              <div className="floating-hospital-badge">
                <span className="beacon-dot" aria-hidden="true"></span>
                <span>Bharat Hospital · Milann · Live</span>
              </div>

              {/* Floating Tech Pill */}
              <div className="floating-tech-orb">
                <span>⚛️</span> React.js & REST
              </div>

              {/* Frosted Code Workstation Window */}
              <div className="workstation-window">
                <div className="window-bar">
                  <div className="window-dots">
                    <div className="window-dot dot-red"></div>
                    <div className="window-dot dot-yellow"></div>
                    <div className="window-dot dot-green"></div>
                  </div>
                  <div className="window-title">developer-profile.ts</div>
                  <div style={{ width: '24px' }}></div>
                </div>

                <div className="window-code-body">
                  <div className="code-line">
                    <span className="c-kw">const</span> <span className="c-var">engineer</span> = <span className="c-str">"Bharidey Sarayu"</span>;
                  </div>
                  <div className="code-line">
                    <span className="c-kw">const</span> <span className="c-var">role</span> = <span className="c-str">"Front-End Developer"</span>;
                  </div>
                  <div className="code-line">
                    <span className="c-kw">const</span> <span className="c-var">experience</span> = <span className="c-str">"3+ Years @ Medicover"</span>;
                  </div>
                  <div className="code-line">
                    <span className="c-kw">const</span> <span className="c-var">status</span> = <span className="c-str">"Ready for Interview"</span>;
                  </div>

                  <div className="live-tags-cluster">
                    {['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'AJAX', 'REST APIs'].map((item) => (
                      <span className="live-tag-pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
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
        <div className="section-head-compact reveal">
          <div className="section-head-left">
            <span className="section-badge-pill">01 / Journey</span>
            <h2 className="section-title-compact">My Career Journey</h2>
          </div>
          <div className="section-sub-compact">3-year track record shipping production healthcare & enterprise portals</div>
        </div>

        <div className="career-compact-grid">
          {careerEntries.map((entry, idx) => (
            <div className={`career-card-compact reveal delay-${idx + 1}`} key={entry.period}>
              <div>
                <div className="career-card-top">
                  <div className="career-card-role">
                    {entry.role} — <span className="career-card-company">{entry.company}</span>
                  </div>
                  <span className="career-card-period">{entry.period}</span>
                </div>

                <p className="career-card-desc">{entry.desc}</p>

                <ul className="career-card-points">
                  {entry.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="career-card-tags">
                {entry.technologies.map((tech) => (
                  <span className="career-tag-pill" key={tech}>
                    {tech}
                  </span>
                ))}
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
        <div className="section-head-compact reveal">
          <div className="section-head-left">
            <span className="section-badge-pill">02 / Hands-On</span>
            <h2 className="section-title-compact">Professional Experience</h2>
          </div>
          <div className="section-sub-compact">Enterprise ERP deliverables, core competencies & key workflows</div>
        </div>

        <div className="exp-layout-split">
          {/* Column 1: Core Responsibilities & Technologies */}
          <div className="exp-core-box reveal">
            <div>
              <div className="exp-core-head">
                <div className="exp-role-heading">Front-End Developer (3+ Years)</div>
                <span className="exp-years-chip">Medicover (via Ashreya)</span>
              </div>

              <div className="resp-compact-grid">
                {keyResponsibilities.map((resp, idx) => (
                  <div className="resp-compact-item" key={idx}>
                    <span className="resp-check">✓</span>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="exp-tech-chips">
              {experienceTechnologies.map((tech) => (
                <span className="career-tag-pill" key={tech} style={{ color: '#0284C7', fontWeight: 600 }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Flagship Deliverables */}
          <div className="deliverable-col">
            <div className="deliverable-compact-box reveal delay-1">
              <div className="deliverable-top-row">
                <h4 className="deliverable-title-text">Supply Chain & Inventory (TechPro)</h4>
                <span className="deliverable-pill">Enterprise ERP</span>
              </div>
              <div className="deliverable-stack-line">
                HTML5 · CSS3 · Bootstrap · JavaScript · jQuery · REST APIs
              </div>
              <p className="deliverable-body-text">
                Engineered the core inventory UI for real-time warehouse stock, purchase orders, goods receipt notes (GRNs), and sales tracking across partner hospitals. Built paginated data tables and form validation that reduced user entry errors.
              </p>
            </div>

            <div className="deliverable-compact-box reveal delay-2">
              <div className="deliverable-top-row">
                <h4 className="deliverable-title-text">School Management System</h4>
                <span className="deliverable-pill">Full-Stack App</span>
              </div>
              <div className="deliverable-stack-line">
                React.js · Node.js · Express.js · REST APIs · JSON
              </div>
              <p className="deliverable-body-text">
                Full-stack web application featuring clean React components, state management, attendance tracking, student record CRUD flows, and unified Express REST API routing.
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
        <div className="section-head-compact reveal">
          <div className="section-head-left">
            <span className="section-badge-pill">03 / Toolset</span>
            <h2 className="section-title-compact">Technical Skills</h2>
          </div>
          <div className="section-sub-compact">Categorized expertise across modern web standards, APIs & frameworks</div>
        </div>

        <div className="skills-matrix-grid">
          {skillCategories.map((group, idx) => (
            <div
              className={`skill-category-card reveal delay-${idx + 1} ${group.isImproving ? 'improving-category' : ''}`}
              key={group.category}
            >
              <div className="skill-cat-head">
                <div className="skill-cat-name">{group.category}</div>
                <span className="skill-cat-badge">{group.tag}</span>
              </div>

              <div className="skill-chips-dense">
                {group.skills.map((skill) => (
                  <div className="skill-item-row" key={skill.name}>
                    <div className="skill-icon-micro">⚡</div>
                    <div className="skill-name-bold">{skill.name}</div>
                    <div className="skill-desc-inline">{skill.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationAndLanguages({ onNavigate }) {
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
    <>
      {/* 05 Education & 06 Languages Combined Side-by-Side (Eliminating miles of scroll!) */}
      <section id="education" style={{ paddingBottom: '28px' }}>
        <div className="wrap">
          <div className="section-head-compact reveal">
            <div className="section-head-left">
              <span className="section-badge-pill">04 & 05 / Background</span>
              <h2 className="section-title-compact">Education & Communication</h2>
            </div>
            <div className="section-sub-compact">Academic qualifications and multilingual team communication</div>
          </div>

          <div id="education-languages-wrap">
            {/* Education Column */}
            <div className="edu-column-card reveal">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Education</h3>
                <span style={{ fontSize: '1.2rem' }}>🎓</span>
              </div>

              {educationData.map((item) => (
                <div className="edu-item-compact" key={item.degree}>
                  <div>
                    <div className="edu-degree-text">{item.degree}</div>
                    <div className="edu-place-text">{item.institution} ({item.year})</div>
                  </div>
                  <span className="edu-score-pill-small">{item.score}</span>
                </div>
              ))}
            </div>

            {/* Languages Column */}
            <div id="languages" className="lang-column-card reveal delay-1" style={{ background: 'var(--bg-card)', padding: '24px 26px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Languages</h3>
                <span style={{ fontSize: '1.2rem' }}>🌐</span>
              </div>

              <div className="languages-dense-grid">
                {languageData.map((lang) => (
                  <div className="lang-dense-pill" key={lang.name}>
                    <div className="lang-pill-title">{lang.name}</div>
                    <div className="lang-pill-level">{lang.level}</div>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: '1.45', marginTop: '4px' }}>
                📍 Parlakhemundi, Odisha, India · Open to Relocating & Remote roles globally.
              </div>
            </div>
          </div>

          {/* Compact WhatsApp & Connect Banner */}
          <div id="connect" className="contact-compact-banner reveal delay-2">
            <div className="contact-compact-grid">
              <div>
                <h3 className="contact-compact-title">Let's Connect</h3>
                <p className="contact-compact-desc">
                  Have an opportunity or role to discuss? Send a pre-filled WhatsApp message or reach out directly.
                </p>
                <div className="contact-compact-email">
                  <span>✉️ bharideysarayu1208@gmail.com</span>
                </div>
              </div>

              <form className="whatsapp-compact-form" onSubmit={handleSendWhatsApp}>
                <input
                  className="compact-input"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  className="compact-input"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  className="compact-input form-full-row"
                  name="message"
                  type="text"
                  placeholder="Your Message / Opportunity Details..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <div className="compact-actions-row">
                  <button type="submit" className="btn btn-whatsapp" style={{ padding: '8px 16px', fontSize: '0.86rem' }}>
                    Send via WhatsApp
                  </button>
                  <a
                    className="btn btn-secondary"
                    style={{ padding: '8px 16px', fontSize: '0.86rem' }}
                    href="https://wa.me/916370234221?text=Hello%20Sarayu%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20chat%21"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer>
      <div className="wrap footer-inner">
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

        <button
          className="back-to-top-btn"
          type="button"
          onClick={() => onNavigate('home')}
        >
          Back to Top ↑
        </button>
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
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

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
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

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
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

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
      <BackgroundAtmosphere />
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
        <EducationAndLanguages onNavigate={scrollToSection} />
      </main>
      <Footer onNavigate={scrollToSection} />
      <a
        className="floating-whatsapp-btn"
        href="https://wa.me/916370234221?text=Hello%20Sarayu%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%21"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="tooltip">Chat on WhatsApp</span>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.53-1.1 1.04-1.53 1.08-.41.05-.95.07-2.8-.65-1.92-.74-3.15-2.69-3.25-2.82-.1-.13-.77-1.03-.77-1.96s.49-1.39.66-1.58c.18-.19.39-.24.52-.24.13 0 .26 0 .37.01.12.01.28-.05.44.33.17.38.57 1.39.62 1.49.05.1.08.22.01.35-.06.13-.1.21-.19.32-.1.1-.2.23-.29.31-.1.09-.2.19-.09.39.12.19.51.85 1.1 1.37.76.67 1.4.88 1.6.98.2.1.31.08.43-.05.12-.13.51-.6.65-.8.14-.2.28-.17.47-.1.19.07 1.2.57 1.41.67.21.1.35.15.4.24.05.09.05.53-.14 1.06Z" />
        </svg>
      </a>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
