export const projectsData = [
  {
    id: "ec-app",
    title: "EC App",
    description:
      "US-based app for custodians to log daily cleaning tasks and calculate salaries. Real-time updates ensure transparency in payroll.",
    longDescription: [
      "The EC App is a comprehensive solution designed for custodial management in the US market. It allows custodians to efficiently log their daily cleaning tasks and automatically calculates their salaries based on completed work.",
      "The application features real-time updates to ensure complete transparency in the payroll process, allowing both custodians and management to track progress and compensation accurately.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
    ],
    hasVideo: true,
    videos: ["https://example.com/videos/ec-app-demo.mp4"],
    tags: ["Android", ".NET MAUI", "Firebase", "Real-time Updates"],
    category: "Enterprise",
    client: "US Cleaning Services Company",
    date: "2023",
    downloads: "10,000+",
    rating: 4.8,
    features: [
      {
        title: "Task Logging",
        description: "Intuitive interface for custodians to log completed cleaning tasks with photo verification",
      },
      {
        title: "Salary Calculation",
        description: "Automated salary calculation based on completed tasks and hours worked",
      },
      {
        title: "Real-time Updates",
        description: "Instant synchronization of data between all users and management dashboard",
      },
      {
        title: "Offline Support",
        description: "Full functionality even without internet connection, with automatic sync when back online",
      },
      {
        title: "Reporting",
        description: "Comprehensive reporting tools for management to track performance and costs",
      },
      {
        title: "Geolocation",
        description: "Location verification to ensure tasks are completed at the correct facilities",
      },
    ],
    challenges: [
      "Ensuring reliable offline functionality for workers in areas with poor connectivity",
      "Implementing a secure and accurate payroll calculation system",
      "Creating an intuitive interface for users with varying levels of technical proficiency",
      "Handling large volumes of photo uploads efficiently",
    ],
    solutions: [
      "Developed a robust offline-first architecture with local database and sync queue",
      "Implemented a multi-layered validation system for payroll calculations",
      "Conducted extensive user testing with actual custodians to refine the interface",
      "Created an optimized image compression and upload system to handle photos efficiently",
    ],
  },
  {
    id: "retail-customer-service",
    title: "Retail Customer Service Portal",
    description:
      "High-traffic customer portal handling 10,000+ interactions daily with 99.9% uptime and 45% boost in satisfaction scores.",
    longDescription: [
      "The Retail Customer Service Portal is a high-performance web application designed to handle over 10,000 customer interactions daily for a major retail chain.",
      "With a focus on reliability and user experience, the portal maintains 99.9% uptime and has contributed to a 45% increase in customer satisfaction scores since its implementation.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
    ],
    hasVideo: false,
    tags: ["React", "Azure", "REST API", "Customer Service"],
    category: "Web Application",
    client: "Major US Retail Chain",
    date: "2022",
    downloads: "N/A",
    rating: "N/A",
    features: [
      {
        title: "Ticket Management",
        description: "Comprehensive system for creating, tracking, and resolving customer service tickets",
      },
      {
        title: "Live Chat",
        description: "Real-time chat functionality with support agents and AI-assisted responses",
      },
      {
        title: "Knowledge Base",
        description: "Searchable repository of common issues and solutions for customer self-service",
      },
      {
        title: "Analytics Dashboard",
        description: "Detailed metrics and reporting for management to track service performance",
      },
      {
        title: "Multi-channel Integration",
        description: "Seamless integration with email, phone, and social media customer service channels",
      },
    ],
    challenges: [
      "Handling high traffic volumes with minimal latency",
      "Integrating with legacy customer data systems",
      "Ensuring consistent experience across multiple retail brands",
      "Meeting strict security and compliance requirements for customer data",
    ],
    solutions: [
      "Implemented scalable architecture with Azure load balancing",
      "Created custom API adapters for legacy system integration",
      "Developed a theme system allowing brand-specific styling with shared components",
      "Built comprehensive security protocols exceeding industry standards",
    ],
  },
  {
    id: "fmo-ticketing",
    title: "FMO Ticketing App",
    description: "Tool for Field Maintenance staff to track tasks, log hours, and streamline service operations.",
    longDescription: [
      "The FMO Ticketing App is a specialized tool designed for Field Maintenance Operations staff to efficiently track tasks, log working hours, and streamline overall service operations.",
      "This application has significantly improved the efficiency of maintenance teams by providing real-time task assignment, status updates, and comprehensive reporting capabilities.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
    ],
    hasVideo: true,
    videos: ["https://example.com/videos/fmo-demo.mp4"],
    tags: ["Kotlin", "Android", "Task Management", "Field Service"],
    category: "Field Service",
    client: "Facility Management Company",
    date: "2022",
    downloads: "5,000+",
    rating: 4.6,
    features: [
      {
        title: "Ticket Management",
        description: "Create, assign, and track maintenance tickets through their complete lifecycle",
      },
      {
        title: "Time Tracking",
        description: "Log working hours with task-specific breakdowns for accurate billing",
      },
      {
        title: "Parts Inventory",
        description: "Track usage of parts and materials with automatic inventory updates",
      },
      {
        title: "Route Optimization",
        description: "Intelligent routing to minimize travel time between service locations",
      },
      {
        title: "Digital Forms",
        description: "Customizable digital forms replacing paper-based processes",
      },
      {
        title: "Customer Signatures",
        description: "Capture electronic signatures for work verification",
      },
    ],
    challenges: [
      "Creating an intuitive interface for technicians to use while on-site",
      "Ensuring reliable functionality in areas with poor connectivity",
      "Integrating with existing enterprise management systems",
      "Supporting a wide range of maintenance workflows across different facility types",
    ],
    solutions: [
      "Developed a streamlined UI based on extensive field testing with actual technicians",
      "Implemented robust offline capabilities with background synchronization",
      "Created flexible API integration layer for enterprise system compatibility",
      "Built a customizable workflow engine to support diverse maintenance processes",
    ],
  },
  {
    id: "crea",
    title: "CREA",
    description: "Route and salary tracking app for drivers, boosting company efficiency by up to 70%.",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
    ],
    hasVideo: true,
    videos: ["https://example.com/videos/crea-demo.mp4"],
    tags: ["Java", "Android", "GPS Tracking", "Route Optimization"],
    category: "Transportation",
    client: "Logistics Company",
    date: "2021",
    downloads: "15,000+",
    rating: 4.7,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.crea",
    features: [
      {
        title: "Route Optimization",
        description: "Efficient route planning to minimize fuel usage and optimize delivery times",
      },
      {
        title: "Salary Tracking",
        description: "Track driver earnings based on completed routes and hours worked",
      },
      {
        title: "GPS-based Driver Location Monitoring",
        description: "Real-time GPS tracking of drivers to monitor and improve efficiency",
      },
      {
        title: "Work Hours Log",
        description: "Track drivers' work hours and calculate earnings accurately",
      },
    ],
    challenges: [
      "Optimizing route efficiency to reduce fuel consumption and increase driver productivity",
      "Ensuring real-time GPS tracking with minimal data usage",
    ],
    solutions: [
      "Implemented intelligent route planning and real-time updates",
      "Designed a low-data consumption system to work effectively in areas with limited connectivity",
    ],
  },
  {
    id: "enterprise-insights",
    title: "Enterprise Insights Agent",
    description: "Enhanced an existing monitoring app to add battery stats and health tracking on Google devices.",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
    ],
    hasVideo: false,
    tags: ["Android", "Monitoring", "Battery Analytics", "Enterprise"],
    category: "Enterprise",
    client: "Technology Management Firm",
    date: "2021",
    downloads: "Enterprise Distribution",
    features: [
      {
        title: "Battery Health Tracking",
        description: "Monitor the health of devices' batteries and report any degradation",
      },
      {
        title: "Device Monitoring",
        description: "Track device usage and status for enterprise-level management",
      },
    ],
    challenges: [
      "Ensuring seamless tracking on various Android devices",
      "Integrating battery health analytics without affecting app performance",
    ],
    solutions: [
      "Developed a lightweight system to gather battery stats without draining device power",
      "Focused on battery usage patterns and health tracking, providing management insights into device health",
    ],
  },
  {
    id: "quran-app",
    title: "Quran App",
    description: "Smooth, curl-style Quran reader with bookmark and translation features.",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
    ],
    hasVideo: false,
    tags: ["Kotlin", "Android", "ML Kit", "Offline-first"],
    category: "Lifestyle",
    client: "True Muslim App Studio",
    date: "2018",
    downloads: "1,000,000+",
    rating: 4.8,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.quranapp",
    features: [
      {
        title: "Page Curl Effect",
        description: "Realistic page turning animation for natural reading experience",
      },
      {
        title: "Multiple Translations",
        description: "Support for translations in over 20 languages",
      },
      {
        title: "Audio Recitation",
        description: "High-quality audio recitations from renowned Qaris",
      },
      {
        title: "Bookmarks & Notes",
        description: "Save favorite verses and add personal notes",
      },
      {
        title: "Prayer Times",
        description: "Accurate prayer time calculations based on location",
      },
      {
        title: "Offline Access",
        description: "Complete functionality without internet connection",
      },
    ],
    challenges: [
      "Ensuring smooth, realistic animations across all devices",
      "Optimizing offline access and storage for large volumes of data",
    ],
    solutions: [
      "Optimized animations for a seamless experience on all device types",
      "Implemented an offline-first approach with lightweight storage and data caching",
    ],
  },
{
  id: "digital-clocks",
  title: "Digital Clocks",
  description: "A sleek, customizable digital clock app with various display modes.",
  longDescription: [
    "Digital Clocks is a simple yet elegant digital clock app designed to be fully customizable. Users can choose from various clock styles, adjust font sizes, and select background themes for their clock displays.",
    "The app supports multiple time formats, including 12-hour and 24-hour modes, and can be used in both portrait and landscape orientations, making it ideal for different use cases."
  ],
  image: "/dc.webp?height=400&width=600",
  gallery: [
     "/dc1.webp?height=800&width=400",
    "/dc2.webp?height=800&width=400",
    "/dc3.webp?height=800&width=400",
    "/dc4.webp?height=800&width=400",
    "/dc5.webp?height=800&width=400",
  ],
  hasVideo: false,
  tags: ["Android", "Customization", "Clock", "Utility"],
  category: "Utility",
  client: "Independent Developer",
  date: "2020",
  downloads: "100,000+",
  rating: 4.5,
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.digitalclocks",
  features: [
    {
      title: "Customizable Themes",
      description: "Choose from multiple color schemes and background options for a personalized experience."
    },
    {
      title: "Multiple Time Formats",
      description: "Switch between 12-hour and 24-hour clock formats to suit your preference."
    },
    {
      title: "Landscape & Portrait Modes",
      description: "Supports both orientations, perfect for bedside or desk setups."
    },
    {
      title: "Alarm Integration",
      description: "Set alarms directly from the clock app with custom tones and intervals."
    }
  ],
  challenges: [
    "Ensuring smooth performance across a range of devices with varying screen sizes.",
    "Creating a user-friendly interface for customization options."
  ],
  solutions: [
    "Optimized layout to adapt to various screen sizes while maintaining readability.",
    "Streamlined customization options with a minimalistic interface for ease of use."
  ]
},
{
  id: "ramadan-calendar",
  title: "Ramadan Calendar",
  description: "A simple app to track prayer times, fasting hours, and important Ramadan dates.",
  longDescription: [
    "The Ramadan Calendar app provides Muslims with a reliable tool to track prayer times, fasting hours, and key dates during Ramadan.",
    "It offers notifications for prayer times, Iftar, and Suhoor, along with an easy-to-use interface for quick access to important Ramadan information."
  ],
  image: "/rc.webp?height=400&width=600",
  gallery: [
    "/rc1.webp?height=800&width=400",
    "/rc2.webp?height=800&width=400",
    "/rc3.webp?height=800&width=400",
    "/rc4.webp?height=800&width=400",
    "/rc5.webp?height=800&width=400",


  ],
  hasVideo: false,
  tags: ["Android", "Ramadan", "Prayer Times", "Islamic Calendar"],
  category: "Lifestyle",
  client: "Independent Developer",
  date: "2021",
  downloads: "50,000+",
  rating: 4.7,
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.ramadancalendar",
  features: [
    {
      title: "Prayer Times",
      description: "Accurate prayer times based on your location, with notifications for each prayer."
    },
    {
      title: "Iftar & Suhoor Alerts",
      description: "Set reminders for Iftar and Suhoor times to help you manage your fasting hours."
    },
    {
      title: "Ramadan Dates",
      description: "Track important Ramadan dates such as the first day of fasting, Eid al-Fitr, and more."
    },
    {
      title: "Dua & Quran Verses",
      description: "Daily Ramadan-specific Duas and Quran verses for reflection."
    }
  ],
  challenges: [
    "Ensuring accurate prayer times based on geographic location.",
    "Handling high demand during peak Ramadan times while maintaining app performance."
  ],
  solutions: [
    "Integrated a reliable GPS-based system for precise prayer time calculations.",
    "Optimized backend infrastructure to handle peak usage times with minimal delays."
  ]
},
{
  id: "postal-go",
  title: "Postal Go",
  description: "A postal delivery tracking app that helps users track packages in real-time.",
  longDescription: [
    "Postal Go is an easy-to-use package tracking app designed for convenience. It allows users to track deliveries from various postal and courier services in real-time.",
    "With integration across multiple providers, users can enter their tracking numbers and instantly get updates on the status and location of their packages."
  ],
  image: "/placeholder.svg?height=400&width=600",
  gallery: [
    "/placeholder.svg?height=800&width=400",
    "/placeholder.svg?height=800&width=400",
    "/placeholder.svg?height=800&width=400"
  ],
  hasVideo: false,
  tags: ["Android", "Package Tracking", "Postal Services", "Courier"],
  category: "Utility",
  client: "Independent Developer",
  date: "2022",
  downloads: "200,000+",
  rating: 4.6,
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.postalgo",
  features: [
    {
      title: "Multi-Carrier Support",
      description: "Track packages from various postal and courier services like USPS, FedEx, and UPS."
    },
    {
      title: "Real-Time Updates",
      description: "Receive real-time updates on your package's location and delivery status."
    },
    {
      title: "Package Notifications",
      description: "Get push notifications for every update on your package status."
    },
    {
      title: "Tracking History",
      description: "View the complete history of your package's journey with detailed status logs."
    }
  ],
  challenges: [
    "Integrating with multiple postal and courier APIs for accurate tracking data.",
    "Ensuring fast delivery updates even during peak shopping seasons."
  ],
  solutions: [
    "Created a unified API interface to support multiple courier services seamlessly.",
    "Optimized backend processing to handle large volumes of tracking requests during peak times."
  ]
  } ,
{
    id: "translation-app",
    title: "Translation App",
    description: "A multilingual translation app that supports real-time language translation with speech-to-text and text-to-speech features.",
    longDescription: [
      "The Translation App is designed to provide users with real-time language translation using advanced speech-to-text and text-to-speech technology.",
      "Users can speak or type text in one language, and the app will translate and speak it out loud in another language. This app supports multiple languages, making it ideal for travel, learning, and communication across language barriers."
    ],
    image: "/lc.webp?height=400&width=600",
    gallery: [
     "/lc1.webp?height=800&width=400",
    "/lc2.webp?height=800&width=400",
    "/lc3.webp?height=800&width=400",
    "/lc4.webp?height=800&width=400",
    "/lc5.webp?height=800&width=400",],
    hasVideo: false,
    tags: ["Android", "Kotlin", "Translation", "Speech-to-Text"],
    category: "Utility",
    client: "Independent Developer",
    date: "2023",
    downloads: "50,000+",
    rating: 4.6,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.translationapp",
    features: [
      {
        title: "Real-Time Translation",
        description: "Translate spoken or typed text instantly between multiple languages."
      },
      {
        title: "Speech-to-Text",
        description: "Convert spoken words into text for translation."
      },
      {
        title: "Text-to-Speech",
        description: "Listen to the translated text with natural-sounding speech."
      },
      {
        title: "Offline Support",
        description: "Translate text and speech even when there is no internet connection."
      }
    ],
    challenges: [
      "Supporting accurate translation for languages with different syntax structures.",
      "Ensuring smooth integration of speech-to-text and text-to-speech technologies."
    ],
    solutions: [
      "Utilized a multi-layered translation API to handle various languages and contexts.",
      "Optimized speech processing algorithms for faster and more accurate recognition."
    ],
  }, 
  {
    id: "fyp-parking-management",
    title: "FYP Parking Management",
    description: "A smart parking management system that helps drivers find parking spaces and manage bookings in real-time.",
    longDescription: [
      "The FYP Parking Management app is designed to solve the parking problems in crowded urban areas. It allows users to search for available parking spaces in real-time, view parking details, and make bookings directly from the app.",
      "This system also provides parking owners with a management interface to control availability, prices, and bookings."
    ],
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400"
    ],
    hasVideo: true,
    videos: ["https://example.com/videos/fyp-parking-management-demo.mp4"],
    tags: ["Android", "Java", "Parking Management", "Real-Time Updates"],
    category: "Smart City",
    client: "University Project",
    date: "2023",
    downloads: "N/A",
    rating: "N/A",
    features: [
      {
        title: "Real-Time Parking Availability",
        description: "View available parking spots in real-time and get notifications about availability."
      },
      {
        title: "Booking System",
        description: "Book parking spaces in advance and receive confirmation within seconds."
      },
      {
        title: "Dynamic Pricing",
        description: "Adjust parking prices based on demand and time of day."
      },
      {
        title: "Parking History",
        description: "Track previous parking history and payment details."
      }
    ],
    challenges: [
      "Ensuring accurate real-time tracking of parking availability.",
      "Integrating with third-party payment systems for parking bookings."
    ],
    solutions: [
      "Developed a real-time synchronization system using Firebase for fast data updates.",
      "Created secure and easy-to-use payment gateway integration for hassle-free bookings."
    ],
  },
];
