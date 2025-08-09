import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { BsSearch, BsGrid3X3Gap, BsList, BsCode, BsRocket } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "./Projects.css";

// Import project images
import llamalingo from "../../Assets/Projects/llamalingo.png";
import tubegenie from "../../Assets/Projects/tubegenie.png";
import resumemaestro from "../../Assets/Projects/resumemaestro.png";
import ecostock from "../../Assets/Projects/ecostock.webp";
import shems from "../../Assets/Projects/shems.webp";
import taleweaver from "../../Assets/Projects/taleweaver.webp";
import dine from "../../Assets/Projects/dine.webp";
import typeninja from "../../Assets/Projects/typeninja.png";
import GPT from "../../Assets/Projects/GPT.png";
import haronyai from "../../Assets/Projects/haronyai.png";
import hashtable from "../../Assets/Projects/hashtable.png";
import cryptostream from "../../Assets/Projects/cryptostream.png";
import aimarket from "../../Assets/Projects/aimarket.png";
import pygpt2 from "../../Assets/Projects/pygpt2.png";
import futeursecure from "../../Assets/Projects/futeursecure.png";
import isac from "../../Assets/Projects/isac.png";
import futeurvault from "../../Assets/Projects/futeurvault.png";

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [isLoading, setIsLoading] = useState(true);

  // Project data with categories
  const projectsData = useMemo(() => [
    {
      id: 16,
      imgPath: isac,
      title: <span className="purple">ISAC USA</span>,
      description: "I designed and built the ISAC website to serve as a central hub for international students, focusing on performance, accessibility, and ease of use. The platform supports thousands of concurrent visitors and integrates features like verified WhatsApp group directories, webinar scheduling, volunteer onboarding, and success story showcases. I implemented a responsive, mobile-first UI to ensure seamless access across devices, and optimized backend workflows to handle real-time group updates and secure form submissions. The site architecture is built for scalability, allowing ISAC to expand its services without downtime, while maintaining fast load times and a smooth user experience that reflects the organization’s mission to connect and empower students worldwide.",
      demoLink: "https://www.isac-usa.org/",
      category: "Web App",
      techStack: [
        "Responsive UI",
        "Accessibility",
        "Scalable Architecture",
        "Real-time Updates",
        "Secure Forms"
      ]
    },
    {
      id: 15,
      imgPath: futeursecure,
      title: <span className="purple">FuteurSecure</span>,
      description: "FuteurSecure is an enterprise-grade security and compliance platform you developed at Futeur AI to provide organizations with a robust, future-ready defense system. It integrates post-quantum cryptography (CRYSTALS-Kyber and Dilithium) to secure data against emerging quantum threats, ensuring 99.9% protection for information both in transit and at rest while maintaining 100% NIST compliance. Designed for flexibility, it supports plug-and-play integration with any database, reducing deployment friction. The platform combines multiple security layers, including OSSEC HIDS, Wazuh, and Suricata IDS/IPS, which together reduce false positives by 60% and improve threat detection accuracy by 45%. It also features a distributed, tamper-proof logging system powered by Hyperledger Fabric, giving organizations immutable audit trails and analytics dashboards that enable data-driven insights, boosting customer retention by over 70%. This unified approach makes FuteurSecure not just a monitoring tool, but a complete cybersecurity, compliance, and operational intelligence solution .",
      demoLink: "https://www.futeursecure.com/",
      category: "Security",
      techStack: [
        "Post-Quantum Cryptography",
        "CRYSTALS-Kyber",
        "Dilithium",
        "OSSEC",
        "Wazuh",
        "Suricata",
        "Hyperledger Fabric",
        "NIST Compliance",
        "Immutable Logs"
      ]
    },
    {
      id: 17,
      imgPath: futeurvault,
      title: <span className="purple">Futeur Vault</span>,
      description: "Futeur Vault is a secure, web-based password management app designed for individuals and teams to store, organize, and share credentials safely. Built with React, TypeScript, and Supabase, it offers protected routes, a clean UI, and features like category-based storage, quick copy, visibility toggles, and last-updated tracking. Users can share passwords with teammates, attach notes, revoke access anytime, and trigger email alerts via EmailJS, making it both a personal vault and a collaborative security tool.",
      ghLink: "https://github.com/isiddharthsingh/futeur-wallet",
      demoLink: "https://www.futeursecure.com/vault",
      category: "Security",
      techStack: ["React", "TypeScript", "Supabase", "EmailJS", "Tailwind", "shadcn/ui"]
    },
    {
      id: 13,
      imgPath: aimarket,
      title: <span className="purple">Ai Market Analysis</span>,
      description: "Ai-Market-Analysis is a containerized data engineering pipeline powered by Apache Airflow that automatically collects data from Reddit, GitHub, and CoinGecko to analyze trends across the AI, machine learning, and crypto spaces. Orchestrated via Docker Compose, it uses Celery with Redis for task execution and stores consolidated data in PostgreSQL. The system runs three DAGs: one for extraction and ETL, a second for running trend correlations and sentiment analysis, and a third for monitoring data freshness and quality. The pipeline enables insights—like daily counts of AI posts, popular GitHub projects, and crypto trends—and offers SQL queries for deeper exploration. It’s built for long-term trend detection, and the setup is ready for scaling, CI/CD integration, alerting, and visual dashboards in future iterations.",
      ghLink: "https://github.com/isiddharthsingh/Ai-Market-Analysis",
      category: "Data Engineering",
      techStack: ["Airflow", "Docker", "Redis", "Celery", "PostgreSQL", "Python"]
    },
    {
      id: 12,
      imgPath: cryptostream,
      title: <span className="purple">Crypto Stream Ai</span>,
      description: "CryptoStream-AI is a real-time cryptocurrency analytics and forecasting system that fetches live prices from the Coinbase API, streams them through Apache Kafka, processes the data with Apache Spark, and stores it in Cassandra for fast access. The stored data powers Grafana dashboards for real-time monitoring and is also exported to CSV for offline analysis and machine learning models like ARIMA, VAR, moving averages, and LSTM. Forecast results are presented through a Streamlit app, giving users interactive tools to track market trends and predict future price movements.",
      ghLink: "https://github.com/isiddharthsingh/CryptoStream-AI",
      category: "Full Stack",
      techStack: ["Kafka", "Spark", "Cassandra", "Grafana", "Streamlit", "Python"]
    },
    {
      id: 11,
      imgPath: hashtable,
      title: <span className="purple">Multithread Hashtable Benchmark</span>,
      description: "This project benchmarks a multithreaded hash table under different synchronization methods to study their impact on performance and correctness. The baseline version runs without locks, demonstrating how race conditions cause “lost” entries when threads overwrite each other’s updates. Improved versions add per-bucket mutexes for safe concurrent access, optimize mutex use with a reader–writer model to allow parallel reads and bucket-specific writes, and replace mutexes with spinlocks to reduce context-switch overhead in short critical sections. A driver program runs each variant with varying thread counts, measures insertion and retrieval times, and records results for visualization. The comparisons show how each locking strategy trades off speed, CPU usage, and data integrity under different contention levels.",
      ghLink: "https://github.com/isiddharthsingh/Multithread-Hashtable-Benchmark",
      category: "Systems",
      techStack: ["C", "POSIX Threads", "Mutexes", "Reader-Writer Locks", "Spinlocks", "Benchmarking"]
    },
    {
      id: 14,
      imgPath: pygpt2,
      title: <span className="purple">PyGPT2</span>,
      description: "PyGPT2 is a PyTorch-based reimplementation of OpenAI’s GPT-2 architecture, built to train and experiment with transformer language models from scratch. It includes scripts for preparing datasets like FineWeb-Edu, training the 124M-parameter model using both single-GPU and distributed setups, evaluating zero-shot performance on benchmarks such as HellaSwag, and generating text samples. The project provides a clear, modular codebase for understanding GPT-2 internals—covering tokenization, model architecture, training loops, and inference—making it useful for learning, experimentation, and research in natural language processing.",
      ghLink: "https://github.com/isiddharthsingh/PyGPT2",
      category: "AI/ML",
      techStack: ["PyTorch", "Transformer", "DDP", "HellaSwag", "Python"]
    },
    {
      id: 10,
      imgPath: haronyai,
      title: <span className="purple">Harmony AI</span>,
      description: "Harmony AI is an AI-powered productivity assistant that integrates Slack, Trello, Gmail, and Google Calendar to centralize task, email, and follow-up management. It lets users create, update, and delete Trello tasks and checklists directly from Slack, automatically syncing due dates with Google Calendar. The bot can fetch unread Gmail emails and post them in Slack channels, ensuring important messages are seen quickly. By combining these tools, Harmony AI streamlines workflows, reduces context switching, and helps users stay organized through real-time reminders and easy command-based actions inside Slack.",
      ghLink: "https://github.com/isiddharthsingh/mAIgic-nyu/tree/hw3_submission",
      category: "AI/ML",
      techStack: ["Slack API", "Trello API", "Gmail API", "Google Calendar API", "Node.js", "Python"]
    },
    {
      id: 1,
      imgPath: GPT,
      title: <span className="purple">GPT: Transformer-Based Character-Level Language Model</span>,
      description: "I developed and implemented a character-level language model from scratch, inspired by the Transformer architecture introduced in the seminal paper 'Attention is All You Need.' This model leverages self-attention mechanisms to predict the next character in a sequence, capturing both short-term and long-term dependencies within text. Key features include multi-head attention, positional encoding, and the ability to generate coherent text sequences based on learned patterns. The model was implemented using PyTorch and optimized for GPU acceleration, making it a powerful tool for understanding and generating text at a granular level.",
      ghLink: "https://github.com/isiddharthsingh/GPT_Transformer",
      category: "AI/ML",
      techStack: ["PyTorch", "Transformer", "Python", "Machine Learning"]
    },
    {
      id: 2,
      imgPath: llamalingo,
      title: <span className="purple">LlamaLingo</span>,
      description: "Developed an advanced chatbot using the Llama-3 model and Streamlit, integrated via LM Studio as an OpenAI API for scalable operations on a local server. Features include dynamic chat history management and planned enhancements for response customization and detailed logging to enhance user engagement. Key tools: Llama-3, Streamlit, LM Studio, OpenAI API.",
      ghLink: "https://github.com/isiddharthsingh/LlamaLingo",
      category: "AI/ML",
      techStack: ["Llama-3", "Streamlit", "Python", "OpenAI"]
    },
    {
      id: 3,
      imgPath: typeninja,
      title: <span className="purple">TypeNinja</span>,
      description: "This typing game offers a dynamic experience by randomly selecting one of 20 sentences for users to type, ensuring variety with each playthrough. It provides real-time tracking of typing time, accuracy, and words per minute (WPM), allowing users to monitor their performance instantly. To increase the challenge, the game disables the backspace key, promoting focused and accurate typing. The interface is clean, modern, and responsive, making it suitable for various devices. With a simple setup and easy-to-use design, the game is accessible to users of all skill levels.",
      ghLink: "https://github.com/isiddharthsingh/TypeNinja",
      category: "Web App",
      techStack: ["JavaScript", "HTML", "CSS", "React"]
    },
    {
      id: 4,
      imgPath: tubegenie,
      title: <span className="purple">TubeGenie</span>,
      description: "Designed and deployed an AI-driven Q&A system to analyze YouTube video content using OpenAI's GPT-4-turbo model. Utilized Embedchain for data ingestion, ChromaDB for storage, and VectorDB for quick retrieval. The system features an interactive Streamlit user interface for seamless interaction and includes efficient resource management strategies with a cleanup mechanism for temporary data storage. Key technologies: GPT-4-turbo, Embedchain, ChromaDB, VectorDB, Streamlit.",
      ghLink: "https://github.com/isiddharthsingh/TubeGenie",
      category: "AI/ML",
      techStack: ["GPT-4", "Streamlit", "ChromaDB", "VectorDB", "Python"]
    },
    {
      id: 5,
      imgPath: resumemaestro,
      title: <span className="purple">Resume Maestro</span>,
      description: "Engineered a resume optimization application that integrates Streamlit for the frontend and FastAPI for the backend, offering a seamless and user-friendly experience. The system uses OpenAI's GPT-4 to enhance resume content based on job descriptions, supports LaTeX and PDF outputs, and features text extraction from resumes using PyMuPDF. Robust LaTeX templates ensure high-quality document formatting. The backend is scaled and managed using Docker, with features allowing users to upload resumes, input job descriptions, and download optimized resumes in real-time, enhancing user satisfaction and engagement. Key technologies: Streamlit, FastAPI, GPT-4, PyMuPDF, Docker.",
      ghLink: "https://github.com/isiddharthsingh/Resume-Maestro",
      category: "Full Stack",
      techStack: ["Streamlit", "FastAPI", "GPT-4", "Docker", "Python"]
    },
    {
      id: 6,
      imgPath: taleweaver,
      title: <span className="purple">TaleWeaver</span>,
      description: "Developed 'Taleweaver,' an AI-driven platform leveraging AWS Rekognition and OpenAI's GPT for advanced image recognition, natural language processing, and personalized story generation. It features a robust security framework using AWS Cognito and AWS API Gateway for secure, scalable API interactions. Deployed on AWS EC2 with serverless operations through AWS Lambda, it ensures optimal resource management and cost efficiency. The platform also includes a user-centric interface backed by AWS DynamoDB, enhancing user engagement and efficient data management. Key technologies: AWS suite (Rekognition, Cognito, API Gateway, EC2, Lambda, DynamoDB), OpenAI's GPT.",
      ghLink: "https://github.com/isiddharthsingh/Taleweaver",
      category: "Cloud/AWS",
      techStack: ["AWS", "Lambda", "DynamoDB", "OpenAI", "Python"]
    },
    {
      id: 7,
      imgPath: ecostock,
      title: <span className="purple">EcoStock: ESG Driven Market Predictions</span>,
      description: "Utilized various statistical models, including ARIMA, SMA, SARIMAX, VARMAX, and OLS, to forecast stock prices by integrating Environmental, Social, and Governance (ESG) metrics and sentiment analysis from news and social media, thus enhancing prediction accuracy. Specifically applied the VARMAX model to analyze the impact of ESG factors on stock prices, achieving an optimal AIC score of 1338.44. Data integrity was maintained using Alpha Vantage APIs for data collection and processing, along with rigorous data cleaning and normalization. Extensive exploratory data analysis was conducted to understand the correlations between sentiment scores and stock market behaviors, involving correlation analysis and time series visualizations.",
      ghLink: "https://github.com/isiddharthsingh/EcoStock-ESG-Driven-Market-Predictions",
      category: "Data Science",
      techStack: ["Python", "Machine Learning", "API", "Data Analysis"]
    },
    {
      id: 8,
      imgPath: shems,
      title: <span className="purple">Smart Home Energy Management System (SHEMS)</span>,
      description: "Developed a robust web interface for smart device management using HTML, Bootstrap, and Node.js, integrating key functionalities such as energy consumption analytics, device control, model selection, and dynamic data visualization. Advanced security measures like pooled connections, hashed passwords, and protections against SQL injections and XSS were implemented to enhance data integrity and security in a multi-user environment. The system features secure user registration and authentication, comprehensive device management options (add, list, remove devices), detailed energy consumption analysis with graphical representations, and effective concurrent access management.",
      ghLink: "https://github.com/isiddharthsingh/Smart-Home-Energy-Management-System-SHEMS",
      category: "Full Stack",
      techStack: ["Node.js", "HTML", "Bootstrap", "JavaScript"]
    },
    {
      id: 9,
      imgPath: dine,
      title: <span className="purple">Serverless Dining Concierge Chatbot</span>,
      description: "Implemented a serverless, microservice-driven Dining Concierge chatbot using NLP, AWS S3, API Gateway, and AWS Lambda to provide restaurant suggestions tailored to user preferences. Developed a decoupled suggestions module that handles message retrieval via Amazon SQS, recommendation fetching using Amazon ElasticSearch and DynamoDB, and email delivery through Amazon SES. Automated the workflow with CloudWatch event triggers for seamless operation. The system enhances user experience in the hospitality industry with scalable, conversational AI. Key technologies: AWS (S3, Lambda, API Gateway, SQS, ElasticSearch, DynamoDB, SES), NLP, serverless architecture.",
      ghLink: "https://github.com/isiddharthsingh/Serverless-Dining-Concierge-Chatbot",
      category: "Cloud/AWS",
      techStack: ["AWS", "Lambda", "API Gateway", "DynamoDB", "Python"]
    }
  ], []);

  const categories = ["All", "AI/ML", "Full Stack", "Cloud/AWS", "Data Science", "Web App", "Systems", "Data Engineering", "Security"];

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filterProjects = useCallback((category, searchTerm = '') => {
    let filtered = [...projectsData];
    
    if (category !== 'All') {
      filtered = filtered.filter(project => project.category === category);
    }
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.props.children.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.techStack.some(tech => tech.toLowerCase().includes(searchLower))
      );
    }
    
    setFilteredProjects(filtered);
  }, [projectsData]);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    filterProjects(activeFilter, debouncedSearchTerm);
  }, [activeFilter, debouncedSearchTerm, filterProjects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.5
      }
    }
  };

  return (
    <Container fluid className="futuristic-project-section">
      <Particle />
      
      {/* Background Effects */}
      <div className="project-bg-effects">
        <div className="floating-orbs">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`orb orb-${i + 1}`}></div>
          ))}
        </div>
        <div className="grid-pattern"></div>
      </div>

      <Container className="project-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="project-content"
        >
          {/* Header Section */}
          <motion.div variants={headerVariants} className="project-header">
            <div className="header-content">
              <div className="title-section">
                <motion.div 
                  className="header-icon"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <BsRocket />
                </motion.div>
                <div className="title-text">
                  <h1 className="main-title">
                    Featured <span className="gradient-text">Projects</span>
                  </h1>
                  <p className="subtitle">
                    Innovative solutions crafted with cutting-edge technologies
                  </p>
                </div>
              </div>
              
              {/* Project Stats */}
              <motion.div variants={statsVariants} className="project-stats">
                <div className="stat-item">
                  <div className="stat-number">{projectsData.length}</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">{categories.length - 1}</div>
                  <div className="stat-label">Categories</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">∞</div>
                  <div className="stat-label">Possibilities</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Controls Section */}
          <motion.div 
            className="project-controls"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {/* Search Bar */}
            <div className="search-container">
              <BsSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search projects by name, technology, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Filter Categories */}
            <div className="filter-container">
              <div className="filter-header">
                <FiFilter className="filter-icon" />
                <span>Filter by Category</span>
              </div>
              <div className="category-filters">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    className={`category-btn ${activeFilter === category ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BsCode className="category-icon" />
                    <span>{category}</span>
                    <div className="category-count">
                      {category === "All" 
                        ? projectsData.length 
                        : projectsData.filter(p => p.category === category).length
                      }
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="view-controls">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <BsGrid3X3Gap />
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <BsList />
              </button>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="projects-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {isLoading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading amazing projects...</p>
              </div>
            ) : (
              <div className={`projects-grid ${viewMode}`}>
                <motion.div className="project-rows" layout>
                  <AnimatePresence>
                    {filteredProjects.length > 0 ? (
                      filteredProjects.map((project, index) => (
                        <motion.div
                          key={project.id}
                          className={`project-col ${viewMode === 'grid' ? 'col-md-4' : 'col-12'}`}
                          initial={{ opacity: 0, y: 50, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -50, scale: 0.9 }}
                          transition={{ 
                            delay: index * 0.05, 
                            duration: 0.4,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          layout
                        >
                                                      <ProjectCard
                              imgPath={project.imgPath}
                              isBlog={false}
                              title={project.title}
                              description={project.description}
                              ghLink={project.ghLink}
                              demoLink={project.demoLink}
                              category={project.category}
                              techStack={project.techStack}
                            />
                        </motion.div>
                      ))
                    ) : (
                      <motion.div 
                        className="project-col col-12"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        layout
                      >
                        <div className="no-results">
                          <div className="no-results-icon">🔍</div>
                          <h3>No Projects Found</h3>
                          <p>Try adjusting your search terms or filters</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Projects;
