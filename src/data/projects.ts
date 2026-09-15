import type { StaticImageData } from "next/image";
import lankaEvLogo from "@/logos/LankaEVPlus-Project.png";
import mensaLogo from "@/logos/Mensa.png";
import solarLogo from "@/logos/green-light.png";
import ceylonImage from "@/logos/Ceylon.png";

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
  appStore?: string;
  icon: string;
  period: string;
  image?: StaticImageData;
}

export const projects: Project[] = [
  {
    slug: "lanka-ev-plus",
    title: "Lanka EV Plus - EV Charging & Mobility Platform",
    subtitle: "EV Charging & Mobility Platform",
    challenge: "Sri Lanka lacked a unified EV charging infrastructure with real-time availability and seamless payment integration.",
    solution: "Built a full-stack EV charging ecosystem with mobile app, admin panel, and web platform integrating 60kW chargers, OCPP, real-time availability, payments, and an API backend.",
    impact: "Pioneered digital EV infrastructure management for Sri Lanka's emerging electric vehicle market.",
    technologies: ["React", "Node.js", "Firebase", "Flutter", "OCPP", "REST API", "PayHere", "MySQL"],
    github: "https://github.com/DileepaAshen2000",
    live: "https://www.lankaevplus.com/",
    playStore: "https://play.google.com/store/apps/details?id=com.lankaevplus.app",
    appStore: "https://apps.apple.com/lk/app/lanka-ev-plus/id6762481492",
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
    slug: "ceylon-luxury-living",
    title: "Ceylon Luxury Living",
    subtitle: "Luxury Digital Publishing Ecosystem",
    challenge: "A new luxury publication needed a distinctive identity, connected multimedia publishing, independent editorial operations, and a foundation for audience growth.",
    solution: "Built a premium responsive reader experience, secure editorial dashboard, and publishing backend connecting articles, vlogs, collections, magazine editions, subscriptions, and saved content.",
    impact: "Created a unified digital home for premium Sri Lankan lifestyle storytelling with scalable publishing and audience-engagement capabilities.",
    technologies: ["React", "Node.js", "Firebase", "REST API", "Cloud Media", "PDF Flipbook", "SEO"],
    live: "https://ceylonluxuryliving.com/",
    icon: "fa-solid fa-book-open",
    period: "Team Project · Digital Publishing",
    image: ceylonImage,
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
