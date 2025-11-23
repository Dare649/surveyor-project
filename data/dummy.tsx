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
        title: 'case studies',
        path: '/case-studies'
    },
    {
        title: 'home buyers',
        path: '/home-buyers'
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


export const caseStudies = [
  {
    id: 1,
    title: "Burton White House",
    subtitle: "Luxury Residential Redevelopment",
    img: "/Insurance.jpg",
    extraImage: "/Insurance.jpg",
    client: "Burton Group",
    contractValue: "£2.4 million",
    location: "London, UK",
    duration: "12 months",
    paragraphs: [
      "Burton White House exemplifies the careful restoration of historic architecture with modern design elements.",
      "Our team led the project from planning through completion, balancing heritage conservation with cutting-edge construction practices.",
    ],
  },
  {
    id: 2,
    title: "City Apartments",
    subtitle: "Urban Development Project",
    img: "/Expert.jpg",
    extraImage: "/Expert.jpg",
    client: "Greenway Developers",
    contractValue: "£3.1 million",
    location: "Manchester, UK",
    duration: "18 months",
    paragraphs: [
      "City Apartments showcases our expertise in managing large-scale urban residential projects.",
      "We provided full project management and design coordination, ensuring timely delivery within budget.",
    ],
  },
  {
    id: 3,
    title: "Oxford Development",
    subtitle: "Mixed-Use Commercial Redevelopment",
    img: "/Dilapidation.jpg",
    extraImage: "/Dilapidation.jpg",
    client: "Oxford Estates Ltd",
    contractValue: "£4.7 million",
    location: "Oxford, UK",
    duration: "24 months",
    paragraphs: [
      "Oxford Development combines retail and residential spaces in a cohesive modern structure.",
      "We provided design management and quality control throughout the construction phase to maintain exceptional standards.",
    ],
  },
  {
    id: 4,
    title: "Riverside Complex",
    subtitle: "Waterfront Commercial Complex",
    img: "/Project-Management.jpg",
    extraImage: "/Project-Management.jpg",
    client: "Riverside Holdings",
    contractValue: "£6.8 million",
    location: "Bristol, UK",
    duration: "20 months",
    paragraphs: [
      "A landmark development that redefines Bristol’s riverside skyline.",
      "We oversaw every aspect of this project, from initial design to construction delivery, ensuring architectural integrity and commercial functionality.",
    ],
  },
  {
    id: 5,
    title: "Commercial Office Refurbishment",
    subtitle: "Corporate Fit-Out & Modernization",
    img: "Refurbishment.jpg",
    extraImage: "Refurbishment.jpg",
    client: "BrightCorp Ltd",
    contractValue: "£1.9 million",
    location: "Birmingham, UK",
    duration: "10 months",
    paragraphs: [
      "A complete transformation of a traditional office space into a modern, efficient workplace.",
      "Upgrades included open-plan layouts, acoustic design enhancements, and high-spec finishes tailored to the client’s operations.",
    ],
  },
  {
    id: 6,
    title: "Greenfield Estate",
    subtitle: "Eco-Friendly Residential Development",
    img: "/Building-Survey-&-Inspection.jpg",
    extraImage: "/Building-Survey-&-Inspection.jpg",
    client: "EcoHomes Ltd",
    contractValue: "£5.3 million",
    location: "Cambridge, UK",
    duration: "22 months",
    paragraphs: [
      "A pioneering sustainable housing development focusing on renewable energy and green design.",
      "This project incorporates solar power, smart water systems, and carbon-neutral building practices.",
    ],
  },
];

