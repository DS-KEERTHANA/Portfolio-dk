import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import keerthana from "../src/assets/keerthi.jpg";
import Navigation from './Navigation';

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <Navigation/>
      <div className="home" style={{width:"100%"}}>
      <Container className="mt-5">
      <Row className="align-items-center">
        {/* Text Content */}
        <Col md={8}>
          <h1 className="typing-text">Hello, I'm Keerthana</h1>
          <h3>I'm a Java Full Stack Developer.</h3>
          <p style={{ fontSize: "20px" }}>
            Passionate Java Full Stack Developer eager to build scalable applications,
            <br />
            Focused on clean code, problem-solving, and performance optimization,
            <br />
            Excited to collaborate, learn, and grow in the tech industry.
          </p>

          {/* Contact Details */}
          <div className="mt-3">
            <p><FaMapMarkerAlt size={22} style={{color:"#5681EA"}} /> Chennai</p>
            <p><FaPhone size={22} style={{color:"#5681EA"}}/> +91 9080206904</p>
            <p><FaEnvelope size={22} style={{color:"#5681EA"}}/> keerthanadhayal@gmail.com</p>
          </div>
        </Col>

        {/*  Profile Image */}
        <Col xs={6} md={4} className="d-flex justify-content-center" id="profile">
          <Image src={keerthana} roundedCircle height={"500px"} width={"500px"}  style={{boxShadow:"2px 4px 8px 10px  #5681EA"}}/>
        </Col>
      </Row>
    </Container>
      </div>
    </div>
  );
};

export default Home;
