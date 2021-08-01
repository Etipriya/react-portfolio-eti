import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Eti Priya</Navbar.Brand>
        <Nav className="me-auto">
          <div className="mr-4">
            <a href="#Home">Home</a>
          </div>

          <div className="mr-4">
            <a href="#About">About</a>
          </div>

          <div className="mr-4">
            <a href="#Projects">Projects</a>
          </div>

          <div className="mr-4">
            <a href="#Contact">Contact</a>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
