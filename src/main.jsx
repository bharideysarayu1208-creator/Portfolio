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
    place: 'Srikakulam, Andhra Pradesh',
    score: '92%',
    label: 'Score',
  },
  {
    stage: 'Schooling · CBSE',
    title: 'Centurion Public School',
    place: 'Parlakhemundi, Odisha',
    score: '74%',
    label: 'Score',
  },
];

const languageData = [
  { name: 'Marathi', level: 'Native', glyph: 'म' },
  { name: 'English', level: 'Professional', glyph: 'En' },
  { name: 'Telugu', level: 'Fluent', glyph: 'తె' },
  { name: 'Hindi', level: 'Fluent', glyph: 'हि' },
  { name: 'Odia', level: 'Fluent', glyph: 'ଓ' },
];

function Header({ activeSection, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleNavClick(id) {
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
            handleNavClick('home');
          }}
        >
          <span className="brand-dot" aria-hidden="true"></span>
          Bharidey <span>Sarayu</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(id);
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
          aria-label="Toggle mobile menu"
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
              handleNavClick(id);
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
      <div className="hero-mesh" aria-hidden="true">
        <div className="mesh-orb mesh-orb-1"></div>
        <div className="mesh-orb mesh-orb-2"></div>
        <div className="mesh-orb mesh-orb-3"></div>
      </div>

      <div className="wrap hero-content">
        <div className="status-badge reveal">
          <span className="status-dot" aria-hidden="true"></span>
          Available for new roles · Front-End Developer
        </div>

        <h1 className="hero-title reveal delay-1">
          I build the interface between <span className="highlight">messy real-world data</span> and the people who have to act on it.
        </h1>

        <p className="hero-lead reveal delay-2">
          Front-end developer with 3 years building production web interfaces for healthcare and supply chain platforms — turning multi-endpoint APIs, large datasets, and business workflows into screens people can actually use quickly.
        </p>

        <div className="hero-actions reveal delay-3">
          <a className="btn btn-primary" href="mailto:bharideysarayu1208@gmail.com">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Email me
          </a>
          <a className="btn btn-ghost" href="https://www.linkedin.com/in/sarayu-bharidey/" target="_blank" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z"/></svg>
            LinkedIn
          </a>
          <a className="btn btn-ghost" href="tel:+916370234221">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +91 63702 34221
          </a>
          <button
            className="btn btn-ghost"
            onClick={() => onNavigate('experience')}
            type="button"
          >
            Explore Experience ↓
          </button>
        </div>

        <div className="hero-dock reveal delay-4">
          <div className="dock-card">
            <div className="dock-num">3 Years</div>
            <div className="dock-label">Production web interfaces for healthcare & supply chain platforms</div>
          </div>
          <div className="dock-card">
            <div className="dock-num">~20%</div>
            <div className="dock-label">Improvement in dashboard load times through front-end performance work</div>
          </div>
          <div className="dock-card">
            <div className="dock-num">Multi-Hospital</div>
            <div className="dock-label">Multi-level filtering and unified endpoints across partner networks</div>
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
        <div className="section-tag reveal">Career Summary</div>
        <h2 className="section-title reveal delay-1">Bridging Data Complexity and Human Usability</h2>
        <p className="section-subtitle reveal delay-2">
          From high-volume healthcare workflows to modern full-stack architectures.
        </p>

        <div className="career-grid">
          <div className="career-narrative reveal delay-1">
            <p>
              I've spent the last three years as a front-end developer at <strong>Medicover, via Ashreya Technologies</strong>, building interfaces for hospital and supply chain platforms — including <strong>Bharat Hospital</strong>, <strong>Ashoka Hospital (Nashik)</strong>, and <strong>Milann</strong>.
            </p>
            <p>
              Most of that work sits directly where multi-endpoint APIs meet critical daily operations: purchase orders, goods receipt notes (GRNs), invoices, lab data, and inventory management across multiple partner warehouses.
            </p>
            <p>
              I'm now looking for a role that moves me past implementing screens and into shaping how a product actually works, while actively building on <strong>React.js and Node.js/Express.js</strong> through a self-directed full-stack project.
            </p>
            <div className="career-badges">
              <span className="career-badge">Healthcare Operations</span>
              <span className="career-badge">Supply Chain Workflows</span>
              <span className="career-badge">React & Node/Express Full-Stack</span>
            </div>
          </div>

          <div className="career-callout reveal delay-2">
            <div className="quote-icon" aria-hidden="true">“</div>
            <p className="callout-quote">
              What I've learned is that front-end work is rarely about writing more code — it's about noticing when a form is technically correct but still frustrating, or when a table has all the right data but nobody can read it fast enough. I care about that gap, and about closing it.
            </p>
            <div className="callout-caption">— Engineering Philosophy</div>
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
        <div className="section-tag reveal">Work History</div>
        <h2 className="section-title reveal delay-1">Hands-On Production Experience</h2>
        <p className="section-subtitle reveal delay-2">
          Production web modules, high-throughput hospital platforms, and self-directed full-stack systems.
        </p>

        <div className="experience-timeline">
          {/* Main Role Card */}
          <article className="exp-main-card reveal">
            <div className="exp-header">
              <div>
                <h3 className="exp-title">
                  Front-End Developer — <span className="exp-company">Medicover</span> (via Ashreya Technologies)
                </h3>
              </div>
              <span className="exp-date">2022 – Present</span>
            </div>

            <div className="exp-clients">
              <span className="client-tag">Bharat Hospital</span>
              <span className="client-tag">Ashoka Hospital (Nashik)</span>
              <span className="client-tag">Milann</span>
              <span className="client-tag">Partner Hospital Network</span>
            </div>

            <ul className="bullet-list">
              {experiencePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            {/* Sub-project inside Medicover */}
            <div className="subproject-box">
              <div className="subproject-header">
                <h4 className="subproject-title">Sub-project: Inventory Management System — TechPro</h4>
                <span className="subproject-tag">Enterprise Module</span>
              </div>
              <div className="subproject-stack">
                Tech Stack: HTML5 · CSS3 · Bootstrap · JavaScript · jQuery · RESTful APIs
              </div>
              <ul className="bullet-list">
                <li>Developed the inventory UI for real-time stock, purchase orders, and sales tracking across multiple warehouses.</li>
                <li>Built dynamic, paginated data tables and form validation that reduced reconciliation errors and invalid submissions.</li>
              </ul>
            </div>
          </article>

          {/* Personal Project Card */}
          <article className="personal-project-card reveal delay-1">
            <div className="exp-header">
              <div>
                <h3 className="exp-title">Personal Project: School Management System</h3>
              </div>
              <span className="exp-date">Independent Project</span>
            </div>
            <div className="subproject-stack">
              Tech Stack: React.js · Node.js · Express.js · REST APIs
            </div>
            <p>
              Full-stack app built independently: React front end + self-built Node/Express REST API. Implements core CRUD workflows for students, classes, and attendance, establishing end-to-end familiarity with component lifecycle, state management, and backend contract design.
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
        <div className="section-tag reveal">Capabilities</div>
        <h2 className="section-title reveal delay-1">Technical Skills & Expertise</h2>
        <p className="section-subtitle reveal delay-2">
          Structured toolset spanning production front-end libraries, modern JavaScript, and full-stack development.
        </p>

        <div className="skills-grid">
          <div className="skill-cluster reveal">
            <div className="cluster-title">
              Languages & Libraries
              <span className="cluster-pill">Core</span>
            </div>
            <div className="skill-chips">
              {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'jQuery', 'Bootstrap'].map((skill) => (
                <span className="skill-chip" key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-cluster featured reveal delay-1">
            <div className="cluster-title">
              Currently Learning
              <span className="cluster-pill">Active Focus</span>
            </div>
            <div className="skill-chips">
              {['React.js', 'Node.js', 'Express.js'].map((skill) => (
                <span className="skill-chip" key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-cluster reveal delay-2">
            <div className="cluster-title">
              Tools & Workflow
              <span className="cluster-pill">Tooling</span>
            </div>
            <div className="skill-chips">
              {['Git & GitHub', 'VS Code', 'Chrome DevTools', 'REST APIs', 'JSON'].map((skill) => (
                <span className="skill-chip" key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-cluster reveal delay-3">
            <div className="cluster-title">
              Core Competencies
              <span className="cluster-pill">Practice</span>
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

        <div className="achievements-grid reveal">
          <div className="achieve-card">
            <div className="achieve-num">~20%</div>
            <div className="achieve-desc">Reduction in dashboard load times through front-end performance tuning</div>
          </div>
          <div className="achieve-card">
            <div className="achieve-num">0 Defects</div>
            <div className="achieve-desc">Zero critical post-launch regressions on shipped UI modules</div>
          </div>
          <div className="achieve-card">
            <div className="achieve-num">Dynamic APIs</div>
            <div className="achieve-desc">Seamless integration across purchase orders, GRNs, invoices, and challans</div>
          </div>
          <div className="achieve-card">
            <div className="achieve-num">Cross-Browser</div>
            <div className="achieve-desc">Ensured pixel-accurate and resilient performance across diverse client browsers</div>
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
        <div className="section-tag reveal">Academic Background</div>
        <h2 className="section-title reveal delay-1">Education & Qualifications</h2>
        <p className="section-subtitle reveal delay-2">
          Computer applications degree and foundational academics.
        </p>

        <div className="edu-grid">
          {educationData.map((item, idx) => (
            <article className={`edu-card reveal delay-${idx + 1}`} key={item.title}>
              <div className="edu-top">
                <div className="edu-stage">{item.stage}</div>
                <h3 className="edu-title">{item.title}</h3>
                <p className="edu-place">{item.place}</p>
              </div>
              <div className="edu-score-badge">
                <span className="score-num">{item.score}</span>
                <span className="score-label">{item.label}</span>
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
        <div className="section-tag reveal">Communication</div>
        <h2 className="section-title reveal delay-1">Languages I Know</h2>
        <p className="section-subtitle reveal delay-2">
          Multilingual communication capabilities for diverse regional and cross-functional teams.
        </p>

        <div className="lang-grid">
          {languageData.map((lang, idx) => (
            <div className={`lang-card reveal delay-${(idx % 4) + 1}`} key={lang.name}>
              <div className="lang-glyph" aria-hidden="true">{lang.glyph}</div>
              <div className="lang-name">{lang.name}</div>
              <div className="lang-level">{lang.level}</div>
            </div>
          ))}
        </div>

        {/* Contact Banner */}
        <div className="contact-banner reveal">
          <div className="contact-info">
            <h3>Let's collaborate or discuss opportunities</h3>
            <p>Based in Parlakhemundi, Odisha, India · Open to relocating or remote roles.</p>
          </div>
          <div className="contact-links">
            <a className="btn btn-primary" href="mailto:bharideysarayu1208@gmail.com">
              bharideysarayu1208@gmail.com
            </a>
            <a className="btn btn-ghost" href="tel:+916370234221">
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
        rootMargin: '-30% 0px -50% 0px',
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

    // Handle back/forward browser navigation
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
