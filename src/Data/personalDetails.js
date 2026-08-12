export const personalDetails = {
  name: "Keka Dinda",
  tagline: "MCA Student & Software Developer",
  role: "Full-Stack Web & AI/ML Developer",
  status: "Open to Software Engineering Roles & Internships",
  email: "kekadinda1@gmail.com",
  phone: "+91 8327061109",
  location: "Haldia / Purba Medinipur, West Bengal, India",
  socials: {
    github: "https://github.com/kekadinda1",
    linkedin: "https://www.linkedin.com/in/kekadinda1/",
    email: "mailto:kekadinda1@gmail.com",
    phone: "tel:+918327061109"
  },
  about: "I am an MCA graduate student at Haldia Institute of Technology with a strong passion for building responsive full-stack web applications and AI-driven machine learning systems. Experienced in Python, React.js, FastAPI, Flask, and OpenCV with a proven track record in competitive programming (TCS CodeVita Global Rank 4958).",
  
  // Categorized Technical Skills directly from Resume
  skills: [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "C", "SQL"]
    },
    {
      title: "Frameworks & Web Tech",
      skills: ["React.js", "FastAPI", "Flask", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "AI, ML & Data Libraries",
      skills: ["OpenCV", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      title: "Developer Tools & Databases",
      skills: ["MySQL", "Git", "GitHub", "VS Code", "PyCharm", "Eclipse"]
    }
  ],

  // Education Timeline directly from Resume
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Haldia Institute Of Technology",
      location: "Haldia, WB",
      year: "2024 – 2026",
      score: "CGPA: 9.53",
      type: "Post Graduation"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Global Group of Institutions",
      location: "Haldia, WB",
      year: "2021 – 2024",
      score: "CGPA: 8.64",
      type: "Graduation"
    },
    {
      degree: "Higher Secondary (WBCHSE)",
      institution: "Lakshya High School (H.S.)",
      location: "Mahishadal, WB",
      year: "2021",
      score: "Percentage: 76.8%",
      type: "Higher Secondary"
    },
    {
      degree: "Secondary / Madhyamik (10th)",
      institution: "Mahishadal Gayeswari Girls High School",
      location: "Mahishadal, WB",
      year: "2019",
      score: "Percentage: 77.0%",
      type: "Secondary"
    }
  ],

  // Projects directly from Resume
  projects: [
    {
      id: "deepfake-detector",
      title: "Deepfake Detector & Video Summarization",
      tech: "Python, FastAPI, OpenCV, React.js, Tailwind CSS",
      tags: ["Python", "FastAPI", "OpenCV", "React.js", "Tailwind CSS", "AI/CV"],
      bullets: [
        "Developed an AI-powered web application to detect deepfake images/videos and generate intelligent summaries from CCTV footage.",
        "Built a responsive forensic dashboard in React.js & Tailwind CSS for secure media uploads and real-time visualization.",
        "Built a high-performance FastAPI backend processing frame extraction, facial detection, and model inference via OpenCV."
      ],
      github: "https://github.com/kekadinda1/deepfake-detector",
      liveDemo: null,
      featured: true
    },
    {
      id: "flight-price-prediction",
      title: "Flight Price Prediction System",
      tech: "Python, Flask, Scikit-learn, React, Vercel, Render",
      tags: ["Python", "Flask", "Scikit-Learn", "React.js", "Vercel", "Render"],
      bullets: [
        "Developed a full-stack machine learning web app to accurately predict domestic flight ticket prices using regression models.",
        "Built a responsive React frontend integrated with a Flask REST API backend, deployed live on Vercel and Render.",
        "Implemented an end-to-end ML workflow including feature engineering, data preprocessing, and model evaluation."
      ],
      github: "https://github.com/kekadinda1/flight_price_prediction_using_ML",
      liveDemo: "https://flight-price-prediction-project-xi.vercel.app/",
      featured: true
    },
    {
      id: "smart-retail-billing",
      title: "Smart Retail Billing",
      tech: "Python, OpenCV, MySQL",
      tags: ["Python", "OpenCV", "MySQL", "Computer Vision"],
      bullets: [
        "Developed a Barcode/QR-based Retail Billing System enabling rapid product scanning and instant inventory lookup.",
        "Automated invoice generation and receipt printing, significantly reducing manual billing turnaround time.",
        "Implemented real-time barcode decoding and synchronized pricing retrieval from a relational MySQL database."
      ],
      github: "https://github.com/kekadinda1/Smart-Retail-QR-Billing",
      liveDemo: null,
      featured: false
    },
    {
      id: "productivity-dashboard",
      title: "Productivity Dashboard",
      tech: "HTML5, CSS3, JavaScript, React",
      tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Vercel"],
      bullets: [
        "Developed a modern productivity dashboard web application featuring intuitive goal tracking and task management.",
        "Engineered a responsive, distraction-free UI and deployed the application live on Vercel for high availability."
      ],
      github: "https://github.com/kekadinda1/ProductivityDashboard",
      liveDemo: "https://productivity-dashboard-one-beta.vercel.app/",
      featured: false
    }
  ],

  // Achievements directly from Resume with verified certificate links
  achievements: [
    {
      title: "TCS CodeVita Global Rank 4958",
      organization: "Tata Consultancy Services (TCS)",
      desc: "Secured Global Rank 4958 in the prestigious TCS CodeVita global competitive programming competition, demonstrating strong algorithmic problem-solving capabilities.",
      tag: "Competitive Programming",
      linkText: "View Certificate",
      link: "https://drive.google.com/file/d/1zxUCToFEIErWTePH5SStnPRiIkDRh9ng/view?usp=sharing"
    },
    {
      title: "Certified Python Professional",
      organization: "OpenEDG Python Institute",
      desc: "Earned Python Professional Certification from OpenEDG Python Institute, validating advanced proficiency in Python programming, OOP, and data structures.",
      tag: "Certification",
      linkText: "View Certificate",
      link: "https://drive.google.com/file/d/1szVon3rtAFetvESLQR98QJHN-rpklb0T/view?usp=sharing"
    }
  ]
};