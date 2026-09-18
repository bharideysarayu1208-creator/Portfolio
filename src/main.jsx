import { useState, useEffect, useRef } from 'react';
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
    degree: 'Bachelor of Computer Applications',
    institute: 'Affiliated to Dr. B.R. Ambedkar University, Srikakulam, Andhra Pradesh',
    targetScore: 8.6,
    scorePrefix: '',
    scoreSuffix: '',
    isFloat: true,
    scoreLabel: 'CGPA',
  },
  {
    stage: 'Intermediate · MPC',
    degree: 'Mathematics, Physics, Chemistry',
    institute: 'Gayatri Junior College, Srikakulam, Andhra Pradesh',
    targetScore: 92,
    scorePrefix: '',
    scoreSuffix: '%',
    isFloat: false,
    scoreLabel: 'Overall',
  },
  {
    stage: 'Schooling · CBSE',
    degree: 'Secondary School Examination',
    institute: 'Centurion Public School, Parlakhemundi, Odisha',
    targetScore: 74,
    scorePrefix: '',
    scoreSuffix: '%',
    isFloat: false,
    scoreLabel: 'Overall',
  },
];

const languagesData = [
  { name: 'Marathi', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'Telugu', level: 'Fluent' },
  { name: 'Hindi', level: 'Fluent' },
  { name: 'Odia', level: 'Fluent' },
];

/* ==========================================================================
   Smooth Stat Counter Component
   ========================================================================== */
function CountUp({ target, prefix = '', suffix = '', isFloat = false, duration = 1600 }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * eased;

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={nodeRef}>
      {prefix}
      {isFloat ? count.toFixed(1) : Math.round(count)}
      {suffix}
    </span>
  );
}

/* ==========================================================================
   Header Component
   ========================================================================== */
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
          <span className="brand-name">Bharidey Sarayu</span>
          <span className="brand-meta">/ Front-End Developer</span>
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

        <div className="nav-status">
          <span className="status-beacon" aria-hidden="true"></span>
          <span>Available for Roles</span>
        </div>

        <button
          className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          type="button"
          aria-label="Toggle navigation menu"
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

/* ==========================================================================
   Hero Section (#home)
   ========================================================================== */
function Hero({ onNavigate }) {
  return (
    <section id="home">
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-meta reveal">
          <span>Parlakhemundi, Odisha, India</span>
          <span>·</span>
          <span>Open to Relocating & Remote</span>
        </div>

        <h1 className="hero-title reveal delay-1">
          I build the interface between <em>messy real-world data</em> and the people who have to act on it.
        </h1>

        <p className="hero-lead reveal delay-2">
          Front-end developer with 3 years building production web interfaces for healthcare and supply chain platforms — turning multi-endpoint APIs, large datasets, and business workflows into screens people can actually use quickly.
        </p>

        <div className="hero-actions reveal delay-3">
          <a className="btn btn-primary" href="mailto:bharideysarayu1208@gmail.com">
            Get in Touch
          </a>
          <a className="btn btn-secondary" href="https://www.linkedin.com/in/sarayu-bharidey/" target="_blank" rel="noreferrer">
            LinkedIn Profile ↗
          </a>
          <a className="btn btn-link" href="tel:+916370234221">
            +91 63702 34221
          </a>
          <button
            className="btn btn-link"
            onClick={() => onNavigate('experience')}
            type="button"
          >
            View Work History ↓
          </button>
        </div>

        <div className="hero-numbers-strip reveal delay-4">
          <div className="num-block">
            <div className="num-value">
              <CountUp target={3} suffix=" Years" />
            </div>
            <div className="num-label">Building production interfaces for healthcare & supply chain platforms.</div>
          </div>
          <div className="num-block">
            <div className="num-value">
              <CountUp target={20} prefix="~" suffix="%" />
            </div>
            <div className="num-label">Improvement in dashboard load times through front-end performance work.</div>
          </div>
          <div className="num-block">
            <div className="num-value">
              <em>Multi</em>-Hospital
            </div>
            <div className="num-label">Dynamic hierarchical filtering spanning partner-hospital locations.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   Career Section (#career)
   ========================================================================== */
function Career() {
  return (
    <section id="career">
      <div className="wrap">
        <div className="section-label reveal">01 / Career Summary</div>
        <h2 className="section-heading reveal delay-1">
          From multi-hospital data workflows to <em>end-to-end product craft</em>.
        </h2>
        <p className="section-intro reveal delay-2">
          Three years of shipping interfaces where usability directly dictates operational throughput.
        </p>

        <div className="career-layout">
          <div className="career-body reveal delay-1">
            <p>
              I've spent the last three years as a front-end developer at <strong>Medicover, via Ashreya Technologies</strong>, building interfaces for hospital and supply chain platforms — including <strong>Bharat Hospital</strong>, <strong>Ashoka Hospital (Nashik)</strong>, and <strong>Milann</strong>.
            </p>
            <p>
              Most of that work sits directly where multi-endpoint APIs meet real operational workflows: purchase orders, goods receipt notes (GRNs), invoices, lab data, and inventory across multiple warehouses.
            </p>
            <p>
              I'm now looking for a role that moves me past implementing screens and into shaping how a product actually works, while building on <strong>React.js and Node.js/Express.js</strong> through a self-directed full-stack project.
            </p>
          </div>

          <aside className="career-philosophy reveal delay-2">
            <div className="philosophy-tag">Guiding Principle</div>
            <blockquote className="philosophy-quote">
              “Front-end work is rarely about writing more code — it's about noticing when a form is technically correct but still frustrating, or when a table has all the right data but nobody can read it fast enough.”
            </blockquote>
            <div className="philosophy-author">Bharidey Sarayu — Front-End Developer</div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   Experience Section (#experience)
   ========================================================================== */
function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-label reveal">02 / Experience</div>
        <h2 className="section-heading reveal delay-1">
          Production systems shipped for <em>healthcare & supply chain</em>.
        </h2>
        <p className="section-intro reveal delay-2">
          Proven track record collaborating with backend engineers, untangling large datasets, and optimizing web performance.
        </p>

        <div className="experience-stack">
          {/* Main Role Card */}
          <article className="exp-card reveal">
            <div className="exp-card-header">
              <div>
                <h3 className="exp-role-title">
                  Front-End Developer <span>— Medicover (via Ashreya Technologies)</span>
                </h3>
              </div>
              <div className="exp-period">2022 — Present</div>
            </div>

            <div className="exp-client-row">
              <span className="client-pill">Bharat Hospital</span>
              <span className="client-pill">Ashoka Hospital (Nashik)</span>
              <span className="client-pill">Milann</span>
              <span className="client-pill">Partner Hospital Network</span>
            </div>

            <ul className="exp-bullets">
              {experiencePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="subproject-divider"></div>

            {/* Sub-project inside Medicover */}
            <div>
              <div className="subproject-header">
                <h4 className="subproject-heading">Sub-project: Inventory Management System — TechPro</h4>
              </div>
              <div className="subproject-stack-text">
                HTML5 · CSS3 · Bootstrap · JavaScript · jQuery · RESTful APIs
              </div>
              <ul className="exp-bullets">
                <li>Developed the inventory UI for real-time stock, purchase orders, and sales tracking across multiple warehouses.</li>
                <li>Built dynamic, paginated data tables and form validation that reduced reconciliation errors and invalid submissions.</li>
              </ul>
            </div>
          </article>

          {/* Personal Project Card */}
          <article className="personal-project-box reveal delay-1">
            <div className="exp-card-header">
              <div>
                <h3 className="exp-role-title">
                  School Management System <span>— Personal Project</span>
                </h3>
              </div>
              <div className="exp-period">Full-Stack Exploration</div>
            </div>
            <div className="subproject-stack-text">
              React.js · Node.js · Express.js · REST APIs
            </div>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.75' }}>
              Full-stack app built independently: React front end + self-built Node/Express REST API. Implements core CRUD workflows for students, classes, and attendance — hands-on execution of component architecture, state management, and API contract design.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   Skills Section (#skills)
   ========================================================================== */
function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-label reveal">03 / Capabilities</div>
        <h2 className="section-heading reveal delay-1">
          Technical toolset & <em>core competencies</em>.
        </h2>
        <p className="section-intro reveal delay-2">
          Grounded in resilient core web standards, enterprise DOM scripting, and modern JavaScript architectures.
        </p>

        <div className="skills-grid">
          <div className="skill-box reveal">
            <div className="skill-box-title">Languages & Libraries</div>
            <div className="skill-tags">
              {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'jQuery', 'Bootstrap'].map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-box reveal delay-1">
            <div className="skill-box-title learning">
              <span>Currently Learning</span>
              <span>●</span>
            </div>
            <div className="skill-tags">
              {['React.js', 'Node.js', 'Express.js'].map((skill) => (
                <span className="skill-tag" key={skill} style={{ borderColor: 'var(--accent-hairline)', color: 'var(--accent)' }}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-box reveal delay-2">
            <div className="skill-box-title">Tools & Ecosystem</div>
            <div className="skill-tags">
              {['Git & GitHub', 'VS Code', 'Chrome DevTools', 'REST APIs', 'JSON'].map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-box reveal delay-3">
            <div className="skill-box-title">Core Competencies</div>
            <div className="skill-tags">
              {[
                'Responsive design',
                'Cross-browser compatibility',
                'DOM manipulation',
                'Form validation',
                'Debugging',
              ].map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   Education Section (#education)
   ========================================================================== */
function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="section-label reveal">04 / Education</div>
        <h2 className="section-heading reveal delay-1">
          Academic foundation & <em>formal qualifications</em>.
        </h2>
        <p className="section-intro reveal delay-2">
          Bachelor's in computer applications paired with strong quantitative foundations.
        </p>

        <div className="education-list">
          {educationData.map((item, idx) => (
            <article className={`edu-row reveal delay-${idx + 1}`} key={item.institute}>
              <div>
                <div className="edu-stage-tag">{item.stage}</div>
                <h3 className="edu-degree">{item.degree}</h3>
                <p className="edu-institute">{item.institute}</p>
              </div>
              <div className="edu-score-callout">
                <div className="edu-score-num">
                  <CountUp
                    target={item.targetScore}
                    prefix={item.scorePrefix}
                    suffix={item.scoreSuffix}
                    isFloat={item.isFloat}
                  />
                </div>
                <div className="edu-score-caption">{item.scoreLabel}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   Languages Section (#languages)
   ========================================================================== */
function Languages() {
  return (
    <section id="languages">
      <div className="wrap">
        <div className="section-label reveal">05 / Communication</div>
        <h2 className="section-heading reveal delay-1">
          Languages for <em>cross-functional teams</em>.
        </h2>
        <p className="section-intro reveal delay-2">
          Fluent across 5 regional and professional languages for high-empathy communication.
        </p>

        <div className="languages-grid">
          {languagesData.map((lang, idx) => (
            <div className={`lang-cell reveal delay-${(idx % 3) + 1}`} key={lang.name}>
              <div className="lang-cell-name">{lang.name}</div>
              <div className="lang-cell-level">{lang.level}</div>
            </div>
          ))}
        </div>

        {/* Studio Editorial Closing */}
        <div className="studio-closing reveal">
          <div>
            <h3 className="closing-title">
              Let's build interfaces that <em>actually serve people</em>.
            </h3>
            <p className="closing-subtext">
              Currently available for new front-end developer roles. Based in Parlakhemundi, Odisha, India — open to relocating or remote roles globally.
            </p>
          </div>

          <div className="closing-contact-stack">
            <div className="contact-line">
              <span className="contact-label">Email</span>
              <a className="contact-value" href="mailto:bharideysarayu1208@gmail.com">
                bharideysarayu1208@gmail.com
              </a>
            </div>
            <div className="contact-line">
              <span className="contact-label">Phone</span>
              <a className="contact-value" href="tel:+916370234221">
                +91 63702 34221
              </a>
            </div>
            <div className="contact-line">
              <span className="contact-label">LinkedIn</span>
              <a className="contact-value" href="https://www.linkedin.com/in/sarayu-bharidey/" target="_blank" rel="noreferrer">
                in/sarayu-bharidey ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   Root Application
   ========================================================================== */
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
      {/* Background Subtle Marquee */}
      <div className="studio-ticker" aria-hidden="true">
        <div className="studio-ticker-track">
          HTML5 · CSS3 · JavaScript ES6+ · React.js · Node.js · Express.js · RESTful APIs · jQuery · Responsive Design · DOM Manipulation · Performance Optimization ·&nbsp;
        </div>
        <div className="studio-ticker-track">
          HTML5 · CSS3 · JavaScript ES6+ · React.js · Node.js · Express.js · RESTful APIs · jQuery · Responsive Design · DOM Manipulation · Performance Optimization ·&nbsp;
        </div>
      </div>

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
        <div className="wrap footer-row">
          <div className="footer-copy">
            Bharidey Sarayu — Front-End Developer · Parlakhemundi, Odisha, India
          </div>
          <button
            className="footer-top-btn"
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
