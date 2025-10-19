import { v4 as uuid } from "uuid";

type ExperienceType = "work" | "community" | "education";

interface Experience {
  id: string;
  title: string;
  type: ExperienceType;
  description?: string;
  organization: {
    name: string;
    url: string;
    logo: string;
  };
  startDate: string;
  endDate: string | null;
}

const experiences: Experience[] = [
  {
    id: uuid(),
    title: "Web Developer",
    type: "work" as const,
    description: `
Collaborated with a team to build scalable and responsive websites for two renowned temples using Next.js, TypeScript, and Tailwind CSS..`,
    organization: {
      name: "Sahynex (formerly ISDC)",
      url: "https://www.sahynex.com",
      logo: "/experiences/sahynex.png",
      location: "Mangalore, Karnataka",
    },
    startDate: "Nov 2024",
    endDate: null,
  },
  {
    id: uuid(),
    title: "Summer Intern",
    type: "work" as const,
    description: `
Worked on ABAP projects using SAP Logon on S/4HANA and ECC to develop custom solutions, resolve incidents, and optimize performance based on client-specific requirements.
Gained exposure to RFCs and Non-Catalogue tasks involving cross-system integrations, data consistency, and smooth business process execution.`,
    organization: {
      name: "Accenture",
      url: "https://www.accenture.com",
      logo: "/experiences/acc.jpg", // replace with your logo
      location: "Bengaluru, Karnataka",
    },
    startDate: "May 2025",
    endDate: "Jul 2025",
  },
  {
    id: uuid(),
    title: "Member",
    type: "community" as const,
    description:
      "Member of the Sahyadri Open Source Community (SOSC), volunteering for events and workshops.",
    organization: {
      name: "Sahyadri Open Source Community (SOSC)",
      url: "https://sosc.org.in",
      logo: "/experiences/sosc.jpeg",
    },
    startDate: "Dec 2024",
    endDate:null,
  },
  // {
  //   id: uuid(),
  //   title: "President",
  //   type: "community" as const,
  //   description:
  //     "Lead open-source community at Sahyadri, organizing events, workshops, and hackathons to promote open source.",
  //   organization: {
  //     name: "Sahyadri Open Source Community (SOSC)",
  //     url: "https://sosc.org.in/",
  //     logo: "/experiences/sosc.jpeg",
  //   },
  //   startDate: "Jun 2023",
  //   endDate: "Oct 2024",
  // },
  {
    id: uuid(),
    title: "Core Team - ISDC",
    type: "community" as const,
    description:
      "Core team member of the ISDC, contributing to open-source projects and consultancy initiatives.",
    organization: {
      name: "ISDC",
      url: "https://isdc.vercel.app/",
      logo: "/experiences/isdc.jpg",
    },
    startDate: "Oct 2024",
    endDate: null,
  },
  {
    id: uuid(),
    title: "Secretary",
    type: "community" as const,
    description: "Secretary of Computer Society of India, Sahyadri Student Chapter.",
    organization: {
      name: "IEEE Mangalore Subsection",
      url: "https://ieee.org/mangalore/",
      logo: "/experiences/ieee.png",
    },
    startDate: "May 2025",
    
  },
  {
    id: uuid(),
    title: "Treasurer",
    type: "community" as const,
    description: "Served as the Treasurer, managing finances and budgets for CLOUDS Association.",
    organization: {
      name: "CLOUDS Association, Sahyadri",
      url: "https://clouds.sahyadri.edu.in/",
      logo: "/experiences/clouds.png",
    },
    startDate: "Oct 2024",
    
  },
  {
    id: uuid(),
    title: "Treasurer",
    type: "community" as const,
    description:
    "Managed the finances and budgeting for IEEE events and activities as the Treasurer of IEEE Student Branch SCEM.",
    organization: {
      name: "IEEE Mangalore Subsection",
      url: "https://ieee.org/",
      logo: "/experiences/ieee.png",
    },
    startDate: "May 2025",
   
  },
  {
    id: uuid(),
    title: "Member",
    type: "community" as const,
    description: "Member of the IEEE Mangalore Subsection.",
    organization: {
      name: "IEEE Mangalore Subsection",
      url: "https://ieee.org/mangalore/",
      logo: "/experiences/ieee.png",
    },
    startDate: "Feb 2025",
    endDate: null,
  },
  // {
    //   id: uuid(),
    //   title: "Postman Student Leader",
    //   type: "community" as const,
    //   description:
    //     "Conducted workshops and training sessions on API development and testing using Postman.",
  //   organization: {
  //     name: "Postman",
  //     url: "https://postman.com/",
  //     logo: "/experiences/postman.png",
  //   },
  //   startDate: "Oct 2022",
  //   endDate: "Oct 2023",
  // },
  {
    id: uuid(),
    title: "Student Ambassador Sahyadri IIC",
    type: "community" as const,
    description:
      "Represented Sahyadri College of Engineering and Management as a Ministry of Education (MoE) Innovation Cell (IIC) Student Ambassador, promoting innovation and entrepreneurship among students.",
    organization: {
      name: "Sahyadri Institution Innovation Cell MOE",
      url: "https://www.linkedin.com/company/sahyadri-institute-innovation-council-iic",
      logo: "/experiences/iic.jpg",
    },
    startDate: "June 2025",
    endDate: null,
  },
  {
    id: uuid(),
    title: "B.E in Computer Science",
    type: "education" as const,
    description: "Bachelor's degree in Computer Science and Engineering",
    organization: {
      name: "Sahyadri College of Engineering and Management",
      url: "https://sahyadri.edu.in/",
      logo: "/experiences/sahyadri.png",
    },
    startDate: "Oct 2022",
    
  },
].sort((a, b) => Date.parse(b.startDate) - Date.parse(a.startDate));

export const workExperiences = experiences.filter((exp) => exp.type === "work");
export const communityExperiences = experiences.filter(
  (exp) => exp.type === "community"
);
export const educationExperiences = experiences.filter(
  (exp) => exp.type === "education"
);

export { experiences };
