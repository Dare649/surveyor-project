import { 
  FaTools, FaClipboardCheck, FaProjectDiagram, FaFileContract, 
  FaPeopleArrows, FaPaintRoller, FaShieldAlt, FaBalanceScale 
} from "react-icons/fa";


export const nav = [
    {
      title: 'home',
      path: '/'
    },
    {
      title: 'about us',
      path: '/about-us'
    },
    {
        title: 'services',
        path: '/services',
        gap: true
    },
    {
        title: 'blog',
        path: '/blog'
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
        path: '/health-&-safety-compliance'
    },
    {
        title: 'insurance',
        path: '/insurance'
    }
]

export const blogHighlights = [
  {
    video: "https://www.youtube.com/watch?v=BQR34eknwgk",
    title: "Appealing a party wall award",
    date: "May 2, 2025",
    category: "About us",
    slug: "about-us",
    content: [
      "Appealing a Party Wall Award can feel daunting, but understanding the process helps you navigate it with confidence. In this guide, we explain what a Party Wall Award is, why you might want to appeal it, and how the process typically works.",
      "An appeal is made when one of the parties involved believes that the award issued by the surveyor(s) was unfair, unreasonable, or beyond their legal power. The appeal process must be initiated within 14 days of the award being served.",
      "Before you proceed, it’s important to seek legal advice. The appeal process involves the County Court and can incur significant costs if unsuccessful.",
      "While disputes can be stressful, many issues can be resolved through communication between surveyors before reaching this stage."
    ],
  },
  {
    img: "/Project-Management.jpg",
    title: "Why you shouldn’t sign a party wall letter of appointment too early",
    date: "December 2, 2024",
    category: "Party Wall Advice",
    slug: "why-you-shouldnt-sign-too-early",
    content: [
      "When planning construction works, appointing a Party Wall Surveyor is essential — but timing matters. Signing a letter of appointment too early can limit your options later.",
      "Some property owners sign prematurely without reviewing their surveyor’s terms, only to realize they’ve lost flexibility or are bound to costs even if the works don’t proceed.",
      "Always ensure you fully understand your surveyor’s role, fees, and timeline before signing any document.",
      "A little patience at the beginning can save significant time and expense later in the project."
    ],
  },
  {
    img: "/Part-wall.jpg",
    title: "How to invoke the act and can surveyors determine that it doesn’t apply",
    date: "November 22, 2024",
    category: "Party Wall Advice",
    slug: "how-to-invoke-the-act",
    content: [
      "Invoking the Party Wall etc. Act 1996 properly ensures that all works affecting a shared structure proceed lawfully.",
      "Surveyors play a crucial role in determining whether the Act applies to a given project. Their assessment is based on the type of work, property boundaries, and the effect on adjoining structures.",
      "If the surveyor determines that the Act does not apply, they must provide clear reasoning in writing to prevent future disputes.",
      "Understanding this process helps both owners and neighbors maintain good relations and compliance with the law.",
      "If the surveyor determines that the Act does not apply, they must provide clear reasoning in writing to prevent future disputes.",
      "Understanding this process helps both owners and neighbors maintain good relations and compliance with the law.",
      "If the surveyor determines that the Act does not apply, they must provide clear reasoning in writing to prevent future disputes.",
      "Understanding this process helps both owners and neighbors maintain good relations and compliance with the law.",
      "If the surveyor determines that the Act does not apply, they must provide clear reasoning in writing to prevent future disputes.",
      "Understanding this process helps both owners and neighbors maintain good relations and compliance with the law.",
    ],
  },
];



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