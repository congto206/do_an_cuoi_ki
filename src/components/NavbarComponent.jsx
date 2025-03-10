import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavbarComponent = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            width="45"
            height="45"
            className="me-2 rounded-circle shadow-sm"
          />
          <span className="brand-name text-white">AirCon Store</span>
        </Navbar.Brand>

        {/* Toggle button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/Products"
              className={location.pathname === "/" ? "active-link" : ""}
            >
              Home
            </Nav.Link>

            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/products"
                className={location.pathname === "/products" ? "active-dropdown" : ""}
              >
                All Air-conditioned
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/products/split"
                className={location.pathname === "/products/split" ? "active-dropdown" : ""}
              >
                Split AC
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/products/ceiling"
                className={location.pathname === "/products/ceiling" ? "active-dropdown" : ""}
              >
                Ceiling AC
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/products/window"
                className={location.pathname === "/products/window" ? "active-dropdown" : ""}
              >
                Window AC
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/about"
              className={location.pathname === "/about" ? "active-link" : ""}
            >
              About Us
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contact"
              className={location.pathname === "/contact" ? "active-link" : ""}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Custom CSS */}
      <style>
        {`
          .custom-navbar {
            background: #343a40;
            padding: 12px 0;
            box-shadow: 0px 4px 6px rgb(239, 243, 245);
          }

          .custom-navbar .nav-link {
            color:rgb(239, 243, 245);
            font-size: 16px;
            font-weight: 500;
            transition: color 0.3s ease-in-out;
          }

          .custom-navbar .nav-link:hover {
            color:rgb(239, 243, 245);
          }

          .custom-navbar .active-link {
            color: rgb(239, 243, 245) !important;
            font-weight: bold;
            border-bottom: 2px solid rgb(239, 243, 245);
          }

          .custom-navbar .dropdown-menu {
            background: #222;
          }

          .custom-navbar .dropdown-item {
            color: white;
            transition: background 0.3s ease-in-out;
          }

          .custom-navbar .dropdown-item:hover {
            background:rgb(157, 183, 200);
          }

          .custom-navbar .active-dropdown {
            background:rgb(157, 183, 200) !important;
            color: white !important;
          }

          .brand-name {
            color: white;
            font-size: 18px;
            font-weight: bold;
          }
        `}
      </style>
    </Navbar>
  );
};

export default NavbarComponent;
