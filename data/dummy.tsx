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
    img: "/Building-Survey-&-Inspection.jpg",
    title: "Building Surveys & Inspections",
    subtitle: "Surveys",
    icon: FaClipboardCheck,
    path: "/building-services-&-inspection",
    text: "Making property decisions without the right knowledge can be costly — not just financially, but also in terms of time, stress, and long-term liability."
  },
  {
    img: "/Defect.jpg",
    title: "Defects Analysis & Maintenance",
    subtitle: "Maintenance",
    icon: FaTools,
    path: "/defect-analysis-&-maintenance",
    text: "Building defects, if left unchecked, can quickly escalate into costly problems."
  },
  {
    img: "/Project-Management.jpg",
    title: "Design & Project Management",
    subtitle: "Management",
    icon: FaProjectDiagram,
    path: "/design-&-project-management",
    text: "Turning ideas into reality requires more than just design flair — it takes careful planning, coordination, and control at every stage of the process."
  },
  {
    img: "/Dilapidation.jpg",
    title: "Dilapidations & Lease Advice",
    subtitle: "Dilapidations",
    icon: FaFileContract,
    path: "/dilapidations-&-lease-advice",
    text: "Lease agreements often bring complex responsibilities, particularly around repair and reinstatement at the end of a term."
  },
  {
    img: "/Part-wall.jpg",
    title: "Party Wall & Neighbouring Matters",
    subtitle: "Party Wall",
    icon: FaPeopleArrows,
    path: "/party-walls-&-neighboring-matters",
    text: "Building work that affects shared walls, boundaries, or neighbouring properties can easily create disputes if not handled correctly. "
  },
  {
    img: "/Refurbishment.jpg",
    title: "Refurbishment & Conservation",
    subtitle: "Refurbishment",
    icon: FaPaintRoller,
    path: "/refurbishment-&-conservation",
    text: "Renovation and conservation projects demand a balance between preserving the character of a building and adapting it for modern use."
  },
  {
    img: "/Expert.jpg",
    title: "Expert Witness",
    subtitle: "Witness",
    icon: FaShieldAlt,
    path: "/expert-witness",
    text: "Ensuring buildings are safe, accessible, and fully compliant with regulations is essential for protecting both people and investments."
  },
  {
    img: "/Insurance.jpg",
    title: "Insurance",
    subtitle: "Insurance",
    icon: FaBalanceScale,
    path: "/insurance",
    text: "When disputes, claims, or insurance matters arise, having accurate and authoritative reporting is essential."
  },
];