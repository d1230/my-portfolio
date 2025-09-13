import type { Project } from '../types';

// Portfolio Configuration
export const portfolioData = {
  // Header Information
  personal: {
    name: "Kim, Dong Hyeun",
    role: "Senior UI Developer | Solutions Architect", 
    location: "Newport Beach, CA (PST)",
    valueStatement: "Accomplished UI Developer with over 12 years of professional experience specializing in frontend development using Angular and React.js, combined with strong backend development skills in Python and Node.js. Certified AWS Solutions Architect.",
    email: "kdong1851@gmail.com",
    resumeUrl: "/resume.pdf"
  },

  // Featured Projects (Top 3-5) - Based on your experience
  projects: [
    {
      id: "PIMCO AI-Financial Platform",
      title: "PIMCO Investment Management Platform",
      description: "Scalable, fault-tolerant front-end applications for a globally recognized investment management company, supporting concurrent workloads and exceptional user experiences.",
      role: "Senior Frontend Developer",
      stack: ["React", "TypeScript", "JavaScript", "Fluent UI", "CSS3", "RESTful APIs", "Microsoft Azure", "GitLab"],
      outcomes: [
        "Architected real-time dashboard handling millions of market data points with WebSocket connections",

        "Integrated LLM models for customized response",
  
        "Built interactive charting system for technical analysis with custom indicators and overlays",
  
        "Implemented automated portfolio rebalancing algorithms with risk management controls",
        "Enhanced user engagement through data-informed UI/UX improvements using Power BI analytics"
      ],
      companyUrl: "https://www.pimco.com", // Company website
      sourceUrl: "https://github.com/d1230", // Your GitHub
      image: "/images/pimco-preview.svg"
    },
    {
      id: "cinch-ecommerce",
      title: "Cinch Home Services Platform",
      description: "E-commerce platform for home warranty services with three tiers of plans, on-demand repair services, and comprehensive plan pricing system.",
      role: "Senior Lead Frontend Developer",
      stack: ["Angular", "React", "TypeScript", "Redux", "Material UI", "GraphQL", "Jenkins", "Docker"],
      outcomes: [
        "Increased transaction completion rates by 20% with optimized e-commerce features",
        "Improved page load times by 50% using code splitting and React Profiler",
        "Enhanced user retention by 25% through A/B testing and analytics-driven UX improvements"
      ],
      companyUrl: "https://www.cinchhomeservices.com",
      sourceUrl: "https://github.com/d1230",
      image: "/images/cinch-preview.svg"
    },
    {
      id: "njeit-application",
      title: "New Jersey Environmental Trust Application System",
      description: "Web applications for environmental infrastructure services using semantic HTML5 and modern frontend frameworks for enhanced accessibility and SEO.",
      role: "Senior Frontend Developer",
      stack: ["Angular 15/16", "React", "NgRx Redux", "React-Bootstrap", "Node.js", "Express.js", "Docker", "Kubernetes"],
      outcomes: [
        "Enhanced accessibility and SEO with semantic HTML5 structure",
        "Implemented secure JWT-based authentication protecting against XSS and CSRF attacks",
        "Deployed scalable containerized applications on Kubernetes infrastructure"
      ],
      companyUrl: "https://www.njeit.org",
      sourceUrl: "https://github.com/d1230",
      image: "/images/njeit-preview.svg"
    },
    {
      id: "nyc-hra-migration",
      title: "NYC HRA System Modernization",
      description: "Migrated legacy VB.NET UI to modern Angular 5 framework for the nation's largest social services agency, serving over 3 million New Yorkers annually.",
      role: "Senior Frontend Developer",
      stack: ["Angular 5", "TypeScript", "RxJS", "RESTful APIs", "Java Spring Boot"],
      outcomes: [
        "Successfully migrated legacy VB.NET UI to Angular 5, enhancing performance and maintainability",
        "Developed reusable Angular components improving development efficiency",
        "Implemented reactive forms and error handling improving user experience for 3M+ users"
      ],
      companyUrl: "https://www1.nyc.gov/site/hra/index.page",
      sourceUrl: "https://github.com/d1230",
      image: "/images/hra-preview.svg"
    }
  ] as Project[],

  // Skills organized by category - Based on your resume
  skills: [
    {
      category: "Frontend Development",
      items: ["Angular (2-16)", "React (Hooks, JSX, Redux)", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Sass/LESS", "Fluent UI", "Bootstrap", "Material UI", "Next.js"]
    },
    {
      category: "Backend & Database",
      items: ["Python (Flask)", "Node.js", "Express.js", "MongoDB","CosmosDB", "PostgreSQL", "MySQL", "RESTful APIs", "GraphQL", "JWT", "OAuth"]
    },
    {
      category: "DevOps & Cloud",
      items: ["AWS (EC2, Lambda, EKS, S3, IAM)", "Microsoft Azure", "Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "NPM", "Yarn"]
    },
    {
      category: "Tools & Design",
      items: ["Git", "GitHub", "GitLab", "Webpack", "Babel", "Jest", "Figma", "JIRA", "Postman", "Bruno"]
    }
  ],

  // Certifications
  certifications: [
    "AWS Certified Solutions Architect",
    "Bachelor's in Finance/Economics - Columbia University (2011)",
    "Master's in Statistics/Data Science - Columbia University (2018)"
  ],

  // Awards (you can add any specific achievements)
  awards: [
    "Led team of 5 developers in Angular modernization at Cinch Home Services",
    "Successfully migrated legacy VB.NET to Angular 5 at NYC HRA",
    "12+ years of professional frontend development experience"
  ],

  // Social Media and Contact
  social: {
    github: "https://github.com/d1230",
    linkedin: "https://linkedin.com/in/kdong1851", 
    email: "kdong1851@gmail.com"
  },

  // Open Source Contributions (you can update these with actual projects)
  openSource: [
    {
      title: "Google Auto-Complete Library",
      description: "High-performance JavaScript library implementing Google-style autocomplete functionality with fuzzy search, debouncing, and customizable UI components. Supports both local and remote data sources.",
      url: "https://github.com/d1230"
    },
    {
      title: "Google Auto-Complete Library",
      description: "High-performance JavaScript library implementing Google-style autocomplete functionality with fuzzy search, debouncing, and customizable UI components. Supports both local and remote data sources.",
      url: "https://github.com/d1230"
    },
    {
      title: "Enterprise Management Platform",
      description: "Full-stack enterprise application built for a private company, featuring user management, analytics dashboard, real-time notifications, and comprehensive reporting system.",
      url: "https://github.com/d1230"
    }
  ]
};

// You can also export individual sections for easier imports
export const { personal, projects, skills, certifications, awards, social, openSource } = portfolioData;

