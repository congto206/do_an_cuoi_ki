import React, { useState, useEffect } from "react";
import { Container, Card, Button, Carousel, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import products from "../data/products.json";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowWelcome(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const handleCloseWelcome = () => setShowWelcome(false);

  const featuredProducts = products.filter(product => product.rating >= 4.5);
  const bestSellingProducts = products.filter(product => product.stock > 5);
  const discountProducts = products.filter(product => product.price < 700);

  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);
  };

  const renderProductCarousel = (title, products, autoSlide = false) => {
    const productChunks = chunkArray(products, 4);

    return (
      <Container className="mt-5">
        <h2 className="text-center fw-bold text-black">{title}</h2>
        <Carousel className="mt-4" interval={autoSlide ? 3000 : null} controls={true} indicators={false} prevIcon={<span className="carousel-control-prev-icon bg-dark" />} nextIcon={<span className="carousel-control-next-icon bg-dark" />}>
          {productChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center">
                {chunk.map((product) => (
                  <Card key={product.id} className="product-card border-0 shadow-sm mx-2" style={{ width: "250px" }}>
                    <div className="product-img-container">
                      <Card.Img variant="top" src={product.image} className="product-image" />
                    </div>
                    <Card.Body className="text-center">
                      <h5 className="fw-bold text-dark">{product.name}</h5>
                      <p className="text-muted">{product.brand}</p>
                      <h6 className="text-danger fw-bold">${product.price.toFixed(2)}</h6>
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
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    );
  };

  return (
    <>
      <NavbarComponent />
      <Modal show={showWelcome} onHide={handleCloseWelcome} centered>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to Our Store!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src="/images/welcome.jpg" alt="Welcome" className="img-fluid mb-3 rounded" style={{ maxHeight: "200px" }} />
          <h4>Exclusive Deals Just for You!</h4>
          <p>Explore our latest products, best-sellers, and incredible discounts. Enjoy a seamless shopping experience with us.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseWelcome}>Start Shopping</Button>
        </Modal.Footer>
      </Modal>

      <Carousel className="mt-5 pt-4 shadow-lg rounded">
        {["banner.jpg", "banner2.jpg", "banner3.jpg"].map((img, index) => (
          <Carousel.Item key={index}>
            <div className="banner" style={{ backgroundImage: `url('/images/${img}')` }}></div>
          </Carousel.Item>
        ))}
      </Carousel>

      {renderProductCarousel("🌟 Featured Products 🌟", featuredProducts, true)}
      {renderProductCarousel("🔥 Best Selling Products 🔥", bestSellingProducts)}
      {renderProductCarousel("💰 Discounted Products 💰", discountProducts)}
      <style>
              {`
                .banner {
                    width: 100%;
                    height: 400px;
                    object-fit: cover;
                    border-radius: 12px;
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
                  color: black !important;
                  border-color: black !important;
                  transition: all 0.3s ease;
                }

                .view-details-btn:hover {
                  background-color: black !important;
                  color: white !important;
                  border-color: black !important;
                }
                </style>
              `}
            </style>
      <Footer />
    </>
  );
};

export default Home;
