import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
function NavBar() {
  return (
    <Navbar sticky="top" className="bg-white shadow-sm mb-4">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button className="bg-white Nav-Cart-btn">
          <BsCart2 style={{ color: "black" }} />
          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center">
            3
          </div>
        </Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;
