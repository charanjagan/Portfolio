export type IconKey = "mail" | "phone" | "linkedin" | "github";

export type Link = {
  label: string;
  href: string;
  icon?: IconKey;
};

export type Profile = {
  name: string;
  tagline: string;
  role: string;
  about: string[];
  bio: string[];
  email: string;
  links: Link[];
  resumeHref: string;
  bannerSrc: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Project = {
  title: string;
  blurb: string;
  /** Casual one-liner shown above the description. */
  quip: string;
  /** Plain one-line description shown under the quip. */
  summary: string;
  /** Headline numbers, rendered as a single line. */
  impact?: string;
  description: string;
  tech: string[];
  status?: string;
  /** Live site. */
  href?: string;
  hrefLabel?: string;
  repo?: string;
  /** Shows "Private repo — demo on request" instead of a GitHub link. */
  privateRepo?: boolean;
  /** Screenshot under /public/projects/. Placeholders are .svg until replaced. */
  image: { src: string; alt: string };
  period?: string;
  featured?: boolean;
};

export type Role = {
  title: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
  tech?: string[];
};

export type Responsibility = {
  org: string;
  role: string;
  period?: string;
  summary: string;
};

export type Study = {
  degree: string;
  school: string;
  period: string;
  location: string;
};

export const profile: Profile = {
  name: "Charan Jagan",
  tagline:
    "MS ECE @ Purdue University. Building AI-powered data, automation and full-stack products",
  role: "Building AI-powered data & automation products.",
  about: [
    "I'm an Electrical and Computer Engineering grad student at Purdue, working where AI, data, and software meet.",
    "I've built Power BI and Microsoft Fabric pipelines, shipped automation tools used by real teams, and helped build PickMySeat, an AI seat predictor used by TNEA aspirants.",
    "I like taking messy, real-world problems and turning them into products people actually use.",
  ],
  bio: [
    "U.S. Citizen",
    "MS in Electrical and Computer Engineering @ Purdue University",
    "B.E. Electronics & Communication Engineering @ CEG, Anna University",
    "Loves taking messy, real-world issues—from traffic to indoor navigation—and turning them into software people can actually use.",
  ],
  email: "charanjagan2004@gmail.com",
  resumeHref: "/Charan_Jagan_Resume.pdf",
  bannerSrc: "/banner.png",
  links: [
    {
      label: "charanjagan2004@gmail.com",
      href: "mailto:charanjagan2004@gmail.com",
      icon: "mail",
    },
    {
      label: "+1 (219) 408-3214",
      href: "tel:+12194083214",
      icon: "phone",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/charanjagan",
      icon: "linkedin",
    },
    { label: "GitHub", href: "https://github.com/charanjagan", icon: "github" },
  ],
};

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Python", "SQL", "TypeScript", "MATLAB"] },
  {
    label: "Data & BI",
    items: [
      "Power BI",
      "DAX",
      "Microsoft Fabric",
      "SQL Server",
      "Microsoft Office Suite",
    ],
  },
  {
    label: "AI",
    items: [
      "Machine Learning",
      "Deep Learning",
      "AI Integrations",
      "Claude",
      "Vibe Coding",
    ],
  },
  { label: "Embedded/ECE", items: ["Xilinx Vivado", "ROS", "Raspberry Pi"] },
  { label: "Web", items: ["Next.js", "FastAPI"] },
];

export const projects: Project[] = [
  {
    title: "DB.Whisperer",
    blurb: "Currently building",
    quip: "yelling at your database in plain English",
    summary: "Ask a database questions in plain English and get visual reports back.",
    impact: "Local-first · Python + Ollama · NL → SQL → visual reports",
    description:
      "A local-first app (Python + Ollama) that converts natural language questions into SQL queries and returns the results as clean, Power BI-esque visual reports instead of raw tables. Actively in development, with more features planned in the pipeline.",
    tech: ["Python", "Ollama", "SQL"],
    status: "In Progress",
    repo: "https://github.com/charanjagan/DB.Whisperer",
    image: {
      src: "/projects/db-whisperer.svg",
      alt: "DB.Whisperer turning a plain-English question into a SQL query and a chart report",
    },
    featured: true,
  },
  {
    title: "PickMySeat",
    blurb: "Live product — pickmyseat.in",
    quip: "helping stressed 12th graders sleep at night",
    summary: "AI college seat predictor for Tamil Nadu engineering admissions.",
    impact: "550+ colleges · 2021–2025 admissions data · live at pickmyseat.in",
    description:
      "AI-powered TNEA (Tamil Nadu Engineering Admissions) college seat predictor trained on 2021–2025 admissions data, covering 550+ colleges. Users enter their marks and get rank-band predictions with college/course admission probabilities. Built full auth + freemium tiers (free/registered/premium), Razorpay payments, and a counselling simulation feature. Team-built and shipped end to end.",
    tech: ["Next.js", "Vercel", "Razorpay"],
    status: "Live",
    href: "https://pickmyseat.in",
    hrefLabel: "pickmyseat.in",
    privateRepo: true,
    image: {
      src: "/projects/pickmyseat.svg",
      alt: "PickMySeat results page showing predicted rank band and college admission probabilities",
    },
    featured: true,
  },
  {
    title: "CabRouting",
    blurb: "Automated weekly cab routing for ~247 employees",
    quip: "247 employees, 0 cab-related meltdowns",
    summary: "Automated weekly cab routing for a Chennai MNC.",
    impact: "~247 employees routed weekly · 0 critical/high security findings",
    description:
      "Automated weekly cab routing system for ~247 employees across a Chennai MNC. Handles gender- and seat-constrained allocation across 4-seater and flexible 6-seater vehicles. Production-ready as of July 2026 with 0 critical/high security findings. Roster-upload UI and drag-and-drop reassignment in progress.",
    tech: ["FastAPI", "SQL Server", "OSRM"],
    status: "Production",
    privateRepo: true,
    image: {
      src: "/projects/cabrouting.svg",
      alt: "CabRouting dashboard with weekly cab assignments plotted on a map",
    },
    featured: true,
  },
  {
    title: "Smart Vision for Visually Impaired People",
    blurb: "Undergraduate project",
    quip: "computer vision doing something that actually matters",
    summary: "Assistive vision system that reads the surroundings aloud.",
    impact: "YOLO + OCR · real-time audio feedback",
    description:
      "Assistive vision system combining YOLO-based real-time object detection with OCR to read street signs and surroundings, converting detections to audio feedback for safer navigation. Frame-by-frame analysis for timely obstacle alerts. Focus: accessibility and real-world usability.",
    tech: ["YOLO", "OCR", "Computer Vision", "Python"],
    status: "Completed",
    image: {
      src: "/projects/smart-vision.svg",
      alt: "Smart Vision detecting objects and reading a street sign with bounding boxes",
    },
  },
  {
    title: "Wayfinder",
    blurb: "Indoor turn-by-turn navigation, no GPS",
    quip: "because getting lost in a mall isn't a personality trait",
    summary: "Indoor turn-by-turn navigation without GPS.",
    description:
      "Internal wayfinding app for indoor navigation — designed for spaces like offices, malls, or campuses where users need turn-by-turn guidance without GPS.",
    tech: ["TypeScript"],
    privateRepo: true,
    image: {
      src: "/projects/wayfinder.svg",
      alt: "Wayfinder showing a turn-by-turn route across an indoor floor plan",
    },
  },
  {
    title: "Security System using Raspberry Pi",
    blurb: "Undergraduate project",
    quip: "a $35 board guarding the fort",
    summary: "RFID and face-detection access control on a Raspberry Pi.",
    description:
      "Biometric security system on Raspberry Pi combining RFID tag identification with face detection for access control.",
    tech: ["Raspberry Pi", "RFID", "Face Detection"],
    image: {
      src: "/projects/security-system.svg",
      alt: "Raspberry Pi security prototype with an RFID reader and camera module",
    },
  },
  {
    title: "WeatherWeb",
    blurb: "Weather web app",
    quip: "checking if it'll rain, but make it TypeScript",
    summary: "Current conditions and forecasts in a clean web UI.",
    description:
      "A weather web app — clean UI for checking current conditions and forecasts.",
    tech: ["TypeScript"],
    repo: "https://github.com/charanjagan/weatherrweb",
    image: {
      src: "/projects/weatherweb.svg",
      alt: "WeatherWeb showing current conditions and a multi-day forecast",
    },
  },
];

export const experience: Role[] = [
  {
    title: "Business Systems Automations — Intern",
    org: "NAF India",
    location: "Chennai, Tamil Nadu",
    period: "06/2026 – 07/2026",
    bullets: [
      "Designed and developed an automated multi-constraint employee routing and logistics application to optimize shift scheduling.",
      "Built AI-driven internal tools and digital assets, including an office wayfinder and informative media, to streamline team workflows.",
      "Delivered technical business operations solutions leveraging AI to automate manual processes and improve overall efficiency.",
    ],
    tech: [
      "Route Optimization",
      "Shift Scheduling",
      "AI Automation",
      "Internal Tooling",
      "Business Operations",
    ],
  },
  {
    title: "Data Analytics and AI Integration — Intern",
    org: "WhiteBlue Cloud Services",
    location: "Chennai, Tamil Nadu",
    period: "01/2026 – 06/2026",
    bullets: [
      "Built interactive Power BI dashboards using advanced DAX, data modeling, and visualization for business reporting.",
      "Designed and managed Microsoft Fabric workflows (Dataflows, Pipelines, Lakehouse) for data integration.",
      "Used SQL Server / SSMS for complex querying and reporting support.",
      "Integrated Claude AI into Power BI and SSMS workflows to automate insight generation.",
      "Supported Talent Acquisition with AI-assisted recruitment workflows and ATS evaluation.",
    ],
    tech: [
      "Power BI",
      "DAX",
      "Microsoft Fabric",
      "SQL Server",
      "SSMS",
      "Claude AI",
      "Data Analytics",
    ],
  },
  {
    title: "Advanced Vehicle Architecture — Intern",
    org: "Mahindra Research Valley",
    location: "Chennai, Tamil Nadu",
    period: "06/2025 – 07/2025",
    bullets: [
      "Built an IoT-driven autonomous vehicle prototype with LiDAR-based perception, ADAS features, and ROS-powered SLAM for intelligent navigation and obstacle avoidance — e.g. an automated parking system that detects, navigates to, and parks in available spots without driver input.",
      "Designed a dynamic decision-making system that adapts routing based on real-time floor-level slot availability in multi-level structures.",
      "Explored extending the same LiDAR/SLAM navigation stack beyond parking — assisting users in wayfinding through complex urban structures like multi-level parking garages, malls, and campuses, where GPS is unreliable.",
      "Integrated IoT communication and modular hardware design for scalability across different vehicle platforms and structure types.",
    ],
    tech: ["ROS", "SLAM", "LiDAR", "ADAS", "IoT"],
  },
];

export const responsibilities: Responsibility[] = [
  {
    org: "The Guindy Times",
    role: "Vice President",
    period: "06/2025 – 04/2026",
    summary:
      "Leads editorial direction and team coordination for the college's student publication, overseeing content planning and contributor management.",
  },
  {
    org: "CEG Cricket Team",
    role: "Vice Captain / Wicket-Keeper",
    period: "01/2023 – 12/2024",
    summary:
      "Co-led team strategy and on-field decisions as wicket-keeper, balancing competitive cricket with academics over two seasons.",
  },
  {
    org: "Electronics and Communication Engineers Association",
    role: "Joint Secretary",
    period: "07/2023 – 04/2024",
    summary:
      "Helped organize department-level technical events and coordinated communication between students and faculty for the ECE association.",
  },
  {
    org: "The Thulasidass Foundation",
    role: "Volunteer",
    summary:
      "Contributed to community outreach initiatives run by the foundation.",
  },
];

export const education: Study[] = [
  {
    degree: "Master of Science, Electrical and Computer Engineering",
    school: "Purdue University",
    period: "08/2026 – Present",
    location: "Indiana, USA",
  },
  {
    degree: "Bachelor of Engineering, Electronics and Communication Engineering",
    school: "College of Engineering, Guindy, Anna University",
    period: "10/2022 – 04/2026",
    location: "Chennai, Tamil Nadu",
  },
];

export const navItems: Link[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Roles", href: "#roles" },
  { label: "Education", href: "#education" },
];
