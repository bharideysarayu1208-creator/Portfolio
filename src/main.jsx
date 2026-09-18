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

const experiencePoints = [
  'Built and maintained front-end modules for supply chain tracking, lab management, and inventory across multiple partner-hospital accounts.',
  'Implemented dynamic, multi-level dropdown selectors (state → hospital → department) with jQuery/Select2, letting staff filter data across dozens of hospital locations.',
  'Integrated multiple RESTful API endpoints to surface purchase orders, GRNs, invoices, delivery challans, and sales returns in one unified interface.',
  'Built interactive UI elements (status indicators, expandable tables, dynamic filters).',
  'Contributed to a ~20% improvement in dashboard load times through front-end performance work.',
  'Worked directly with backend engineers on API contracts and data troubleshooting.',
];

const educationData = [
  {
    stage: 'Degree · BCA',
    title: 'Bachelor of Computer Applications',
    place: 'Affiliated to Dr. B.R. Ambedkar University, Srikakulam, Andhra Pradesh',
    score: '8.6',
    label: 'CGPA',
  },
  {
    stage: 'Intermediate · MPC',
    title: 'Gayatri Junior College',
    place: 'Srikakulam, Andhra Pradesh — Mathematics, Physics, Chemistry',
    score: '92%',
    label: 'Overall',
  },
  {
    stage: 'Schooling · CBSE',
    title: 'Centurion Public School',
    place: 'Parlakhemundi, Odisha',
    score: '74%',
    label: 'Overall',
  },
];

const languageData = [
  { name: 'Marathi', level: 'Native', icon: 'MR' },
  { name: 'English', level: 'Professional', icon: 'EN' },
  { name: 'Telugu', level: 'Fluent', icon: 'TE' },
  { name: 'Hindi', level: 'Fluent', icon: 'HI' },
  { name: 'Odia', level: 'Fluent', icon: 'OD' },
];

function Header({ activeSection, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleNav(id) {
    setMobileOpen(false);
    onNavigate(id);
  }

  return (
    <header>
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

        <div className="header-actions">
          <a className="btn-header-cta" href="mailto:bharideysarayu1208@gmail.com">
            Get in Touch →
          </a>
        </div>

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
            <div className="hero-status-pill reveal">
              <span className="beacon" aria-hidden="true"></span>
              <span>Available for new roles · Front-End Developer</span>
            </div>

            <h1 className="hero-heading reveal delay-1">
              I build the interface between <span className="gradient-text">messy real-world data</span> and the people who have to act on it.
            </h1>

            <p className="hero-lead reveal delay-2">
              Front-end developer with 3 years building production web interfaces for healthcare and supply chain platforms — turning multi-endpoint APIs, large datasets, and business workflows into screens people can actually use quickly.
            </p>

            <div className="hero-actions reveal delay-3">
              <a className="btn btn-primary" href="mailto:bharideysarayu1208@gmail.com">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Email me
              </a>
              <a className="btn btn-ghost" href="https://www.linkedin.com/in/sarayu-bharidey/" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z"/></svg>
                LinkedIn
              </a>
              <a className="btn btn-ghost" href="tel:+916370234221">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +91 63702 34221
              </a>
            </div>

            <div className="hero-meta-strip reveal delay-4">
              <div className="hero-meta-item">
                <span>📍</span>
                <span>Parlakhemundi, Odisha, India</span>
              </div>
              <div className="hero-meta-item">
                <span>⚡</span>
                <span>Open to Relocating & Remote</span>
              </div>
            </div>
          </div>

          <div className="hero-right reveal delay-2">
            <div className="dev-card">
              <div className="dev-card-bar">
                <div className="card-dots">
                  <div className="card-dot dot-red"></div>
                  <div className="card-dot dot-yellow"></div>
                  <div className="card-dot dot-green"></div>
                </div>
                <div className="card-filename">developer-profile.config.ts</div>
                <div style={{ width: '36px' }}></div>
              </div>

              <div className="dev-card-body">
                <div className="code-row">
                  <span className="code-key">developer:</span>
                  <span className="code-val">"Bharidey Sarayu"</span>
                </div>
                <div className="code-row">
                  <span className="code-key">currentRole:</span>
                  <span className="code-val accent">"Front-End Developer"</span>
                </div>
                <div className="code-row">
                  <span className="code-key">experienceAt:</span>
                  <span className="code-val">"Medicover (via Ashreya)"</span>
                </div>
                <div className="code-row">
                  <span className="code-key">performanceGain:</span>
                  <span className="code-val accent">"~20% dashboard speedup"</span>
                </div>
                <div className="code-row">
                  <span className="code-key">postLaunchDefects:</span>
                  <span className="code-val success">"0 critical issues"</span>
                </div>
                <div className="code-row">
                  <span className="code-key">coreStack:</span>
                  <div className="code-tags">
                    {['React.js', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'jQuery'].map((t) => (
                      <span className="code-tag-pill" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="code-row">
                  <span className="code-key">status:</span>
                  <span className="code-val success">"Available for interview"</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="metrics-strip reveal delay-4">
          <div className="metric-box">
            <div className="metric-number">3 Years</div>
            <div className="metric-label">Building production web interfaces for healthcare & supply chain platforms</div>
          </div>
          <div className="metric-box">
            <div className="metric-number">~20%</div>
            <div className="metric-label">Dashboard load time improvement through front-end performance tuning</div>
          </div>
          <div className="metric-box">
            <div className="metric-number">Multi-Hospital</div>
            <div className="metric-label">Dynamic hierarchical filtering across partner-hospital accounts</div>
          </div>
          <div className="metric-box">
            <div className="metric-number">0 Defects</div>
            <div className="metric-label">Critical post-launch regressions shipped on live medical systems</div>
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
        <div className="section-badge reveal">01 / Career Summary</div>
        <h2 className="section-title reveal delay-1">Bridging Data Complexity and Human Usability</h2>
        <p className="section-desc reveal delay-2">
          Turning large healthcare datasets and multi-endpoint APIs into intuitive, high-speed interfaces.
        </p>

        <div className="career-grid">
          <div className="career-content reveal delay-1">
            <p>
              I've spent the last three years as a front-end developer at <strong>Medicover, via Ashreya Technologies</strong>, building interfaces for hospital and supply chain platforms — including <strong>Bharat Hospital</strong>, <strong>Ashoka Hospital (Nashik)</strong>, and <strong>Milann</strong>.
            </p>
            <p>
              Most of that work sits directly at the point where an API meets a real workflow: purchase orders, goods receipt notes (GRNs), invoices, lab data, and inventory across multiple warehouses.
            </p>
            <p>
              I'm now looking for a role that moves me past implementing screens and into shaping how a product actually works, while building on <strong>React.js and Node.js/Express.js</strong> through a self-directed full-stack project.
            </p>
          </div>

          <div className="philosophy-card reveal delay-2">
            <div className="quote-symbol">“</div>
            <p className="quote-body">
              What I've learned doing that is that front-end work is rarely about writing more code — it's about noticing when a form is technically correct but still frustrating, or when a table has all the right data but nobody can read it fast enough. I care about that gap, and about closing it.
            </p>
            <div className="quote-author">Bharidey Sarayu · Engineering Philosophy</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-badge reveal">02 / Experience</div>
        <h2 className="section-title reveal delay-1">Hands-On Production Experience</h2>
        <p className="section-desc reveal delay-2">
          Production modules, hospital data systems, and self-directed full-stack software.
        </p>

        <div className="timeline">
          {/* Main Medicover Role */}
          <article className="job-card reveal">
            <div className="job-head">
              <div>
                <h3 className="job-title">
                  Front-End Developer — <span className="job-company">Medicover</span> (via Ashreya Technologies)
                </h3>
              </div>
              <span className="job-date">2022 – Present</span>
            </div>

            <div className="client-pills">
              <span className="client-pill">Bharat Hospital</span>
              <span className="client-pill">Ashoka Hospital (Nashik)</span>
              <span className="client-pill">Milann</span>
              <span className="client-pill">Partner Hospital Network</span>
            </div>

            <ul className="job-points">
              {experiencePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            {/* Sub-project inside Medicover */}
            <div className="subproject-card">
              <div className="subproject-head">
                <h4 className="subproject-title">Sub-project: Inventory Management System — TechPro</h4>
                <span className="subproject-tag">Enterprise Module</span>
              </div>
              <div className="subproject-stack">
                HTML5 · CSS3 · Bootstrap · JavaScript · jQuery · RESTful APIs
              </div>
              <ul className="job-points" style={{ marginBottom: 0 }}>
                <li>Developed the inventory UI for real-time stock, purchase orders, and sales tracking across multiple warehouses.</li>
                <li>Built dynamic, paginated data tables and form validation that reduced reconciliation errors and invalid submissions.</li>
              </ul>
            </div>
          </article>

          {/* Personal Project */}
          <article className="personal-card reveal delay-1">
            <div className="job-head">
              <div>
                <h3 className="job-title">Personal project: School Management System</h3>
              </div>
              <span className="job-date">Independent Full-Stack</span>
            </div>
            <div className="subproject-stack">
              React.js · Node.js · Express.js · REST APIs
            </div>
            <p>
              Full-stack app built independently: React front end + self-built Node/Express REST API. Implements core CRUD workflows for students, classes, and attendance, establishing hands-on execution of component architecture, state management, and backend contract design.
            </p>
          </article>
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
        <h2 className="section-title reveal delay-1">Technical Skills & Expertise</h2>
        <p className="section-desc reveal delay-2">
          Structured toolset spanning core web standards, enterprise DOM scripting, and modern React architectures.
        </p>

        <div className="skills-grid">
          <div className="skill-card reveal">
            <div className="skill-card-head">
              <span className="skill-group-name">Languages & Libraries</span>
              <span className="skill-badge-sub">Core</span>
            </div>
            <div className="skill-chips">
              {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'jQuery', 'Bootstrap'].map((skill) => (
                <span className="skill-chip" key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-card highlight reveal delay-1">
            <div className="skill-card-head">
              <span className="skill-group-name">Currently Learning</span>
              <span className="skill-badge-sub" style={{ background: '#4F46E5', color: '#FFFFFF' }}>Active Focus</span>
            </div>
            <div className="skill-chips">
              {['React.js', 'Node.js', 'Express.js'].map((skill) => (
                <span className="skill-chip" key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-card reveal delay-2">
            <div className="skill-card-head">
              <span className="skill-group-name">Tools & Ecosystem</span>
              <span className="skill-badge-sub">Tooling</span>
            </div>
            <div className="skill-chips">
              {['Git & GitHub', 'VS Code', 'Chrome DevTools', 'REST APIs', 'JSON'].map((skill) => (
                <span className="skill-chip" key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-card reveal delay-3">
            <div className="skill-card-head">
              <span className="skill-group-name">Core Competencies</span>
              <span className="skill-badge-sub">Practice</span>
            </div>
            <div className="skill-chips">
              {[
                'Responsive design',
                'Cross-browser compatibility',
                'DOM manipulation',
                'Form validation',
                'Debugging',
              ].map((skill) => (
                <span className="skill-chip" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="section-badge reveal">04 / Education</div>
        <h2 className="section-title reveal delay-1">Academic Background</h2>
        <p className="section-desc reveal delay-2">
          Formal academic training in computer applications and science.
        </p>

        <div className="edu-grid">
          {educationData.map((item, idx) => (
            <article className={`edu-card reveal delay-${idx + 1}`} key={item.title}>
              <div>
                <div className="edu-stage">{item.stage}</div>
                <h3 className="edu-title">{item.title}</h3>
                <p className="edu-place">{item.place}</p>
              </div>
              <div className="edu-score-pill">
                <span className="score-value">{item.score}</span>
                <span className="score-type">{item.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Languages() {
  return (
    <section id="languages">
      <div className="wrap">
        <div className="section-badge reveal">05 / Communication</div>
        <h2 className="section-title reveal delay-1">Languages I Know</h2>
        <p className="section-desc reveal delay-2">
          Effective multilingual communication across regional and cross-functional teams.
        </p>

        <div className="languages-grid">
          {languageData.map((lang, idx) => (
            <div className={`lang-card reveal delay-${(idx % 4) + 1}`} key={lang.name}>
              <div className="lang-circle">{lang.icon}</div>
              <div className="lang-name">{lang.name}</div>
              <div className="lang-level">{lang.level}</div>
            </div>
          ))}
        </div>

        {/* High-Impact Contact Card */}
        <div className="contact-card reveal">
          <div>
            <h3>Let's build something exceptional together</h3>
            <p>
              Currently available for new front-end developer roles. Based in Parlakhemundi, Odisha, India — open to relocating or remote roles globally.
            </p>
          </div>
          <div className="contact-card-actions">
            <a className="btn btn-white" href="mailto:bharideysarayu1208@gmail.com">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              bharideysarayu1208@gmail.com
            </a>
            <a className="btn btn-outline-white" href="tel:+916370234221">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +91 63702 34221
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('home');

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      if (window.location.hash !== `#${id}`) {
        window.history.pushState(null, '', `#${id}`);
      }
    }
  }

  // ScrollSpy with IntersectionObserver
  useEffect(() => {
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
    if (initialHash && sectionIds.includes(initialHash)) {
      setTimeout(() => {
        const target = document.getElementById(initialHash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(initialHash);
        }
      }, 150);
    }

    // Handle browser back/forward
    const handleHashChange = () => {
      const currentHash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      if (currentHash && sectionIds.includes(currentHash)) {
        const target = document.getElementById(currentHash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(currentHash);
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        <Hero onNavigate={scrollToSection} />
        <Career />
        <Experience />
        <Skills />
        <Education />
        <Languages />
      </main>
      <footer>
        <div className="wrap footer-inner">
          <div className="footer-brand">
            Bharidey Sarayu · Front-End Developer
          </div>
          <div>Parlakhemundi, Odisha, India · +91 63702 34221</div>
          <button
            className="back-to-top"
            onClick={() => scrollToSection('home')}
            type="button"
          >
            Back to Top ↑
          </button>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
