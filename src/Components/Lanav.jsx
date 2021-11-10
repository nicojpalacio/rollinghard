import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

export const Lanav = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Rolling Hard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => props.setSeccion('home')}>Home</Nav.Link>
              <Nav.Link onClick={() => props.setSeccion('login')}>Login</Nav.Link>
              <Nav.Link onClick={() => props.setSeccion('perfil')}>Perfil</Nav.Link>
              <Nav.Link onClick={() => props.setSeccion('admin')}>Admin</Nav.Link>
              <Nav.Link onClick={() => props.setSeccion('memes')}>Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
