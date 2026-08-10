export const profile = {
  name: 'Ganesh Dussa',
  role: 'Software Developer',
  focus: 'LLM Agents & Mainframe Modernization (learning)',
  location: 'Hyderabad, India',
  phone: '+91 8179504819',
  email: 'ganeshdussa20@gmail.com',
  linkedin: 'https://linkedin.com/in/ganeshdussa', 
  github: 'https://github.com/ganesh18h',
  blog: 'https://medium.com/@ganeshdussa20',
  
  shortSummary:
    "I work at the intersection of mainframe engineering and modern AI. From COBOL and JCL on z/OS to Java, Python, and LLM-based systems, I focus on solving problems across technology generations. Currently exploring agentic engineering and modern tooling for z/OS bringing automation, intelligence, and developer experience to systems built long before today's AI era.",

  summary:
    "Software developer working across IBM Z, Java, Python, and AI. I build practical projects across mainframe and modern software, with hands-on experience in COBOL, JCL, DB2, VSAM, Java, and Python. My IBM Z work includes end-to-end batch processing on z/OS, while my application projects range from JavaFX applications and similarity-based plagiarism detection to LLM-powered tools. I also contribute to the IBM Z community through technical writing and community activities as an IBM Z Advocacy Program member. Currently, I'm exploring LLM agents and Zowe while learning more about connecting mainframe systems with modern development tools. I like understanding how things work under the hood and turning that knowledge into useful software.",
  
  stats: [
    { label: 'IBM Z ADVOCACY RANK', value: '#9 GLOBAL' },
    { label: 'ADVOCACY POINTS', value: '225' },
    { label: 'GRADUATED', value: '2025' },
    { label: 'CGPA', value: '7.02' },
  ],
}


export const resumeBuilds = [
  {
    id: 'general',
    filename: 'Ganesh_Dussa_Resume.pdf',
    stack: 'Java · Python · SQL · Generative AI ',
  },
  {
    id: 'mainframe',
    filename: 'Ganesh_Dussa_Mainframe_Resume.pdf',
    tag: 'stable · production-grade',
    stack: 'COBOL · JCL · DB2 · VSAM',
  },
]


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
    url: 'https://ai-resume-optimizer-eight.vercel.app/',
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

export const recognition = [
  {
    title: 'IBM Z Advocacy Hub — Global Rank #9',
    detail: 'Q1 2026 · Earned 225 Advocacy Points through active contribution to the IBM Z & LinuxONE community.',
  },
  {
    title: 'IBM Digital Badge — Community Contributor (Level 1)',
    detail: 'Awarded by IBM for the IBM Z and LinuxONE Community Contributor program. Verified via Credly.',
    url: 'https://www.credly.com/badges/7e24b0e3-369f-4eef-b071-ba9105c575de/public_url',
  },
  {
    title: 'IBM Digital Badge — Community Contributor (Level 2)',
    detail: 'Awarded by IBM, 2026, for the IBM Z and LinuxONE Community Contributor program. Verified via Credly.',
    url: 'https://www.credly.com/badges/8736164e-5bde-4e7c-8589-834c3757ddda',
  },
  {
    title: 'Technical Writer, Medium',
    detail: 'Writing about mainframe development — enterprise batch processing on IBM z/OS, and my own journey into mainframe engineering and why I chose this path.',
    url: 'https://medium.com/@ganeshdussa20',
  },
]
