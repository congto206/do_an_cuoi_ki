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
          }
          .section-title {
            font-weight: bold;
            color: #333;
            text-transform: uppercase;
            margin-bottom: 20px;
          }
          .contact-form {
            background: #fff;
            border-radius: 10px;
            padding: 25px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          }
          .form-title {
            color: #007bff;
            font-weight: bold;
            text-align: center;
          }
          .contact-info div {
            font-size: 16px;
            font-weight: 500;
            display: flex;
            align-items: center;
            padding: 10px;
            border-radius: 8px;
            transition: background 0.3s ease-in-out;
          }
          .contact-info div:hover {
            background: rgba(0, 123, 255, 0.1);
          }
          .location-title {
            font-weight: bold;
            color: #28a745;
            text-align: center;
            margin-bottom: 10px;
          }
          .form-control {
            border-radius: 5px;
            padding: 10px;
            border: 1px solid #ddd;
          }
          .btn-custom {
            background-color: #28a745;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            transition: background 0.3s;
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
          <Navbar.Brand href="/" className="d-flex align-items-center">
                    <img
                      src="/images/logo.jpg" // Lấy logo từ thư mục public
                      alt="Logo"
                      width="40" // Điều chỉnh kích thước phù hợp
                      height="40"
                      className="me-2"
                    />
                    Bán Điều Hòa
                  </Navbar.Brand>
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
              <Nav.Link href="/about">Giới thiệu</Nav.Link>
              <Nav.Link href="/contact">Liên hệ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5 contact-container">
        <h2 className="text-center section-title">Liên hệ chúng tôi</h2>

        {/* Form Nhập Thông Tin */}
        <Row className="mb-5">
          <Col md={{ span: 8, offset: 2 }} className="contact-form">
            <h5 className="form-title">Gửi tin nhắn cho chúng tôi</h5>
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control type="text" placeholder="Nhập họ và tên của bạn" className="form-control" />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Nhập email của bạn" className="form-control" />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Tin nhắn</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Nhập tin nhắn của bạn" className="form-control" />
              </Form.Group>
              <Button className="btn-custom" type="submit">
                Gửi
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Google Map và Thông Tin Liên Hệ */}
        <Row>
          <Col md={6} className="text-center">
            <h5 className="location-title">Hà Nội</h5>
            <iframe
              title="Bản đồ"
              src="https://www.google.com/maps/embed?..."
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>

          <Col md={6} className="d-flex flex-column justify-content-center contact-info">
            <div className="mb-4">
              <FaPhone size={25} className="me-3 text-primary" />
              <strong>Điện thoại:</strong> +84 123 456 789
            </div>
            <div className="mb-4">
              <FaEnvelope size={25} className="me-3 text-danger" />
              <strong>Email:</strong> support@maylanh.com
            </div>
            <div>
              <FaMapMarkerAlt size={25} className="me-3 text-success" />
              <strong>Địa chỉ:</strong> 8A Tôn Thất Thuyết, Mỹ Đình, Cầu Giấy, Hà Nội 100000, Việt Nam
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactPage;
