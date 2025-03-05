import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavbarComponent = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            width="40"
            height="40"
            className="me-2"
          />
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/Products" active={location.pathname === "/"}>
              Home
            </Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/products" active={location.pathname === "/products"}>
              All air-conditioned
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/products/split" active={location.pathname === "/products/split"}>
             Split AC
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/ceiling" active={location.pathname === "/products/ceiling"}>
                Ceiling AC
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/window" active={location.pathname === "/products/window"}>
                Window AC
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about" active={location.pathname === "/about"}>
              About US
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" active={location.pathname === "/contact"}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
