import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <NavbarComponent />

      {/* About Section */}
      <Container className="py-5">
        <Row className="align-items-center">
          {/* Image Section */}
          <Col md={6} className="text-center">
            <Image 
              src="/images/banner1.jpg" 
              alt="Air Conditioning Products" 
              fluid 
              className="rounded shadow-sm"
              style={{ width: "100%", maxHeight: "450px", objectFit: "cover" }}
            />
          </Col>

          {/* Text Section */}
          <Col md={6} className="text-start">
            <h2 className="fw-bold text-black">Discover Our Commitment to Excellence</h2>
            <p className="fw-bold text-black">
              Customer Satisfaction in Air Conditioning Solutions with Innovative Technology and Exceptional Service to Enhance Your Comfort and Quality of Life.
            </p>
            <p className="text-black">
              Our dedication to innovation, reliability, and customer-first approach ensures you receive the best air conditioning solutions tailored to your specific needs, providing unmatched efficiency and convenience for both residential and commercial spaces.
            </p>
            <p className="text-black">
              We are a leading company specializing in providing and installing high-quality air conditioners. With years of experience, we are committed to delivering genuine products, professional services, and the best customer experience.
            </p>
            <p className="text-black">
              Our mission is to bring cool, comfortable, and energy-efficient spaces to every household and business. We offer a wide range of air conditioning solutions tailored to meet the needs of different environments.
            </p>
            <p className="text-black">
              Our expert team is dedicated to providing top-tier support and consultation to ensure our customers make the best choices.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Why Choose Us */}
      <Container className="py-3 bg-light rounded">
        <h2 className="text-center fw-bold text-black mb-4">Why Choose Us</h2>
        <Row>
          <Col md={4} className="text-center">
            <FaCheckCircle size={50} className="text-success mb-3" />
            <h5 className="fw-bold text-black">High-Quality Products</h5>
            <p className="text-black">We provide only genuine and top-brand air conditioners.</p>
          </Col>
          <Col md={4} className="text-center">
            <FaCheckCircle size={50} className="text-success mb-3" />
            <h5 className="fw-bold text-black">Professional Service</h5>
            <p className="text-black">Expert consultation and installation services.</p>
          </Col>
          <Col md={4} className="text-center">
            <FaCheckCircle size={50} className="text-success mb-3" />
            <h5 className="fw-bold text-black">Customer Satisfaction</h5>
            <p className="text-black">We prioritize customer experience with excellent support.</p>
          </Col>
        </Row>
      </Container>

      {/* Our Trusted Brands */}
      <Container className="py-3">
        <h2 className="text-center fw-bold text-black mb-4">Our Trusted Brands</h2>
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
  