import React from 'react';
import { Container, Row, Col, Form, Button, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <>
      <style>
        {`
          .custom-navbar {
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            padding: 15px 0;
          }
          .contact-container {
            background: #f8f9fa;
            padding: 40px 20px;
            border-radius: 10px;
            width: 100%;
            max-width: 900px;
          }
          .contact-form {
            background: #fff;
            border-radius: 10px;
            padding: 25px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          }
          .btn-custom {
            background-color: #28a745;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            width: 100%;
          }
          .btn-custom:hover {
            background-color: #218838;
          }
        `}
      </style>

      {/* Thanh Menu */}
      <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="/">
            <img src="/images/logo.jpg" alt="Logo" width="40" height="40" className="me-2" />
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/Products">Home</Nav.Link>
              <NavDropdown title="Sản phẩm" id="basic-nav-dropdown">
                <NavDropdown.Item href="/products">All air-conditioned</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/products/split">Split AC</NavDropdown.Item>
                <NavDropdown.Item href="/products/ceiling">Ceiling AC</NavDropdown.Item>
                <NavDropdown.Item href="/products/window">Window AC</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about"> About US</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Bố cục căn giữa */}
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <Container className="contact-container">
          <h2 className="text-center">Liên hệ chúng tôi</h2>

          {/* Google Map và Thông Tin Liên Hệ */}
          <Row>
            <Col md={6} className="text-center">
              <h5 className="text-success">Hà Nội</h5>
              <iframe
                title="Bản đồ"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.985287588934!2d105.77949717609838!3d21.032185780614374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab36f62c235f%3A0x868c008e1c842b02!2zOEEgxJDGsOG7nW5nIFRo4bq_dCBUaHV54buFLCBN4bu5IMSQw6xuaCwgQ-G7lWkgR2nhuqV5LCBIw6AgTuG7mWkgMTAwMDAwLCBWaeG7h3Q!5e0!3m2!1svi!2s!4v1709200000000!5m2!1svi!2s"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Col>

            <Col md={6} className="d-flex flex-column justify-content-center">
              <div className="mb-3">
                <FaPhone size={20} className="me-2 text-primary" />
                <strong>Hotline:</strong> +84 123 456 789
              </div>
              <div className="mb-3">
                <FaEnvelope size={20} className="me-2 text-danger" />
                <strong>Email:</strong> support@maylanh.com
              </div>
              <div>
                <FaMapMarkerAlt size={20} className="me-2 text-success" />
                <strong>Address:</strong> 8A Tôn Thất Thuyết, Mỹ Đình, Cầu Giấy, Hà Nội 100000, Việt Nam
              </div>
            </Col>
          </Row>

          {/* Form Nhập Thông Tin */}
          <Row className="mt-4">
            <Col md={{ span: 8, offset: 2 }} className="contact-form">
              <h5 className="text-center text-primary">Gửi tin nhắn cho chúng tôi</h5>
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
                <Button className="btn-custom" type="submit">
                  Gửi
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default ContactPage;
