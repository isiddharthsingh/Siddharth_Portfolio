import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Col, Row } from "react-bootstrap";

// Define a base style object
const baseStyle = {
  padding: "10px",
  border: "1px solid #7c5295",
  borderRadius: "10px",
  marginBottom: "20px", // Ensure spacing on smaller screens
};

// Define a style for the first column with margin-right for medium and larger screens
const firstColumnStyle = {
  ...baseStyle,
  marginRight: "10px", // This will apply on larger screens
};

function ExperienceCard() {
  return (
    <Card
      className="quote-card-view"
      style={{
        backgroundColor: "#262626",
        color: "white",
        border: "2px solid #7c5295",
        borderRadius: "10px",
        padding: "20px",
        margin: "10px 0",
      }}
    >
      <Card.Body>
        <h2 className="purple" style={{ textAlign: "center" }}>
          Professional Experience
        </h2>
        <Row className="justify-content-center">
          <Col
            xs={12}
            md={5} // Adjusted width for medium and larger screens
            lg={5} // Adjusted width for large screens
            className="job-experience"
            style={firstColumnStyle} // Applying the style with margin-right
          >
            <h3 className="purple" style={{ textAlign: "left" }}>
              Cognizant Technology Solutions — Google Cloud Engineer
            </h3>
            <h5 style={{ color: "#9b7eac", textAlign: "left" }}>
              Hyderabad, India | July 2021 - August 2023
            </h5>
            <br />
            <ul
              style={{
                listStyleType: "none",
                paddingLeft: "0",
                textAlign: "left",
              }}
            >
              <li>
                <ImPointRight style={{ color: "white" }} /> Enhanced team
                performance by 35% through customer management and scalable
                system implementations on Google Cloud Platform (GCP).
              </li>
              <li>
                <ImPointRight style={{ color: "white" }} /> Achieved a 40%
                increase in operational efficiency by developing GCP-based
                solutions for diverse clients.
              </li>
              <li>
                <ImPointRight style={{ color: "white" }} /> Improved the
                efficiency of new hires by over 50% through dedicated GCP
                training and mentoring.
              </li>
              <li>
                <ImPointRight style={{ color: "white" }} /> Maintained a 99.9%
                system availability rate for major clients, including Spotify
                and Netflix, by orchestrating seamless technical operations on
                GCP.
              </li>
            </ul>
          </Col>
          <Col
            xs={12}
            md={5} // Adjusted width for medium and larger screens
            lg={5} // Adjusted width for large screens
            className="job-experience"
            style={baseStyle} // Applying the base style
          >
            <h3 className="purple" style={{ textAlign: "left" }}>
              Webtech Infomedia Pvt Ltd. — Web Development Intern
            </h3>
            <h5 style={{ color: "#9b7eac", textAlign: "left" }}>
              Mumbai, India | June 2019 - August 2019
            </h5>
            <br />
            <ul
              style={{
                listStyleType: "none",
                paddingLeft: "0",
                textAlign: "left",
              }}
            >
              <li>
                <ImPointRight style={{ color: "white" }} /> Developed a
                feature-rich web interface for smart device management using
                HTML, Bootstrap, and Node.js.
              </li>
              <li>
                <ImPointRight style={{ color: "white" }} /> Implemented security
                protocols to enhance data integrity and reduce security risks in
                a multi-user environment.
              </li>
            </ul>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
