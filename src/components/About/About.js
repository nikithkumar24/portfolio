import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">Experience</strong>
        </h1>
        <Row>
          <Col md={6} style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "1.5em", marginBottom: "10px" }}>SOFTWARE ENGINEER | Chesa Dental Care</h4>
            <p style={{ fontStyle: "italic", marginBottom: "10px" }}><strong>JULY 2024 – PRESENT</strong></p>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>Proficient in frontend technologies such as HTML, CSS, and JavaScript.</li>
              <li>Proficient in React.js for building user interfaces and state management.</li>
              <li>Experience in designing and developing RESTful APIs using Node.js.</li>
              <li>Experience with Git, Jenkins, AWS, and maintaining hosted applications:
                <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
                  <li>Developed and managed CI/CD pipelines using Jenkins for seamless application deployment.</li>
                  <li>Maintained and optimized AWS infrastructure to host applications (EC2, S3, etc.).</li>
                </ul>
              </li>
              <li>Working with SAP Business One Service Layer:
                <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
                  <li>SAP server Log File Rotation and Archiving.</li>
                  <li>Backup and Integrity Assurance for log files.</li>
                </ul>
              </li>
            </ul>
          </Col>
          <Col md={6} style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "1.5em", marginBottom: "10px" }}>IT ENGINEER | Hitachi India Pvt Ltd</h4>
            <p style={{ fontStyle: "italic", marginBottom: "10px" }}><strong>FEB 2024 – JULY 2024</strong></p>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>Delivered technical support and system administration services.</li>
              <li>Managed hardware and software maintenance and troubleshooting.</li>
              <li>Oversaw IT infrastructure and asset management.</li>
              <li>Implemented security awareness programs and disaster recovery protocols.</li>
              <li>Established and maintained disaster recovery plans and security protocols to safeguard critical data and ensure rapid recovery.</li>
              <li>Oversaw IT infrastructure and asset management, ensuring organized and effective IT operations.</li>
              <li>Conducted regular maintenance and updates of IT systems, ensuring optimal functionality and security.</li>
              <li>Delivered technical support for hardware and software issues, enhancing system performance and reliability.</li>
            </ul>
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Education</strong>
        </h1>
        <Row>
          <Col md={6} style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "1.5em", marginBottom: "10px" }}>Atria Institute of Technology</h4>
            <p style={{ fontStyle: "italic", marginBottom: "10px" }}><strong>Master of Computer Applications</strong><br />December 2021 - December 2023</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>Applied analytical skills to resolve complex technical challenges.</li>
              <li>Engaged with emerging technologies such as AI, ML, and Web Development.</li>
              <li>Participated in internships, gaining hands-on experience in web development and modern tech stacks.</li>
            </ul>
          </Col>
          <Col md={6} style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "1.5em", marginBottom: "10px" }}>KLE University Bangalore</h4>
            <p style={{ fontStyle: "italic", marginBottom: "10px" }}><strong>Bachelor of Computer Applications</strong><br />September 2018 - April 2021</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>Demonstrated problem-solving skills and tackled complex challenges during projects.</li>
              <li>Developed interactive web applications using HTML5, CSS3, and JavaScript.</li>
              <li>Worked effectively in teams, contributing to collaborative problem-solving.</li>
            </ul>
          </Col>
        </Row>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
