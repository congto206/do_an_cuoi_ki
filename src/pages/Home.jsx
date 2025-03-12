import React from "react";
import { Container, Card, Button, Carousel, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import products from "../data/products.json";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  // Lọc sản phẩm theo tiêu chí mới
  const featuredProducts = products.filter(product => product.rating >= 4.5);
  const bestSellingProducts = products.filter(product => product.stock > 5);
  const discountProducts = products.filter(product => product.price < 700);

  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);
  };

  const renderProductCarousel = (title, products) => {
    const productChunks = chunkArray(products, 4); // Chia mỗi slide 4 sản phẩm

    return (
      <Container className="mt-5">
        <h2 className="text-center fw-bold text-black">{title}</h2>
        <Carousel className="mt-4" interval={3000} controls={true} indicators={false}>
          {productChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {chunk.map((product) => (
                  <Col key={product.id} md={3} className="d-flex justify-content-center">
                    <Card className="product-card border-0 shadow-sm mx-2" style={{ width: "250px" }}>
                      <div className="product-img-container">
                        <Card.Img variant="top" src={product.image} className="product-image" />
                      </div>
                      <Card.Body>
                        <h5 className="fw-bold text-dark">{product.name}</h5>
                        <p className="text-muted">{product.brand}</p>
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
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    );
  };

  return (
    <>
      <NavbarComponent />

      {/* Banner */}
      <Carousel className="mt-5 pt-4 shadow-lg rounded">
        {["banner.jpg", "banner2.jpg", "banner3.jpg"].map((img, index) => (
          <Carousel.Item key={index}>
            <div
              className="banner"
              style={{ backgroundImage: `url('/images/${img}')` }}
            ></div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Product Sections */}
      {renderProductCarousel("\uD83C\uDF1F Sản phẩm nổi bật \uD83C\uDF1F", featuredProducts)}
      {renderProductCarousel("\uD83D\uDD25 Sản phẩm bán chạy \uD83D\uDD25", bestSellingProducts)}
      {renderProductCarousel("\uD83D\uDCB0 Sản phẩm giảm giá \uD83D\uDCB0", discountProducts)}
  

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
          
      <Footer />
    </>
  );
};

export default Home;