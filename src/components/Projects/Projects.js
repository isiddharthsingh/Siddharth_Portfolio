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

  const categories = ["All", "AI/ML", "Full Stack", "Cloud/AWS", "Data Science", "Web App"];

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
