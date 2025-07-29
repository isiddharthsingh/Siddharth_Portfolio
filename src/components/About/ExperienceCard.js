import React from "react";
import { ImPointRight } from "react-icons/im";
import { Row, Col } from "react-bootstrap";

function ExperienceCard() {
  const experiences = [
    {
      company: "FuteurAI",
      position: "Lead Developer",
      location: "New York City Metropolitan Area",
      duration: "Jan 2025 - Present",
      achievements: [
        "Architected microservices application with Next.js and CI/CD pipelines, delivering 40% performance gains and 75% fewer deployment failures while implementing Clerk OAuth for 65% faster sign-ups",
        "Led security innovation for FuteurSecure by implementing post-quantum cryptography (CRYSTALS-Kyber/Dilithium) and building a system for plug-and-play integration with any database, achieving 100% NIST compliance, 85% vulnerability reduction, and 99.9% data protection in transit and at rest.",
        "Developed enterprise-grade security monitoring platform that integrates OSSEC HIDS, Wazuh and Suricata IDS/IPS, reducing false positives by 60% and increasing the accuracy of threat detection by 45%.",
        "Engineered distributed logging system using Hyperledger Fabric blockchain infrastructure with analytics dashboards, increasing customer retention by more than 70% through data-driven user engagement insights"
      ],
      current: true
    },
    {
      company: "New York University",
      position: "Web Developer",
      location: "New York, USA",
      duration: "August 2024 - Present",
      achievements: [
        "Increased site engagement by 20% by developing and maintaining a modern department website with a Java-based backend and React frontend.",
        "Optimized functionality, load times, and responsive design for better user experience.",
        "Improved faculty accessibility and visibility by 30% by creating personalized faculty websites with secure login features.",
        "Implemented custom layouts and seamless integration, enhancing the user experience for students and faculty."
      ],
      current: true
    },
    {
      company: "Cognizant Technology Solutions",
      position: "Google Cloud Engineer",
      location: "Hyderabad, India",
      duration: "July 2021 - August 2023",
      achievements: [
        "Enhanced team performance by 35% through customer management and scalable system implementations on Google Cloud Platform (GCP).",
        "Achieved a 40% increase in operational efficiency by developing GCP-based solutions for diverse clients.",
        "Improved the efficiency of new hires by over 50% through dedicated GCP training and mentoring.",
        "Maintained a 99.9% system availability rate for major clients, including Spotify and Netflix, by orchestrating seamless technical operations on GCP."
      ],
      current: false
    },
    {
      company: "Webtech Infomedia Pvt Ltd.",
      position: "Web Development Intern",
      location: "Mumbai, India",
      duration: "June 2019 - August 2019",
      achievements: [
        "Developed a feature-rich web interface for smart device management using HTML, Bootstrap, and Node.js.",
        "Implemented security protocols to enhance data integrity and reduce security risks in a multi-user environment."
      ],
      current: false
    }
  ];

  return (
    <div className="experience-container">
      <Row className="experience-timeline">
        {experiences.map((exp, index) => (
          <Col xs={12} key={index} className="experience-item-wrapper">
            <div className={`experience-card ${exp.current ? 'current-role' : ''}`}>
              <div className="experience-header">
                <div className="company-info">
                  <h3 className="company-name">{exp.company}</h3>
                  <div className="position-badge">
                    <span className="position-title">{exp.position}</span>
                    {exp.current && <span className="current-indicator">Current</span>}
                  </div>
                </div>
                <div className="experience-meta">
                  <div className="location">
                    <span className="location-icon">📍</span>
                    {exp.location}
                  </div>
                  <div className="duration">
                    <span className="duration-icon">📅</span>
                    {exp.duration}
                  </div>
                </div>
              </div>
              
              <div className="achievements-section">
                <h4 className="achievements-title">Key Achievements</h4>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="achievement-item">
                      <ImPointRight className="achievement-icon" />
                      <span className="achievement-text">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {index < experiences.length - 1 && (
                <div className="timeline-connector"></div>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ExperienceCard;
