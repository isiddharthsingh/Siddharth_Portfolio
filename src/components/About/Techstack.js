import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiAws,
  DiBootstrap,
  DiCss3,
  DiDocker,
  DiDotnet,
  DiHeroku,
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiMysql,
  DiNginx,
  DiNodejs,
  DiPhp,
  DiPostgresql,
  DiPython,
  DiReact,
  DiRedis,
  DiGit,
  DiGithubBadge,
  
} from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import { SiGooglecloud, SiTensorflow, SiPandas, SiNumpy, SiKubernetes } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJsBadge />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNginx />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiGithubBadge/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud /> {/* Representing Google Cloud SQL */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase /> {/* Representing SQL Database */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow /> {/* Representing TensorFlow */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas /> {/* Representing Pandas */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy /> {/* Representing NumPy */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes /> {/* Representing Kubernetes */}
      </Col>
      
      
    </Row>
  );
}

export default Techstack;
