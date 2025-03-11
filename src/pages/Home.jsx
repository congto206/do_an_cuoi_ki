import React from "react";
import { Container, Card, Button, Carousel, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import products from "../data/products.json";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

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

      {/* Best Selling Products */}
      <Container className="mt-5">
        <h2 className="text-center fw-bold text-black">🔥 Best Selling Products 🔥</h2>
        <Row className="justify-content-center mt-4">
          {products.slice(0, 8).map((product) => (
            <Col key={product.id} md={3} sm={6} className="d-flex justify-content-center mb-4">
              <Card className="product-card border-0 shadow-sm">
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
            </Col>
          ))}
        </Row>
      </Container>

      <style>
        {`
        .banner {
          height: 400px;
          background-size: cover;
          background-position: center;
          border-radius: 12px;
          box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
        }
        .product-card {
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: white;
          width: 100%;
          max-width: 250px;
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
        
        /* Brighter logo */
        .navbar-brand img {
          filter: brightness(1.2);
        }
        
        /* Underline menu on hover */
        .nav-link:hover {
          text-decoration: underline;
        }
        `}
      </style>
      <Footer />
    </>
  );
};

export default Home;