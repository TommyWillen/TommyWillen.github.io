import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav";

function MyNavbar() {
    return (
        <header className="sticky-top" >
            <nav>
            <Navbar  expand="lg"  variant="dark" style={{backgroundColor: "#22817d"}}>
  <Navbar.Brand href="/">Tommy Willen's Profile</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/aboutme">About Me</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </nav>
        </header>
    )
}

export default MyNavbar