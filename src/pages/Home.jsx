import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import NavbarComponent from "../components/NavbarComponent";
import products from "../data/products.json";

const Home = () => {
  const navigate = useNavigate();
  const productSliderRef = useRef(null);

  useEffect(() => {
    const slider = productSliderRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 5; 
    const scrollStep = () => {
      if (slider) {
        slider.scrollLeft += scrollSpeed;
        scrollAmount += scrollSpeed;
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
          slider.scrollLeft = 0; 
        }
      }
    };
    const interval = setInterval(scrollStep, 50); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <NavbarComponent />

      {/* Banner */}
      <Carousel className="mt-5 pt-4 shadow-lg rounded">
        <Carousel.Item>
          <div className="banner" style={{ backgroundImage: "url('/images/banner.jpg')" }}></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="banner" style={{ backgroundImage: "url('/images/banner2.jpg')" }}></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="banner" style={{ backgroundImage: "url('/images/banner3.jpg')" }}></div>
        </Carousel.Item>
      </Carousel>

      {/* Featured Products */}
      <Container className="mt-5">
        <h2 className="text-center fw-bold text-primary">🔥 Featured Products 🔥</h2>
        <p className="text-center text-muted">Top quality, outstanding performance</p>
        <div ref={productSliderRef} className="product-slider mt-4">
          {products.slice(0, 62).map((product) => (
            <div key={product.id} className="product-card-container">
              <Card className="product-card border-0">
                <div className="product-img-container">
                  <Card.Img variant="top" src={product.image} className="product-image" />
                </div>
                <Card.Body className="text-center">
                  <h5 className="fw-bold text-dark">{product.name}</h5>
                  <Button 
                    variant="outline-primary" 
                    size="sm" 
                    className="mt-2 view-details-btn"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>

      {/* Footer */}
      <footer className="footer bg-dark text-white text-center p-4 mt-5">
        <Container>
          <Row>
            <Col md={4}>
              <h5>Contact</h5>
              <p><FaMapMarkerAlt /> Address: 123 Đường ABC, Quận 1, TP.HCM</p>
              <p><FaPhone /> Phone: (012) 345-6789</p>
              <p><FaEnvelope /> Email: info@congty.com</p>
            </Col>
            <Col md={4}>
              <h5>Follow Us</h5>
              <div className="d-flex justify-content-center">
                <a href="https://www.facebook.com" className="text-white mx-2">
                  <FaFacebook size={30} />
                </a>
                <a href="https://www.twitter.com" className="text-white mx-2">
                  <FaTwitter size={30} />
                </a>
                <a href="https://www.instagram.com" className="text-white mx-2">
                  <FaInstagram size={30} />
                </a>
              </div>
            </Col>
            <Col md={4}>
              <h5>Working Hours</h5>
              <p>Monday - Saturday: 8:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>
            </Col>
          </Row>
        </Container>
      </footer>

      <style>
        {`
        .banner {
          height: 400px;
          background-size: cover;
          background-position: center;
          border-radius: 12px;
          box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
        }
        .product-slider {
          display: flex;
          overflow-x: hidden;
          gap: 20px;
          padding-bottom: 10px;
          scrollbar-width: none;
          white-space: nowrap;
          scroll-behavior: smooth;
        }
        .product-slider::-webkit-scrollbar {
          display: none;
        }
        .product-card-container {
          min-width: 250px;
          flex-shrink: 0;
        }
        .product-card {
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: white;
        }
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
        }
        .product-img-container {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
          border-bottom: 1px solid #ddd;
        }
        .product-image {
          max-height: 180px;
          object-fit: contain;
        }
        .view-details-btn {
          transition: all 0.3s ease;
        }
        .view-details-btn:hover {
          background-color: #007bff;
          color: white;
        }
        `}
      </style>
    </>
  );
};

export default Home;
