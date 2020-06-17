import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function navBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home"> Employee Directory </Navbar.Brand>{" "}
      <Nav className="mr-auto">
        <Nav.Link href="#home"> Home </Nav.Link>{" "}
        <Nav.Link href="#table"> Table </Nav.Link>{" "}
      </Nav>{" "}
    </Navbar>
  );
}
