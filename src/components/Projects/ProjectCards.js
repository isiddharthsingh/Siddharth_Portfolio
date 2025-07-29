import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsGithub, BsArrowUpRight, BsCodeSlash, BsLightbulb, BsChevronDown } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FiExternalLink } from "react-icons/fi";
import "./ProjectCards.css";

function ProjectCards(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Extract tech stack from description (you can customize this based on your data)
  const extractTechStack = (description) => {
    const techKeywords = [
      'React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'AWS', 'Docker', 
      'MongoDB', 'PostgreSQL', 'Redis', 'Kubernetes', 'GraphQL', 'REST API',
      'TensorFlow', 'PyTorch', 'OpenAI', 'GPT-4', 'Machine Learning', 'AI',
      'Streamlit', 'FastAPI', 'Django', 'Flask', 'Vue.js', 'Angular',
      'Firebase', 'GCP', 'Azure', 'Lambda', 'DynamoDB', 'S3', 'EC2',
      'ElasticSearch', 'ChromaDB', 'VectorDB', 'Llama-3', 'Transformer',
      'HTML', 'CSS', 'Bootstrap', 'Tailwind', 'SCSS', 'WebGL',
      'PyMuPDF', 'SQS', 'API Gateway', 'Cognito', 'Rekognition'
    ];
    
    const foundTech = techKeywords.filter(tech => 
      description.toLowerCase().includes(tech.toLowerCase())
    );
    
    return foundTech.slice(0, 6); // Limit to 6 badges for clean design
  };

  const techStack = extractTechStack(props.description);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
      rotateX: 15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className="futuristic-project-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Animated Background Glow */}
      <div className="card-glow"></div>
      
      {/* Neural Network Background Pattern */}
      <div className="neural-pattern"></div>

      {/* Image Container */}
      <div className="image-container">
        <motion.img
          src={props.imgPath}
          alt="project"
          className="project-image"
          variants={imageVariants}
        />
        
        {/* Image Overlay with Links */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="image-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="overlay-buttons">
                <motion.a
                  href={props.ghLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-btn github-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BsGithub />
                </motion.a>
                
                {props.demoLink && (
                  <motion.a
                    href={props.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn demo-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CgWebsite />
                  </motion.a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech Category Badge */}
        <div className="category-badge">
          <BsCodeSlash />
          <span>{props.category || 'Full Stack'}</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="content-container">
        {/* Header */}
        <div className="card-header">
          <motion.h3 
            className="project-title"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {props.title}
          </motion.h3>
          
          <motion.div 
            className="project-icon"
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <BsLightbulb />
          </motion.div>
        </div>

        {/* Tech Stack Badges */}
        {techStack.length > 0 && (
          <motion.div 
            className="tech-stack"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {techStack.map((tech, index) => (
              <motion.span 
                key={tech}
                className="tech-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.4 + index * 0.1, 
                  duration: 0.3 
                }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* Description */}
        <motion.div 
          className="description-container"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div 
            className={`project-description ${isExpanded ? 'expanded' : 'collapsed'}`}
          >
            <div className="description-text">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isExpanded ? 'expanded' : 'collapsed'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isExpanded 
                    ? props.description 
                    : props.description.length > 200 
                      ? `${props.description.substring(0, 200)}...` 
                      : props.description
                  }
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {props.description.length > 200 && (
            <motion.button
              className="view-more-btn"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              aria-expanded={isExpanded}
              aria-label={isExpanded ? "Collapse description" : "Expand description"}
            >
              <span>{isExpanded ? 'Show Less' : 'View More'}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <BsChevronDown />
              </motion.div>
            </motion.button>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="action-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.a
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn primary-btn"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <BsGithub />
            <span>Source Code</span>
            <FiExternalLink className="external-icon" />
          </motion.a>

          {props.demoLink && (
            <motion.a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn secondary-btn"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <CgWebsite />
              <span>Live Demo</span>
              <BsArrowUpRight className="external-icon" />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Holographic Border Effect */}
      <div className="holographic-border"></div>
    </motion.div>
  );
}

export default ProjectCards;
