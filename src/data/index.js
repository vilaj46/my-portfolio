import images from "./images";

const {
  fcp,
  dd,
  unionGables,
  easyHeaders,
  mockCritical,
  glorifiedTodo,
  ddr,
  brief,
} = images;

const data = [
  {
    title: "Franklin Court Press",
    type: "Websites",
    images: [...fcp],
    href: "franklin-court-press",
    url: "http://www.franklincourtpress.com/",
    repo: "https://github.com/vilaj46/fcp-next",
    backend: "",
    info: "NextJS App with Contact Form",
    info2:
      "This application was built to familiarize myself with the Next.js framework and to create a basic contact form.",
    tech: ["NextJS", "Express"],
    details:
      "Initially this application was deployed via Heroku. After discovering Vercel, the website was promptly switched over. Vercel's serverless functions greatly reduced the contact form complexity and request speed that comes with Heroku's default product.",
  },
  {
    title: "Ad1 & Ad2 Brief Preparation",
    type: "Applications",
    images: [...brief],
    href: "ad1-ad2-brief-preparation",
    url: "",
    repo: "https://github.com/vilaj46/ad1-ad2-briefs",
    backend: "",
    info: "Desktop application which reads a Table of Contents, bookmarks, and hyperlinks a specific type of PDF document.",
    info2:
      "This application was built to assist in preparing NYS briefs. Between the bookmarking and hyperlinking in a PDF, manually doing this is a nightmare.",
    tech: ["React", "Electron", "Python", "Flask", "Automation"],
    details:
      "This desktop application was originally built to familiarize myself with electron and creating a desktop application. Setup was difficult with using a Flask backend. In the future, would just do a web app if similar technologies are used.",
  },
  {
    title: "Mock Critical",
    type: "Websites",
    images: [...mockCritical],
    href: "mock-critical",
    url: "https://vilaj46.github.io/mock-critical/",
    repo: "https://github.com/vilaj46/mock-critical",
    backend: "",
    info: "React App with Testing / Hooks",
    info2:
      "This application was built with mobile first intentions and to add unit/ integration tests.",
    tech: ["React", "Testing", "Custom Hooks", "Mobile First Design"],
    details:
      "This web application was started to practice css and mainly mobile first design. Since this was already a simple landing page, I've added unit/integration tests as well as custom hooks.",
  },
  {
    title: "Union Gables Inn",
    type: "Websites",
    images: [...unionGables],
    href: "union-gables-inn",
    url: "https://xenodochial-swanson-ae4f70.netlify.app/",
    repo: "https://github.com/vilaj46/union-gables",
    backend: "",
    info: "Gatsby application which makes use of styled/reusable components.",
    info2:
      "This application was built because client complained of previously slow load times in wordpress app.",
    tech: ["Gatsby", "Styled/Reusable components"],
    details:
      "Based off of what the client wanted, Gatsby felt like the obvious choice. The website contains a fair amount of photos and wanted a potential future with blogging. Load times from wordpress to Gatsby increased enormously.",
  },
  {
    title: "Glorified Todo",
    type: "Websites",
    images: [...glorifiedTodo],
    href: "glorified-todo",
    url: "https://vilaj46.github.io/glorified-todo/",
    repo: "https://github.com/vilaj46/glorified-todo",
    backend: "https://github.com/vilaj46/glorified-todo-backend",
    info: "Your standard todo application with authentication.",
    info2:
      "This application was built to enforce CRUD capabilities and deployment.",
    tech: ["React", "CRUD", "Express", "Restful", "Mongo"],
    details:
      "The design was kept simple with the purpose to focus on additional features. This application works without logging in but does not save state. However, you are able to create an account and save your list.",
  },
  {
    title: "Document Downloader/Sidebar - Firefox",
    type: "Extensions",
    images: [...dd],
    href: "document-downloader-sidebar",
    url: "",
    repo: "https://github.com/vilaj46/nyscef-document-downloader",
    backend: "",
    info: "Sidebar extension used to download documents on NYSCEF.",
    info2: "This extension was built to ease the downloading of court records.",
    tech: ["JavaScript"],
    details:
      "This extension was originally built to enforce Vanilla JS knowledge. Scaling the application became difficult for new implementations.",
  },
  {
    title: "Document Downloader/Popup - Chrome",
    type: "Extensions",
    images: [...ddr],
    href: "document-downloader-popup",
    url: "",
    repo: "https://github.com/vilaj46/nyscef-document-download-react",
    backend: "",
    info: "Assistance to download specific documents",
    info2: "This extension was built to ease the downloading of court records.",
    tech: ["React"],
    details:
      "After building the initial iteration, this extension was built with React for better scaling.",
  },
  {
    title: "Easy Headers",
    type: "Websites",
    images: [...easyHeaders],
    href: "easy-headers",
    url: "https://vilaj46.github.io/pdf-ui/",
    repo: "https://github.com/vilaj46/pdf-ui",
    backend: "https://github.com/vilaj46/pdf-ui-backend",
    info: "Page Numbers and Headers UI for PDF documents",
    info2:
      "This application was built to ease the adding multiple headers to a PDF document.",
    tech: ["React", "Flask"],
    details:
      "Most of this application is done in the backend. Simple routes are set up and with the help of a python pdf library changes can be made to a pdf document.",
  },
];

export default data;
