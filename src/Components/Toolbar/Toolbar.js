import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Toolbar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">Weather App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Current</Nav.Link>
          <Nav.Link href="#">Hourly</Nav.Link>
          <Nav.Link href="#">Daily</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Toolbar;
