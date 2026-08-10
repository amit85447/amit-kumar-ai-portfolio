import { Project, SkillCategory, JourneyStep, AnalyticsRecord } from "../types";

export const PERSONAL_INFO = {
  name: "Amit Kumar",
  title: "Data Analyst | AI/ML Enthusiast | GIS & Remote Sensing",
  tagline: "Geography graduate transforming complex spatial and numerical data into actionable AI insights.",
  location: "Himachal Pradesh, India",
  email: "amitsarotri@gmail.com",
  githubUrl: "https://github.com/amit85447",
  linkedinUrl: "https://www.linkedin.com/in/amit-kumar-898226267",
  resumeFileName: "Amit_Kumar_Resume.pdf",
  bio: "Geography graduate passionate about Data Analytics, Python, Machine Learning, Artificial Intelligence, GIS and Remote Sensing. I enjoy transforming data into meaningful insights and building practical intelligent applications.",
  education: {
    degree: "Bachelor of Arts (BA) – Geography",
    college: "Government Degree College, Nagrota Bagwan",
    location: "Himachal Pradesh, India",
    highlights: [
      "Specialized in Spatial Analysis, Climatology, and Cartography",
      "Bridge between Physical Geography and Geospatial AI / Data Science",
      "Active participant in academic research and analytical project work"
    ]
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "🐍 Programming",
    icon: "Code2",
    skills: ["Python", "SQL"]
  },
  {
    title: "📊 Data Analytics",
    icon: "BarChart3",
    skills: ["Pandas", "NumPy", "Excel", "Matplotlib", "Seaborn", "Power BI", "EDA", "Data Cleaning"]
  },
  {
    title: "🤖 Machine Learning",
    icon: "Brain",
    skills: [
      "Scikit-learn",
      "Linear Regression",
      "Logistic Regression",
      "Random Forest",
      "KNN",
      "Classification",
      "Regression",
      "Feature Engineering",
      "Model Evaluation",
      "Data Preprocessing"
    ]
  },
  {
    title: "🧠 Deep Learning",
    icon: "Cpu",
    skills: ["PyTorch", "Neural Networks", "Image Processing"]
  },
  {
    title: "🗺️ GIS & Remote Sensing",
    icon: "Globe2",
    skills: [
      "GIS",
      "Remote Sensing",
      "Spatial Analysis",
      "Satellite Data",
      "Land Use/Land Cover",
      "Change Detection",
      "Band Composites"
    ]
  },
  {
    title: "💻 Development & Tools",
    icon: "Wrench",
    skills: ["Streamlit", "Tkinter", "MySQL", "Git", "GitHub", "REST APIs", "Express.js"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "cyber-attack-detection",
    title: "AI-Based Cyber Attack Detection",
    category: "ai-ml",
    tech: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "Data Visualization"],
    desc: "A cybersecurity analytics project designed to analyze network traffic data and identify suspicious or malicious attack patterns using supervised ML algorithms.",
    detailedDesc: "Evaluates key network flow features (packet size, flow duration, login attempts) to detect anomalies like DDoS attacks, port scans, and brute-force attempts with high statistical accuracy.",
    github: "https://github.com/amit85447/cyber-attack-detection",
    demoUrl: "#simulator-cyber",
    hasSimulator: true
  },
  {
    id: "candidate-selection-system",
    title: "AI-Based Candidate Selection System",
    category: "ai-ml",
    tech: ["Python", "PyTorch", "Scikit-learn", "Machine Learning", "Streamlit"],
    desc: "An intelligent applicant screening engine using machine learning to evaluate candidate profiles, skill matrices, and recruitment suitability scores.",
    detailedDesc: "Uses weighted scoring heuristics and classification models to assist HR teams in fast-tracking qualified candidates based on technical proficiencies and portfolio experience.",
    github: "https://github.com/amit85447/candidate-selection-system",
    demoUrl: "#simulator-candidate",
    hasSimulator: true
  },
  {
    id: "student-result-prediction",
    title: "Student Result Prediction & Analytics",
    category: "ai-ml",
    tech: ["Python", "Pandas", "Machine Learning", "Streamlit", "Matplotlib"],
    desc: "A student performance analytics application for exploring academic records, predicting pass/fail probabilities, and diagnosing learning gaps.",
    detailedDesc: "Applies regression and classification algorithms to historical test scores and attendance metrics to generate actionable early intervention warnings for educators.",
    github: "https://github.com/amit85447/student-result-prediction",
    demoUrl: "#simulator-student",
    hasSimulator: true
  },
  {
    id: "student-attendance-management",
    title: "Student Attendance Management System",
    category: "dev-tools",
    tech: ["Python", "Tkinter", "Pandas", "Excel"],
    desc: "A desktop GUI application for student registration, attendance tracking, automated Excel log export, and summary reporting.",
    detailedDesc: "Features student database CRUD operations, date-wise attendance logging, sheet export, and instant statistical breakdown of overall class attendance rates.",
    github: "https://github.com/amit85447/attendance-management",
    demoUrl: "#simulator-attendance",
    hasSimulator: true
  },
  {
    id: "weather-forecast-app",
    title: "Weather Forecast Application",
    category: "data-analytics",
    tech: ["Python", "Streamlit", "API", "Pandas", "Matplotlib"],
    desc: "An interactive weather application designed to display real-time forecast data, humidity/wind trends, and historical temperature charts.",
    detailedDesc: "Connects to live weather APIs to visualize daily and weekly weather patterns with responsive plots and extreme weather alert notifications.",
    github: "https://github.com/amit85447/weather-forecast-app",
    demoUrl: "#simulator-weather",
    hasSimulator: true
  },
  {
    id: "ai-voice-assistant",
    title: "AI Voice Assistant",
    category: "dev-tools",
    tech: ["Python", "Speech Recognition", "Text-to-Speech", "Automation"],
    desc: "A Python voice assistant capable of processing spoken speech commands, web searching, system control, and automated task execution.",
    detailedDesc: "Integrates PyTTSx3 / gTTS voice engines with Google Speech Recognition to respond to natural language queries, open desktop apps, and read out notes.",
    github: "https://github.com/amit85447/ai-voice-assistant",
    demoUrl: "#simulator-voice",
    hasSimulator: true
  },
  {
    id: "geovision-ai",
    title: "GeoVision AI – LULC Classification",
    category: "gis-remote-sensing",
    tech: ["Python", "PyTorch", "GIS", "Remote Sensing", "Deep Learning"],
    desc: "A geospatial deep learning project focused on automated Land Use/Land Cover (LULC) classification from multispectral satellite imagery.",
    detailedDesc: "Utilizes convolutional neural network architectures to segment satellite rasters into Vegetation, Urban, Water, Bare Soil, and Agricultural classes.",
    github: "https://github.com/amit85447/geovision-ai",
    demoUrl: "#simulator-geovision",
    hasSimulator: true
  },
  {
    id: "geochange-ai",
    title: "GeoChange AI – Satellite Change Detection",
    category: "gis-remote-sensing",
    tech: ["Python", "PyTorch", "Remote Sensing", "Satellite Image Analysis", "Deep Learning"],
    desc: "A satellite image change detection framework focused on quantifying urban expansion, deforestation, and water body variations over time.",
    detailedDesc: "Compares bi-temporal Sentinel-2 and Landsat imagery to automatically highlight pixel-level land cover transitions and compute acreage loss or gain.",
    github: "https://github.com/amit85447/geochange-ai",
    demoUrl: "#simulator-geochange",
    hasSimulator: true
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    title: "🎓 BA Geography Foundation",
    subtitle: "GDC Nagrota Bagwan, Himachal Pradesh",
    period: "Undergraduate Study",
    description: "Built strong spatial thinking, cartographic knowledge, physical geography understanding, and demographic/environmental analytical skills.",
    icon: "GraduationCap"
  },
  {
    title: "🐍 Python & Analytical Programming",
    subtitle: "Self-Driven Technical Transition",
    period: "Core Skill Building",
    description: "Mastered Python programming, file handling, algorithmic problem solving, GUI development with Tkinter, and script automation.",
    icon: "Code"
  },
  {
    title: "📊 Data Analytics & SQL",
    subtitle: "Data Manipulation & Visualization",
    period: "Analytics Mastery",
    description: "Gained expertise in Pandas, NumPy, SQL query design, Exploratory Data Analysis (EDA), Seaborn, Matplotlib, and Power BI dashboards.",
    icon: "BarChart2"
  },
  {
    title: "🤖 Machine Learning & Predictive Modeling",
    subtitle: "Supervised & Unsupervised Learning",
    period: "AI Specialization",
    description: "Developed algorithms for regression, classification, Random Forest, KNN, feature engineering, cross-validation, and model metrics.",
    icon: "BrainCircuit"
  },
  {
    title: "🧠 Deep Learning & PyTorch",
    subtitle: "Neural Networks & Computer Vision",
    period: "Advanced AI",
    description: "Explored deep learning architectures, PyTorch tensor manipulation, image processing, and neural net model training.",
    icon: "Cpu"
  },
  {
    title: "🛰️ GIS & Remote Sensing Integration",
    subtitle: "GeoAI & Satellite Data Analysis",
    period: "Domain Fusion",
    description: "Combined BA Geography knowledge with AI to build GeoVision LULC classifiers, spatial analyzers, and satellite change detection tools.",
    icon: "Satellite"
  },
  {
    title: "💼 Career-Ready Data & AI Specialist",
    subtitle: "Himachal Pradesh, India",
    period: "Present Goal",
    description: "Actively seeking opportunities as a Data Analyst, AI/ML Associate, or GIS Specialist to solve real-world data challenges.",
    icon: "Briefcase"
  }
];

export const ANALYTICS_DATA: AnalyticsRecord[] = [
  { month: "Jan", Kangra: 240, Mandi: 180, Shimla: 310, Kullu: 150, Solan: 290 },
  { month: "Feb", Kangra: 280, Mandi: 210, Shimla: 340, Kullu: 190, Solan: 310 },
  { month: "Mar", Kangra: 310, Mandi: 250, Shimla: 380, Kullu: 230, Solan: 350 },
  { month: "Apr", Kangra: 350, Mandi: 290, Shimla: 420, Kullu: 280, Solan: 390 },
  { month: "May", Kangra: 390, Mandi: 340, Shimla: 450, Kullu: 330, Solan: 420 },
  { month: "Jun", Kangra: 420, Mandi: 380, Shimla: 490, Kullu: 370, Solan: 460 },
  { month: "Jul", Kangra: 380, Mandi: 350, Shimla: 460, Kullu: 340, Solan: 430 },
  { month: "Aug", Kangra: 440, Mandi: 410, Shimla: 510, Kullu: 410, Solan: 480 }
];
