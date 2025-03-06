import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiHibernate,
  SiJavascript,
  SiMysql,
  SiReactbootstrap,
  SiSpringboot,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Navigation from './Navigation';



const About = () => {
  return (
    <div>
      <Navigation/>
      <div
        id="forabout"
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Container>
          <Row className="text-center">
            <Col>
              <h1 id="about-h1">About Me</h1>
            </Col>
          </Row>
          <Row className="text-center mt-4">
            <p style={{ fontSize: "20px" }}>
              I'm <b style={{color:"#246b87"}}>Keerthana</b>, Enthusiastic Java Full Stack Developer with a
              strong foundation in Java, <br /> Spring Boot, JavaScript, HTML,
              and CSS. Passionate about building efficient and scalable web
              applications. <br />
              Skilled in OOP, collections, and advanced Java concepts. Eager to
              learn and contribute to dynamic development teams. <br />
            </p>
          </Row>
          <Row className="text-center mt-4">
            <Col>
              <h2 id="about-skill">My Skills</h2>
            </Col>
          </Row>
          {/* Skills Icons */}
          <Container className="symbols">
            <Row className="text-center mt-2 mb-4 gap-5">
              <Col>
                <FaHtml5 size={50} color="#E34F26" title="HTML5" id="html" />
                <p>HTML 5</p>
              </Col>
              <Col>
                <FaCss3Alt size={50} color="#1572B6" title="CSS3" id="css"/>
                <p>CSS 3</p>
              </Col>
              <Col>
                <FaBootstrap size={50} color="#7952B3" title="Bootstrap" id="bootstrap"/>
                <p>BOOTSTRAP</p>
              </Col>
              <Col>
                <FaJs size={50} color="#F7DF1E" title="JavaScript" id="js"/>
                <p>JAVA SCRIPT</p>
              </Col>
            </Row>
            <Row className="text-center mb-4 gap-5">
              <Col>
                <FaReact size={50} color="#61DAFB" title="ReactJS" id="react"/>
                <p>REACT JS</p>
              </Col>
              <Col>
                <SiReactbootstrap
                  size={50}
                  color="#7952B3"
                  title="React Bootstrap"
                  id="react-bootstrap"
                />
                <p>REACT BOOTSTRAP</p>
              </Col>
              <Col>
                <FaJava size={50} color="#007396" title="Java" id="java"/>
                <p>JAVA</p>
              </Col>
              <Col>
                <SiSpringboot size={50} color="#6DB33F" title="Spring Boot" id="spring"/>
                <p>SPRING BOOT</p>
              </Col>
            </Row>
            <Row className="text-center mb-2 gap-5 mt-3">
              <Col>
                <SiHibernate size={50} color="#59666C" title="Hibernate" id="hibernate"/>
                <p>HIBERNATE</p>
              </Col>
              <Col>
                <SiMysql size={50} color="#4479A1" title="MySQL" id="mysql"/>
                <p>MYSQL</p>
              </Col>
              <Col>
                <FaGitAlt size={50} color="#F05032" title="Git" id="git"/>
                <p>GIT</p>
              </Col>
              <Col>
                <FaGithub size={50} color="black" title="GitHub" id="github"/>
                <p>GITHUB</p>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  );
};

export default About;
