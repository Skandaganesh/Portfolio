import { v4 as uuid } from "uuid"

export const projects = [
  {
    id: uuid(),
    name: "Shri Rama Temple Chokkadi Website",
    description:
      "Streamlined and deployed a fully functional website for Shri Rama Temple, enhancing accessibility for devotees. Optimized performance, improving responsiveness by 30% and reducing load times for seamless user interaction. Enhanced hall booking services with authentication and automated message notifications.",
    image: "/projects/srt.png",
    labels: ["Next.js", "Tailwind CSS", "PostgreSQL", "AWS"],
    date: "February 2025",
    sourceCode: "https://github.com/isecoder/chokkadi-frontend",
    liveUrl: "https://www.srtchokkadi.org/",
  },
  {
    id: uuid(),
    name: "Sahynex Website",
    description:
      "Corporate website for Sahynex Techsolutions Pvt. Ltd. showcasing digital products, AI-driven solutions, and creative services. Developed with focus on clean UI, responsive layout, SEO optimization, and fast load times.",
    image: "/projects/sahynex.png",
    labels: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    date: "July 2025",
    // replace with actual repo if different
    liveUrl: "https://sahynex.com/",
  },
  {
    id: uuid(),
    name: "VidhikBot: AI Assistance for Indian Law",
    description:
      "Built an AI-powered legal chatbot to assist users with Indian law, legal procedures, and rights awareness. Integrated real-time legal query responses and educational resources for law students and practitioners.",
    image: "/projects/vidhik.png",
    labels: ["FastAPI", "Docker", "LangChain", "RAG", "GitHub Actions"],
    date: "February 2025",
    sourceCode: "https://github.com/Skandaganesh/VidhikBot",
    liveUrl: "https://vidhik-bot.vercel.app/",
  },
  {
    id: uuid(),
    name: "PrepHub: Upskilling, Job Portal and Daily Tests",
    description:
      "A Placement Preparation platform with daily aptitude tests, resume tools, and GATE preparation resources. Integrated internship listings and career guidance, benefiting 350+ students with 800+ aptitude tests till now.",
    image: "/projects/prephub.png",
    labels: ["React.js", "Express.js", "Render"],
    date: "January 2025",
    sourceCode: "https://github.com/Skandaganesh/PrepHub",
    liveUrl: "https://prephub.dev/",
  },
  {
    id: uuid(),
    name: "HariHareshwara Temple Website",
    description:
      "Implemented an intuitive Seva booking system with a smooth UI for hassle-free reservations. Enhanced accessibility and reduced load times by 50%, improving user engagement.",
    image: "/projects/hari.png",
    labels: ["Next.js", "Tailwind CSS", "Nest.js", "PostgreSQL", "AWS"],
    date: "November 2024",
    sourceCode: "https://github.com/isecoder/harihara-frontend",
    liveUrl: "https://www.shriharihareshwara.org/",
  },
  {
    id: uuid(),
    name: "Sahyadri College of Engineering & Management Website",
    description:
      "Developed and optimized the official website of Sahyadri College of Engineering & Management with modern, responsive layouts. Integrated multiple features including a research forum, placement dashboard, faculty management, and event modules. Enhanced site structure for better accessibility, navigation, and performance across devices.",
    image: "/projects/sahyadri.png",
    labels: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
    date: "September 2025",
  // update to actual repo if different
    liveUrl: "https://www.sahyadri.edu.in/",
  },
  {
    id: uuid(),
    name: "SWASTHYA: AI Nutrition",
    description:
      "Developed an AI-driven nutrition analysis platform offering personalized dietary recommendations based on uploaded food images.",
    image: "/projects/swasthya.png",
    labels: ["FastAPI", "Machine Learning", "Streamlit", "Python"],
    date: "February 2025",
    sourceCode: "https://github.com/Skandaganesh/SWASTHYA/tree/master",
    liveUrl: "https://swaasthya.netlify.app/",
  },
  
  {
    id: uuid(),
    name: "GenPix: Illustrative AI",
    description:
      "An AI-powered image generation tool that converts Textual Books into detailed visuals, enabling creative and illustrative workflows and providing a unique way to visualize complex narratives.",
    image: "/projects/genpix.png",
    labels: ["AI", "Generative Models", "Next.js", "Tailwind CSS"],
    date: "February 2025",
    sourceCode: "https://github.com/Skandaganesh/genpix",
    liveUrl: "https://genpix.netlify.app/",
  },
  {
    id: uuid(),
    name: "MAPAMS: LLM Safety",
    description:
      "Multi-Agent Prompt Attack Assessment and Mitigation System to detect and defend against malicious or jailbreaking prompts in large language models.",
    image: "/projects/mapams.png",
    labels: ["LLM", "AI Safety", "FastAPI", "LangChain", "Multi-Agent"],
    date: "March 2025",
    sourceCode: "https://github.com/Skandaganesh/MAPAMS",
    liveUrl: "https://jagrathakavach.streamlit.app/",
  },
]
