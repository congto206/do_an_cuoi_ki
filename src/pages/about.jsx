import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";

const about = () => {
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
              Our mission is to bring cool, comfortable, and energy-efficient spaces to every household and business in Vietnam.
              We offer a wide range of air conditioning solutions tailored to meet the needs of different environments, from homes to commercial spaces.
            </p>
            <p className="text-muted">
              Our expert team is dedicated to providing top-tier support and consultation to ensure that our customers make the best choices
              for their cooling needs. Whether you need a residential AC unit, a commercial installation, or a multi-zone solution,
              we have the perfect product for you.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Featured Products */}
      <Container className="py-5">
        <h2 className="text-center fw-bold text-primary mb-4">Featured Products</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="shadow-sm border-0 text-center">
              <Image src="/images/panasonic1.jpg" alt="Product 1" fluid className="rounded-top" />
              <Card.Body>
                <h5 className="fw-bold">Panasonic Air Conditioner</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm border-0 text-center">
              <Image src="/images/amtran9.jpg" alt="Product 2" fluid className="rounded-top" />
              <Card.Body>
                <h5 className="fw-bold">Ceiling-mounted Air Conditioner</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm border-0 text-center">
              <Image src="/images/funiki-1.jpg" alt="Product 3" fluid className="rounded-top" />
              <Card.Body>
                <h5 className="fw-bold">Funiki Air Conditioner</h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Brand Logos */}
      <Container className="py-5">
        <h2 className="text-center fw-bold text-primary mb-4"> </h2>
        <Row className="g-4 text-center">
          <Col md={2}><Image src="/images/logopanasonic.jpg" alt="Brand 1" fluid /></Col>
          <Col md={2}><Image src="/images/funikilogo.jpg" alt="Brand 2" fluid /></Col>
          <Col md={2}><Image src="/images/greelogo.jpg" alt="Brand 3" fluid /></Col>
          <Col md={2}><Image src="/images/samsunglogo.jpg" alt="Brand 4" fluid /></Col>
          <Col md={2}><Image src="/images/toshibalogo.jpg" alt="Brand 5" fluid /></Col>
          <Col md={2}><Image src="/images/daikinlogo.jpg" alt="Brand 6" fluid /></Col>
        </Row>
      </Container>

      {/* Contact Information */}
      <Container className="py-5">
        <h2 className="text-center fw-bold text-primary mb-4">Contact Information</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-sm border-0 p-4 text-center">
              <Card.Body>
                <div className="mb-3 d-flex align-items-center justify-content-center">
                  <FaPhone size={20} className="me-3 text-primary" />
                  <strong>Hotline:</strong> +84 123 456 789
                </div>
                <div className="mb-3 d-flex align-items-center justify-content-center">
                  <FaEnvelope size={20} className="me-3 text-danger" />
                  <strong>Email:</strong> support@maylanh.com
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <FaMapMarkerAlt size={20} className="me-3 text-success" />
                  <strong>Address:</strong> 8A Ton That Thuyet, My Dinh, Cau Giay, Hanoi 100000, Vietnam
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default about;
