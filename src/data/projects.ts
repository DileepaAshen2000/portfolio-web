import type { StaticImageData } from "next/image";
import lankaEvLogo from "@/logos/LankaEvPluslogo.png";
import mensaLogo from "@/logos/mensa_logo.svg";
import solarLogo from "@/logos/glsl-logo.png";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  impact: string;
  technologies: string[];
  github?: string;
  live?: string;
  playStore?: string;
  icon: string;
  period: string;
  image?: StaticImageData;
}

export const projects: Project[] = [
  {
    slug: "lanka-ev-plus",
    title: "Lanka EV Plus",
    subtitle: "EV Charging & Mobility Platform",
    challenge: "Sri Lanka lacked a unified EV charging infrastructure with real-time availability and seamless payment integration.",
    solution: "Built a full-stack EV charging ecosystem with mobile app, admin panel, and web platform integrating 60kW chargers, OCPP, real-time availability, payments, and an API backend.",
    impact: "Pioneered digital EV infrastructure management for Sri Lanka's emerging electric vehicle market.",
    technologies: ["React", "Node.js", "Firebase", "Flutter", "OCPP", "REST API", "PayHere", "MySQL"],
    github: "https://github.com/DileepaAshen2000",
    live: "https://www.lankaevplus.com/",
    playStore: "https://play.google.com/store/apps/details?id=com.lankaevplus.app",
    icon: "fa-solid fa-charging-station",
    period: "Oct 2025 – Apr 2026",
    image: lankaEvLogo,
  },
  {
    slug: "mensa-web-application",
    title: "Mensa Web Application",
    subtitle: "Official Platform & Admin Panel",
    challenge: "A comprehensive platform was needed for content management, user administration, and secure authentication.",
    solution: "Contributed to the official website and admin panel with content management, user administration, authentication, and performance optimization.",
    impact: "Enhanced the organization's digital presence and streamlined content and user management.",
    technologies: ["Next.js", "Node.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/A-Peak-strategy/mensa-web",
    live: "https://mensa.lk/",
    icon: "fa-solid fa-globe",
    period: "Team Project – 2025",
    image: mensaLogo,
  },
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    subtitle: "Level 2 Project — Rootcode Collaboration",
    challenge: "Manual inventory processes led to inaccuracies, security vulnerabilities, and poor operational visibility.",
    solution: "Developed stock-in/out, adjustments, dashboard analytics, password recovery, and efficient data-handling workflows.",
    impact: "Streamlined inventory operations with real-time tracking, secure access, and actionable analytics.",
    technologies: ["React", "Spring Boot", "MySQL", "Material UI", "JWT", "Tailwind CSS"],
    github: "https://github.com/DileepaAshen2000/centralSyncFrontend",
    icon: "fa-solid fa-boxes-stacked",
    period: "Level 2 – Rootcode 2024",
  },
  {
    slug: "green-light-solar-lanka",
    title: "Green-Light Solar Lanka",
    subtitle: "Solar Product Management Platform",
    challenge: "Solar product businesses needed a platform for managing listings, payments, and administrative operations.",
    solution: "Built a web application for product listings, payment processing, and administration with a user-friendly interface.",
    impact: "Improved product visibility, transaction handling, and business efficiency for solar energy providers.",
    technologies: ["React", "Node.js", "Firebase", "MySQL", "Tailwind CSS", "PayHere", "REST API"],
    github: "https://github.com/A-Peak-strategy/green-light-solar-web",
    live: "https://www.greenlightsolarlanka.lk/",
    icon: "fa-solid fa-solar-panel",
    period: "Team Project (Ongoing)",
    image: solarLogo,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
