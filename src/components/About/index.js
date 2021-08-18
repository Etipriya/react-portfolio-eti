import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import img from "../../assets/images/eti_pic.jpg";
import "./about.css";

const About = () => {
  return (
    <Container className="my-3 py-3" id="About">
      <Card>
        <Card.Title>Eti Priya</Card.Title>
        <Row>
          <Col>
            <Image src={img} rounded />
          </Col>
          <Col>
            <Card.Body>
              <Card.Text>
                Hello, I'm Eti Priya! I am good at photography and I try to stay
                cool in every situation!! I am an ambitious and motivated person
                with 5+ years of experience in professional, administrative, and
                educational services and consultancies. I am excellent in
                working with others and have gained skills and knowledge in
                databases and languages like HTML, CSS, JavaScript, JQuery,
                Node.JS, SQL, Handlebars, Express and React.
              </Card.Text>
              <Card.Link
                className="about-link"
                href="#"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                LinkedIn
              </Card.Link>
              <Card.Link
                className="about-link"
                href="#"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Github Link
              </Card.Link>
              <Card.Link
                className="about-link"
                href="#"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Resume
              </Card.Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default About;
