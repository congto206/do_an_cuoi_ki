import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Modal } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your full name.";
    if (!formData.email.trim()) newErrors.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format.";
    if (!formData.message.trim()) newErrors.message = "Please enter your message.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccessModal(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
      <NavbarComponent />
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <Container className="contact-container p-4 rounded shadow-lg" style={{ maxWidth: "900px", background: "#fff" }}>
          <h2 className="text-center mb-4">Contact Us</h2>

          <Row>
            <Col md={6} className="text-center">
              <h5 className="text-success">Hanoi</h5>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9410181422693!2d105.78296517609925!3d21.03721218061316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab36a9fb8877%3A0x8f24a2d4e8e0c5a5!2zOEEgVMO0biBUaOG6pXQgVGh1eeG7gWUsIE5hbSBU4bq_IE5pw6ptLCBIw6AgTuG7mWksIFZp4buHdA!5e0!3m2!1svi!2s!4v1710200000000!5m2!1svi!2s"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
              />

            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center">
              <div className="mb-3"><FaPhone className="me-2 text-primary" /> <strong>Hotline:</strong> +84 123 456 789</div>
              <div className="mb-3"><FaEnvelope className="me-2 text-danger" /> <strong>Email:</strong> support@maylanh.com</div>
              <div><FaMapMarkerAlt className="me-2 text-success" /> <strong>Address:</strong> 8A Ton That Thuyet, Hanoi</div>
            </Col>
          </Row>

          <Card className="mt-4 p-4 shadow-sm">
            <h5 className="text-center text-primary">Send Us a Message</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                  placeholder="Enter your full name"
                />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>
              
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  placeholder="Enter your email"
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
              
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                  placeholder="Enter your message"
                />
                <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
              </Form.Group>
              
              <Button className="btn-success w-100" type="submit">Send</Button>
            </Form>
          </Card>
        </Container>
      </Container>

      <Footer />

      {/* Success Modal */}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered>
        <Modal.Body className="text-center p-4">
          <h4 className="text-success">🎉 Message Sent Successfully!</h4>
          <p>Thank you for contacting us. We will get back to you soon.</p>
          <Button variant="success" onClick={() => setShowSuccessModal(false)}>OK</Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactPage;
