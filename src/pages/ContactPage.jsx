import React from 'react';
import { Container, Row, Col, Form, Button, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <>
      {/* Thanh Menu */}
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

      <Container className="mt-5">
        <h2 className="text-center mb-4">Liên hệ chúng tôi</h2>

        {/* Form Nhập Thông Tin */}
        <Row className="mb-5">
          <Col md={{ span: 8, offset: 2 }}>
            <h5>Gửi tin nhắn cho chúng tôi</h5>
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control type="text" placeholder="Nhập họ và tên của bạn" />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Nhập email của bạn" />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Tin nhắn</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Nhập tin nhắn của bạn" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Gửi
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Google Map và Thông Tin Liên Hệ */}
        <Row>
          {/* Google Maps */}
          <Col md={6} className="text-center">
            <h5 className="text-center">Hà Nội</h5>
            <iframe
              title="Bản đồ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.985287588934!2d105.77949717609838!3d21.032185780614374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab36f62c235f%3A0x868c008e1c842b02!2zOEEgxJDGsOG7nW5nIFRo4bq_dCBUaHV54buFLCBN4bu5IMSQw6xuaCwgQ-G7lWkgR2nhuqV5LCBIw6AgTuG7mWkgMTAwMDAwLCBWaeG7h3Q!5e0!3m2!1svi!2s!4v1709200000000!5m2!1svi!2s"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>

          {/* Thông Tin Liên Hệ */}
          <Col md={6} className="d-flex flex-column justify-content-center">
            <div className="mb-4">
              <FaPhone size={30} className="me-2" />
              <strong>Điện thoại:</strong> +84 123 456 789
            </div>
            <div className="mb-4">
              <FaEnvelope size={30} className="me-2" />
              <strong>Email:</strong> support@maylanh.com
            </div>
            <div>
              <FaMapMarkerAlt size={30} className="me-2" />
              <strong>Địa chỉ:</strong> 8A Tôn Thất Thuyết, Mỹ Đình, Cầu Giấy, Hà Nội 100000, Việt Nam
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactPage;
