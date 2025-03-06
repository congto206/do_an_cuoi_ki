import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>
      <style>
        {`
          .contact-container {
            background: #f1f3f5;
            padding: 40px 20px;
            border-radius: 10px;
            max-width: 850px;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
          }
          .contact-form {
            background: #fff;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }
          .btn-custom {
            background-color: #28a745;
            color: white;
            padding: 12px;
            border-radius: 5px;
            width: 100%;
            transition: all 0.3s;
          }
          .btn-custom:hover {
            background-color: #218838;
          }
          .info-item {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 10px;
          }
        `}
      </style>

      <NavbarComponent />

      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <Container className="contact-container">
          <h2 className="text-center text-dark mb-4">Liên hệ chúng tôi</h2>
          
          <Row>
            <Col md={6} className="text-center">
              <h5 className="text-success">Hà Nội</h5>
              <iframe
                title="Bản đồ"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.985287588934!2d105.77949717609838!3d21.032185780614374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab36f62c235f%3A0x868c008e1c842b02!2zOEEgxJDGsOG7nW5nIFRo4bq_dCBUaHV54buFLCBN4bu5IMSQw6xuaCwgQ-G7lWkgR2nhuqV5LCBIw6AgTuG7mWkgMTAwMDAwLCBWaeG7h3Q!5e0!3m2!1svi!2s!4v1709200000000!5m2!1svi!2s"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Col>

            <Col md={6} className="d-flex flex-column justify-content-center">
              <div className="info-item">
                <FaPhone size={20} className="text-primary" />
                <strong>+84 123 456 789</strong>
              </div>
              <div className="info-item">
                <FaEnvelope size={20} className="text-danger" />
                <strong>support@maylanh.com</strong>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt size={20} className="text-success" />
                <strong>8A Tôn Thất Thuyết, Mỹ Đình, Cầu Giấy, Hà Nội 100000</strong>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={{ span: 8, offset: 2 }} className="contact-form">
              <h5 className="text-center text-primary mb-3">Gửi tin nhắn cho chúng tôi</h5>
              <Form>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Họ và tên</Form.Label>
                  <Form.Control type="text" placeholder="Nhập họ và tên của bạn" required />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Nhập email của bạn" required />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Tin nhắn</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Nhập tin nhắn của bạn" required />
                </Form.Group>
                <Button className="btn-custom" type="submit">
                  Gửi
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
      
      <Footer />
    </>
  );
};

export default ContactPage;