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
              I'm a full-stack software engineer who enjoys building scalable systems and AI-driven solutions that make a real impact. My work spans modern web development, cloud architecture, and machine learning, with hands-on experience across the full development lifecycle.
            </p>
            
            <p className="about-description">
              I hold a Master's in Computer Science from <span className="purple">New York University</span>, where I worked on projects ranging from real-time data pipelines to enterprise-grade security platforms. In past roles, I've architected microservices, designed secure cloud infrastructure, and built CI/CD pipelines that improved performance and reliability.
            </p>
            
            <p className="about-description">
              Certified as a DevOps Engineer, Associate Cloud Engineer, and in Deep Learning, I'm skilled in technologies like React, Python, Node.js, Kubernetes, and both AWS and GCP. I've led projects that reduced deployment failures by 75%, improved system security by 85%, and increased user engagement by over 20%.
            </p>
            
            <p className="about-description">
              I'm driven by curiosity and the challenge of turning complex problems into elegant solutions. Whether it's optimizing cloud operations, creating data-driven applications, or applying AI to boost productivity, I'm always focused on delivering work that's robust, maintainable, and user-centered.
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
