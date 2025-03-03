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
          Bán Điều Hòa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
              Trang chủ
            </Nav.Link>
            <NavDropdown title="Sản phẩm" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/products" active={location.pathname === "/products"}>
                Tất cả điều hòa
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/products/split" active={location.pathname === "/products/split"}>
                Điều hòa treo tường
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/ceiling" active={location.pathname === "/products/ceiling"}>
                Điều hòa âm trần
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/window" active={location.pathname === "/products/window"}>
                Điều hòa cửa sổ
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about" active={location.pathname === "/about"}>
              Giới thiệu
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" active={location.pathname === "/contact"}>
              Liên hệ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
