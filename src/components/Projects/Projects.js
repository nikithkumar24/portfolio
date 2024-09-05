import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <h3 className="project-title" style={{ 
              fontWeight: "bold", 
              fontSize: "1.5rem", 
              color: "white", 
              marginBottom: "10px" }}>
              Dynamic Hand Gesture Recognization
            </h3>
            <p style={{ color: "white" }}>
              A project focused on recognizing hand gestures dynamically using advanced computer vision and AI techniques.
            </p>
          </Col>

          <Col md={4} className="project-card">
            <h3 className="project-title" style={{ 
              fontWeight: "bold", 
              fontSize: "1.5rem", 
              color: "white", 
              marginBottom: "10px" }}>
              Continuous Integration and Continuous Deployment (CI/CD) for Full Stack Applications
            </h3>
            <p style={{ color: "white" }}>
              This project implements CI/CD pipelines for automating the deployment process of full-stack applications using DevOps tools.
            </p>
          </Col>

          <Col md={4} className="project-card">
            <h3 className="project-title" style={{ 
              fontWeight: "bold", 
              fontSize: "1.5rem", 
              color: "white", 
              marginBottom: "10px" }}>
              Created Chatbot using React
            </h3>
            <p style={{ color: "white" }}>
              Developed an interactive chatbot with custom conversations using React and a chatbot library, facilitating user interaction on the website.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
