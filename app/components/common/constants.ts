export const FIRST_NAME = "Rabishankar";
export const LAST_NAME = "Panigrahi";
export const TAG = "Fullstack Developer";
export const ABOUT_ME = `I'm a Fullstack Developer based in Bengaluru, currently working as Lead Frontend Engineer at Adiuvo.

I build product-grade web applications with React, Next.js, TypeScript, and Tailwind CSS, and I also work across backend integrations with Node.js, Express, and MongoDB. My recent work focuses on AI-assisted workflows, real-time systems, and document-heavy interfaces where performance and reliability matter.

I completed my B.E. in Mechanical Engineering from BITS Pilani, Hyderabad Campus (2017-2021) and moved into software engineering full-time, where I enjoy owning features end-to-end from UI architecture to delivery.`;
export const GITHUB_LINK = "https://github.com/Rabishankar1";
export const TWITTER_LINK = "https://x.com/Rabi2569";
export const LINKEDIN_LINK =
  "https://www.linkedin.com/in/rabishankar-6b5158157/";

export const sections = ["about", "experience", "projects"];

class Tech {
  tech_name: string;
  tech_color: string;
  public constructor(tech_name: string, tech_color: string) {
    this.tech_name = tech_name;
    this.tech_color = tech_color;
  }
}

export const TECH_LIST = [
  ["REACT", "#29D8FF"],
  ["NEXT.JS", "#FFFFFF"],
  ["TYPESCRIPT", "#3178C6"],
  ["TAILWIND", "#38BDF8"],
  ["NODE.JS", "#83CD29"],
  ["MONGODB", "#47A248"],
  ["SOCKET.IO", "#F59E0B"],
].map((tech) => new Tech(tech[0], tech[1]));

class Experience {
  company_name: string;
  designation: string;
  start_date: Date;
  end_date?: Date | "current";
  location: string;
  description: string;
  logo?: string;
  public constructor(
    company_name: string,
    designation: string,
    start_date: Date,
    end_date: Date | "current",
    location: string,
    description: string,
    logo: string
  ) {
    this.company_name = company_name;
    this.designation = designation;
    this.start_date = start_date;
    this.end_date = end_date;
    this.location = location;
    this.description = description;
    this.logo = logo;
  }
}

export const EXPERIENCE_LIST = [
  [
    "Adiuvo",
    "Lead Frontend Engineer",
    new Date(2025, 3),
    "current",
    "Bangalore, India",
    `- Led frontend development of a multi-module AI-assisted record management platform built with Next.js and React.
- Designed a reusable data-view framework using TanStack Query, shared hooks, and Socket.IO for search, sort, filter, pagination, optimistic updates, and real-time sync, reducing feature lead time by about 40%.
- Built a scalable UI system using Tailwind CSS v4, Radix UI primitives, and class-variance patterns across dashboards and workflow screens.
- Implemented complex interaction workflows including drag-and-drop interfaces (dnd-kit), async form handling, and multi-state UI transitions.
- Architected the in-app AI assistant layer with streaming chat UI, tool-call routing, automated workflows, and notification pipelines.
- Delivered advanced document handling using pdfjs, react-pdf, pdf-lib, viewerjs, and markdown rendering with robust fallback and error handling.
- Improved performance and reliability with virtualized rendering, guarded re-renders, lazy loading, SSR-aware components, bundle optimization, IndexedDB state recovery, and CI/CD quality checks.`,
    "/images/adiuvo.png",
  ],
  [
    "MerlinAI",
    "React Developer (Contractual)",
    new Date(2024, 8),
    new Date(2025, 2),
    "Remote",
    `- Implemented an AI-powered chatbot that rendered different response types with type-aware visual output.
- Integrated GraphQL APIs into a candidate profile platform for efficient retrieval and dynamic filtering.
- Built responsive high-performance UIs with React and Next.js, improving load speed by about 40% via code splitting, lazy loading, and SSR.
- Optimized state management with React Hooks and Context API to reduce re-renders and improve API efficiency.`,
    "/images/companies/merlin_ai_co_logo.jpg",
  ],
  [
    "Foundit (formerly Monster)",
    "Software Engineer",
    new Date(2023, 4),
    new Date(2024, 7),
    "Bangalore, India",
    `- Integrated generative AI functionality into the email outreach module to improve response rates.
- Added WebSocket-based real-time updates in the customer data platform for synchronized analytics and profile changes.
- Developed visual analytics for candidate employment data in an actionable graphical format.
- Built middleware and API integrations using Node.js and Express in a MERN stack workflow.
- Implemented MongoDB/Mongoose CRUD flows and received a high ownership award for delivery and leadership.`,
    "/images/companies/foundit_jobs_logo.jpeg",
  ],
  [
    "Mahindra Dealership (Basanti Auto Agency)",
    "Frontend Developer",
    new Date(2021, 7),
    new Date(2023, 3),
    "Balasore, India",
    `- Built a web-based reconciliation framework with React to track and fix stock leakage across multiple locations.
- Designed and implemented a real-time tracking dashboard using MUI and D3.js for parts and accessory visibility.
- Created responsive interfaces with HTML, CSS, and TypeScript for internal tools and customer-facing workflows.
- Developed sales and financial reporting dashboards with React and Chart.js for decision support.
- Integrated frontend applications with RESTful backend services to automate business processes and reduce manual effort.`,
    "/images/companies/basanti.jpeg",
  ],
].map(
  (experience: any) =>
    new Experience(
      experience[0],
      experience[1],
      experience[2],
      experience[3],
      experience[4],
      experience[5],
      experience[6]
    )
);

export class Project {
  name: string;
  technologies_used: string[];
  link: string;
  thumbnail: string;
  uuid: string;
  public constructor(
    name: string,
    technologies_used: string[],
    link: string,
    thumbnail: string,
    uuid: string
  ) {
    this.name = name;
    this.technologies_used = technologies_used;
    this.link = link;
    this.thumbnail = thumbnail;
    this.uuid = uuid;
  }
}

export const PROJECTS = [
  [
    "E-commerce Application",
    [
      "React JS",
      "NodeJS",
      "Express",
      "OAuth",
      "Material UI",
      "Responsive Design",
    ],
    "https://qkart-frontend-rabishankar.netlify.app/",
    "/images/thumbnails/qkart.avif",
    "shopping1",
  ],
  [
    "Video Viewing Application",
    ["React", "Javascript", "Emotion styled"],
    "https://rabishankar-xflix.netlify.app",
    "/images/thumbnails/xflix.avif",
    "video1",
  ],
  [
    "Real Estate Application",
    ["React", "MaterialUI", "TailwindCSS", "Bootstrap"],
    "https://rabishankar-real-estate.netlify.app/",
    "/images/thumbnails/real_estate.avif",
    "realestate1",
  ],
].map(
  (project: any) =>
    new Project(project[0], project[1], project[2], project[3], project[4])
);
