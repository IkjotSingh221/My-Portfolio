import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  mongodb,
  git,
  gemma,
  fastapi,
  scikit,
  tensorflow,
  numpy,
  pandas,
  langchain,
  database,
  costacloud,
  littlabs,
  diabetic,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "ML Engineer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "LLM Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Numpy",
    icon: numpy,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Langchain",
    icon: langchain,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Database",
    icon: database,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },{
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
];

const experiences = [
  {
    title: "AI/ML Intern",
    company_name: "Costacloud",
    icon: costacloud,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Leveraged Azure OpenAI API to use ChatGPT in streamlining the development of various automation applications.",
      "Utilized Langchain for prompt engineering , creating RAG chain and few-shot prompting.",
      "Used Chromadb as vector store to implement RAG chain.",
      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Litt Labs",
    description:
      "Web application enhancing learning with AI-powered tools including a dashboard, to-do list, calendar, community forum, markdown notes, SnapSolver, flashcard generator, summarizer, interview analyzer, resume scorer, and personalized deadline manager with skill roadmaps.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python-fastapi-langchain",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: littlabs,
    source_code_link: "https://github.com/IkjotSingh221/LittLabs",
  },
  {
    name: "Diabetic Retinopathy Detection",
    description:
      "Web application equipped with a machine learning model that can detect diabetic retinopathy in retinal images, providing a quick and accurate diagnosis for patients.",
    tags: [
      {
        name: "html-css-js",
        color: "blue-text-gradient",
      },
      {
        name: "python-fastapi-tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: diabetic,
    source_code_link: "https://github.com/IkjotSingh221/Diabetic-Retinopathy",
  },
  {
    name: "Gemma Python Programming",
    description:
      "A Jupyter Notebook using Gemma-2b to build an AI assistant for Python programming queries, leveraging RAG chains, Few-Shot Prompting, Fine-Tuning, and TOPSIS for model comparison.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "langchain",
        color: "green-text-gradient",
      },
      {
        name: "LLM",
        color: "pink-text-gradient",
      },
    ],
    image: gemma,
    source_code_link: "https://github.com/IkjotSingh221/Gemma-Python-Programming",
  },
];

export { services, technologies, experiences, testimonials, projects };
