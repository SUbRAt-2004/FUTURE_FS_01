import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I’m Subrat Kumar Malla, a passionate full-stack developer and civil engineering undergrad at NIT Rourkela. I specialize in building scalable and user-friendly web applications using React.js, Node.js, MongoDB, and more. With hands-on experience through internships and multiple hackathons, I’ve built everything from video streaming apps to real-time civic reporting platforms — all while blending clean UI, powerful backend logic, and seamless user experience. I thrive on solving real-world problems through tech and love collaborating in fast-paced, innovation-driven environments. Let’s build something impactful together 🚀`;

export const ABOUT_TEXT = `I’m a passionate full stack developer and Civil Engineering student at NIT Rourkela with a strong focus on building scalable, responsive, and user-centric web applications. My tech stack includes React.js, Node.js, MongoDB, Express, and modern UI frameworks like Material UI. With experience from real-world projects and hackathons like Hack4Bengal and the April Cohort Hackathon, I’ve developed platforms ranging from civic hazard reporting systems to AI-powered analytics dashboards. I love solving real problems through code, thrive in collaborative team environments, and continuously explore new technologies to grow as a developer. When I’m not coding, you’ll find me experimenting with design systems, contributing to open-source, or leveling up my skills with new challenges.`;

export const EXPERIENCES = [
  {
    year: "May 2025 - June 2025",
    role: "Full Stack Developer",
    company: "Future Interns",
    description: `Built full stack applications using React.js, Node.js, and MongoDB. Developed a weather dashboard, personal portfolio, and AI-powered website redesign with responsive UI, modern UX, and SEO optimization. Focused on scalable architecture and efficient backend integration.`,
    technologies: ["Express.js", "React.js", "Node.js", "mongoDB", "SEO"],
  },
  {
    year: "June 2025",
    role: "Top 100",
    company: "Hack4Bengal 4.0",
    description: `Built UrbanShield, a real-time civic hazard reporting app that empowered citizens to report problems instantly. Integrated location-based reporting, increased public transparency, and influenced local governance by putting soft pressure on authorities.`,
    technologies: ["EJS", "Express.js", "Node.js", "mongoDB", "Bootstrap", "Flask", "Python", "socket.io"],
  },
  {
    year: "April 2025",
    role: "Winner",
    company: "April Cohort Hackathon",
    description: `Developed a Call Center Analytics Platform with real-time transcription (English & Hindi), speaker identification, sentiment analysis, and dead air detection. Used data visualization to enhance customer insights and operational efficiency.`,
    technologies: ["EJS", "Express.js", "Node.js", "mongoDB", "Gemini API", "Tensorflow"],
  },
];

export const PROJECTS = [
  {
    title: "UrbanShield – Civic Hazard Reporting App",
    image: project1,
    description:
      "A real-time civic issue reporting platform built during Hack4Bengal 4.0. Enabled users to report hazards instantly, increasing public transparency and driving local government accountability.",
    technologies: ["React.js", "Express.js", "MongoDB", "Leaflet.js"],
  },
  {
    title: "Call Center Analytics Platform",
    image: project2,
    description:
      "Hackathon-winning platform with call transcription (English & Hindi), speaker detection, sentiment analysis, dead air detection, and real-time data visualization.",
    technologies: ["Next.js", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Video Streaming App",
    image: project3,
    description:
      "Developed a responsive video streaming platform using React and Material UI. Integrated APIs and React Router DOM for smooth navigation across pages.",
    technologies: ["React.js", "Material UI", "Axios", "React Router DOM"],
  },
  {
    title: "Snake Mania",
    image: project4,
    description:
      "A browser-based interactive Snake game made using vanilla technologies, with smooth controls, custom animations, and engaging sound effects.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "SD Hall of Residence, NIT Rourkela",
  phoneNo: "+91 9040342617 ",
  email: "mallasubratkumar2@gmail.com",
};
