import Button from "react-bootstrap/esm/Button";
import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Home() {
  const NAME = "API NAME";
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
      <Container id="home-container">
        <Navbar.Brand href="/">
          Welcome to Quinn's 30th, {localStorage.getItem("userName")}!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/challenges">Challenges</Nav.Link>
            <Nav.Link href="/Leaderboard">Leaderboard</Nav.Link>
            <Nav.Link href="/pics">Pictures</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;
