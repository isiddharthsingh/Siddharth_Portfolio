import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
            Hello! I'm <span className="purple">Siddharth Singh</span>, a versatile tech professional based in <span className="purple">New York City</span> with a passion for innovative solutions and cutting-edge technologies.
            <br /><br />
            Currently, I'm leading development initiatives at FuteurAI while simultaneously serving as a Web Developer at New York University, where I'm also pursuing my Master's in Computer Science. My dual role allows me to blend academic knowledge with practical industry applications.
            <br /><br />
            My professional journey includes over two years as a Google Cloud Engineer at Cognizant Technology Solutions, where I maintained 99.9% system availability for major clients like Spotify and Netflix. I've consistently delivered results, improving team performance by 35% and operational efficiency by 40% through scalable cloud implementations.
            <br /><br />
            I specialize in full-stack development with expertise in React, Java, and cloud technologies. My approach combines technical excellence with a focus on user experience and business impact, as demonstrated by the 20% increase in site engagement I achieved for NYU's department website.
            <br /><br />
            When I'm not coding or solving complex technical challenges, you can find me:
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
