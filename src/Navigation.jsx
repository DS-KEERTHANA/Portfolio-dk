import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Container, Nav, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navigation = () => {
  return (
    <div>
      <div id="navigation">
        <Navbar fixed="top" className="custom-navbar">
          <Container>
            <Navbar.Brand href="/home" id="nav">
              <h2>Keerthana</h2>
            </Navbar.Brand>
            <Nav className="mx-auto">
              <Nav.Link href="/home" className="mx-5">Home</Nav.Link>
              <Nav.Link href="/about" className="mx-5">About</Nav.Link>
              <Nav.Link href="/project" className="mx-5">Projects</Nav.Link>
            </Nav>
            {/* Git and LinkedIn icons */}
            <Nav className="ms-end">
              <Nav.Link
                href="https://github.com/DS-KEERTHANA"
                target="_blank"
                className="text-dark mx-2"
              >
                <FaGithub size={30} />
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                target="_blank"
                className="text-dark mx-2"
              >
                <FaLinkedin size={30} />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;
