import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navigation.css";

function NavbarComponent() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="navbar">
            <Link
              to="/"
              className="nav-link"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Home
            </Link>
            <Link
              to="/About"
              className="nav-link"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              About
            </Link>
            <Link
              to="/Projects"
              className="nav-link"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Projects
            </Link>
            <Link
              to="/Contact"
              className="nav-link"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Contact
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
