import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <NavbarComponent />

      {/* Banner */}
      <div className="contact-banner d-flex align-items-center justify-content-center text-white text-center">
        <h1 className="fw-bold">Contact Us</h1>
      </div>

      {/* About Us */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <Image 
              src="/images/banner1.jpg" 
              alt="Air Conditioning Products" 
              fluid 
              className="rounded shadow-sm"
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold text-primary">About Us</h2>
            <p className="text-muted">
              We are a leading company specializing in providing and installing high-quality air conditioners.
              With years of experience, we are committed to delivering genuine products, professional services,
              and the best customer experience.
            </p>
            <p className="text-muted">
              Our mission is to bring cool, comfortable, and energy-efficient spaces to every household and business.
              We offer a wide range of air conditioning solutions tailored to meet the needs of different environments.
            </p>
            <p className="text-muted">
              Our expert team is dedicated to providing top-tier support and consultation to ensure our customers make the best choices.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Why Choose Us */}
      <Container className="py-5 bg-light rounded">
        <h2 className="text-center fw-bold text-primary mb-4">Why Choose Us</h2>
        <Row>
          <Col md={4} className="text-center">
            <FaCheckCircle size={50} className="text-success mb-3" />
            <h5 className="fw-bold">High-Quality Products</h5>
            <p className="text-muted">We provide only genuine and top-brand air conditioners.</p>
          </Col>
          <Col md={4} className="text-center">
            <FaCheckCircle size={50} className="text-success mb-3" />
            <h5 className="fw-bold">Professional Service</h5>
            <p className="text-muted">Expert consultation and installation services.</p>
          </Col>
          <Col md={4} className="text-center">
            <FaCheckCircle size={50} className="text-success mb-3" />
            <h5 className="fw-bold">Customer Satisfaction</h5>
            <p className="text-muted">We prioritize customer experience with excellent support.</p>
          </Col>
        </Row>
      </Container>

      {/* Brand Logos */}
      <Container className="py-5">
        <h2 className="text-center fw-bold text-primary mb-4">Our Trusted Brands</h2>
        <Row className="g-4 text-center justify-content-center">
          <Col xs={6} sm={4} md={2}><Image src="/images/logopanasonic.jpg" alt="Panasonic" fluid className="rounded-circle shadow-sm" /></Col>
          <Col xs={6} sm={4} md={2}><Image src="/images/funikilogo.jpg" alt="Funiki" fluid className="rounded-circle shadow-sm" /></Col>
          <Col xs={6} sm={4} md={2}><Image src="/images/greelogo.jpg" alt="Gree" fluid className="rounded-circle shadow-sm" /></Col>
          <Col xs={6} sm={4} md={2}><Image src="/images/samsunglogo.jpg" alt="Samsung" fluid className="rounded-circle shadow-sm" /></Col>
          <Col xs={6} sm={4} md={2}><Image src="/images/toshibalogo.jpg" alt="Toshiba" fluid className="rounded-circle shadow-sm" /></Col>
          <Col xs={6} sm={4} md={2}><Image src="/images/daikinlogo.jpg" alt="Daikin" fluid className="rounded-circle shadow-sm" /></Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default About;
