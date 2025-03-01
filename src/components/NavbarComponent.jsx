import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Bán Điều Hòa</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/Products">Trang chủ</Nav.Link>
              <NavDropdown title="Sản phẩm" id="basic-nav-dropdown">
                <NavDropdown.Item href="/products">Tất cả điều hòa</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/products/split">Điều hòa treo tường</NavDropdown.Item>
                <NavDropdown.Item href="/products/ceiling">Điều hòa âm trần</NavDropdown.Item>
                <NavDropdown.Item href="/products/window">Điều hòa cửa sổ</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Giới thiệu</Nav.Link>
              <Nav.Link href="/contact">Liên hệ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavbarComponent;
