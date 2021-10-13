import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import Resume from "../../assets/etipriya-cv.pdf";
import "./contact.css";

function ContactForm() {
  return (
    <Container className="my-3 py-3" id="Contact">
      <div className="contact-icons">
        <Row className="contact-form">
          <Col lg={3} md={3}>
            <a href="https://github.com/Etipriya">
              <img
                src="https://img.icons8.com/doodle/100/000000/github--v1.png"
                alt="github-logo"
                className="icon"
              />
            </a>
            <p className="icon-text">https://github.com/Etipriya</p>
          </Col>

          <Col lg={3} md={3}>
            <a href="https://www.linkedin.com/in/eti-priya-mahendru/">
              <img
                src="https://img.icons8.com/doodle/100/000000/linkedin--v2.png"
                alt="linkedin-logo"
                className="icon"
              />
            </a>
            <p className="icon-text">
              https://www.linkedin.com/in/eti-priya-mahendru/
            </p>
          </Col>

          <Col lg={3} md={3}>
            <a href="mailto:etipriya@gmail.com">
              <img
                src="https://img.icons8.com/doodle/120/000000/new-post.png"
                alt="mail-logo"
              />
            </a>
            <p className="icon-text">etipriya@gmail.com</p>
          </Col>

          <Col lg={3} md={3}>
            <a href={Resume} download>
              <img
                src="https://img.icons8.com/doodle/120/000000/pdf-2.png"
                alt="resume"
              />
            </a>
            <p className="icon-text">resume</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ContactForm;
