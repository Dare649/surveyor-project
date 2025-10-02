import { 
  FaTools, FaClipboardCheck, FaProjectDiagram, FaFileContract, 
  FaPeopleArrows, FaPaintRoller, FaShieldAlt, FaBalanceScale 
} from "react-icons/fa";


export const nav = [
    {
        title: 'services',
        path: '/services',
        gap: true
    },
    {
        title: 'case studies',
        path: '/case-studies'
    },
]


export const subNav = [
    {
        title: 'building services & inspection',
        path: '/building-services-&-inspection'
    },
    {
        title: 'defect analysis & maintenance',
        path: '/defect-analysis-&-maintenance'
    },
    {
        title: 'design & project management',
        path: '/design-&-project-management'
    },
    {
        title: 'dilapidations & lease advice',
        path: '/dilapidations-&-lease-advice'
    },
    {
        title: 'party walls & neighboring matters',
        path: '/party-walls-&-neighboring-matters'
    },
    {
        title: 'refurbishment & conservation',
        path: '/refurbishment-&-conservation'
    },
    {
        title: 'health & safety / compliance',
        path: '/health-&-safety-/-compliance'
    },
    {
        title: 'insurance & expert witness',
        path: '/insurance-&-expert-witness'
    }
]

export const projects = [
    {
        img: "/side-house-img.webp",
        title: "projects of january"
    },
    {
        img: "/house-img.webp",
        title: "deals for december"
    },
    {
        img: "/side-house-img.webp",
        title: "water damage | kensington"
    },
]


export const services = [
  {
    img: "/project-hat.webp",
    title: "Building Surveys & Inspections",
    subtitle: "Surveys",
    icon: FaClipboardCheck,
    path: "/building-services-&-inspection",
  },
  {
    img: "/woman-window.webp",
    title: "Defects Analysis & Maintenance",
    subtitle: "Maintenance",
    icon: FaTools,
    path: "/defect-analysis-&-maintenance",
  },
  {
    img: "/project-hat.webp",
    title: "Design & Project Management",
    subtitle: "Management",
    icon: FaProjectDiagram,
    path: "/design-&-project-management",
  },
  {
    img: "/project-hat.webp",
    title: "Dilapidations & Lease Advice",
    subtitle: "Dilapidations",
    icon: FaFileContract,
    path: "/dilapidations-&-lease-advice",
  },
  {
    img: "/woman-window.webp",
    title: "Party Wall & Neighbouring Matters",
    subtitle: "Party Wall",
    icon: FaPeopleArrows,
    path: "/party-walls-&-neighboring-matters",
  },
  {
    img: "/project-hat.webp",
    title: "Refurbishment & Conservation",
    subtitle: "Refurbishment",
    icon: FaPaintRoller,
    path: "/refurbishment-&-conservation",
  },
  {
    img: "/woman-window.webp",
    title: "Health & Safety / Compliance",
    subtitle: "Compliance",
    icon: FaShieldAlt,
    path: "/health-&-safety-/-compliance",
  },
  {
    img: "/project-hat.webp",
    title: "Insurance & Expert Witness",
    subtitle: "Insurance",
    icon: FaBalanceScale,
    path: "/insurance-&-expert-witness",
  },
];