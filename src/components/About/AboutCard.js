import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Siddharth Singh </span>
            from <span className="purple">New York, NY.</span>
            <br />
            I am currently pursuing a Master of Computer Science at New York University (NYU).
            <br />
            I have over two years of work experience as a Cloud Engineer at Cognizant Technology Solutions. I also have work experince as a Web Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Doing GYM
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "When you really want something, all the universe conspires in helping you to achieve it."{" "}
          </p>
          <footer className="blockquote-footer">Paulo Coelho</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
