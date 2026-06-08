export const personalInfo = {
  name: "Ahamad Rafi MP",
  title: "MERN Stack Developer",
  location: "Kerala, India",
  email: "ahamadrafi00@gmail.com",
  phone: "+91 9746807689",
  summary:
    "Results-driven MERN Stack Developer with experience in designing and developing scalable web applications using React.js, Next.js, Node.js, Express.js, and TypeScript. Skilled in building microservice-based applications following Clean Architecture principles. Experienced in cloud deployment, containerization, CI/CD implementation, and real-time applications.",
  social: {
    /** Profile URL — leave empty to hide */
    github: "https://github.com/rafirafi03",
    /** Profile URL — leave empty to hide */
    linkedin: "https://www.linkedin.com/in/ahamad-rafi/",
    /** Profile URL — leave empty to hide */
    leetcode: "https://leetcode.com/u/rafi_03/",
    /** WhatsApp number with country code, digits only (91 + number) */
    whatsapp: "919746807689",
  },
  /** Resume PDF in /public — leave file empty to hide download button */
  resume: {
    file: "/Ahamad_Rafi_Resume.pdf",
    downloadName: "Ahamad_Rafi_Resume.pdf",
  },
};

export const skills = {
  languages: ["JavaScript", "TypeScript"],
  frontend: [
    "React.js",
    "Next.js",
    "HTML5",
    "EJS",
    "Redux",
    "RTK Query",
    "Tailwind CSS",
    "Bootstrap",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Sanity CMS",
    "Kafka",
    "RabbitMQ",
    "gRPC",
  ],
  databases: ["MongoDB", "PostgreSQL", "Redis"],
  architecture: [
    "Microservices Architecture",
    "Clean Architecture",
    "MVC Pattern",
  ],
  devops: [
    "Docker",
    "Kubernetes",
    "AWS (EC2, EKS, S3, Route 53)",
    "NGINX",
    "Ingress",
    "CI/CD Pipelines",
    "GitHub Actions",
  ],
  tools: [
    "Git & GitHub",
    "Postman",
    "Stripe",
    "Razorpay",
    "Socket.IO",
    "Vercel",
    "ESLint",
  ],
};

export const expertise = [
  "Data Structures & Algorithms",
  "Shopify Development",
];

export const experience = [
  {
    role: "MERN Stack Developer",
    company: "Saoirse IT Solutions",
    location: "Bangalore, Karnataka",
    period: "Sep 2025 – Present",
    responsibilities: [
      "Led development teams and coordinated project delivery.",
      "Assigned development tasks and maintained code quality standards.",
      "Improved application performance and optimized system architecture.",
      "Mentored junior developers and promoted best coding practices.",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "Axorbit Technologies",
    location: "Ernakulam, Kerala",
    period: "Aug 2025 – Oct 2025",
    responsibilities: [
      "Developed and maintained MERN stack and Next.js applications.",
      "Collaborated closely with UI/UX designers to build responsive interfaces.",
      "Worked with cross-functional teams to ensure timely project delivery.",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Insource Bridge Technologies",
    location: "Dubai, UAE",
    period: "Freelance",
    responsibilities: [
      "Developed a dynamic company website.",
      "Built a custom CMS for content management.",
      "Ensured scalability, maintainability, and performance optimization.",
    ],
  },
  {
    role: "Shopify Freelance Developer",
    company: "RCRX Hobbies",
    location: "Remote",
    period: "Freelance",
    responsibilities: [
      "Worked on Shopify-based solutions and customizations.",
      "Delivered e-commerce functionality improvements and enhancements.",
    ],
  },
];

export type Project = {
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  stack: string[];
  accent: string;
  /** Live demo / deployed site URL — leave empty to hide the button */
  live?: string;
  /** GitHub repository URL — leave empty to hide the button */
  github?: string;
};

export const projects: Project[] = [
  {
    name: "EVENTO",
    subtitle: "Venue Booking Platform",
    description:
      "A full-featured venue booking platform with separate modules for Users, Companies, and Administrators.",
    features: [
      "Venue search with advanced filters",
      "Real-time chat using Socket.IO",
      "Stripe and Wallet payment integration",
      "Analytics dashboard for administrators",
      "Microservices with RabbitMQ and gRPC",
    ],
    stack: [
      "Next.js",
      "Node.js",
      "Microservices",
      "RabbitMQ",
      "gRPC",
      "TypeScript",
      "MongoDB",
      "Kubernetes",
      "Socket.IO",
      "Stripe",
    ],
    accent: "#00d4aa",
    live: "",
    github: "https://github.com/rafirafi03/Evento-venue_booking",
  },
  {
    name: "General Sports Trading",
    subtitle: "Corporate Website · Qatar",
    description:
      "A modern corporate website for Qatar's leading sports, fitness, and wellness equipment provider — presenting product categories, turnkey gym services, brand partnerships, and lead-generation flows for government, corporate, and hospitality clients.",
    features: [
      "Product categories — cardio, functional training, turf & wellness",
      "Services showcase — equipment supply, health club projects & maintenance",
      "Featured brands and partner highlights (e.g. Scotfit)",
      "Why choose us, quality metrics, and client industry sections",
      "Contact details, quote requests, and multi-channel support info",
    ],
    stack: [
      "Next.js",
      "Sanity CMS",
      "TypeScript",
      "Tailwind CSS",
    ],
    accent: "#8a1538",
    live: "https://www.generalsportsft.com/",
    github: "",
  },
  {
    name: "Insource Bridge Technologies",
    subtitle: "Corporate Website · UAE",
    description:
      "A dynamic company website for a UAE-based technology firm — showcasing services, solutions, and company presence with a scalable content management setup for easy updates.",
    features: [
      "Modern corporate landing with services and solutions pages",
      "Custom CMS for streamlined content management",
      "Responsive layout optimized for business audiences",
      "Contact and inquiry flows for client engagement",
      "Performance-focused build for reliability and maintainability",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "AWS",
      "Tailwind CSS",
      "CMS",
    ],
    accent: "#0ea5e9",
    live: "https://www.insourcextech.com/",
    github: "",
  },
  {
    name: "RCRX Hobbies",
    subtitle: "Shopify E-Commerce Store",
    description:
      "A Shopify-powered online store for India's RC car, drone, and hobby enthusiasts — featuring product catalogs, category browsing, promotions, and a full shopping experience.",
    features: [
      "Product catalog with hobby-grade & toy-grade RC categories",
      "Featured products, sales pricing, and cart checkout",
      "Category pages — drift cars, construction equipment & spares",
      "Promotional banners — EMI, in-store payment & service info",
      "Social integration and newsletter subscription",
    ],
    stack: [
      "Shopify",
      "Razorpay",
    ],
    accent: "#dc2626",
    live: "http://rcrxhobbies.com/",
    github: "",
  },
  {
    name: "Molla Furniture",
    subtitle: "E-Commerce Platform",
    description:
      "An online furniture marketplace providing a modern shopping experience with referral systems and admin analytics.",
    features: [
      "Product search and filtering",
      "Referral and coupon system",
      "COD, Wallet, and Razorpay payments",
      "Admin analytics with PDF/Excel exports",
      "Scalable deployment on Render",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "EJS",
      "MongoDB",
      "Razorpay",
      "Puppeteer",
      "Vercel",
    ],
    accent: "#818cf8",
    live: "https://ecommerce-furniture-lf5o.onrender.com/",
    github: "https://github.com/rafirafi03/ecommerce-furniture",
  },
  
];

export const education = [
  {
    program: "Full Stack Development Program",
    institution: "Brototype, Calicut",
    period: "2023 – 2025",
  },
  {
    program: "Higher Secondary Education (Humanities)",
    institution: "MSCHSS Neerchal, Kasaragod",
    period: "2018 – 2020",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
