import React from 'react'
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function MainNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link  to="/" className='mx-2'>Home</Link>
            <Link to="/about" className='mx-2'>About</Link>
            <Link to="/contact" className='mx-2'>Contact</Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
