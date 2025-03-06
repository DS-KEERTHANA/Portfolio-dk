import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiReactbootstrap } from "react-icons/si";
import Navigation from "./Navigation";

const Projects = () => {
  return (
    <div>
        <Navigation/>
      {/* 1st project */}
      <Container
        fluid
        className="projects d-flex flex-column align-items-center justify-content-center text-center w-50"
      >
        <Row>
          <Col>
            <h1 className="mb-4" style={{ color: "#C0C8E3" }}>
              Weather Application
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="mb-3">
              This weather application is built using React, HTML, CSS, and
              JavaScript to provide real-time weather updates. It fetches data
              from the Weatherman API and displays temperature, humidity, and
              weather conditions based on user input. The project highlights my
              skills in React components, API integration, and responsive UI
              design.
            </p>
            <h6>
              Tools Used:{" "}
              <FaHtml5 size={25} color="#E34F26" title="HTML5" id="html" />{" "}
              <FaCss3Alt size={25} color="#1572B6" title="CSS3" id="css" />{" "}
              <FaBootstrap
                size={25}
                color="#7952B3"
                title="Bootstrap"
                id="bootstrap"
              />{" "}
              <FaJs size={25} color="#F7DF1E" title="JavaScript" id="js" />
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="https://weather-application-js-by-keerthana.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" className="button mt-3 mb-3">
                Demo
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
      {/* 2nd project */}
      <Container
        fluid
        className="projects d-flex flex-column align-items-center justify-content-center text-center w-50 mt-4"
      >
        <Row>
          <Col>
            <h1 className="mb-4" style={{ color: "#C0C8E3" }}>
              To Do List Application
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="mb-3">
              Created a simple yet effective to-do list app with React, HTML,
              CSS, and React Bootstrap. This app enables users to organize tasks
              with ease, featuring a responsive design and straightforward
              functionality. It showcases a clean design and intuitive
              functionality, making it easy to manage daily tasks.
            </p>
            <h6>
              Tools Used:{" "}
              <FaReact size={25} color="#61DAFB" title="ReactJS" id="react"/> {" "}
              <SiReactbootstrap
                size={25}
                color="#7952B3"
                title="React Bootstrap"
                id="react-bootstrap"
              />
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="https://to-do-list-react-by-keerthana.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" className="button mt-3 mb-3">
                Demo
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
      {/* 3rd project */}
      <Container
        fluid
        className="projects d-flex flex-column align-items-center justify-content-center text-center w-50 mt-4 mb-4"
      >
        <Row>
          <Col>
            <h1 className="mb-4" style={{ color: "#C0C8E3" }}>
              Styled Conference
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="mb-3">
              Developed a styled conference website clone using React, HTML,
              CSS, and React Bootstrap, demonstrating my ability to clone
              existing web applications. This project replicates the design and
              key features of the original site, focusing on responsive layouts
              and modern UI elements.
            </p>
            <h6>
              Tools Used:{" "}
              <FaReact size={25} color="#61DAFB" title="ReactJS" id="react"/> {" "}
              <SiReactbootstrap
                size={25}
                color="#7952B3"
                title="React Bootstrap"
                id="react-bootstrap"
              />
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="https://style-conference-reactapp-kd.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" className="button mt-3 mb-3">
                Demo
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
