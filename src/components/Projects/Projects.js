import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
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
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GPT}
              isBlog={false}
              title={<span className="purple">GPT: Transformer-Based Character-Level Language Model</span>}
              description="I developed and implemented a character-level language model from scratch, inspired by the Transformer architecture introduced in the seminal paper 'Attention is All You Need.' This model leverages self-attention mechanisms to predict the next character in a sequence, capturing both short-term and long-term dependencies within text. Key features include multi-head attention, positional encoding, and the ability to generate coherent text sequences based on learned patterns. The model was implemented using PyTorch and optimized for GPU acceleration, making it a powerful tool for understanding and generating text at a granular level."
              ghLink="https://github.com/isiddharthsingh/GPT_Transformer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={llamalingo}
              isBlog={false}
              title={<span className="purple">LlamaLingo</span>}
              description="Developed an advanced chatbot using the Llama-3 model and Streamlit, integrated via LM Studio as an OpenAI API for scalable operations on a local server. Features include dynamic chat history management and planned enhancements for response customization and detailed logging to enhance user engagement. Key tools: Llama-3, Streamlit, LM Studio, OpenAI API."
              ghLink="https://github.com/isiddharthsingh/LlamaLingo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={typeninja}
              isBlog={false}
              title={<span className="purple">TypeNinja</span>}
              description="This typing game offers a dynamic experience by randomly selecting one of 20 sentences for users to type, ensuring variety with each playthrough. It provides real-time tracking of typing time, accuracy, and words per minute (WPM), allowing users to monitor their performance instantly. To increase the challenge, the game disables the backspace key, promoting focused and accurate typing. The interface is clean, modern, and responsive, making it suitable for various devices. With a simple setup and easy-to-use design, the game is accessible to users of all skill levels."
              ghLink="https://github.com/isiddharthsingh/TypeNinja"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tubegenie}
              isBlog={false}
              title={<span className="purple">TubeGenie</span>}
              description="Designed and deployed an AI-driven Q&A system to analyze YouTube video content using OpenAI's GPT-4-turbo model. Utilized Embedchain for data ingestion, ChromaDB for storage, and VectorDB for quick retrieval. The system features an interactive Streamlit user interface for seamless interaction and includes efficient resource management strategies with a cleanup mechanism for temporary data storage. Key technologies: GPT-4-turbo, Embedchain, ChromaDB, VectorDB, Streamlit."
              ghLink="https://github.com/isiddharthsingh/TubeGenie"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumemaestro}
              isBlog={false}
              title={<span className="purple">Resume Maestro</span>}
              description="Engineered a resume optimization application that integrates Streamlit for the frontend and FastAPI for the backend, offering a seamless and user-friendly experience. The system uses OpenAI's GPT-4 to enhance resume content based on job descriptions, supports LaTeX and PDF outputs, and features text extraction from resumes using PyMuPDF. Robust LaTeX templates ensure high-quality document formatting. The backend is scaled and managed using Docker, with features allowing users to upload resumes, input job descriptions, and download optimized resumes in real-time, enhancing user satisfaction and engagement. Key technologies: Streamlit, FastAPI, GPT-4, PyMuPDF, Docker."
              ghLink="https://github.com/isiddharthsingh/Resume-Maestro"          
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taleweaver}
              isBlog={false}
              title={<span className="purple">TaleWeaver</span>}
              description="Developed 'Taleweaver,' an AI-driven platform leveraging AWS Rekognition and OpenAI's GPT for advanced image recognition, natural language processing, and personalized story generation. It features a robust security framework using AWS Cognito and AWS API Gateway for secure, scalable API interactions. Deployed on AWS EC2 with serverless operations through AWS Lambda, it ensures optimal resource management and cost efficiency. The platform also includes a user-centric interface backed by AWS DynamoDB, enhancing user engagement and efficient data management. Key technologies: AWS suite (Rekognition, Cognito, API Gateway, EC2, Lambda, DynamoDB), OpenAI's GPT."
              ghLink="https://github.com/isiddharthsingh/Taleweaver"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecostock}
              isBlog={false}
              title={<span className="purple">EcoStock: ESG Driven Market Predictions</span>}
              description="Utilized various statistical models, including ARIMA, SMA, SARIMAX, VARMAX, and OLS, to forecast stock prices by integrating Environmental, Social, and Governance (ESG) metrics and sentiment analysis from news and social media, thus enhancing prediction accuracy. Specifically applied the VARMAX model to analyze the impact of ESG factors on stock prices, achieving an optimal AIC score of 1338.44. Data integrity was maintained using Alpha Vantage APIs for data collection and processing, along with rigorous data cleaning and normalization. Extensive exploratory data analysis was conducted to understand the correlations between sentiment scores and stock market behaviors, involving correlation analysis and time series visualizations."
              ghLink="https://github.com/isiddharthsingh/EcoStock-ESG-Driven-Market-Predictions"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shems}
              isBlog={false}
              title={<span className="purple">Smart Home Energy Management System (SHEMS)</span>}
              description="Developed a robust web interface for smart device management using HTML, Bootstrap, and Node.js, integrating key functionalities such as energy consumption analytics, device control, model selection, and dynamic data visualization. Advanced security measures like pooled connections, hashed passwords, and protections against SQL injections and XSS were implemented to enhance data integrity and security in a multi-user environment. The system features secure user registration and authentication, comprehensive device management options (add, list, remove devices), detailed energy consumption analysis with graphical representations, and effective concurrent access management."
              ghLink="https://github.com/isiddharthsingh/Smart-Home-Energy-Management-System-SHEMS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dine}
              isBlog={false}
              title={<span className="purple">Serverless Dining Concierge Chatbot</span>}
              description="Implemented a serverless, microservice-driven Dining Concierge chatbot using NLP, AWS S3, API Gateway, and AWS Lambda to provide restaurant suggestions tailored to user preferences. Developed a decoupled suggestions module that handles message retrieval via Amazon SQS, recommendation fetching using Amazon ElasticSearch and DynamoDB, and email delivery through Amazon SES. Automated the workflow with CloudWatch event triggers for seamless operation. The system enhances user experience in the hospitality industry with scalable, conversational AI. Key technologies: AWS (S3, Lambda, API Gateway, SQS, ElasticSearch, DynamoDB, SES), NLP, serverless architecture."
              ghLink="https://github.com/isiddharthsingh/Serverless-Dining-Concierge-Chatbot"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
