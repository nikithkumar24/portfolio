import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiAmazonaws,
} from "react-icons/si";
import { FaTools } from "react-icons/fa";  // DevOps icon

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={1} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiReact /> {/* React.js icon */}
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiGit />
      </Col>
      
      <Col xs={2} md={1} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
      <FaTools />  {/* DevOps icon */}
       </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiAmazonaws /> {/* AWS icon */}
      </Col>
    </Row>
  );
}

export default Techstack;
