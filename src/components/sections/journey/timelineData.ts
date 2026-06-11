export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  category: "education" | "competition" | "work" | "startup" | "research";
  status: "Completed" | "Active" | "In Progress";
  color: string;
  icon: string;
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "2026",
    title: "Current Orbit",
    subtitle: "Research & Growth",
    description:
      "Final year research on Sinhala Hate Speech Detection using ML/NLP. Continuing to build Lanka EV Plus, Green-Light Solar Lanka, and expanding ApeakStrategy's client portfolio.",
    category: "research",
    status: "In Progress",
    color: "#6C63FF",
    icon: "fa-solid fa-satellite",
  },
  {
    year: "2025",
    title: "Station Founded",
    subtitle: "Co-Founded ApeakStrategy",
    description:
      "Launched a digital solutions startup. Led solution architecture, DevOps, cloud deployment, and built full-stack platforms across multiple industries including EV charging with OCPP integration.",
    category: "startup",
    status: "Active",
    color: "#00D9FF",
    icon: "fa-solid fa-building",
  },
  {
    year: "2025",
    title: "Deep Space Operations",
    subtitle: "Internship at Hasthiya",
    description:
      "Full-stack engineering with React, Node.js, Express, Firebase, and MySQL. Worked in Agile/SCRUM teams on production projects, API development, and responsive UI/UX.",
    category: "work",
    status: "Completed",
    color: "#3B82F6",
    icon: "fa-solid fa-briefcase",
  },
  {
    year: "2024",
    title: "Systems Online",
    subtitle: "Level 2 Projects & Rootcode",
    description:
      "Built the Inventory Management System with Rootcode collaboration. Developed core features including stock management, dashboard analytics, and secure authentication flows.",
    category: "work",
    status: "Completed",
    color: "#8B5CF6",
    icon: "fa-solid fa-server",
  },
  {
    year: "2023",
    title: "First Contact",
    subtitle: "Competitions & Community",
    description:
      "Participated in CODE RUSH (10th place), MAD HACK, Mora UXplore, and Tech-Triathlon. Joined the Embedded Systems Laboratory and became Department Facilitator at EXMO Exhibition.",
    category: "competition",
    status: "Completed",
    color: "#6C63FF",
    icon: "fa-solid fa-trophy",
  },
  {
    year: "2022",
    title: "Mission Launch",
    subtitle: "University of Moratuwa",
    description:
      "Began B.Sc (Hons) in Information Technology. Immediately immersed in full-stack development, algorithms, and system design fundamentals.",
    category: "education",
    status: "Completed",
    color: "#00D9FF",
    icon: "fa-solid fa-rocket",
  },
];
