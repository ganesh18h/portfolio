// this file has all my resume info in one place
// if I need to update anything on the site (my bio, projects, skills etc) I just edit here
// and it updates everywhere automatically, dont need to touch any component files

// basic info about me + the summary shown in the hero section
export const profile = {
  name: 'Ganesh Dussa',
  role: 'Software Developer',
  focus: 'LLM Agents & Mainframe Modernization (learning)',
  location: 'Hyderabad, India',
  phone: '+91 8179504819',
  email: 'ganeshdussa20@gmail.com',
  linkedin: 'https://linkedin.com/in/ganeshdussa', // update with your real handle
  github: 'https://github.com/ganeshdussa', // update with your real handle
  blog: 'https://medium.com/@ganeshdussa20',
  // shown in the hero section up top - the original long-form intro
  shortSummary:
    "Comfortable jumping between eras of computing in the same week — writing JCL to push batch jobs through IBM z/OS one day, then wiring up an LLM in Python to rewrite resumes the next. Java shows up everywhere in between: a JavaFX payroll calculator, a cosine-similarity plagiarism checker, and the backend logic tying it all together. Also shipped real front-end features on a live production site. Right now pulled in two directions that turn out to be more connected than they look — going deeper on mainframe internals (JCL, DB2, poking around Zowe) while figuring out how LLM agents actually work under the hood.",
  // shown further down in the about section - different wording so it's not
  // just the same paragraph repeated twice on the page
  summary:
    "Software developer with hands-on experience across Python, Java, and mainframe systems. On IBM z/OS, that means COBOL, JCL, and DB2 — running batch pipelines end to end. On the Java side, a JavaFX payroll calculator and a cosine-similarity plagiarism checker. In Python, an LLM-powered tool that rewrites resumes to match a job description. Also contributed front-end features to a live production website. Currently learning how LLM agents work under the hood, alongside going deeper into mainframe modernization tools like Zowe.",
  // these show up as the little stat boxes in the about section
  stats: [
    { label: 'IBM Z ADVOCACY RANK', value: '#31 GLOBAL' },
    { label: 'ADVOCACY POINTS', value: '225' },
    { label: 'GRADUATED', value: '2025' },
    { label: 'CGPA', value: '7.02' },
  ],
}

// two resumes now - shown as a fake "ls" directory listing in ResumeSection.jsx
// instead of a plain download button (dev-humor thing). filenames need to match
// actual PDFs placed in the public/ folder
export const resumeBuilds = [
  {
    id: 'general',
    filename: 'Ganesh_Dussa_Resume.pdf',
    // tag: 'general · all-round',
    stack: 'Java · Python · SQL · Generative AI ',
  },
  {
    id: 'mainframe',
    filename: 'Ganesh_Dussa_Mainframe_Resume.pdf',
    tag: 'stable · production-grade',
    stack: 'COBOL · JCL · DB2 · VSAM',
  },
]

// work experience - just one job right now, but its an array so I can add more later
export const experience = [
  {
    company: 'Mad Sensei Studios',
    role: 'Software Developer Intern',
    location: 'Remote',
    period: 'Jun 2026 — Present',
    bullets: [
      'Shipped 5+ front-end features across the company website using JavaScript, HTML and CSS as part of a cross-functional development team.',
      'Integrated a payment gateway module into the website, enabling secure online transactions and streamlining the checkout flow for end users.',
      'Collaborated with a 4-person team to build responsive UI components, improving site functionality and user experience across devices.',
      'Followed Agile practices, Git-based version control and code review workflows within 2-week sprint cycles to deliver iterative updates.',
    ],
  },
]

// all my projects - the "url" field is optional, only add it if the project has a live demo
// (Projects.jsx checks "if p.url" and only shows the button when its there)
export const projects = [
  {
    name: 'Mainframe Batch Processing & DB2 Operations',
    tagline: 'End-to-end COBOL/JCL batch pipeline on IBM z/OS',
    stack: ['COBOL', 'JCL', 'DB2', 'VSAM'],
    bullets: [
      'Developed COBOL programs on IBM z/OS including PERFORM loops, COMP variables, 88-level condition names, and structured file I/O across VSAM (KSDS/ESDS) and non-VSAM (PS) datasets.',
      'Designed and executed multi-step JCL jobs for dataset allocation, sorting, merging, and file processing using IEBGENER, SORT, and IDCAMS to build fully functional batch pipelines.',
      'Managed DB2 tables with 50+ test records, performing Load/Unload operations and writing embedded SQL queries via SPUFI — achieving 100% verified data integrity across all output files.',
      'Bridged legacy COBOL business logic with Java-based application layers, and documented the full development journey in a widely read Medium technical article.',
    ],
  },
  {
    name: 'Resume Tailor',
    tagline: 'JD-aware resume automation, powered by an LLM',
    stack: ['Python', 'NLP', 'Gemini API', 'PDF / DOCX Parsing', 'Git'],
    url: 'https://ai-resume-optimizer-eight.vercel.app/', // this one has a live deployed version
    bullets: [
      'Built an end-to-end automation tool that removes manual resume editing — users upload a job description and existing resume, and the system instantly identifies matched and missing keywords.',
      'Implemented keyword extraction and comparison logic using NLP techniques, surfacing matched (green) and missing (red) keywords side-by-side.',
      'Designed an interactive selection step where chosen missing keywords are sent to an LLM API, which regenerates the resume with the keywords woven in naturally — preserving structure and formatting in under 5 seconds.',
    ],
  },
  {
    name: 'Plagiarism Checker Tool',
    tagline: 'Similarity scoring engine for text documents',
    stack: ['Java', 'Cosine Similarity', 'Text Processing', 'OOPs'],
    bullets: [
      'Built a Java tool that compares two text documents and returns a similarity percentage, helping surface copied content quickly.',
      'Pre-processed input by stripping punctuation, lowercasing and tokenizing text to keep similarity results accurate and consistent.',
      'Applied the Cosine Similarity algorithm to measure document closeness and validated results against manually calculated expected values.',
    ],
  },
  {
    name: 'Employee Payroll Management System',
    tagline: 'Desktop payroll app with a JavaFX GUI',
    stack: ['Java', 'JavaFX'],
    bullets: [
      'Built a desktop payroll application using Java with a JavaFX-based GUI for employee salary data input and display.',
      'Automated salary calculation logic for gross pay, net pay, overtime, and deductions using arithmetic and conditional logic.',
      'Implemented input validation to reduce incorrect data entries before salary processing.',
    ],
  },
]

// skills grouped into categories - the "group" key (like core_development) is just an id,
// Skills.jsx has a GROUP_TITLES object that turns it into the nice readable heading
export const skills = [
  {
    group: 'core_development',
    items: ['Java (OOPs, Collections, Multithreading)', 'Python', 'COBOL', 'JavaScript (ES6+, DOM)', 'SQL', 'HTML', 'CSS'],
  },
  {
    group: 'mainframe',
    items: ['IBM z/OS', 'JCL', 'DB2 for z/OS', 'VSAM (KSDS, ESDS, RRDS)', 'ISPF', 'SPUFI', 'IEBGENER', 'SORT', 'IDCAMS'],
  },
  {
    group: 'databases',
    items: ['MySQL', 'JDBC', 'Query Optimization', 'Joins', 'Stored Procedures', 'DBMS Design & Normalization'],
  },
  {
    group: 'ai_engineering',
    items: [
      'LLM API Integration (Claude, Gemini, OpenAI)',
      'Prompt Engineering',
      'LLM Agents (learning)',
      'Mainframe Modernization',
      'Zowe (learning)',
      'Cloud Platforms (learning)',
      'Retrieval-Augmented Generation (RAG)',
      'LangChain',
    ],
  },
  {
    group: 'engineering_practices',
    items: ['SDLC', 'Agile / Scrum', 'REST API Development', 'Unit Testing', 'Debugging', 'Code Review', 'Git / GitHub'],
  },
  {
    group: 'tools',
    items: ['Eclipse', 'VS Code', 'MySQL Workbench', 'Postman', 'JavaFX'],
  },
]

// education history, most recent... well actually oldest to newest here since thats how I listed it
export const education = [
  {
    school: 'Narsimha Reddy Engineering College',
    location: 'Hyderabad, India',
    degree: 'B.Tech — Computer Science & Engineering',
    detail: 'CGPA: 7.02 (JNTUH)',
    period: '2022 — 2025',
  },
  {
    school: 'Arjun College of Technology & Sciences',
    location: 'Hyderabad, India',
    degree: 'Diploma — Electrical & Electronics Engineering',
    detail: 'CGPA: 6.67 (SBTET)',
    period: '2019 — 2022',
  },
  {
    school: "S.T. Anne's High School",
    location: 'Nakrekal, India',
    degree: 'Secondary School Certificate (SSC)',
    detail: 'GPA: 9.2',
    period: '2018 — 2019',
  },
]

// all the certificates ive done
export const certifications = [
  {
    name: 'Goldman Sachs Engineering Virtual Experience',
    issuer: 'Forage, 2025',
    detail: 'Applied Agile methodology, Git-based version control, and SDLC phases in a real-world engineering simulation.',
  },
  {
    name: 'SQL Certification',
    issuer: 'Great Learning',
    detail: 'Queries, joins, subqueries, stored procedures, and DBMS normalization concepts.',
  },
  {
    name: 'Core Java Programming Certification',
    issuer: 'Self-directed',
    detail: 'Java SE, OOPs (all 4 pillars), Collections Framework, Exception Handling, and Multithreading.',
  },
  {
    name: 'Generative AI Fundamentals',
    issuer: 'Coursera, 2025',
    detail: 'Introduction to large language models, prompt engineering techniques, and AI application development using LLM APIs.',
  },
  {
    name: 'IBM Mainframe Fundamentals',
    issuer: 'Self-directed',
    detail: 'JCL syntax and execution, COBOL program structure, and DB2 relational database management concepts.',
  },
]

// awards / recognition - "url" is optional here too, only the medium one has a link right now
export const recognition = [
  {
    title: 'IBM Z Advocacy Hub — Global Rank #31',
    detail: 'Q1 2026 · Earned 225 Advocacy Points through active contribution to the IBM Z & LinuxONE community.',
  },
  {
    title: 'IBM Digital Badge — Community Contributor (Level 2)',
    detail: 'Awarded by IBM, 2026, for the IBM Z and LinuxONE Community Contributor program. Verified via Credly.',
  },
  {
    title: 'Technical Writer, Medium',
    detail: 'Writing about mainframe development — enterprise batch processing on IBM z/OS, and my own journey into mainframe engineering and why I chose this path.',
    url: 'https://medium.com/@ganeshdussa20', // my medium profile
  },
]