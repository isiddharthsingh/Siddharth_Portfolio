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
              Hello! I'm <span className="purple highlight-name">Siddharth Singh</span>, a versatile tech professional based in <span className="purple highlight-location">New York City</span> with a passion for innovative solutions and cutting-edge technologies.
            </p>
            
            <p className="about-description">
              Currently, I'm leading development initiatives at <span className="purple">FuteurAI</span> while simultaneously serving as a Web Developer at <span className="purple">New York University</span>, where I'm also pursuing my Master's in Computer Science. My dual role allows me to blend academic knowledge with practical industry applications.
            </p>
            
            <p className="about-description">
              My professional journey includes over two years as a Google Cloud Engineer at <span className="purple">Cognizant Technology Solutions</span>, where I maintained 99.9% system availability for major clients like <span className="purple">Spotify</span> and <span className="purple">Netflix</span>. I've consistently delivered results, improving team performance by 35% and operational efficiency by 40% through scalable cloud implementations.
            </p>
            
            <p className="about-description">
              I specialize in full-stack development with expertise in <span className="purple">React</span>, <span className="purple">Java</span>, and cloud technologies. My approach combines technical excellence with a focus on user experience and business impact, as demonstrated by the 20% increase in site engagement I achieved for NYU's department website.
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
              "When you really want something, all the universe conspires in helping you to achieve it."
            </p>
            <footer className="quote-author">— Paulo Coelho</footer>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
