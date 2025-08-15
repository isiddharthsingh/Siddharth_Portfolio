import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div className="about-text-content">
            <p className="about-intro-text">
              I’m Siddharth Singh, a software engineer and computer science graduate student at New York University with a strong focus on building scalable, secure, and user-focused applications. My experience spans full-stack development, cloud engineering, and AI-powered solutions.
            </p>

            <p className="about-description">
              I’ve designed and delivered systems across the full development lifecycle—from architecting microservices with Next.js and integrating post-quantum cryptography for enterprise security, to creating real-time analytics pipelines and AI productivity tools that cut manual work in half. My work at companies like Cognizant Technology Solutions and Futeur Ai, along with my projects such as CryptoStream AI and HarmonyAI, reflects my ability to blend deep technical skill with practical problem-solving.
            </p>

            <p className="about-description">
              I’m fluent in modern web and backend stacks, comfortable with cloud platforms like AWS and GCP, and experienced with containerization, automation, and database management. I approach software engineering as both a craft and a collaboration—pairing clean, maintainable code with a focus on user needs and business impact.
            </p>

            <p className="about-description">
              Beyond my technical skills, I bring curiosity, adaptability, and a drive to keep learning. Whether it’s exploring emerging AI/ML applications or refining deployment workflows, I aim to build systems that are not only functional but reliable, secure, and impactful.
            </p>
            
            <div className="personal-interests">
              <p className="interests-intro">
                When I'm not coding or solving complex technical challenges, you can find me:
              </p>
              <ul className="activities-list">
                <li className="about-activity">
                  <ImPointRight className="activity-icon" /> 
                  <span>Doing GYM</span>
                </li>
                <li className="about-activity">
                  <ImPointRight className="activity-icon" /> 
                  <span>Playing Games</span>
                </li>
                <li className="about-activity">
                  <ImPointRight className="activity-icon" /> 
                  <span>Travelling</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="quote-section">
            <p className="inspirational-quote">
              "When you desire something with all your heart, the entire universe tries to bring it to you."
            </p>
            <footer className="quote-author">— Paulo Coelho</footer>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
