import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import ExperienceCard from "./ExperienceCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import "./About.css";

function About() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Capture current refs to avoid stale closure issue
    const currentRefs = sectionRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <Container fluid className="about-section-modern">
      <Particle />
      
      {/* Hero Section */}
      <div 
        className="about-hero-section"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={7} className="about-content-col">
              <div className="about-hero-content">
                <div className="section-indicator">
                  <span className="indicator-line"></span>
                  <span className="indicator-text">About Me</span>
                </div>
                <h1 className="about-main-heading">
                  Know Who <span className="gradient-text">I'M</span>
                </h1>
                <div className="about-card-wrapper">
                  <Aboutcard />
                </div>
              </div>
            </Col>
            <Col lg={5} className="about-image-col">
              <div className="about-image-container">
                <div className="floating-elements">
                  <div className="floating-element element-1"></div>
                  <div className="floating-element element-2"></div>
                  <div className="floating-element element-3"></div>
                </div>
                <div className="image-glow-wrapper">
                  <img 
                    src={laptopImg} 
                    alt="about" 
                    className="about-main-image"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Experience Section */}
      <div 
        className="experience-section-wrapper"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-header">
                <div className="section-indicator">
                  <span className="indicator-line"></span>
                  <span className="indicator-text">Career Journey</span>
                </div>
                <h2 className="section-title">
                  Professional <span className="gradient-text">Experience</span>
                </h2>
              </div>
              <ExperienceCard />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Skills Section */}
      <div 
        className="skills-section-wrapper"
        ref={(el) => (sectionRefs.current[2] = el)}
      >
        <Container>
          <div className="section-header">
            <div className="section-indicator">
              <span className="indicator-line"></span>
              <span className="indicator-text">Technical Arsenal</span>
            </div>
            <h2 className="section-title">
              Professional <span className="gradient-text">Skillset</span>
            </h2>
          </div>
          <div className="skills-grid-wrapper">
            <Techstack />
          </div>
        </Container>
      </div>

      {/* Tools Section */}
      <div 
        className="tools-section-wrapper"
        ref={(el) => (sectionRefs.current[3] = el)}
      >
        <Container>
          <div className="section-header">
            <div className="section-indicator">
              <span className="indicator-line"></span>
              <span className="indicator-text">Development Tools</span>
            </div>
            <h2 className="section-title">
              <span className="gradient-text">Tools</span> I Use
            </h2>
          </div>
          <div className="tools-grid-wrapper">
            <Toolstack />
          </div>
        </Container>
      </div>

      {/* GitHub Section */}
      <div 
        className="github-section-wrapper"
        ref={(el) => (sectionRefs.current[4] = el)}
      >
        <Container>
          <div className="section-header">
            <div className="section-indicator">
              <span className="indicator-line"></span>
              <span className="indicator-text">Code Analytics</span>
            </div>
          </div>
          <Github />
        </Container>
      </div>
    </Container>
  );
}

export default About;
