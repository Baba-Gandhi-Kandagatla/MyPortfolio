export interface Project {
  id: string;
  title: string;
  idea: string;
  techStack: string[];
  innovation: string;
  impact: string;
  bgColor: string;
  imageUrl: string;
  imageAlt: string;
  projectUrl?: string; // Optional URL to the live project
  images?: string[]; // Optional array of additional images for the carousel
}

export const projects: Project[] = [
  {
    id: "skill-forge",
    title: "Skill Forge",
    idea: "A comprehensive LMS platform integrating topic-wise PDFs, recorded videos, quizzes, assessments, and an AI tutor powered by a vector database, combined with custom study plans.",
    techStack: ["MERN", "AI", "Gamification"],
    innovation: "Combines advanced AI tutoring with interactive gamification, offering personalized learning roadmaps and engaging multiplayer quiz battles through matchmaking.",
    impact: "Transforms learning by integrating modern tech and gamification, boosting student engagement and skill development.",
    bgColor: "bg-indigo-700",
    imageUrl: "/imgs/projects/skill-forge/1.png",
    imageAlt: "Skill Forge Dashboard",
    images: [
      "/imgs/projects/skill-forge/1.png",
      "/imgs/projects/skill-forge/2.png",
    ]
  },
  {
    id: "breast-cancer-detection",
    title: "Breast Cancer Detection Using AI & VR",
    idea: "An AI-driven system for detecting breast cancer in ultrasound images, visualized in a VR environment.",
    techStack: ["MERN Stack", "Flask", "Unreal Engine", "EfficientNet", "U-Net","UnetR", "Vit b 16"],
    innovation: "Real-time AI-based classification and segmentation of ultrasound imagery, with immersive VR display for detailed analysis.",
    impact: "Provides an intuitive tool for medical professionals and students to engage with complex diagnostic data, improving detection rates by 30%.",
    bgColor: "bg-pink-500",
    imageUrl: "/imgs/projects/breast-cancer-detection/1.png",
    imageAlt: "Breast Cancer Detection System Interface",
    images: [
      "/imgs/projects/breast-cancer-detection/1.png",
      "/imgs/projects/breast-cancer-detection/2.png",
    ]
  },
  {
    id: "telegram-assistant",
    title: "AI-Powered Telegram Assistant Bot",
    idea: "A versatile Telegram bot combining multiple AI capabilities for chat, analysis, and information retrieval.",
    techStack: ["Python", "MongoDB", "Flask", "Telegram API"],
    innovation: "Integration of multiple AI models (Gemini AI variants) for different use cases, with sentiment analysis and real-time translation capabilities.",
    impact: "Provides comprehensive AI assistance through chat platform, supporting file analysis, web search, and multi-language communication.",
    bgColor: "bg-cyan-500",
    imageUrl: "/imgs/projects/telegram-assistant/1.png",
    imageAlt: "Telegram Assistant Bot Conversation",
    images: [
      "/imgs/projects/telegram-assistant/1.png",
      "/imgs/projects/telegram-assistant/2.png",
      "/imgs/projects/telegram-assistant/3.png",
    ]
  },
  {
    id: "quiz-generator",
    title: "Interactive Quiz Generator",
    idea: "A web platform that dynamically adjusts quiz difficulty based on user inputs, such as the selected topic and provided documents or internet searches.",
    techStack: ["MERN Stack", "Fast Api with Microsoft Phi 3.5 Mini"],
    innovation: "AI integration to create personalized quizzes that adapt in real-time to the user's skill level.",
    impact: "Enhances user engagement and learning by offering quizzes tailored to individual preferences, resulting in a 50% improvement in quiz completion rates and a better understanding of complex topics.",
    bgColor: "bg-purple-500",
    imageUrl: "/imgs/projects/quiz-generator/1.png",
    imageAlt: "Interactive Quiz Generator Dashboard",
    images: [
      "/imgs/projects/quiz-generator/1.png",
      "/imgs/projects/quiz-generator/2.png",
      "/imgs/projects/quiz-generator/3.png",
    ]
  },
  {
    id: "lms-prototype",
    title: "LMS System Prototype",
    idea: "An LMS prototype with features like PDFs, videos, assessments, and quizzes organized by topics and units.",
    techStack: ["MERN"],
    innovation: "Comprehensive learning management system developed within the constraints of a hackathon.",
    impact: "Provides a foundation for a full-fledged LMS, demonstrating rapid prototyping skills.",
    bgColor: "bg-teal-500",
    imageUrl: "/imgs/projects/lms-prototype/1.png",
    imageAlt: "LMS System Dashboard",
    images: [
      "/imgs/projects/lms-prototype/1.png",
      "/imgs/projects/lms-prototype/2.png",
    ]
  },
  {
    id: "skillsage",
    title: "SkillSage - Mock Interview System",
    idea: "A scalable mock interview system for students, tailored to resumes and dynamically adapting based on interviewee responses.",
    techStack: ["React", "Node", "Express", "PostgreSQL", "Docker"],
    innovation: "Supports real-time, personalized interviews at scale, helping colleges automate and improve their interview processes.",
    impact: "Enables efficient interview preparation for over 300 students simultaneously, with detailed analytics on individual performance, improving overall interview readiness by 40%.",
    bgColor: "bg-blue-500",
    imageUrl: "/imgs/projects/skillsage/1.png",
    imageAlt: "SkillSage Mock Interview Session",
    images: [
      "/imgs/projects/skillsage/1.png",
      "/imgs/projects/skillsage/2.png",
      "/imgs/projects/skillsage/3.png",
    ]
  },
  {
    id: "system-compromise",
    title: "System Compromise Detection Using AI",
    idea: "A desktop application using a Random Forest model to detect system compromise by analyzing network packet flow.",
    techStack: ["Python", "Random Forest", "VirusTotal API"],
    innovation: "Integration of machine learning with real-time threat intelligence for comprehensive system security.",
    impact: "Enhances system security by providing early detection of potential compromises, reducing response time to threats.",
    bgColor: "bg-green-500",
    imageUrl: "/imgs/projects/system-compromise/1.png",
    imageAlt: "System Compromise Detection Dashboard",
    images: [
      "/imgs/projects/system-compromise/1.png",
      "/imgs/projects/system-compromise/2.png",
    ]
  },
  {
    id: "amazon-api",
    title: "Amazon Product Advertising API Integration",
    idea: "Developed an API connection to the Amazon Product Advertising API for a freelance project.",
    techStack: ["AMAZON PAAPI", "PYTHON FLASK"],
    innovation: "Efficient integration of complex e-commerce API for product data retrieval.",
    impact: "Successfully completed the project, earning ₹4,000 and gaining practical experience in API integration.",
    bgColor: "bg-orange-500",
    imageUrl: "/imgs/projects/amazon-api/1.png",
    imageAlt: "Amazon API Integration Dashboard",
    images: [
      "/imgs/projects/amazon-api/1.png",
      "/imgs/projects/amazon-api/2.png",
    ]
  },
  {
    id: "ou-grade-retrieval",
    title: "OU Grade Retrieval Automation",
    idea: "An automated tool for retrieving student grades from the OU university portal.",
    techStack: ["Python", "Web Scraping"],
    innovation: "Automation of a manual, time-consuming process, significantly reducing administrative workload.",
    impact: "Reduced grade retrieval time from three days to one minute, now used by multiple colleges.",
    bgColor: "bg-red-500",
    imageUrl: "./imgs/projects/ou-grade-retrieval/1.png",
    imageAlt: "OU Grade Retrieval System",
    images: [
      "./imgs/projects/ou-grade-retrieval/1.png",
      "./imgs/projects/ou-grade-retrieval/2.png",
    ]
  },
  {
    id: "physics-lab",
    title: "Physics Virtual Lab",
    idea: "A Python Flask application for conducting virtual physics experiments, facilitating remote learning.",
    techStack: ["Python", "Flask", "HTML/CSS", "JavaScript"],
    innovation: "Digitalization of physics experiments, making them accessible remotely and reducing physical lab costs.",
    impact: "Enables students to conduct experiments remotely, reducing costs and increasing accessibility to physics education.",
    bgColor: "bg-yellow-500",
    imageUrl: "./imgs/projects/physics-lab/1.png",
    imageAlt: "Physics Virtual Lab Simulation",
    images: [
      "./imgs/projects/physics-lab/1.png",
      "./imgs/projects/physics-lab/2.png",
      "./imgs/projects/physics-lab/3.png",
      "./imgs/projects/physics-lab/4.png",
    ]
  },
  {
    id: "birthday-app",
    title: "Birthday Wishing App",
    idea: "A personalized mobile app featuring a to-do list, annual birthday wishes, daily NASA space photos, and randomized friend messages.",
    techStack: ["Flutter", "Dart", "NASA API"],
    innovation: "Combination of personal organization tools with engaging, personalized content.",
    impact: "Enhances personal connections and provides daily engagement through varied features.",
    bgColor: "bg-indigo-500",
    imageUrl: "./imgs/projects/birthday-app/1.png",
    imageAlt: "Birthday Wishing App Interface",
    images: [
      "./imgs/projects/birthday-app/1.png",
      "./imgs/projects/birthday-app/2.png",
      "./imgs/projects/birthday-app/3.png",
      "./imgs/projects/birthday-app/4.png",
      "./imgs/projects/birthday-app/5.png",
      "./imgs/projects/birthday-app/6.png",
    ]
  }
];