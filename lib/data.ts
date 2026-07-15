export type IconKey = "mail" | "linkedin" | "github";

export type Link = {
  label: string;
  href: string;
  icon?: IconKey;
};

export type Profile = {
  name: string;
  tagline: string;
  bio: string[];
  email: string;
  links: Link[];
  resumeHref: string;
  bannerSrc: string;
};

export type Project = {
  title: string;
  blurb: string;
  /** Casual one-liner shown above the description. */
  quip: string;
  description: string;
  tech: string[];
  status?: string;
  href?: string;
  hrefLabel?: string;
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
  result: string;
};

export const profile: Profile = {
  name: "Charan Jagan",
  tagline:
    "ECE undergrad @ CEG, Anna University — building at the intersection of AI, data, and full-stack products",
  bio: [
    "Incoming MS in Electronics & Communication Engineering @ Purdue University Northwest",
    "B.E. Electronics & Communication Engineering @ CEG, Anna University",
    "Enjoys turning messy real-world problems — traffic, exam seats, indoor navigation — into shipped software",
  ],
  email: "charanjagan2004@gmail.com",
  resumeHref: "/resume.pdf",
  bannerSrc: "/banner.jpg",
  links: [
    { label: "Email", href: "mailto:charanjagan2004@gmail.com", icon: "mail" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/charan-jagan",
      icon: "linkedin",
    },
    { label: "GitHub", href: "https://github.com/charanjagan", icon: "github" },
  ],
};

export const skills: string[] = [
  "MATLAB",
  "Xilinx Vivado",
  "Python",
  "Power BI",
  "Microsoft Office Suite",
  "Claude",
  "Vibe Coding",
  "AI Integrations",
  "Leadership",
  "Teamwork",
];

export const projects: Project[] = [
  {
    title: "DB.Whisperer",
    blurb: "Currently building",
    quip: "yelling at your database in plain English",
    description:
      "A local-first app (Python + Ollama) that converts natural language questions into SQL queries and returns the results as clean, Power BI-esque visual reports instead of raw tables. Actively in development, with more features planned in the pipeline.",
    tech: ["Python", "Ollama", "SQL"],
    status: "In Progress",
    featured: true,
  },
  {
    title: "PickMySeat",
    blurb: "Live product — pickmyseat.in",
    quip: "helping stressed 12th graders sleep at night",
    description:
      "AI-powered TNEA (Tamil Nadu Engineering Admissions) college seat predictor trained on 2021–2025 admissions data, covering 550+ colleges. Users enter their marks and get rank-band predictions with college/course admission probabilities. Built full auth + freemium tiers (free/registered/premium), Razorpay payments, and a counselling simulation feature. Solo-built and shipped end to end.",
    tech: ["Next.js", "Vercel", "Razorpay"],
    status: "Live",
    href: "https://pickmyseat.in",
    hrefLabel: "pickmyseat.in",
    featured: true,
  },
  {
    title: "CabRouting",
    blurb: "Automated weekly cab routing for ~247 employees",
    quip: "247 employees, 0 cab-related meltdowns",
    description:
      "Automated weekly cab routing system for ~247 employees across a Chennai MNC. Handles gender- and seat-constrained allocation across 4-seater and flexible 6-seater vehicles. Production-ready as of July 2026 with 0 critical/high security findings. Roster-upload UI and drag-and-drop reassignment in progress.",
    tech: ["FastAPI", "SQL Server", "OSRM"],
    status: "Production · private repo",
  },
  {
    title: "Smart Vision for Visually Impaired People",
    blurb: "Undergraduate project",
    quip: "computer vision doing something that actually matters",
    period: "06/2025 – Present",
    description:
      "Assistive vision system combining YOLO-based real-time object detection with OCR to read street signs and surroundings, converting detections to audio feedback for safer navigation. Frame-by-frame analysis for timely obstacle alerts. Focus: accessibility and real-world usability.",
    tech: ["YOLO", "OCR", "Computer Vision", "Python"],
    status: "In Progress",
  },
  {
    title: "Wayfinder",
    blurb: "Indoor turn-by-turn navigation, no GPS",
    quip: "because getting lost in a mall isn't a personality trait",
    description:
      "Internal wayfinding app for indoor navigation — designed for spaces like offices, malls, or campuses where users need turn-by-turn guidance without GPS.",
    tech: ["TypeScript"],
    status: "Private repo",
  },
  {
    title: "Security System using Raspberry Pi",
    blurb: "Undergraduate project",
    quip: "a $35 board guarding the fort",
    period: "08/2024 – 12/2024",
    description:
      "Biometric security system on Raspberry Pi combining RFID tag identification with face detection for access control.",
    tech: ["Raspberry Pi", "RFID", "Face Detection"],
  },
  {
    title: "weatherrweb",
    blurb: "Weather web app",
    quip: "checking if it'll rain, but make it TypeScript",
    description:
      "A weather web app — clean UI for checking current conditions and forecasts.",
    tech: ["TypeScript"],
    status: "Public repo",
  },
];

export const experience: Role[] = [
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
      "Used ROS-powered SLAM with LiDAR-based perception to build an automated parking system prototype for next-gen electric vehicles, enabling the vehicle to autonomously detect, navigate to, and park in available spots without driver input.",
      "Designed a dynamic decision-making system that adapts routing based on real-time floor-level slot availability in multi-level structures.",
      "Explored extending the same LiDAR/SLAM navigation stack beyond parking — assisting users in wayfinding through complex urban structures like multi-level parking garages, malls, and campuses, where GPS is unreliable.",
      "Integrated IoT communication and modular hardware design for scalability across different vehicle platforms and structure types.",
    ],
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
    degree: "Bachelor of Engineering, Electronics and Communication Engineering",
    school: "College of Engineering, Guindy, Anna University",
    period: "10/2022 – 04/2026",
    location: "Chennai, Tamil Nadu",
    result: "CGPA: 7.69/10 · 3.25 / 4 (verified through Scholaro)",
  },
  {
    degree: "Higher Secondary Certificate (HSC), CBSE",
    school: "DAV Higher Secondary School",
    period: "06/2020 – 07/2022",
    location: "Chennai, Tamil Nadu",
    result: "85%",
  },
];

export const navItems: Link[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Roles", href: "#roles" },
  { label: "Education", href: "#education" },
];
