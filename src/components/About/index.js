import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import img from "../../assets/etipriya-cv.pdf";

function About() {
  return (
    <Container className="my-3 py-3">
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
              <Card.Link href="#">LinkedIn</Card.Link>
              <Card.Link href="#">Github Link</Card.Link>
              <Card.Link href="#">Resume</Card.Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default About;
