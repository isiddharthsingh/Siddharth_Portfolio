import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

// Define styles for experience items
const experienceItemStyle = {
  marginBottom: "30px",
  paddingBottom: "25px",
  borderBottom: "1px solid rgba(124, 82, 149, 0.3)",
};

// Define styles for the last experience item (no border)
const lastExperienceItemStyle = {
  marginBottom: "10px",
};

// Define styles for list items
const listItemStyle = {
  marginBottom: "10px",
  display: "flex",
  alignItems: "flex-start"
};

// Define styles for the icon
const iconStyle = {
  color: "white",
  marginRight: "10px",
  marginTop: "4px"
};

function ExperienceCard() {
  return (
    <Card
      className="quote-card-view"
      style={{
        backgroundColor: "#262626",
        color: "white",
        border: "2px solid #7c5295",
        borderRadius: "15px",
        padding: "30px 40px",
        margin: "20px 0",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)"
      }}
    >
      <Card.Body>
        <h2 className="purple" style={{ textAlign: "center", marginBottom: "40px", fontWeight: "bold" }}>
          Professional Experience
        </h2>
        
        {/* FuteurAI */}
        <div style={experienceItemStyle}>
          <h3 className="purple" style={{ textAlign: "left", fontWeight: "600", marginBottom: "10px" }}>
            FuteurAI — Lead Developer
          </h3>
          <h5 style={{ color: "#9b7eac", textAlign: "left", fontStyle: "italic", marginBottom: "15px" }}>
            New York City Metropolitan Area | Jan 2025 - Present
          </h5>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "0",
              textAlign: "left",
              marginTop: "10px"
            }}
          >
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Leading development initiatives and technical strategy for AI-driven applications.
            </li>
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Collaborating with cross-functional teams to deliver innovative solutions.
            </li>
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Implementing best practices for code quality and performance optimization.
            </li>
          </ul>
        </div>
        
        {/* NYU */}
        <div style={experienceItemStyle}>
          <h3 className="purple" style={{ textAlign: "left", fontWeight: "600", marginBottom: "10px" }}>
            New York University — Web Developer
          </h3>
          <h5 style={{ color: "#9b7eac", textAlign: "left", fontStyle: "italic", marginBottom: "15px" }}>
            New York, USA | August 2024 - Present
          </h5>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "0",
              textAlign: "left",
              marginTop: "10px"
            }}
          >
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Increased site engagement by 20% by developing and maintaining a modern department website with a Java-based backend and React frontend.
            </li>
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Optimized functionality, load times, and responsive design for better user experience.
            </li>
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Improved faculty accessibility and visibility by 30% by creating personalized faculty websites with secure login features.
            </li>
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Implemented custom layouts and seamless integration, enhancing the user experience for students and faculty.
            </li>
          </ul>
        </div>
        
        {/* Cognizant */}
        <div style={experienceItemStyle}>
          <h3 className="purple" style={{ textAlign: "left", fontWeight: "600", marginBottom: "10px" }}>
            Cognizant Technology Solutions — Google Cloud Engineer
          </h3>
          <h5 style={{ color: "#9b7eac", textAlign: "left", fontStyle: "italic", marginBottom: "15px" }}>
            Hyderabad, India | July 2021 - August 2023
          </h5>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "0",
              textAlign: "left",
              marginTop: "10px"
            }}
          >
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Enhanced team
              performance by 35% through customer management and scalable
              system implementations on Google Cloud Platform (GCP).
            </li>
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Achieved a 40%
              increase in operational efficiency by developing GCP-based
              solutions for diverse clients.
            </li>
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Improved the
              efficiency of new hires by over 50% through dedicated GCP
              training and mentoring.
            </li>
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Maintained a 99.9%
              system availability rate for major clients, including Spotify
              and Netflix, by orchestrating seamless technical operations on
              GCP.
            </li>
          </ul>
        </div>
        
        {/* Webtech */}
        <div style={lastExperienceItemStyle}>
          <h3 className="purple" style={{ textAlign: "left", fontWeight: "600", marginBottom: "10px" }}>
            Webtech Infomedia Pvt Ltd. — Web Development Intern
          </h3>
          <h5 style={{ color: "#9b7eac", textAlign: "left", fontStyle: "italic", marginBottom: "15px" }}>
            Mumbai, India | June 2019 - August 2019
          </h5>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "0",
              textAlign: "left",
              marginTop: "10px"
            }}
          >
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Developed a
              feature-rich web interface for smart device management using
              HTML, Bootstrap, and Node.js.
            </li>
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Implemented security
              protocols to enhance data integrity and reduce security risks in
              a multi-user environment.
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
