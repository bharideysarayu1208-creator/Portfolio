import { useState } from 'react';
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

const education = [
  {
    stage: 'Schooling - CBSE',
    title: 'Centurion Public School',
    place: 'Paralakhemundi, Odisha',
    score: '74%',
    label: 'Overall',
  },
  {
    stage: 'Intermediate - MPC',
    title: 'Gayatri Junior College',
    place: 'Srikakulam, Andhra Pradesh - Mathematics, Physics, Chemistry',
    score: '92%',
    label: 'Overall',
  },
  {
    stage: 'Degree - BCA',
    title: 'Bachelor of Computer Applications',
    place: 'Srikakulam, Andhra Pradesh - Affiliated to Dr. B.R. Ambedkar University',
    score: '8.6',
    label: 'CGPA',
  },
];

const skillGroups = [
  ['Languages and libraries', ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'jQuery', 'Bootstrap']],
  ['Currently learning', ['React.js', 'Node.js', 'Express.js']],
  ['Tools', ['Git and GitHub', 'VS Code', 'Chrome DevTools', 'REST APIs', 'JSON']],
  ['Core competencies', ['Responsive design', 'Cross-browser compatibility', 'DOM manipulation', 'Form validation', 'Debugging']],
];

const experiencePoints = [
  'Built and maintained front-end modules for supply chain tracking, lab management, and inventory, used across multiple partner-hospital accounts on a shared platform.',
  'Implemented dynamic, multi-level dropdown selectors (state -> hospital -> department) with jQuery/Select2, letting staff filter data across dozens of hospital locations spanning several states.',
  'Integrated multiple RESTful API endpoints to surface purchase orders, goods receipt notes, invoices, delivery challans, and sales returns in one unified interface.',
  'Built interactive UI elements - status indicators, expandable tables, dynamic filters - to help managers review supply chain and lab data faster.',
  'Contributed to front-end performance work (fewer unnecessary re-renders, optimized asset loading) that supported a ~20% improvement in dashboard load times.',
  'Worked directly with backend engineers to define API contracts and troubleshoot data mismatches, keeping data flow consistent from server to UI.',
];

function Header({ activePanel, onNavigate }) {
  return (
    <header>
      <div className="wrap header-inner">
        <div className="brand">Bharidey <span>Sarayu</span></div>
        <nav aria-label="Main navigation">
          {navItems.map(([id, label]) => (
            <button
              key={id}
              className={activePanel === id ? 'active' : ''}
              onClick={() => onNavigate(id)}
              type="button"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Home() {
  return (
    <>
      <p className="eyebrow">Available for new roles</p>
      <h1>I build the interface between messy real-world data and the people who have to act on it.</h1>
      <p className="lead">Front-end developer with 3 years building production web interfaces for healthcare and supply chain platforms - turning multi-endpoint APIs, large datasets, and business workflows into screens people can actually use quickly.</p>
      <div className="link-row">
        <a className="btn btn-primary" href="mailto:bharideysarayu1208@gmail.com">Email me</a>
        <a className="btn btn-ghost" href="https://www.linkedin.com/in/sarayu-bharidey/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="btn btn-ghost" href="tel:+916370234221">+91 63702 34221</a>
      </div>
    </>
  );
}

function Career() {
  return (
    <>
      <h2>Career</h2>
      <div className="career">
        <p>I've spent the last three years as a front-end developer at <strong>Medicover, via Ashreya Technologies</strong>, building interfaces for hospital and supply chain platforms - including Bharat Hospital, Ashoka Hospital in Nashik, and Milann. Most of that work sits at the point where an API meets a real workflow: purchase orders, goods receipt notes, invoices, lab data, inventory across multiple warehouses.</p>
        <p>What I've learned doing that is that front-end work is rarely about writing more code - it's about noticing when a form is technically correct but still frustrating, or when a table has all the right data but nobody can read it fast enough. I care about that gap, and about closing it.</p>
        <p>I'm currently looking for a role that moves me past implementing screens and into shaping how a product actually works - somewhere I can learn from developers and designers who care about both craft and outcome. Alongside that, I'm building on <strong>React.js and Node.js/Express.js</strong> through a self-directed full-stack project.</p>
      </div>
    </>
  );
}

function Experience() {
  return (
    <>
      <h2>Experience</h2>
      <div className="job">
        <div className="job-head">
          <span className="job-title">Front-End Developer - Medicover (via Ashreya Technologies)</span>
          <span className="job-time">2022 - Present</span>
        </div>
        <p className="job-clients">Bharat Hospital · Ashoka Hospital, Nashik · Milann · partner hospital network</p>
        <ul>{experiencePoints.map((point) => <li key={point}>{point}</li>)}</ul>
        <div className="subproject">
          <div className="subproject-title">Inventory Management System - TechPro</div>
          <div className="subproject-stack">HTML5 · CSS3 · Bootstrap · JavaScript · jQuery · RESTful APIs</div>
          <ul>
            <li>Developed and maintained the inventory UI supporting real-time stock, purchase order, and sales tracking across multiple warehouses.</li>
            <li>Integrated live APIs for inventory updates, GRN workflows, and sales tracking, reducing reconciliation errors.</li>
            <li>Built dynamic, paginated data tables handling large datasets with minimal latency, plus form validation that cut invalid submissions.</li>
          </ul>
        </div>
      </div>
      <div className="project">
        <div className="project-head">
          <span className="project-title">School Management System - personal project</span>
          <span className="project-stack">React.js · Node.js · Express.js</span>
        </div>
        <p>A full-stack app built independently to move beyond jQuery into React - a React front end talking to a self-built Node/Express REST API. Implements core CRUD workflows for students, classes, and attendance, and was my hands-on route into component structure, props/state, and connecting a front end to a backend I designed myself.</p>
      </div>
    </>
  );
}

function Skills() {
  return (
    <>
      <h2>Skills</h2>
      <div className="skill-groups">
        {skillGroups.map(([title, skills], groupIndex) => (
          <div key={title}>
            <p className="skill-group-title">{title}</p>
            <div className="chip-row">
              {skills.map((skill) => <span className={`chip${groupIndex === 1 ? ' learning' : ''}`} key={skill}>{skill}</span>)}
            </div>
          </div>
        ))}
      </div>
      <div className="achievements">
        <div className="achievement"><div className="achievement-num">~20%</div><p>Reduction in page load times across enterprise dashboards through front-end performance work.</p></div>
        <div className="achievement"><div className="achievement-num">0</div><p>Critical post-launch defects on production UI features shipped for healthcare and supply chain clients.</p></div>
        <div className="achievement"><div className="achievement-num">Multi</div><p>Endpoint API integrations that helped eliminate manual reporting bottlenecks for operations teams.</p></div>
        <div className="achievement"><div className="achievement-num">Every</div><p>Sprint deadline met in an agile/Scrum environment, without trading off code quality.</p></div>
      </div>
    </>
  );
}

function Education() {
  return (
    <>
      <h2>Education</h2>
      <div className="edu-list">
        {education.map((item) => (
          <article className="edu-card" key={item.title}>
            <div className="edu-main">
              <div className="edu-stage">{item.stage}</div>
              <div className="edu-title">{item.title}</div>
              <div className="edu-place">{item.place}</div>
            </div>
            <div className="edu-score">{item.score}<span>{item.label}</span></div>
          </article>
        ))}
      </div>
    </>
  );
}

function Languages() {
  const languages = [['Marathi', 'Native'], ['English', 'Professional'], ['Telugu', 'Fluent'], ['Hindi', 'Fluent'], ['Odia', 'Fluent']];
  return (
    <>
      <h2>Languages I know</h2>
      <div className="lang-grid">
        {languages.map(([name, level]) => <div className="lang-card" key={name}><div className="lang-name">{name}</div><div className="lang-level">{level}</div></div>)}
      </div>
    </>
  );
}

function App() {
  const [activePanel, setActivePanel] = useState('home');
  const panels = { home: Home, career: Career, experience: Experience, skills: Skills, education: Education, languages: Languages };
  const ActivePanel = panels[activePanel];

  function navigate(panel) {
    setActivePanel(panel);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <Header activePanel={activePanel} onNavigate={navigate} />
      <main className="wrap"><section className="panel active" key={activePanel}><ActivePanel /></section>
        <div className="contact-strip">
          <p>Based in Parlakhemundi, Odisha - open to relocating or remote roles.</p>
          <div className="link-row"><a className="btn btn-ghost" href="mailto:bharideysarayu1208@gmail.com">bharideysarayu1208@gmail.com</a></div>
        </div>
      </main>
      <footer>Bharidey Sarayu - Front-End Developer</footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
