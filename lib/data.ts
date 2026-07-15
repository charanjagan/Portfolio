export type Link = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  tagline: string;
  bio: string[];
  email: string;
  links: Link[];
  resumeHref: string;
};

export type Project = {
  title: string;
  blurb: string;
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
    "I study Electronics & Communication Engineering at College of Engineering, Guindy.",
    "Hands-on across data analytics and AI integration, autonomous systems, and computer vision.",
    "Shipped PickMySeat — a production consumer web app — solo, end to end.",
  ],
  email: "charanjagan2004@gmail.com",
  resumeHref: "/resume.pdf",
  links: [
    { label: "Email", href: "mailto:charanjagan2004@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/charan-jagan" },
    { label: "GitHub", href: "https://github.com/charanjagan" },
  ],
};

export const skills: string[] = [
  "MATLAB",
  "Xilinx Vivado",
  "Python",
  "Power BI",
  "Microsoft Office Suite",
  "Leadership",
  "Teamwork",
];

export const projects: Project[] = [
  {
    title: "PickMySeat",
    blurb: "Live product — pickmyseat.in",
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
    description:
      "Automated weekly cab routing system for ~247 employees across a Chennai MNC. Handles gender- and seat-constrained allocation across 4-seater and flexible 6-seater vehicles. Production-ready as of July 2026 with 0 critical/high security findings. Roster-upload UI and drag-and-drop reassignment in progress.",
    tech: ["FastAPI", "SQL Server", "OSRM"],
    status: "Production · private repo",
  },
  {
    title: "Smart Vision for Visually Impaired People",
    blurb: "Undergraduate project",
    period: "06/2025 – Present",
    description:
      "Assistive vision system combining YOLO-based real-time object detection with OCR to read street signs and surroundings, converting detections to audio feedback for safer navigation. Frame-by-frame analysis for timely obstacle alerts. Focus: accessibility and real-world usability.",
    tech: ["YOLO", "OCR", "Computer Vision", "Python"],
    status: "In progress",
  },
  {
    title: "Wayfinder",
    blurb: "Indoor turn-by-turn navigation, no GPS",
    description:
      "Internal wayfinding app for indoor navigation — designed for spaces like offices, malls, or campuses where users need turn-by-turn guidance without GPS.",
    tech: ["TypeScript"],
    status: "Private repo",
  },
  {
    title: "Security System using Raspberry Pi",
    blurb: "Undergraduate project",
    period: "08/2024 – 12/2024",
    description:
      "Biometric security system on Raspberry Pi combining RFID tag identification with face detection for access control.",
    tech: ["Raspberry Pi", "RFID", "Face Detection"],
  },
  {
    title: "weatherrweb",
    blurb: "Weather web app",
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
    location: "Chennai",
    period: "06/2025 – 07/2025",
    bullets: [
      "Built an IoT-driven autonomous vehicle prototype with LiDAR-based perception, ADAS features, and ROS-powered SLAM for navigation and obstacle avoidance.",
      "Designed a dynamic decision-making system to adapt routes based on floor-level availability; integrated IoT communication and modular hardware for scalability.",
    ],
  },
];

export const education: Study[] = [
  {
    degree: "Bachelor of Engineering, Electronics and Communication Engineering",
    school: "College of Engineering, Guindy, Anna University",
    period: "10/2022 – Present",
    location: "Chennai",
    result: "CGPA: 7.34/10",
  },
  {
    degree: "Higher Secondary Certificate (HSC), CBSE",
    school: "DAV Higher Secondary School",
    period: "06/2020 – 07/2022",
    location: "Chennai",
    result: "85%",
  },
];

export const navItems: Link[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];
