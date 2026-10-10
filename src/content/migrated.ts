// Maintained site content. Edit this file to update the site.
import type {
  CareerEntry,
  Certificate,
  ContentSection,
  Project,
} from "./types";

export const career = [
  {
    period: "2026 - about 3 months",
    role: "Java Backend Developer",
    company: "IBM",
    description:
      "Implemented Kafka-based notifications, backend callback APIs, and REST integrations with external partners, while also introducing the first unit and integration tests and improving application security and stability.",
    logo: "images/ibm.png",
  },
  {
    period: "2021 - 2024",
    role: "Lead Developer",
    company: "NTT DATA",
    description:
      "Led a team of six, enhancing productivity for an automotive client by focusing on optimized workflows and improved user experience for internal tools.",
    logo: "images/nttdata.jpeg",
  },
  {
    period: "2020 - 2021",
    role: "Lead Developer",
    company: "P4B",
    description:
      "Contributed to backend development for a German healthcare application, streamlining medical prescription approvals.",
    logo: "images/p4b.png",
  },
  {
    period: "2018 - 2019",
    role: "Senior Java Developer",
    company: "Synopsis(QTronic)",
    description:
      "Developed high-performance graphical editors and viewers for automotive testing data, significantly increasing user satisfaction.",
    logo: "images/Synopsys.png",
  },
  {
    period: "2007 - 2018",
    role: "Java Developer / Lead",
    company: "Konecranes(TBA)",
    description:
      "Developed and led projects for container terminal logistics, including a graphical editor tool that was instrumental in securing new contracts.",
    logo: "images/Konecranes.png",
  },
  {
    period: "2006 - 2007",
    role: "C++ Developer",
    company: "FUNLABS (Activision)",
    description:
      "Began career implementing special effects for major 3D game titles.",
    logo: "images/Activision.jpg",
  },
] satisfies CareerEntry[];
export const homeSections = [
  {
    title: "Career at a Glance",
    intro:
      "This section provides a high-level overview of a career defined by extensive experience, consistent leadership, and exposure to multiple key industries, setting the stage for a deeper dive into specific skills and roles.",
  },
  {
    title: "Skills Profile",
    intro:
      "The following visualizations compare core professional competencies with deep technical expertise. The radar chart illustrates a balanced profile of soft skills crucial for leadership, while the bar chart quantifies the extensive years of hands-on technical experience.",
  },
  {
    title: "Career Timeline",
    intro:
      "This timeline showcases a chronological journey of professional growth, highlighting key roles and responsibilities at each stage, from initial game development to leading teams in complex enterprise environments.",
  },
  {
    title: "Domain Experience",
    intro:
      "Experience is not just about time, but also about the breadth of application. The charts below break down the career focus between application types and the diverse industries served, illustrating a versatile and adaptable skillset.",
  },
  {
    title: "UX/UI Design",
    intro:
      "This final section highlights the ongoing career evolution. It showcases the new skills being acquired in user experience design, demonstrating a commitment to leveraging a deep technical background to create intuitive, user-centered products.",
  },
];
export const projects = [
  {
    slug: "jobs-hunter",
    title: "JobsHunter",
    category: "software",
    icon: "👨‍🏭",
    summary:
      "Spring Boot service that keeps a user profile (prompt, CV, phone, time interval), searches for new jobs with ChatGPT, and can push results to WhatsApp via Twilio.",
    subtitle:
      "The app that hunts jobs for you using GPT, Gemini, Grok and Serp API's and pings you on WhatsApp/Email when it finds a good one.",
    technologies: [
      "Java 25",
      "Spring Boot 4",
      "MySQL",
      "Liquibase",
      "ChatGPT 5.1 API",
      "Twillio API",
      "Hibernate/Ehcache",
      "Maven",
      "Git",
    ],
    sections: [
      {
        id: "project-description",
        title: "Project Description",
        blocks: [
          {
            kind: "image",
            image: {
              src: "images/JobsHunterLogo.png",
              alt: "Jobs Hunter logo",
            },
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " Java 25 + Spring Boot 4 service that keeps a user profile (prompt, CV, phone, time interval), searches for new jobs with ChatGPT, and can push results to WhatsApp via Twilio.",
              },
              {
                text: "\n",
              },
              {
                text: " Currently working on project together with another dev Andrei Lazar and Ionel Vochin and here you can see our scheduled tasks: ",
              },
              {
                text: " Backlog and roadmap ",
                href: "https://github.com/users/crisnct/projects/2/views/4",
              },
              {
                text: " ",
              },
            ],
          },
        ],
      },
      {
        id: "source-code",
        title: "Source Code",
        blocks: [
          {
            kind: "paragraph",
            content: [
              {
                text: "Explore the full source code for the project on GitHub",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " ",
                href: "https://github.com/crisnct/jobshunter",
              },
              {
                text: " ",
                href: "https://github.com/crisnct/jobshunter",
              },
              {
                text: "View on GitHub",
                href: "https://github.com/crisnct/jobshunter",
              },
              {
                text: " ",
                href: "https://github.com/crisnct/jobshunter",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "metal-investment",
    title: "Metal Investment",
    category: "software",
    icon: "💰",
    summary:
      "A practical tool designed to notify users about potential profits from selling gold, silver, or platinum on Revolut in real-time.",
    subtitle: "Real-time Profit Notifications for Precious Metals",
    technologies: [
      "Java 22",
      "Spring Boot 3",
      "Liquibase",
      "Resilience4j",
      "Unirest",
      "External APIs",
      "Hibernate/Ehcache",
      "Google Cloud Platform",
      "MySQL",
      "Maven",
      "Git",
    ],
    sections: [
      {
        id: "project-description",
        title: "Project Description",
        blocks: [
          {
            kind: "paragraph",
            content: [
              {
                text: " The ",
              },
              {
                text: "Metal Investment",
              },
              {
                text: " project is a practical desktop tool designed to empower users with real-time insights into potential profits from selling precious metals (gold, silver, platinum) on the Revolut platform. It continuously monitors market data and notifies users when favorable selling conditions are met, helping them make informed decisions to maximize their returns. This application demonstrates a robust approach to data retrieval, real-time updates, and effective user notification systems, providing a tangible benefit to investors. The project is monitoring the precious metals price at Bloomberg and Galmarley, and it's using some formula to approximate the metal price at Revolut. ",
              },
            ],
          },
        ],
      },
      {
        id: "metal-investment-platform",
        title: "Metal Investment Platform",
        blocks: [
          {
            kind: "paragraph",
            content: [
              {
                text: " ",
                href: "https://metal-investment-635786220311.europe-west1.run.app",
              },
              {
                text: "See website",
                href: "https://metal-investment-635786220311.europe-west1.run.app",
              },
              {
                text: " ",
                href: "https://metal-investment-635786220311.europe-west1.run.app",
              },
            ],
          },
        ],
      },
      {
        id: "source-code",
        title: "Source Code",
        blocks: [
          {
            kind: "paragraph",
            content: [
              {
                text: "Explore the full source code for the Metal Investment project on GitHub:",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " ",
                href: "https://github.com/crisnct/metal-investment",
              },
              {
                text: " ",
                href: "https://github.com/crisnct/metal-investment",
              },
              {
                text: "View on GitHub",
                href: "https://github.com/crisnct/metal-investment",
              },
              {
                text: " ",
                href: "https://github.com/crisnct/metal-investment",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "simple-contacts",
    title: "Simple Contacts Manager",
    category: "software",
    icon: "📇️",
    summary:
      "Spring Boot address book with login, contact CRUD, Kafka sign-up events, MySQL persistence, and a Dockerized weather microservice companion. Tech stack: Java 21, Spring Boot 3, Thymeleaf, Docker, Maven.",
    subtitle: "Address book",
    technologies: [
      "Java 21",
      "Spring Boot 3",
      "Kafka",
      "Docker",
      "MySQL",
      "Liquibase",
      "External APIs",
      "Hibernate/Ehcache",
      "Maven",
      "Git",
    ],
    sections: [
      {
        id: "project-description",
        title: "Project Description",
        blocks: [
          {
            kind: "paragraph",
            content: [
              {
                text: " The ",
              },
              {
                text: "Simple Contacts Manager",
              },
              {
                text: " it's a Spring Boot address book with login, contact CRUD, Kafka sign-up events, MySQL persistence, and a Dockerized weather microservice companion. ",
              },
            ],
          },
        ],
      },
      {
        id: "source-code",
        title: "Source Code",
        blocks: [
          {
            kind: "paragraph",
            content: [
              {
                text: "Explore the full source code for the Simple Contacts Manager project on GitHub",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " ",
                href: "https://github.com/crisnct/simplecontactsmanager",
              },
              {
                text: " ",
                href: "https://github.com/crisnct/simplecontactsmanager",
              },
              {
                text: "View on GitHub",
                href: "https://github.com/crisnct/simplecontactsmanager",
              },
              {
                text: " ",
                href: "https://github.com/crisnct/simplecontactsmanager",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "snowswt",
    title: "SnowSWT",
    category: "software",
    icon: "❄️",
    summary:
      "A desktop application built using Java and the Standard Widget Toolkit (SWT), designed as both a snow simulation and a mini game demo. It showcases the animation capabilities of SWT.",
    subtitle: "A Desktop Snowing Simulator and Game Demo",
    technologies: [
      "Java 22",
      "Standard Widget Toolkit (SWT)",
      "GitHub Actions",
      "Git",
      "Maven",
    ],
    sections: [
      {
        id: "project-description",
        title: "Project Description",
        blocks: [
          {
            kind: "paragraph",
            content: [
              {
                text: " ",
              },
              {
                text: "SnowSWT",
              },
              {
                text: " is a desktop application developed with the Standard Widget Toolkit (SWT), serving as both a charming snowing simulator and a small game demo. This project showcases proficiency in Java desktop application development, particularly in creating interactive graphical user interfaces and handling basic game logic. It highlights the ability to leverage SWT for rich client applications, demonstrating skills in graphical rendering and event handling within a desktop environment. ",
              },
            ],
          },
        ],
      },
      {
        id: "project-visuals",
        title: "Project Visuals",
        blocks: [
          {
            kind: "paragraph",
            content: [
              {
                text: "Explore various aspects of the SnowSWT application through these screenshots.",
              },
            ],
          },
          {
            kind: "gallery",
            id: "snowswt-2-gallery-0",
            images: [
              {
                src: "images/snowswt-1.png",
                alt: "SnowSWT 1",
              },
              {
                src: "images/snowswt-2.png",
                alt: "SnowSWT 2",
              },
              {
                src: "images/snowswt-3.png",
                alt: "SnowSWT 3",
              },
              {
                src: "images/snowswt-4.png",
                alt: "SnowSWT 4",
              },
              {
                src: "images/snowswt-5.png",
                alt: "SnowSWT 5",
              },
              {
                src: "images/snowswt-6.png",
                alt: "SnowSWT 6",
              },
              {
                src: "images/snowswt-7.png",
                alt: "SnowSWT 7",
              },
              {
                src: "images/snowswt-8.png",
                alt: "SnowSWT 8",
              },
              {
                src: "images/snowswt-9.png",
                alt: "SnowSWT 9",
              },
              {
                src: "images/snowswt-10.png",
                alt: "SnowSWT 10",
              },
              {
                src: "images/snowswt-11.png",
                alt: "SnowSWT 11",
              },
              {
                src: "images/snowswt-12.png",
                alt: "SnowSWT 12",
              },
              {
                src: "images/snowswt-13.png",
                alt: "SnowSWT 13",
              },
              {
                src: "images/snowswt-14.png",
                alt: "SnowSWT 14",
              },
              {
                src: "images/snowswt-15.png",
                alt: "SnowSWT 15",
              },
              {
                src: "images/snowswt-16.png",
                alt: "SnowSWT 16",
              },
              {
                src: "images/snowswt-17.png",
                alt: "SnowSWT 17",
              },
              {
                src: "images/snowswt-18.png",
                alt: "SnowSWT 18",
              },
              {
                src: "images/snowswt-19.png",
                alt: "SnowSWT 19",
              },
              {
                src: "images/snowswt-20.png",
                alt: "SnowSWT 20",
              },
              {
                src: "images/snowswt-21.png",
                alt: "SnowSWT 21",
              },
              {
                src: "images/snowswt-22.png",
                alt: "SnowSWT 22",
              },
              {
                src: "images/snowswt-23.png",
                alt: "SnowSWT 23",
              },
              {
                src: "images/snowswt-24.png",
                alt: "SnowSWT 24",
              },
              {
                src: "images/snowswt-25.png",
                alt: "SnowSWT 25",
              },
            ],
          },
        ],
      },
      {
        id: "source-code",
        title: "Source Code",
        blocks: [
          {
            kind: "paragraph",
            content: [
              {
                text: "Explore the full source code for the SnowSWT project on GitHub:",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " ",
                href: "https://github.com/crisnct/snowswt",
              },
              {
                text: " ",
                href: "https://github.com/crisnct/snowswt",
              },
              {
                text: "View on GitHub",
                href: "https://github.com/crisnct/snowswt",
              },
              {
                text: " ",
                href: "https://github.com/crisnct/snowswt",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "veridate",
    title: "VeriDate",
    category: "design",
    icon: "❤️",
    summary:
      "High-fidelity prototype for an AI-powered, location-based dating app, designed to foster authentic connections by addressing common pain points like fake profiles and ghosting.",
    subtitle:
      "Location-based and AI-powered dating app for real, verified connections—no fakes, no ghosting. Smart matching finds your perfect match, while AI-enhanced photos reflect their true essence. Authentic dating, made effortless.",
    technologies: [],
    sections: [
      {
        id: "the-problem",
        title: "The Problem",
        blocks: [
          {
            kind: "paragraph",
            content: [
              {
                text: "Many users of dating apps are complaining about not finding the right people, with whom they can have a meaningful connection.",
              },
            ],
          },
        ],
      },
      {
        id: "the-goal",
        title: "The Goal",
        blocks: [
          {
            kind: "paragraph",
            content: [
              {
                text: "Our dating app will help single individuals seeking a relationship to find the right people with whom they can have a meaningful and genuine connection. We will measure effectiveness by the number of first-time in-person meetings between two matches.",
              },
            ],
          },
        ],
      },
      {
        id: "ux-design-process",
        title: "UX Design Process",
        blocks: [
          {
            kind: "heading",
            level: 3,
            id: "veridate-2-empathize",
            content: [
              {
                text: "Empathize",
              },
            ],
          },
          {
            kind: "list",
            ordered: false,
            items: [
              [
                {
                  text: "Conduct surveys and interviews with potential users to understand their needs and pain points.",
                },
              ],
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " ",
                href: "https://docs.google.com/forms/d/e/1FAIpQLScgSs-yziyUNkwqc4i8w0Etph_F8ndJ9y6qyNCmvx_cRCntAw/viewform?usp=sharing&ouid=104115646701463745212",
              },
              {
                text: "Survey",
                href: "https://docs.google.com/forms/d/e/1FAIpQLScgSs-yziyUNkwqc4i8w0Etph_F8ndJ9y6qyNCmvx_cRCntAw/viewform?usp=sharing&ouid=104115646701463745212",
              },
              {
                text: " ",
                href: "https://docs.google.com/forms/d/e/1FAIpQLScgSs-yziyUNkwqc4i8w0Etph_F8ndJ9y6qyNCmvx_cRCntAw/viewform?usp=sharing&ouid=104115646701463745212",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " ",
                href: "https://docs.google.com/document/d/1FTaqBG3g5hCFL9f77t2Bj8EDDVawDRFDSk1qxEGH3Wg/edit?usp=sharing",
              },
              {
                text: "Interview1",
                href: "https://docs.google.com/document/d/1FTaqBG3g5hCFL9f77t2Bj8EDDVawDRFDSk1qxEGH3Wg/edit?usp=sharing",
              },
              {
                text: " ",
                href: "https://docs.google.com/document/d/1FTaqBG3g5hCFL9f77t2Bj8EDDVawDRFDSk1qxEGH3Wg/edit?usp=sharing",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " ",
                href: "https://docs.google.com/document/d/1BJYYn-TF_zNMpn0R9A2Uk9Ju3J6TD6iY8xTWy5be0aw/edit?usp=sharing",
              },
              {
                text: "Interview2",
                href: "https://docs.google.com/document/d/1BJYYn-TF_zNMpn0R9A2Uk9Ju3J6TD6iY8xTWy5be0aw/edit?usp=sharing",
              },
              {
                text: " ",
                href: "https://docs.google.com/document/d/1BJYYn-TF_zNMpn0R9A2Uk9Ju3J6TD6iY8xTWy5be0aw/edit?usp=sharing",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " ",
                href: "https://docs.google.com/document/d/1h18PrIncctdEM0LIMHaAKvythD_789gLodYx1IWXAmE/edit?usp=sharing",
              },
              {
                text: "Interview3",
                href: "https://docs.google.com/document/d/1h18PrIncctdEM0LIMHaAKvythD_789gLodYx1IWXAmE/edit?usp=sharing",
              },
              {
                text: " ",
                href: "https://docs.google.com/document/d/1h18PrIncctdEM0LIMHaAKvythD_789gLodYx1IWXAmE/edit?usp=sharing",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " ",
                href: "https://docs.google.com/document/d/1eag1djeVMNCYoWr-gAVaUivlCVOASV18a-Tw-vD5Gmk/edit?usp=sharing",
              },
              {
                text: "Interview4",
                href: "https://docs.google.com/document/d/1eag1djeVMNCYoWr-gAVaUivlCVOASV18a-Tw-vD5Gmk/edit?usp=sharing",
              },
              {
                text: " ",
                href: "https://docs.google.com/document/d/1eag1djeVMNCYoWr-gAVaUivlCVOASV18a-Tw-vD5Gmk/edit?usp=sharing",
              },
            ],
          },
          {
            kind: "list",
            ordered: false,
            items: [
              [
                {
                  text: "Create empathy maps to visualize user emotions and experiences.",
                },
              ],
            ],
          },
          {
            kind: "gallery",
            id: "veridate-2-gallery-0",
            images: [
              {
                src: "images/veridate-empathy-map-ml.jpg",
                alt: "Empathy Map Image 1",
              },
              {
                src: "images/veridate-empathy-map-am.jpg",
                alt: "Empathy Map Image 2",
              },
              {
                src: "images/veridate-empathy-map-adelina.jpg",
                alt: "Empathy Map Image 3",
              },
            ],
          },
          {
            kind: "list",
            ordered: false,
            items: [
              [
                {
                  text: "Create user personas based on research findings to guide app development.",
                },
              ],
            ],
          },
          {
            kind: "gallery",
            id: "veridate-2-gallery-0",
            images: [
              {
                src: "images/veridate-lars-persona-details.jpg",
                alt: "Persona 1",
              },
              {
                src: "images/veridate-catalin-persona-details.jpg",
                alt: "Persona 2",
              },
              {
                src: "images/veridate-antonia-persona-details.jpg",
                alt: "Persona 3",
              },
            ],
          },
          {
            kind: "list",
            ordered: false,
            items: [
              [
                {
                  text: "Determine the pain points.",
                },
              ],
            ],
          },
          {
            kind: "gallery",
            id: "veridate-2-gallery-0",
            images: [
              {
                src: "images/veridate-pain-points-1.jpg",
                alt: "Paint points page 1",
              },
              {
                src: "images/veridate-pain-points-2.jpg",
                alt: "Paint points page 2",
              },
              {
                src: "images/veridate-pain-points-3.jpg",
                alt: "Paint points page 3",
              },
              {
                src: "images/veridate-pain-points-4.jpg",
                alt: "Paint points page 4",
              },
            ],
          },
          {
            kind: "list",
            ordered: false,
            items: [
              [
                {
                  text: "Create user journey maps to visualize the user experience and identify key touchpoints.",
                },
              ],
            ],
          },
          {
            kind: "gallery",
            id: "veridate-2-gallery-0",
            images: [
              {
                src: "images/veridate-user-journey-map-lars.jpg",
                alt: "User Journey 1",
              },
              {
                src: "images/veridate-user-journey-map-catalin.jpg",
                alt: "User Journey 2",
              },
              {
                src: "images/veridate-user-journey-map-antonia.jpg",
                alt: "User Journey 3",
              },
            ],
          },
          {
            kind: "heading",
            level: 3,
            id: "veridate-2-define-user-problems",
            content: [
              {
                text: "Define User Problems",
              },
            ],
          },
          {
            kind: "list",
            ordered: false,
            items: [
              [
                {
                  text: "Problem Statements:",
                  strong: true,
                },
                {
                  text: " Articulate specific user pain points into clear, actionable problems.",
                },
              ],
              [
                {
                  text: "Hypothesis Statements:",
                  strong: true,
                },
                {
                  text: " Formulate testable assumptions about potential solutions to user problems.",
                },
              ],
              [
                {
                  text: "Value Propositions:",
                  strong: true,
                },
                {
                  text: " Define the core benefits and unique selling points of the app.",
                },
              ],
            ],
          },
          {
            kind: "gallery",
            id: "veridate-2-gallery-2",
            images: [
              {
                src: "images/veridate-problem-statements-1.jpg",
                alt: "Problem statements 1",
              },
              {
                src: "images/veridate-problem-statements-2.jpg",
                alt: "Problem statements 2",
              },
              {
                src: "images/veridate-problem-statements-3.jpg",
                alt: "Problem statements 3",
              },
              {
                src: "images/veridate-hypothesis-statements-1.jpg",
                alt: "Hypothesis statements 1",
              },
              {
                src: "images/veridate-hypothesis-statements-2.jpg",
                alt: "Hypothesis statements 2",
              },
              {
                src: "images/veridate-hypothesis-statements-3.jpg",
                alt: "Hypothesis statements 3",
              },
              {
                src: "images/veridate-value-propositions.jpg",
                alt: "Value propositions",
              },
            ],
          },
          {
            kind: "heading",
            level: 3,
            id: "veridate-2-ideate",
            content: [
              {
                text: "Ideate",
              },
            ],
          },
          {
            kind: "list",
            ordered: false,
            items: [
              [
                {
                  text: "Competitive Audit: create competitor analysis to understand the strengths and weaknesses of existing dating apps.",
                },
              ],
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " ",
                href: "https://docs.google.com/spreadsheets/d/1gLAhTd6pnaEkGKV55ceLX1D1e5JmcIWaPmlQ9xjPSU0/edit?usp=sharing",
              },
              {
                text: "Competitive Audit Research",
                href: "https://docs.google.com/spreadsheets/d/1gLAhTd6pnaEkGKV55ceLX1D1e5JmcIWaPmlQ9xjPSU0/edit?usp=sharing",
              },
              {
                text: " ",
                href: "https://docs.google.com/spreadsheets/d/1gLAhTd6pnaEkGKV55ceLX1D1e5JmcIWaPmlQ9xjPSU0/edit?usp=sharing",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " ",
                href: "https://docs.google.com/document/d/1GFV3dIe6e0W4AZaLHE_iCSW1_442SpvvMSNQSngHfuw/edit?usp=sharing",
              },
              {
                text: "Competitive Audit Report",
                href: "https://docs.google.com/document/d/1GFV3dIe6e0W4AZaLHE_iCSW1_442SpvvMSNQSngHfuw/edit?usp=sharing",
              },
              {
                text: " ",
                href: "https://docs.google.com/document/d/1GFV3dIe6e0W4AZaLHE_iCSW1_442SpvvMSNQSngHfuw/edit?usp=sharing",
              },
            ],
          },
          {
            kind: "list",
            ordered: false,
            items: [
              [
                {
                  text: "Create information architecture to define the app's structure and navigation.",
                },
              ],
            ],
          },
          {
            kind: "image",
            image: {
              src: "images/veridate-information-architecture.png",
              alt: "VeriDate Information Architecture",
            },
          },
          {
            kind: "list",
            ordered: false,
            items: [
              [
                {
                  text: "Create paper wireframes to visualize the app's layout and functionality.",
                },
              ],
            ],
          },
          {
            kind: "gallery",
            id: "veridate-2-gallery-0",
            images: [
              {
                src: "images/veridate-paper-wireframe-1.jpg",
                alt: "Ideate Image 1",
              },
              {
                src: "images/veridate-paper-wireframe-2.jpg",
                alt: "Ideate Image 2",
              },
            ],
          },
          {
            kind: "heading",
            level: 3,
            id: "veridate-2-prototype",
            content: [
              {
                text: "Prototype",
              },
            ],
          },
          {
            kind: "list",
            ordered: false,
            items: [
              [
                {
                  text: "Create ",
                },
                {
                  text: "low-fidelity prototype",
                  href: "https://www.figma.com/proto/VHWXuZSkvfZ4tJ57mhMJsY/VeriDate?node-id=242-2&p=f&t=t2wXgxrWUWUDHWG6-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=242%3A2",
                },
                {
                  text: " using Figma.",
                },
              ],
              [
                {
                  text: "Plan a ",
                },
                {
                  text: " usability study ",
                  href: "https://docs.google.com/document/d/1JiIFe1ohpgyxA1WkPeaO3HNlxVtuVFikn3I0LOM0QhA",
                },
                {
                  text: " with the same users to gather feedback on the prototype.",
                },
              ],
              [
                {
                  text: "Create a ",
                },
                {
                  text: "survey",
                  href: "https://forms.gle/dbpCmfxsxZiNmk1s6",
                },
              ],
              [
                {
                  text: "Create affinity diagram to organize user feedback and insights. ",
                },
                {
                  text: " ",
                },
              ],
              [
                {
                  text: "Update ",
                },
                {
                  text: "low-fidelity prototype",
                  href: "https://www.figma.com/proto/VHWXuZSkvfZ4tJ57mhMJsY/VeriDate?node-id=531-676&p=f&t=6KJy8laxK3GBvXVl-1&scaling=scale-down&content-scaling=fixed&page-id=531%3A5&starting-point-node-id=531%3A676",
                },
              ],
              [
                {
                  text: "Create a new ",
                },
                {
                  text: "survey",
                  href: "https://docs.google.com/forms/d/e/1FAIpQLSds2a15_yYrWJvFc2bQpJ96KBZj4nIQLUCzg7dkxkGLEm0ZPg/viewform",
                },
              ],
              [
                {
                  text: "Create affinity diagram to organize user feedback and insights. ",
                },
                {
                  text: " ",
                },
              ],
              [
                {
                  text: "Create ",
                },
                {
                  text: "high-fidelity prototype",
                  href: "https://www.figma.com/proto/VHWXuZSkvfZ4tJ57mhMJsY/VeriDate?node-id=843-857&p=f&t=YtDvlvNXXtKlcSnC-1&scaling=scale-down&content-scaling=fixed&page-id=843%3A499&starting-point-node-id=843%3A857",
                },
                {
                  text: " using Figma.",
                },
              ],
              [
                {
                  text: "Plan a ",
                },
                {
                  text: " usability study ",
                  href: "https://docs.google.com/document/d/1fmLGYYZZj7zqGDnaT9FLkac6PlcMOsM9pEpFbTRrXFE/edit?usp=sharing",
                },
                {
                  text: " with the same users to gather feedback on the prototype.",
                },
              ],
              [
                {
                  text: "Create a ",
                },
                {
                  text: "survey",
                  href: "https://forms.gle/JKRTTq3mZWzkFLW6A",
                },
              ],
              [
                {
                  text: "Create affinity diagram to organize user feedback and insights. ",
                },
                {
                  text: " ",
                },
              ],
              [
                {
                  text: "Update ",
                },
                {
                  text: "high-fidelity prototype",
                  href: "https://www.figma.com/proto/VHWXuZSkvfZ4tJ57mhMJsY/VeriDate?node-id=1246-824&p=f&t=yG8MXCJ0WmwNpkS8-1&scaling=scale-down&content-scaling=fixed&page-id=1246%3A516&starting-point-node-id=1246%3A824",
                },
              ],
              [
                {
                  text: "Compare the first and second versions of the high-fidelity prototype to highlight improvements and changes based on user feedback.",
                },
              ],
            ],
          },
          {
            kind: "gallery",
            id: "veridate-2-gallery-0",
            images: [
              {
                src: "images/veridate-high-fi-comparison-1.jpg",
                alt: "Comparison Image 1",
              },
              {
                src: "images/veridate-high-fi-comparison-2.jpg",
                alt: "Comparison Image 2",
              },
              {
                src: "images/veridate-high-fi-comparison-3.jpg",
                alt: "Comparison Image 3",
              },
              {
                src: "images/veridate-high-fi-comparison-4.jpg",
                alt: "Comparison Image 4",
              },
              {
                src: "images/veridate-high-fi-comparison-5.jpg",
                alt: "Comparison Image 5",
              },
              {
                src: "images/veridate-high-fi-comparison-6.jpg",
                alt: "Comparison Image 6",
              },
              {
                src: "images/veridate-high-fi-comparison-7.jpg",
                alt: "Comparison Image 7",
              },
              {
                src: "images/veridate-high-fi-comparison-8.jpg",
                alt: "Comparison Image 8",
              },
              {
                src: "images/veridate-high-fi-comparison-9.jpg",
                alt: "Comparison Image 9",
              },
            ],
          },
          {
            kind: "heading",
            level: 3,
            id: "veridate-2-accessibility",
            content: [
              {
                text: "Accessibility",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "Considerations for inclusive design, ensuring the app is usable by individuals with diverse abilities (e.g., highly readable typography, strong color contrast, large buttons, centered elements for left/right-handed users).",
              },
            ],
          },
          {
            kind: "image",
            image: {
              src: "images/veridate-accessibility-considerations.jpg",
              alt: "accessibility",
            },
          },
        ],
      },
    ],
  },
] satisfies Project[];
export const aboutSections = [
  {
    id: "introduction",
    title: "Introduction",
    blocks: [
      {
        kind: "image",
        image: {
          src: "images/imported-9346eb5d64c792ad.jpg",
          alt: "Cristian Tone at desk - photo made by Alin Holda",
        },
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Hi! I’m Cristian Tone, a self-taught programmer passionate about technology since the age of 12. I’ve turned my childhood curiosity into a solid career in software development, working both in companies and independently as a freelancer. I enjoy building useful applications, continuously learning, and collaborating with people who value quality and innovation. If you have an interesting project or would like to work together, I’m always open to a conversation.",
          },
        ],
      },
    ],
  },
  {
    id: "early-discoveries-foundations",
    title: "Early Discoveries & Foundations",
    collapsed: true,
    blocks: [
      {
        kind: "paragraph",
        content: [
          {
            text: "I was born into a humble home, where my mother’s hands carried the marks of long days in a factory and my father’s eyes scanned the night as a security guard. We never had much, but what we did have was a shared belief that education could open doors we couldn’t even imagine. It was my grandmother and my mother who built the pillars of my character. My mother, ever the perfectionist, taught me to give my best in everything. My grandmother, with her unwavering principles and high standards, showed me the quiet strength of common sense, the warmth of kindness, and the healing power of forgiveness.",
          },
        ],
      },
      {
        kind: "image",
        image: {
          src: "images/imported-063955c20a2d940c.jpg",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "In the final days of fourth grade, I stood on the small stage of our school, holding my third-place award. Inside, I was beaming with pride, but the photo from that day tells another story—a boy with stiff shoulders and a guarded expression. My teacher’s stern presence weighed on me, and my heart, too tender for the world, didn’t know how to let joy fully shine through. I carry deep gratitude for my teacher, Mariana Grinciuc—not despite her strictness, but because of it. Her high expectations and unwavering discipline became the scaffolding on which I built resilience, respect, and the determination to give my best in all things.",
          },
        ],
      },
      {
        kind: "image",
        image: {
          src: "images/imported-c1cb82fe2ac04ce3.jpg",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "In this picture I'm with my 5 year younger brother. At eleven, my homeroom teacher asked me the age-old question: “What do you want to be when you grow up?” I had no real answer, so I reached for the first image that felt familiar. “A baker,” I said—probably because some of my happiest moments were spent watching my mother’s gentle hands knead dough, filling our home with the warm, comforting scent of fresh bread. ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "When I finished high school, my parents sacrificed yet again to send me to college—a gift I will treasure for the rest of my life. As you’ll see in my journey, that decision didn’t just shape my career—it reshaped who I became.",
          },
        ],
      },
      {
        kind: "image",
        image: {
          src: "images/imported-470237e1b083dc5c.jpg",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "heading",
        level: 3,
        id: "about-1-at-12",
        content: [
          {
            text: "At 12,",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "I first joined the Student Club in my hometown, where I discovered a Romanian-made computer: the HC Felix. It ran on the BASIC programming language and connected to a TV via coaxial cable — no monitor, no hard drive. Games and programs were stored on cassette tapes, and the cassette player was connected directly to the computer. I was self-taught, learning BASIC from a manual provided by the instructor. There were no smartphones, no Google, and the internet was in its infancy. The lack of distractions in my life, combined with a deep desire to explore and the joy of every small success, fueled my early passion for programming.",
          },
        ],
      },
      {
        kind: "image",
        image: {
          src: "images/imported-e8ab264f197ff8b5.jpg",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "heading",
        level: 3,
        id: "about-1-at-15",
        content: [
          {
            text: "At 15, ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "I enrolled in a technical high school where I learned algorithm design and a new language: Turbo Pascal. I’m deeply grateful to my computer science teacher, Neciu Crina, who saw potential in me and became a true mentor. Thanks to her guidance, I qualified for the county-level informatics olympiad. There were days when she gave me the keys to the computer lab so I could stay after school and develop my skills. I’d play games like Prince, Mario, and Street Fighter, explore MS-DOS and Windows 3.1, and work on personal mini-projects in Turbo Pascal and FoxPro — all saved on floppy disks.",
          },
        ],
      },
      {
        kind: "image",
        image: {
          src: "images/imported-7ff05be54a846ff6.png",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "heading",
        level: 3,
        id: "about-1-at-16",
        content: [
          {
            text: "At 16, ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "I built my own multi-level Snake game in BASIC on my first PC, a HC Felix. Even without someone to check my work, I paid close attention to writing clean code so that debugging would be easier later.",
          },
        ],
      },
      {
        kind: "heading",
        level: 3,
        id: "about-1-at-17",
        content: [
          {
            text: "At 17, ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "I developed a patient management application in FoxPro, a language with its own built-in database engine. I tried selling it to my family doctor. Around the same time, I created another app in Turbo Pascal that graphically displayed vertical mouse movement — similar to an EKG — with the idea that it could help monitor a patient's breathing by connecting the mouse to a ventilator. I even presented the concept to a doctor at the municipal hospital.",
          },
        ],
      },
      {
        kind: "image",
        image: {
          src: "images/imported-02f88b10c5995e77.png",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "heading",
        level: 3,
        id: "about-1-at-20",
        content: [
          {
            text: "At 20, ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "I began studying at the University of Craiova, Faculty of Mathematics and Informatics. While mathematics was the main focus, I also learned Java, C++, SQL, and Lisp for AI.",
          },
        ],
      },
      {
        kind: "image",
        image: {
          src: "images/imported-010374322b2f7a37.jpg",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "At university, I liked mathematics quite a lot and I got very good grades in some subjects.",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "My highest grades in: ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Differential Equations – 10/10",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Mathematical Foundations of Artificial Intelligence – 10/10",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Computational Algebra – 10/10",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Object-Oriented Programming – 10/10",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Software Project Management – 10/10",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Data Coding and Compression – 10/10",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Expert Systems – 10/10",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "My lowest grades in: ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Abstract Algebra – 6/10",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Numerical Computation - 6/10",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Computational Geometry and Graphics – 6/10",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Linear Algebra – 5/10",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Probability Theory – 5/10",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Mathematical Statistics – 5/10",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Compiler Design – 5/10",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "All my grades from university",
          },
        ],
      },
      {
        kind: "image",
        image: {
          src: "images/imported-1b185fa06e825601.jpg",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "My bachelor’s degree diploma ",
          },
        ],
      },
      {
        kind: "image",
        image: {
          src: "images/imported-092b6a008c91178b.jpg",
          alt: "Personal journey photograph",
        },
      },
    ],
  },
  {
    id: "professional-beginnings-growth",
    title: "Professional Beginnings & Growth",
    collapsed: false,
    blocks: [
      {
        kind: "image",
        image: {
          src: "images/imported-4b5acf0eba810cc2.jpg",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "heading",
        level: 3,
        id: "about-3-at-25",
        content: [
          {
            text: "At 25, ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "I got my first job — Junior C++ Developer at a multi-platform game studio in Bucharest named ",
          },
          {
            text: "Funlabs/Activision",
            href: "https://www.funlabs.com/",
          },
          {
            text: " where I worked on two hunting games.",
          },
        ],
      },
      {
        kind: "embed-link",
        href: "https://www.youtube.com/watch?v=1uSnWz5fuzM",
        title: "Cabela's African Safari Xbox 360 Gameplay - Big Birds",
      },
      {
        kind: "embed-link",
        href: "https://www.youtube.com/watch?v=J0QdH_PN6DA",
        title:
          "Cabela's Big Game Hunter (2007) - Part 1: Montana, North America",
      },
      {
        kind: "image",
        image: {
          src: "images/imported-4a09403f9b60d681.png",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "image",
        image: {
          src: "images/imported-5463a7436f84e4da.png",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "heading",
        level: 3,
        id: "about-6-at-26",
        content: [
          {
            text: "At 26, ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "I met a girl from Satu-Mare, we got married, and I relocated to her hometown. There, I joined ",
          },
          {
            text: "TBA Group",
            href: "https://tba.group/",
          },
          {
            text: " (later acquired by Konecranes) as a Java developer. I’m thankful to my manager, Csaba Boer, for the great collaboration. At TBA, I built a Java desktop app from scratch using SWT: the Graphical Terminal Editor, which I worked on for 10 years.",
          },
        ],
      },
      {
        kind: "image",
        image: {
          src: "images/imported-8d2be8cd9a1e4c5a.png",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "image",
        image: {
          src: "images/imported-79aacaf70ded819b.png",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "image",
        image: {
          src: "images/imported-4f07654092c2766f.png",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "heading",
        level: 3,
        id: "about-9-at-37",
        content: [
          {
            text: "At 37, ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "I relocated to Cluj-Napoca, I've got a new job at ",
          },
          {
            text: "QTronic",
            href: "https://www.synopsys.com/",
          },
          {
            text: "(later acquired by Synopsys) and we've got divorce. At QTronic I worked on a Java/SWT desktop app using technologies I had mastered. I was inspired by a teammate, Andrei D., the most intellectually brilliant person I’ve ever met.",
          },
        ],
      },
      {
        kind: "heading",
        level: 3,
        id: "about-11-at-38",
        content: [
          {
            text: "At 38, ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "I resigned from QTronic after realizing that continuing with outdated technologies would limit future opportunities.",
          },
        ],
      },
    ],
  },
  {
    id: "freelancing-leadership-new-horizons",
    title: "Freelancing, Leadership & New Horizons",
    collapsed: false,
    blocks: [
      {
        kind: "image",
        image: {
          src: "images/imported-9ef4938ecdea869b.png",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "image",
        image: {
          src: "images/imported-7a7a1c606f53b7f7.png",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "heading",
        level: 3,
        id: "about-13-at-39",
        content: [
          {
            text: "At 39, ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "I joined ",
          },
          {
            text: "Zenitech ",
            href: "https://zenitech.co.uk/",
          },
          {
            text: "as a Java developer working on a planning platform gateway. While continuing with Java, I learned new tools: Spring Boot, REST APIs, PiTest, and backend security. I’m grateful to Ruxandra, our project manager, for her dedication and support in our professional growth. When my main project entered maintenance mode and I was reassigned to another I didn’t enjoy, I chose to resign. During this time, I also built Metal Investment, a personal portfolio project using modern tech. And then I founded my own company and became self-employed.",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Shortly after, I created my first business (",
          },
          {
            text: "Tone Nelu Cristian Persoana Fizica Autorizata",
            href: "https://www.risco.ro/en/date-firma/43114564",
          },
          {
            text: "), become self-employee and start working with ",
          },
          {
            text: "P4B ",
            href: "https://www.p4b.ro/home",
          },
          {
            text: "where I handled the backend of an app used by general practitioners in Germany. The project’s real-world impact energized me — especially because I was the sole backend developer and had decision-making autonomy. There, I learned Drools, ActiveMQ, and real-time socket communication with the frontend.",
          },
        ],
      },
      {
        kind: "image",
        image: {
          src: "images/imported-5b169eb274f4d55c.jpg",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "heading",
        level: 3,
        id: "about-15-at-40",
        content: [
          {
            text: "At 40, ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "I left P4B as my project ended and the new one didn’t suit me. Within a month, I began a new collaboration with ",
          },
          {
            text: "NTT DATA",
            href: "https://www.nttdata.com/",
          },
          {
            text: ", working on a project that used familiar technologies from TBA and QTronic. I accepted the role because it gave me the opportunity to be a lead developer and because they used new technologies as well. So it was a perfect match. For this, I’m truly grateful. It awakened a new passion in me: leading with empathy. The way I guided the team brought satisfaction not only to the developers, but to the end client as well and to NTT DATA managers.",
          },
        ],
      },
      {
        kind: "image",
        image: {
          src: "images/imported-5b169eb274f4d55c.jpg",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "heading",
        level: 3,
        id: "about-17-at-41",
        content: [
          {
            text: "At 41,",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "I closed my business (",
          },
          {
            text: "Tone Nelu-Cristian Persoana Fizica Autorizata",
            href: "https://www.risco.ro/en/date-firma/43114564",
          },
          {
            text: ") and i started a new one because of taxes changes (",
          },
          {
            text: "Herbs House SRL",
            href: "https://www.risco.ro/en/verifica-firma/herbs-house-cui-47356056",
          },
          {
            text: "). Collaboration with NTT DATA was not impacted and we signed a new contract.",
          },
        ],
      },
      {
        kind: "image",
        image: {
          src: "images/imported-5b169eb274f4d55c.jpg",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "heading",
        level: 3,
        id: "about-19-at-42",
        content: [
          {
            text: "At 42,",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Still working for NTT DATA on the same project and enjoying it.",
          },
        ],
      },
      {
        kind: "image",
        image: {
          src: "images/imported-5b169eb274f4d55c.jpg",
          alt: "Personal journey photograph",
        },
      },
      {
        kind: "heading",
        level: 3,
        id: "about-21-at-43",
        content: [
          {
            text: "At 43, ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "After living in Cluj-Napoca for six years, I decided to relocate to Timișoara to gain new experiences and explore a different culture. Another big change is the client of NTT DATA moved software development to India for cost reasons, ending my collaboration with NTT DATA. I was deeply affected — our team was highly efficient, things were running smoothly, and I could have added value for years to come.",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "From Dec 2024 to March 2025 I developed my second portfolio project: SnowSWT, showcasing the SWT technology I’ve mastered over 15 years. During that time, I was actively working on the Google UX Design Professional Certificate on Coursera, which is currently 80% complete.",
          },
          {
            text: "\n",
          },
          {
            text: "\n",
          },
          {
            text: "Also I decided to close my business (",
          },
          {
            text: "Herbs House SRL",
            href: "https://www.risco.ro/en/verifica-firma/herbs-house-cui-47356056",
          },
          {
            text: ") because from 2026 the taxes would be too high. And I decided to create another company (PFA) and to be self-employee (",
          },
          {
            text: "Tone Nelu-Cristian Persoana Fizica Autorizata",
            href: "https://www.risco.ro/en/verifica-firma/tone-nelu-cristian-persoana-fizica-autorizata-cui-52149812",
          },
          {
            text: "). ",
          },
        ],
      },
    ],
  },
  {
    id: "what-s-next",
    title: "What’s Next",
    collapsed: false,
    blocks: [
      {
        kind: "paragraph",
        content: [
          {
            text: "I’m open to new long-term B2B collaborations in software development and UX design. I'm passionate about crafting thoughtful solutions that balance clean code with intuitive design, and I bring a blend of deep technical experience and user-centered thinking to every project. I'm very open to learn new programming languages or new technologies.",
          },
        ],
      },
    ],
  },
  {
    id: "my-home-office",
    title: "My home office",
    collapsed: false,
    blocks: [
      {
        kind: "image",
        image: {
          src: "images/imported-474554b3173d7a37.jpg",
          alt: "Personal journey photograph",
        },
      },
    ],
  },
] satisfies ContentSection[];
export const hireSections = [
  {
    id: "1-i-have-18-years-real-total-experience-in-software-development",
    title: "1. I have 18 years real total experience in software development",
    collapsed: false,
    blocks: [
      {
        kind: "list",
        ordered: false,
        items: [
          [
            {
              text: "Follow SOLID principles.",
            },
          ],
          [
            {
              text: "17 years experience with Java.",
            },
          ],
          [
            {
              text: "15 years experience with SWT and Eclipse RCP.",
            },
          ],
          [
            {
              text: "5 years experience with Spring Boot, Microservices, REST API, Postman.",
            },
          ],
          [
            {
              text: "Strong skills about debugging in the code.",
            },
          ],
          [
            {
              text: "For more details about my experience please check the ",
            },
            {
              text: "homepage",
              href: "/",
            },
            {
              text: ".",
            },
          ],
        ],
      },
      {
        kind: "disclosure",
        id: "code-review",
        title: "I provide qualitative and professionally code-review.",
        blocks: [
          {
            kind: "heading",
            level: 2,
            id: "hire-me-3-here-s-my-feedback",
            content: [
              {
                text: "Here's my feedback",
              },
            ],
          },
          {
            kind: "heading",
            level: 3,
            id: "hire-me-3-1-general",
            content: [
              {
                text: "1. General",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- It's good that you didn't put any secret in the configuration files of the app and you decided to pass it through environment variables",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- On top of my review you can use chatGPT Codex app to connect chatGPT to your github repo to review code, fix problems, change things. For all of the changes it will create pull requests so you can see it before you merge.",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- It's very good that you put all the entities in the same package, all dto's in the same package and all services in the same packages.",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- Setup the readme.md like you did for the frontend. I like how you did it on frontend repo.",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- Consider creating a constant for system user in a utility class (for instance CommonUtils - see point 10 from this doc) and use that constant everywhere you need.",
              },
            ],
          },
          {
            kind: "heading",
            level: 3,
            id: "hire-me-3-2-pom-xml",
            content: [
              {
                text: "2. Pom.xml",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- Use the same version of spring boot for all spring dependencies. You used 3.1.1 only for parent and not for others. That is one of the reasons why the app doesn't start. And put the version in the properties section so will be easy to modify in the future (like you did for mapstruct.version).",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- Remove the dependency to tomcat. You don't need that specific version.",
              },
            ],
          },
          {
            kind: "heading",
            level: 3,
            id: "hire-me-3-3-liquibase-scripts",
            content: [
              {
                text: "3. Liquibase scripts",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- It's good that you decided to use liquibase to make changes in the database structure. About naming of the scripts I have a suggestion. When you work in a team and each of the members can write everyday liquibase scripts then considering only the date in the filenames is not enough.Also collisions could happen in the merge process. One suggestion is to use an index instead of timestamp. For instance 000001-add-food-for-user-12.xml, 000002-add_email_to_user.xml, etc",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: 'And to have a page somewhere on github or confluence where devs can "book" a new index which they want to use. Another suggestion is to keep the date but also add the time 20240702-140142-add-food-for-user-12.xml, 20240701-071236-add_email_to_user.xml. With the second method you might have problems when your colleagues lives in different countries, different timezones.',
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- You didn't create the rollback section in the liquibase. Because of that then you won't be able to rollback scripts in production with liquibase rollback command and then the only choice would be to fix manually in prod problems related to structure which is a bad idea. I know it's very annoying and time consuming to create a rollback section but it's for safety and all the customers appreciate that. Imagine a scenario when you deploy a new version of your app to prod, something is wrong with the app and the customer requests from you to un-deploy and to deploy the previous version. But your latest version already made changes to the db structure so the previous version of the app won't work until you modify the structure manually. In this situation for instance liquibase rollback command would be useful. So you rollback maybe 3-5 liquibase changesets and then you deploy the previous version of the app.",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- You didn't create any sql index in the liquibase changesets when you define new tables. Those indexes are really helpful to speed-up searching in the table. But do not create indexes for all the columns or column combinations. Firstly create indexes for columns where you estimate you will search from the code. And consider also searching on two columns from the same table. If that happens in the code then you have to create an sql index for both of the columns. Also please pay attention to the index names. It would be good to be like this: <tablename>_<field1>_<field2>...",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- It's very good that you defined foreign keys",
              },
            ],
          },
          {
            kind: "heading",
            level: 3,
            id: "hire-me-3-4-useless-query",
            content: [
              {
                text: "4. Useless @Query",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- you don't need to use @Query for the methods if methods name and parameters are according to schema definition",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- please check all the methods from ExercisesRepository",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- please check all the methods from SetTrackingRepository",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- please check all the methods from UserWeightRepository",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- please check findByUserIdAndDate method from LoggerRepository",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- please check findByUserId from WorkoutsRepository",
              },
            ],
          },
          {
            kind: "heading",
            level: 3,
            id: "hire-me-3-5-creation-of-services-and-controllers",
            content: [
              {
                text: "5. Creation of services and controllers",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- I observed you created constructors with parameters for all the services but there is a big inconvenience about this. For complex apps one service can have references to dozens of repositories or other services or other components. What will you do then? Will you add a constructor with 30 parameters? The solution is to use @Autowired for the fields from service class. ",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- Also for controllers I observed the same thing.",
              },
            ],
          },
          {
            kind: "heading",
            level: 3,
            id: "hire-me-3-6-defaultexercisesconfig-class",
            content: [
              {
                text: "6. DefaultExercisesConfig class",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- checking if system user exists is non-sense because my expectation is that system user is added by liquibase script so it's guaranteed that it's in the database. Generally speaking you should not check in the code if something exists if that was added/set by liquibase script. And if someone modifies MANUALLY the database it's his problem and should not be allowed.",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- the default exercises should be added by liquibase script and not from code.",
              },
            ],
          },
          {
            kind: "heading",
            level: 3,
            id: "hire-me-3-7-controllers",
            content: [
              {
                text: "7. Controllers",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- I like the way you named the REST API's with dash between words and you used the proper http methods (GET, POST, DELETE, PUT)",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- Consider adding the parameter of the ResponseEntity so it's easy to understand the code. Also if you do that later if you implement swagger annotations for documentation then it will be easy to see the type of response. Example:",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: '@PostMapping("add-exercise")',
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: '@PreAuthorize("hasAuthority(T(com.gym_website.util.enums.EAppRoles).MEMBER)")',
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "public ResponseEntity<ResponseDto> addExercise (@RequestBody ExercisesDto exercisesDto){",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " return ResponseEntity.ok(exercisesService.addExercise(exercisesDto));",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "}",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "…",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: '@GetMapping("/get-set/{id}")',
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: '@PreAuthorize("hasAuthority(T(com.gym_website.util.enums.EAppRoles).MEMBER)")',
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: 'public ResponseEntity<SetTrackingDto> getSetTracking(@PathVariable("id") Long id) {',
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " return ResponseEntity.ok(setTrackingService.getSetTracking(id));",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "}",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: '- In the SetTrackingController class remove the / before the endpoints name because it is not needed. For instance here @PostMapping("/add-set")',
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- In ExercisesController, add-exercise endpoint, the request body contains an ID but i guess the frontend when calling that endpoint will not pass any ID because it's the first time when it is created. So the classes which are used for request bodies should not contain fields which are not set ever by the frontend. The solution for that endpoint is to create a new class called RequestAddExercise which contains only the fields which are set by the frontend. Please do similar checks for all the endpoints of all controllers. For the response classes it's similar. Instead of using a generic DTO which also contains fields which are never set the endpoint consider creating dedicated classes for endpoints with Response prefix. I know is not convenient but in the long term the code is easy to maintain because you can easily add/remove a new field from a body of an endpoint without affecting other endpoints.",
              },
            ],
          },
          {
            kind: "heading",
            level: 3,
            id: "hire-me-3-8-namming",
            content: [
              {
                text: "8. Namming",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- consider renaming LoggerController, LoggerService, LoggerRepository, LoggerEntity because it's confusing with logging mechanisms. You do not store in the base the logs of your app but you store the history of user changes. Suggestions for LoggerEntity: UserTrackerEntity or UserHistoryEntity.",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- consider renaming SetTrackingController because of previous suggestions",
              },
            ],
          },
          {
            kind: "heading",
            level: 3,
            id: "hire-me-3-9-responseutilservice",
            content: [
              {
                text: "9. ResponseUtilService",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- in this class there is only one method and that is used only in one controller. From a design perspective this is not good. Instead I recommend you to throw an exception in the controllers (your own exception which extends RuntimeException) and then you create a handler for all exceptions of the API's and use @ControlleAdvice for that. Please do a little bit of research about this. The idea is in that class with @ControlleAdvice you can define a method for each type of exception (triggered in controllers) which you want to catch and you have the control over the response of the API so you can set a specific error code and body.",
              },
            ],
          },
          {
            kind: "heading",
            level: 3,
            id: "hire-me-3-10-loginutilservice",
            content: [
              {
                text: "10. LoginUtilService",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- In Spring Boot as many services you have as heavy/lazy the app becomes. For 100 services it might still be ok but why to implement a service where it's suitable for a utility class? Also in LoginUtilService class you have static methods which violates the concept of a service in spring boot. So my suggestion is to replace it with this",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "public final class CommonUtils {",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " private CommonUtils() {",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " // Prevent instantiation",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " }",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " public static EAppRoles getRole(UserDto userDto) {",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " if (EAppRoles.MEMBER.label.matches(userDto.getRole())) {",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " return EAppRoles.MEMBER;",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " }",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " return EAppRoles.MEMBER;",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " }",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " public static Cookie createJwtCookie(String jwt) {",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: ' Cookie cookie = new Cookie("auth-cookie", jwt);',
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: ' cookie.setPath("/");',
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: ' cookie.setDomain("localhost");',
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " cookie.setHttpOnly(false);",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " return cookie;",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " }",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " public static LocalDateTime getTime (){",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " return LocalDateTime.now();",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " }",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "Also remove TimeUtilService class.",
              },
            ],
          },
          {
            kind: "heading",
            level: 3,
            id: "hire-me-3-11-security",
            content: [
              {
                text: "11. Security",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- In ExercisesController, delete-exercise-{id}, any user can delete any exercise from others based on id which is not good from a security perspective. The solution is to check in the code if that id belongs to the user who passed the request. Please do similar checks also in other controllers.",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- Generally speaking in controllers it's good to test the parameters before using them in the service and repository levels. For instance if you expect a maximum 100 characters for a string parameter then consider checking in the code for 200 characters, so bigger than expected. But without any limitation the hacker can call the API with a generated string of 1GB which can make the app a little bit slower and also can cause a log forging attack if that parameter is logged. Or even worse, the hacker could inject huge values in the database.",
              },
            ],
          },
          {
            kind: "heading",
            level: 3,
            id: "hire-me-3-12-optimizations",
            content: [
              {
                text: "12. Optimizations",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- Such things can be optimized and perform at the end just one query for deletion. And you put that in a try-catch-exception. If exception is triggered then you catch it and you trigger your own runtime exception with specific message",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "If (workoutsRepository.findById(id).isPresent()) {",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " workoutsRepository.deleteById(id);",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "Leaving the code as it is it will result in performing two queries on the database one for find, one for delete. Such optimizations you can do in many other places too. Please check.",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "- I saw many places where actually you don't need to return anything meaningful on the response, like this",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: '@PutMapping("edit-exercise")',
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: '@PreAuthorize("hasAuthority(T(com.gym_website.util.enums.EAppRoles).MEMBER)")',
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "public ResponseEntity editExercise(@RequestBody ExercisesDto exercisesDto){",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " return ResponseEntity.ok(exercisesService.editExercise(exercisesDto));",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "}",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "In this case the response object is just like this",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "ResponseDto responseDto = new ResponseDto();",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: 'responseDto.setSuccessMessage("Exercise modified");',
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "That's not required. Instead you can make the method from controller to return void so code is more simplified. Like this",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: '@PutMapping("edit-exercise")',
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: '@PreAuthorize("hasAuthority(T(com.gym_website.util.enums.EAppRoles).MEMBER)")',
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "public void editExercise(@RequestBody ExercisesDto exercisesDto){",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: " exercisesService.editExercise(exercisesDto);",
              },
            ],
          },
          {
            kind: "paragraph",
            content: [
              {
                text: "}",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2-verifiable-references-from-past-collaborators",
    title: "2. Verifiable references from past collaborators",
    collapsed: false,
    blocks: [
      {
        kind: "paragraph",
        content: [
          {
            text: "Feel free to ask me for the contact details of the following people so you can personally verify with them the references they provided for me. ",
          },
        ],
      },
      {
        kind: "list",
        ordered: false,
        items: [
          [
            {
              text: "Tibor Cseke - Project Manager at NTT DATA - 2024",
            },
          ],
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Our collaboration with Cristian Tone on the project from June 2021 to December 2024 has far exceeded our expectations, and we sincerely hope to work together again on future projects. ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "His professionalism, exceptional team coordination, and effective communication with the end client have made this partnership exemplary. ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "The end client was highly impressed by the speed at which NTT DATA delivered all requested functionalities, a success largely attributed to Mr. Cristian. Additionally, the developers who worked with Cristian Tone at NTT DATA were extremely satisfied with the processes he implemented within the team and the way he led the team. ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Thank you Cristian Tone for an outstanding partnership!",
          },
        ],
      },
      {
        kind: "list",
        ordered: false,
        items: [
          [
            {
              text: "Joachim Ruckaberle - Business Product Owner at Mercedes-Benz AG - 2024",
            },
          ],
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "I am writing to recommend Cristian Tone. He worked with us at Mercedes-Benz AG as a Lead Developer and Project Architect and worked with me in my position as Product Owner.",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "As an employee, Cristian Tone was always passionated and has a solid technical expertise. During his time in my team, he managed to deliver the requested features in time and quality and handle problems in production very fast with provided hotfixes.",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "I’ve always put a premium on independence among my team members and Cristian Tone never failed to deliver. An example was when problems with third party systems arise he takes over the communication with the third party team to solve the problem.",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Cristian Tone is a delight to work with and I wouldn’t hesitate to hire him again.",
          },
        ],
      },
      {
        kind: "list",
        ordered: false,
        items: [
          [
            {
              text: "Irfan Ahamed - Lead Developer at Mercedes-Benz AG - 2024",
            },
          ],
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "I had the pleasure of working with Cristian for almost a year, and I was consistently impressed by his professionalism, flexibility, and strong leadership skills — all essential qualities for an outstanding Tech Lead. ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Cristian combines these skills with exceptional expertise in Java and Rich Client Applications, making him an invaluable asset to any project. ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "His ability to lead, adapt, and deliver results is truly amazing. Any team would be lucky to have Cristian, and I truly miss having him on mine.",
          },
        ],
      },
      {
        kind: "list",
        ordered: false,
        items: [
          [
            {
              text: "Eduard Suranyi - Java Developer at Konecranes/TBA - 2018",
            },
          ],
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "In the first 2 years he was the one who taught me to write graphical interfaces and programming in general, he was the one who laid the foundations in my training as a developer. ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "He offered me support and was always available when I needed it. In discussions with him he was sociable. The predominant qualities of him were those related to the creation of graphical interfaces, 2D and 3D graphics, advanced mathematical calculation. ",
          },
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "From the point of view of the responsibilities passed on after the departure, the notions of programming learned from him and the tasks on the projects he worked on also made it easier for me to take on the responsibilities further, moreover, my team was fully confident that I knew how to implement anything in the applications he worked on.",
          },
        ],
      },
      {
        kind: "list",
        ordered: false,
        items: [
          [
            {
              text: "Bernhard Goldemund - Administrator at QTronic/Synopsys - 2019",
            },
          ],
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "We are sending this letter of recommendation in order to introduce Mr. Nelu-Cristian Tone, an employee of our company during the period 23/04/2018 – 19/11/2019, holding the position of programmer. His main responsibilities consisted of:",
          },
        ],
      },
      {
        kind: "list",
        ordered: false,
        items: [
          [
            {
              text: "Developing software according to specifications.",
            },
          ],
          [
            {
              text: "Designing software components using design patterns.",
            },
          ],
          [
            {
              text: "Analyzing alternative technologies for implementing software components.",
            },
          ],
          [
            {
              text: "During the above-mentioned period, he performed according to expectations for the position held.",
            },
          ],
          [
            {
              text: "Had an appropriate attitude towards superiors and colleagues.",
            },
          ],
          [
            {
              text: "Had no disciplinary sanctions in the last 12 months.",
            },
          ],
          [
            {
              text: "Did not cause any material or reputational damage to our organization.",
            },
          ],
          [
            {
              text: "To our knowledge, is not subject to any ongoing criminal or administrative proceedings.",
            },
          ],
        ],
      },
      {
        kind: "list",
        ordered: false,
        items: [
          [
            {
              text: "Ruxandra Bănici - Project Manager at Zenitech - 2020",
            },
          ],
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Cristian Țone was a Zenitech employee between January and May 2020, holding the position of Senior Developer. During this period, Cristian worked directly with a major client of our company, being part of the client's team. During the hiring process, Cristian also went through interviews with the client, who selected him from several candidates because they found a good match in terms of seniority and openness to innovation. Cristian had a time of adjustment in which he managed to get acquainted with a new technology for himself and managed to work in a short time on the same tasks as his colleagues in the client's team. During the project Cristian was involved in any type of task needed to bring improvements to the project. In addition to development tasks, he also took on tasks to improve the way he works, for example: he understood and documented automatic testing and release processes in order to bring these capabilities within the team and not to depend on other departments. Already working fully in the client's team, the transition to working from home due to the pandemic was made without any impact on productivity and collaboration. During the short time we worked together, I noticed in Cristian both his passion for technology and his desire to collaborate as well as possible with his teammates.",
          },
        ],
      },
      {
        kind: "list",
        ordered: false,
        items: [
          [
            {
              text: "Patrick Morăraș - Production Manager at Funlabs/Activision - 2007",
            },
          ],
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Cristian worked at our company for about two years, completing his assigned tasks on time and to the required quality standard. If life hadn’t forced him to relocate, I’m sure he would still be working with us today. His reserved and calm nature did not stop him from speaking up when encountering problems. When faced with difficult tasks, he didn’t give up and, with help from colleagues and/or the project lead, found solutions and completed the tasks within the required parameters.",
          },
        ],
      },
      {
        kind: "list",
        ordered: false,
        items: [
          [
            {
              text: "Andrei Streche - Lead Project Programmer at Funlabs/Activision - 2007",
            },
          ],
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "I was a colleague of Cristian for a year and a half. During this time, I appreciated his seriousness, punctuality, and dedication. With an open attitude towards new things, Cristian made significant progress as a programmer during his time at FUNlabs, becoming a valued team member. He worked on various modules, from mission scripting to UI and visual effects. He maintained very good working relationships both with colleagues from the programming department and with those from other departments he collaborated with (2D graphics, FX, etc.).",
          },
        ],
      },
      {
        kind: "list",
        ordered: false,
        items: [
          [
            {
              text: "Emil Anghel - Lead Game Designer at Funlabs/Activision - 2007",
            },
          ],
        ],
      },
      {
        kind: "paragraph",
        content: [
          {
            text: "Cristian Tone made a significant contribution to the projects he worked on, fulfilling his tasks with professionalism and enthusiasm. He integrated very well into the programming team, becoming a core member shortly after starting work at Fun Labs. I greatly appreciated the fact that he approached his tasks with the utmost seriousness and dedication and maintained the same attitude throughout a long and important project.",
          },
          {
            text: "\n",
          },
          {
            text: " I’m glad I had the chance to work with him and I wish him all the best.",
          },
        ],
      },
    ],
  },
  {
    id: "3-commitment-and-long-term-collaborations",
    title: "3. Commitment and long-term collaborations",
    collapsed: false,
    blocks: [
      {
        kind: "paragraph",
        content: [
          {
            text: "My last collaboration was with NTT DATA on the same project for about 3.5 years",
          },
        ],
      },
    ],
  },
  {
    id: "4-core-values",
    title: "4. Core values",
    collapsed: false,
    blocks: [
      {
        kind: "list",
        ordered: false,
        items: [
          [
            {
              text: "Efficiency: Achieving expedited software development lifecycles.",
            },
          ],
          [
            {
              text: "High-Quality Code: Developing clean, structured, and maintainable code in adherence to SOLID principles.",
            },
          ],
          [
            {
              text: "Process Optimization: Identifying and implementing strategic enhancements to refine team workflows.",
            },
          ],
          [
            {
              text: "Transparency: Maintaining comprehensive documentation of all processes and agreements to ensure clarity and alignment. ",
            },
          ],
        ],
      },
    ],
  },
  {
    id: "5-soft-skills",
    title: "5. Soft skills",
    collapsed: false,
    blocks: [
      {
        kind: "list",
        ordered: false,
        items: [
          [
            {
              text: "Highly organized and able to prioritize tasks effectively under pressure.",
            },
          ],
          [
            {
              text: "Take ownership and responsibility.",
            },
          ],
          [
            {
              text: "Effective collaboration with cross-functional teams.",
            },
          ],
          [
            {
              text: "Proactive with a solution-oriented mindset.",
            },
          ],
          [
            {
              text: "Human-centered leadership abilities.",
            },
          ],
          [
            {
              text: "Open to learn new technologies.",
            },
          ],
        ],
      },
    ],
  },
  {
    id: "6-home-office",
    title: "6. Home office",
    collapsed: false,
    blocks: [
      {
        kind: "list",
        ordered: false,
        items: [
          [
            {
              text: "I own a high-performance DELL laptop powered by an Intel i9 processor with 24 cores and 32 GB of RAM and Microsoft Windows Pro 11.",
            },
          ],
          [
            {
              text: "I own a Blue Yeti external professional microphone, which delivers exceptionally clear audio quality. ",
            },
          ],
        ],
      },
      {
        kind: "list",
        ordered: false,
        items: [
          [
            {
              text: "In addition, I have a dedicated workspace where I can work without interruptions. ",
            },
          ],
        ],
      },
      {
        kind: "image",
        image: {
          src: "images/imported-7648e8decb2cdd60.jpg",
          alt: "Home office photograph",
        },
      },
      {
        kind: "list",
        ordered: false,
        items: [
          [
            {
              text: "I own an external battery that can keep both the laptop and external monitor running for at least 6 hours, which is very handy during a power outage.",
            },
          ],
        ],
      },
      {
        kind: "image",
        image: {
          src: "images/imported-b4f9557c5685cc76.jpg",
          alt: "Home office photograph",
        },
      },
      {
        kind: "list",
        ordered: false,
        items: [
          [
            {
              text: "I have a stable and fast internet wired connection (up to 1 GB/s) from Orange ",
            },
            {
              text: "https://www.speedtest.net/result/18201493175",
              href: "https://www.speedtest.net/result/18201493175",
            },
          ],
        ],
      },
      {
        kind: "image",
        image: {
          src: "images/imported-ef9d80571c4ab68d.jpg",
          alt: "Home office photograph",
        },
      },
    ],
  },
  {
    id: "7-lead-developer-soft-skills-interview",
    title: "7. Lead Developer Soft Skills Interview",
    collapsed: false,
    blocks: [
      {
        kind: "paragraph",
        content: [
          {
            text: "https://docs.google.com/document/d/1FzE-sGd4dUCzd0pZ6LgCsRFMgm5DBq5265inkfRFvFM",
            href: "https://docs.google.com/document/d/1FzE-sGd4dUCzd0pZ6LgCsRFMgm5DBq5265inkfRFvFM",
          },
        ],
      },
    ],
  },
] satisfies ContentSection[];
export const certificates = [
  {
    id: "certificate-1",
    title: "Bachelor's Degree in Informatics",
    group: "Bachelor's Degree in Informatics",
    image: {
      src: "images/imported-61b8f576c0ab1277.jpg",
      alt: "Bachelor's Degree in Informatics",
    },
  },
  {
    id: "certificate-2",
    title: "Active Listening: The Secret to Effective Communication",
    group: "Leadership courses",
    image: {
      src: "images/imported-52949bd5a4ba9442.jpg",
      alt: "Leadership courses",
    },
  },
  {
    id: "certificate-3",
    title: "Creating a Culture of Collaboration",
    group: "Leadership courses",
    image: {
      src: "images/imported-7fa61d328db7496f.jpg",
      alt: "Leadership courses",
    },
  },
  {
    id: "certificate-4",
    title: "Leadership Mindsets",
    group: "Leadership courses",
    image: {
      src: "images/imported-69988718f3158124.jpg",
      alt: "Leadership courses",
    },
  },
  {
    id: "certificate-5",
    title: "Leading with Emotional Intelligence",
    group: "Leadership courses",
    image: {
      src: "images/imported-53245be0749db2ff.jpg",
      alt: "Leadership courses",
    },
  },
  {
    id: "certificate-6",
    title: "Foundations of User Experience (UX) Design",
    group: "Google UX/UI Design Professional",
    image: {
      src: "images/imported-1ae3ce508301e969.jpg",
      alt: "Google UX/UI Design Professional",
    },
  },
  {
    id: "certificate-7",
    title: "Start the UX Design Process: Empathize, Define, and Ideate",
    group: "Google UX/UI Design Professional",
    image: {
      src: "images/imported-5b762ca16442c074.jpg",
      alt: "Google UX/UI Design Professional",
    },
  },
  {
    id: "certificate-8",
    title: "Conduct UX Research and Test Early Concepts",
    group: "Google UX/UI Design Professional",
    image: {
      src: "images/imported-2d5259e3f64cb4db.jpg",
      alt: "Google UX/UI Design Professional",
    },
  },
  {
    id: "certificate-9",
    title: "Create High-Fidelity Designs and Prototypes in Figma",
    group: "Google UX/UI Design Professional",
    image: {
      src: "images/imported-9c6ab4fb0af429a4.jpg",
      alt: "Google UX/UI Design Professional",
    },
  },
] satisfies Certificate[];
export const branding = {
  background: "images/hero-office.png",
  portrait: "images/cristian-tone-portrait.png",
  logo: "images/imported-76bb7a03b0509b64.png",
  footer: "images/imported-90fd3e324ccaedf8.jpg",
};
