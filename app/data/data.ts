const createDate: string = new Date().toUTCString()

export type LeadData = {
    name: string
    position: string
    companyName: string
    leadTitle: string
    leadDescription: string
    reasonForPicking: string[]
    potentialDealValue: string
    intent: string
    aboutThem: string
}

export const tableData = [
    {
        id: 1,
        name: "Jane Doe",
        topic: "Office Suite B45 for startups",
        status: "New",
        date: createDate,
    },
    {
        id: 2,
        name: "John Smith",
        topic: "Co-working Space D12 for freelancers",
        status: "New",
        date: createDate,
    },
    {
        id: 3,
        name: "Emily Johnson",
        topic: "Penthouse G78 for luxury living",
        status: "New",
        date: createDate,
    },
    {
        id: 4,
        name: "Michael Brown",
        topic: "Gym F23 for fitness enthusiasts",
        status: "New",
        date: createDate,
    },
    {
        id: 5,
        name: "Sarah Wilson",
        topic: "Cafe Z99 for commercial use",
        status: "New",
        date: createDate,
    },
    {
        id: 6,
        name: "David Taylor",
        topic: "Apartment Y67 for modern living",
        status: "New",
        date: createDate,
    },
    {
        id: 7,
        name: "Laura Davis",
        topic: "Library X45 for educational purposes",
        status: "New",
        date: createDate,
    },
    {
        id: 8,
        name: "Robert Moore",
        topic: "Restaurant L90 for hospitality business",
        status: "New",
        date: createDate,
    },
    {
        id: 9,
        name: "Sophia Martinez",
        topic: "Studio R12 for creative projects",
        status: "New",
        date: createDate,
    },
    {
        id: 10,
        name: "William Garcia",
        topic: "Farmhouse K56 for agricultural use",
        status: "New",
        date: createDate,
    },
    {
        id: 11,
        name: "Olivia Anderson",
        topic: "Townhouse M34 for suburban living",
        status: "New",
        date: createDate,
    },
    {
        id: 12,
        name: "James Thomas",
        topic: "Boutique P78 for small business",
        status: "New",
        date: createDate,
    },
    {
        id: 13,
        name: "Sophia Martin",
        topic: "Warehouse Q12 for storage",
        status: "New",
        date: createDate,
    },
    {
        id: 14,
        name: "Charlotte White",
        topic: "Hotel A90 for tourism",
        status: "New",
        date: createDate,
    },
    {
        id: 15,
        name: "Henry Harris",
        topic: "Bungalow W34 for retirement living",
        status: "New",
        date: createDate,
    },
    {
        id: 16,
        name: "Amelia Walker",
        topic: "Retail Space T56 for shopping outlets",
        status: "New",
        date: createDate,
    },
    {
        id: 17,
        name: "Lucas Lewis",
        topic: "Clinic V23 for healthcare services",
        status: "New",
        date: createDate,
    },
    {
        id: 18,
        name: "Isabella Young",
        topic: "Loft N89 for modern city living",
        status: "New",
        date: createDate,
    },
    {
        id: 19,
        name: "Ethan Hall",
        topic: "Penthouse H45 for luxury living",
        status: "New",
        date: createDate,
    },
    {
        id: 20,
        name: "Mia Allen",
        topic: "Studio S12 for artists",
        status: "New",
        date: createDate,
    },
]

export const heroData: LeadData[] = [
    // {
    //     name: "Jane Reyes",
    //     position: "Head of Real Estate Development",
    //     companyName: "Contoso Coffee",
    //     leadTitle: "Prepare for meeting with Jane",
    //     leadDescription:
    //         "Prepare for high-buying intent meeting Copilot scheduled for 2pm regarding upgrading service contract",
    //     reasonForPicking: [
    //         "Jane is a key decision maker and was browsing 'espresso machines' on First Coffee's website",
    //         "Multiple people at her company have reported 'slowness' during service requests",
    //         "COntoso Coffee currently see $200m in revenue from their in-store coffee shops",
    //     ],
    //     potentialDealValue: "$1m",
    //     intent: "High",
    //     aboutThem: "",
    // },
    {
        name: "Michael Carter",
        position: "Senior Procurement Manager",
        companyName: "BrewStar Supplies",
        leadTitle: "Discuss potential contract renewal",
        leadDescription:
            "Prepare for meeting with Michael at 3pm to discuss upgrading equipment lease and adding maintenance package.",
        reasonForPicking: [
            "Michael oversees equipment procurement and has expressed interest in upgrading to high-end espresso machines.",
            "BrewStar Supplies reported increased downtime due to outdated equipment.",
            "BrewStar Supplies generated $150m in revenue last year from coffee shop partnerships.",
        ],
        potentialDealValue: "$800k",
        intent: "High",
        aboutThem:
            "Michael Carter is an experienced procurement manager with over 10 years in the food and beverage industry. He is known for optimizing supply chains and negotiating impactful contracts. In his free time, Michael enjoys golfing and exploring new coffee blends.",
    },
    {
        name: "Sophia Jenkins",
        position: "Chief Operating Officer",
        companyName: "PerkNation Cafes",
        leadTitle: "Present upgraded service proposal",
        leadDescription:
            "Pitch the upgraded maintenance plan to Sophia in a 1pm call, highlighting cost-efficiency benefits.",
        reasonForPicking: [
            "Sophia is the COO and a key decision-maker for operations improvements.",
            "Recent reports indicate PerkNation Cafes is seeking new service providers due to rising costs.",
            "PerkNation Cafes operates over 120 locations, generating $300m in annual revenue.",
        ],
        potentialDealValue: "$1.2m",
        intent: "Medium",
        aboutThem:
            "Sophia Jenkins leads operations for PerkNation Cafes, managing over 120 outlets nationwide. With a background in strategic planning, she has a knack for identifying innovative solutions that reduce costs and improve efficiency. Sophia loves hiking and mentoring young entrepreneurs.",
    },
    {
        name: "Ethan Morris",
        position: "Director of Franchise Operations",
        companyName: "JavaMasters",
        leadTitle: "Introduce new espresso machine line",
        leadDescription:
            "Host a product demo for Ethan at 11am, showcasing the latest model's features and reliability.",
        reasonForPicking: [
            "Ethan manages franchise operations and influences equipment purchasing decisions.",
            "JavaMasters franchises have recently faced complaints about slow service and outdated machines.",
            "JavaMasters reported $400m in revenue, with plans for 50 new franchises next year.",
        ],
        potentialDealValue: "$2m",
        intent: "High",
        aboutThem:
            "Ethan Morris oversees operations for JavaMasters franchises, ensuring consistent quality and brand standards. With a sharp eye for innovation, Ethan is always seeking tools to improve franchise performance. Outside of work, he enjoys photography and traveling to historic cities.",
    },
    {
        name: "Emily Sanchez",
        position: "Head of Retail Strategy",
        companyName: "BeanHive",
        leadTitle: "Negotiate equipment upgrade plan",
        leadDescription:
            "Discuss Emily's interest in upgrading BeanHive's retail locations with energy-efficient espresso machines.",
        reasonForPicking: [
            "Emily oversees strategy for over 50 retail stores and recently reviewed equipment proposals.",
            "Energy consumption reports indicate cost-cutting potential through new machine upgrades.",
            "BeanHive achieved $220m in revenue from its retail outlets last year.",
        ],
        potentialDealValue: "$1.5m",
        intent: "Medium",
        aboutThem:
            "Emily Sanchez is a retail strategy expert specializing in enhancing customer experiences. Her data-driven approach has transformed BeanHive's operations. When not strategizing, Emily enjoys yoga and experimenting with home-brewed coffee recipes.",
    },
    {
        name: "Daniel Brooks",
        position: "VP of Hospitality Services",
        companyName: "BistroElite",
        leadTitle: "Finalize multi-location service contract",
        leadDescription:
            "Prepare proposal for Daniel at 10am for comprehensive service packages across BistroElite locations.",
        reasonForPicking: [
            "Daniel oversees hospitality services and is directly involved in supplier negotiations.",
            "BistroElite has reported frequent maintenance delays affecting customer satisfaction.",
            "BistroElite operates 30 luxury locations, generating $180m annually.",
        ],
        potentialDealValue: "$900k",
        intent: "High",
        aboutThem:
            "Daniel Brooks has spent the last decade shaping hospitality services at BistroElite. Known for his client-centric approach, he ensures smooth operations across all locations. Daniel is passionate about gourmet cuisine and is a connoisseur of fine wines.",
    },
]

export const reducedHeroData = heroData.reduce(
    (result: any[], value, index) => {
        if (index % 2 === 0) {
            result.push(heroData.slice(index, index + 2))
        }
        return result
    },
    []
)
