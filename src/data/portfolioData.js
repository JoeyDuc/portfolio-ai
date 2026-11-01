// Portfolio content is based on the supplied personal and project data.
// Unknown contact details and unsupported credentials intentionally stay empty.

export const PERSONAL = {
  name: 'Mai Anh Đức',
  displayName: 'Mai Anh Duc',
  location: 'Vietnam',
  status: 'Undergraduate Student',
  shortTitle: 'Software Engineering → Data Science & AI',
};

export const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const HERO_TYPING_TEXTS = [
  'Software Developer',
  'Data Science & AI Enthusiast',
  'Machine Learning Learner',
  'Computer Vision & NLP Explorer',
];

export const HERO_DATA = {
  name: PERSONAL.displayName,
  title: 'Software Developer exploring Data Science & AI',
  tagline:
    "I'm an Information Technology student at PTIT with a foundation in software development. I build reliable software and explore how data and AI can solve meaningful problems.",
  primaryCTA: 'Explore My Work',
  secondaryCTA: 'About Me',
  stats: [
    { value: '3.51', label: 'GPA / 4.00' },
    { value: 'PTIT', label: 'University' },
    { value: 'IT', label: 'Undergraduate' },
    { value: 'AI / ML', label: 'Current Focus' },
  ],
};

export const ABOUT_BIO_PARAGRAPHS = [
  "I'm an Information Technology undergraduate at the Posts and Telecommunications Institute of Technology (PTIT), Vietnam, with a GPA of 3.51/4.00. My background spans software engineering, web applications, backend systems, databases, network communication, and IoT development.",
  "I'm now building on that foundation through Data Science and AI, with a focus on Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, and Information Retrieval.",
  'I enjoy connecting software, data, and physical devices, and turning theory into practical implementations. My goal is to combine software engineering fundamentals with data-driven approaches to build reliable, intelligent systems.',
];

export const ABOUT_INTERESTS = [
  '💻 Software Engineering',
  '📊 Data Science',
  '🤖 Machine Learning',
  '🧠 Deep Learning',
  '👁️ Computer Vision',
  '💬 Natural Language Processing',
  '🔎 Information Retrieval',
  '🛠️ AI Engineering',
];

export const EDUCATION = [
  {
    institution: 'Posts and Telecommunications Institute of Technology (PTIT)',
    faculty: 'Information Technology 1',
    degree: 'Information Technology — Undergraduate',
    status: PERSONAL.status,
    gpa: '3.51 / 4.00',
    classification: 'Good',
    icon: '🎓',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Systems',
      'Computer Networks',
      'Network Programming',
      'Software Analysis & Design',
      'Machine Learning',
      'Deep Learning',
    ],
  },
];

// Technologies supplied by the owner or confirmed in project source/dependencies.
// These are familiarity lists, with no proficiency scores or mastery claims.
export const SKILLS = {
  'Programming Languages': [
    'Python', 'Java', 'TypeScript', 'JavaScript', 'C', 'C++', 'Go',
  ],
  'AI / Machine Learning / Data Science': [
    'NumPy', 'Pandas', 'PyTorch', 'TensorFlow', 'Matplotlib', 'scikit-learn',
  ],
  'Frameworks & Libraries': [
    'Spring Boot', 'React', 'FastAPI', 'LangChain', 'LangGraph', 'Streamlit',
  ],
  Databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Microsoft SQL Server', 'SQLite'],
  'MLOps & Model Deployment': ['Docker', 'Docker Compose', 'MLflow', 'DVC', 'GitHub Actions'],
  'Internet of Things (IoT)': ['ESP32', 'MQTT', 'DHT11', 'BH1750'],
  'Tools & Operating Systems': ['Git', 'GitHub', 'Jupyter Notebook', 'Linux', 'macOS', 'Wireshark'],
  'Computer Science Fundamentals': [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'Database Management Systems (DBMS)',
    'Computer Networks',
    'Operating Systems Fundamentals',
    'Software Engineering Principles',
    'Algorithm Analysis & Complexity',
    'Relational Database Design',
  ],
  'Mathematics & Statistics for AI': [
    'Linear Algebra', 'Probability Theory', 'Statistics', 'Calculus',
    'Optimization Fundamentals', 'Descriptive Statistics',
    'Statistical Inference', 'Information Theory',
  ],
  'Machine Learning & Deep Learning Foundations': [
    'Supervised & Unsupervised Learning', 'Data Preprocessing',
    'Feature Engineering', 'Regression & Classification',
    'Model Evaluation Metrics', 'Overfitting & Regularization',
    'Neural Networks & Backpropagation', 'CNN & RNN Fundamentals',
    'Optimization & Gradient Descent', 'Information Retrieval Fundamentals',
  ],
  'English Proficiency': ['English Communication', 'Technical English'],
  'Soft Skills': [
    'Problem Solving', 'Analytical Thinking', 'Teamwork & Collaboration',
    'Communication', 'Time Management', 'Adaptability', 'Continuous Learning',
  ],
};

export const ENGLISH_PROFICIENCY = {
  label: 'TOEIC L&R',
  score: 610,
  maxScore: 990,
  status: 'Actively Improving',
  badge: 'Improving',
  description: 'TOEIC L&R 610. Actively improving English communication and technical language skills for academic and professional development.',
};

// Academic foundations, separate from technology logos and proficiency claims.
// Coursework and repository evidence support the unmarked CS/ML topics;
// remaining topics are explicitly presented as areas of study.
export const FOUNDATION_CARDS = {
  'Computer Science Fundamentals': {
    label: 'Coursework & Projects',
    learning: ['Operating Systems Fundamentals', 'Algorithm Analysis & Complexity'],
  },
  'Mathematics & Statistics for AI': {
    label: 'Currently Learning',
    learning: 'all',
  },
  'Machine Learning & Deep Learning Foundations': {
    label: 'Coursework & Study',
    learning: [
      'Supervised & Unsupervised Learning', 'Regression & Classification',
      'Overfitting & Regularization', 'Neural Networks & Backpropagation',
      'CNN & RNN Fundamentals', 'Optimization & Gradient Descent',
      'Information Retrieval Fundamentals',
    ],
  },
};

// Keep model serving in Frameworks & Libraries to avoid listing FastAPI twice.
// Learning tools are explicitly distinguished from project-backed technologies.
export const SKILL_CONTEXT = {
  FastAPI: 'Model serving and backend APIs — used in the YOLO and career assistant projects',
  Docker: 'Containerization — used in the distributed banking project',
  'Docker Compose': 'Multi-container development and deployment — used in the distributed banking project',
  MLflow: 'Experiment tracking',
  DVC: 'Data and model versioning',
  'GitHub Actions': 'Continuous integration and delivery workflows',
  ESP32: 'Embedded systems and hardware–software integration for connected devices',
  MQTT: 'IoT communication protocol for real-time monitoring and remote device control',
  DHT11: 'Temperature and humidity sensor integration and data acquisition',
  BH1750: 'Ambient light sensing and sensor data acquisition over I2C',
  SQLite: 'Application persistence — used in the YOLO backend',
  'scikit-learn': 'Machine learning — used in the message classification notebook',
  Linux: 'Linux and Unix command-line tools',
};

export const SKILL_STATUS = {
  MLflow: 'Learning',
  DVC: 'Learning',
  'GitHub Actions': 'Learning',
};

export const SKILL_TOOLS = ['Gradle', 'Vite'];

// Concepts and protocols are text labels, not technologies with vendor logos.
export const CORE_CONCEPTS = [
  'Object-Oriented Programming', 'Data Structures & Algorithms', 'Database Design',
  'Relational Database Design', 'SQL', 'REST APIs', 'Socket Programming',
  'Computer Networking', 'TCP/IP', 'UDP', 'HTTP', 'WebSocket', 'WebRTC',
  'Machine Learning', 'Deep Learning', 'Convolutional Neural Networks',
  'Computer Vision', 'Natural Language Processing', 'Information Retrieval', 'Model Evaluation',
];


// Preserve foundational knowledge as tooltips on the related category headers.
export const SKILL_CATEGORY_CONCEPTS = {
  'Programming Languages': ['Object-Oriented Programming', 'Data Structures & Algorithms'],
  'AI / Machine Learning / Data Science': [
    'Machine Learning', 'Deep Learning', 'Convolutional Neural Networks',
    'Computer Vision', 'Natural Language Processing', 'Information Retrieval', 'Model Evaluation',
  ],
  'Frameworks & Libraries': ['REST APIs', 'Socket Programming'],
  Databases: ['Database Design', 'Relational Database Design', 'SQL'],
  'Internet of Things (IoT)': ['Computer Networking', 'TCP/IP', 'UDP', 'HTTP', 'WebSocket', 'WebRTC'],
};

export const EXPERIENCE = [];

// Project descriptions and stacks were checked against the linked repositories.
// Preserve the requested order; the first three entries are featured AI projects.
export const PROJECTS = [
  {
    id: 'weapon-detection-yolo',
    title: 'Weapon Detection with YOLO',
    description:
      'A YOLO-based computer vision platform for image, video, and live webcam analysis, connecting a React interface to FastAPI inference services with detection overlays and event history.',
    highlights: [
      'Image and video uploads, WebSocket-based webcam inference, and configurable detection thresholds.',
      'PyTorch and OpenCV inference; the reference checkpoint detects knives, while gun detection requires custom weights.',
    ],
    tech: ['Python', 'YOLO', 'PyTorch', 'OpenCV', 'React', 'FastAPI', 'WebSocket'],
    category: 'AI & Machine Learning',
    status: 'Applied computer vision',
    featured: true,
    gradient: 'from-blue-500 to-cyan-600',
    emoji: '📷',
    image: '/projects/weapon-detection-overview.png',
    imageAlt: 'Weapon detection application overview from the project repository',
    imageFit: 'cover',
    imagePosition: 'top',
    githubUrl: 'https://github.com/JoeyDuc/weapon-detection-yolo',
    repositoryLabel: 'GitHub repository',
  },
  {
    id: 'message-classification',
    title: 'Message Classification',
    description:
      'A Python NLP notebook that classifies text messages with Gaussian Naive Bayes, combining NLTK preprocessing, custom bag-of-words features, and validation and test splits.',
    highlights: [
      'Lowercasing, punctuation removal, tokenization, stopword filtering, and Porter stemming with NLTK.',
      'Custom word-count vectors, label encoding, and scikit-learn classification with separate validation and test sets.',
    ],
    tech: ['Python', 'Gaussian Naive Bayes', 'scikit-learn', 'NLTK', 'NumPy', 'Pandas', 'Jupyter Notebook'],
    category: 'AI & Machine Learning',
    status: 'NLP notebook',
    featured: true,
    gradient: 'from-purple-500 to-blue-600',
    emoji: '💬',
    githubUrl: 'https://github.com/JoeyDuc/message-classification',
    repositoryLabel: 'GitHub repository',
  },
  {
    id: 'ai-recommendation-system',
    title: 'AI Recommendation System',
    description:
      'A generative AI career assistant prototype exploring PDF resume analysis and personalized guidance through LangGraph multi-agent workflows, a Streamlit interface, and configurable OpenAI or Groq models.',
    highlights: [
      'LangChain tool calling and supervisor-led agent orchestration for resume analysis, career queries, and cover-letter drafting.',
      'Adapted from an open-source career assistant; job-search and web-research tools remain placeholders.',
    ],
    tech: ['Python', 'LangChain', 'LangGraph', 'Streamlit', 'OpenAI API', 'Groq API', 'PyMuPDF'],
    category: 'AI & Machine Learning',
    status: 'Prototype in progress',
    featured: true,
    gradient: 'from-blue-500 to-cyan-600',
    emoji: '🤖',
    image: '/projects/career-assistant-workflow.png',
    imageAlt: 'Repository diagram of the career assistant supervisor and specialist agents',
    imageFit: 'contain',
    imagePosition: 'center',
    githubUrl: 'https://github.com/JoeyDuc/AI-Recommendation-System',
    repositoryLabel: 'GitHub repository',
  },
  {
    id: 'iot-sensor-monitor-system',
    title: 'IoT Sensor Monitoring System',
    description:
      'An ESP32-based monitoring system connecting temperature, humidity, and ambient light sensors over MQTT to Spring Boot services and a React dashboard, with remote LED control.',
    highlights: [
      'DHT11 temperature and humidity sensing and BH1750 light monitoring, integrated through an MQTT gateway.',
      'Sensor history charts, remote LED commands, and device acknowledgements across the backend and dashboard.',
    ],
    tech: ['ESP32', 'DHT11', 'BH1750', 'MQTT', 'Java', 'Spring Boot', 'React', 'PostgreSQL'],
    category: 'Internet of Things',
    status: 'Full-stack IoT',
    featured: false,
    gradient: 'from-purple-500 to-blue-600',
    emoji: '📡',
    githubUrl: 'https://github.com/JoeyDuc/iot-sensor-monitor-system',
    repositoryLabel: 'GitHub repository',
  },
  {
    id: 'distributed-banking-system',
    title: 'Distributed Banking System',
    description:
      'An academic team banking simulation using Spring Boot, React, and MySQL to explore multi-branch transfers, simulated Two-Phase Commit, replication, and concurrency control.',
    highlights: [
      'Team lead, as documented in the repository; multi-branch transaction coordination with simulated Two-Phase Commit.',
      'Row-level locking, deadlock demonstrations, distributed queries, and MySQL primary-replica replication.',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'Docker', 'Docker Compose'],
    category: 'Software Engineering',
    status: 'Academic team project',
    featured: false,
    gradient: 'from-blue-500 to-cyan-600',
    emoji: '🏦',
    githubUrl: 'https://github.com/JoeyDuc/distributed-banking-system',
    repositoryLabel: 'GitHub repository',
  },
  {
    id: 'book-gift-shop',
    title: 'Book & Gift Shop',
    description:
      'A Java 17 Spring Boot backend for a book and gift shop, with layered REST APIs for catalog, cart, and order management, PostgreSQL persistence, validation, and JWT authentication.',
    highlights: [
      'Catalog modules for products, authors, categories, publishers, and promotions, plus cart and order APIs.',
      'Spring Data JPA persistence, request validation, and Spring Security with JWT authentication.',
    ],
    tech: ['Java 17', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'PostgreSQL', 'Gradle'],
    category: 'Software Engineering',
    status: 'Backend application',
    featured: false,
    gradient: 'from-purple-500 to-blue-600',
    emoji: '📚',
    githubUrl: 'https://github.com/JoeyDuc/Book-Gift-Shop',
    repositoryLabel: 'GitHub repository',
  },
];

export const CERTIFICATIONS = [];
export const ACHIEVEMENTS = [];
export const TESTIMONIALS = [];

export const CONTACT_INFO = {
  phone: null,
  email: 'anhduc.coder@gmail.com',
  github: 'github.com/JoeyDuc',
  githubUrl: 'https://github.com/JoeyDuc',
  linkedin: null,
  linkedinUrl: null,
  resume: null,
};

export const SOCIAL_LINKS = [];

export const FOOTER_DATA = {
  name: PERSONAL.displayName,
  tagline: 'Engineering software. Exploring intelligence.',
};
