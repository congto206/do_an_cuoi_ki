import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Pagination, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaFire, FaHome, FaSnowflake, FaBuilding } from "react-icons/fa";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";  // Import Footer
import products from '../data/products.json';

const categoryIcons = {
  best: <FaFire className="category-icon" />, 
  window: <FaHome className="category-icon" />, 
  split: <FaSnowflake className="category-icon" />, 
  ceiling: <FaBuilding className="category-icon" />,
};

const categories = [
  { key: "best", title: " Best selling air conditioner" },
  { key: "window", title: " Window AC" },
  { key: "split", title: " Split AC" },
  { key: "ceiling", title: " Ceiling AC" },
];

const ProductSection = ({ title, category }) => {
  const navigate = useNavigate();
  const itemsPerPage = 3;
  const filteredProducts = products.filter((product) => product.category === category);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="mt-5" id={category}>
      <h3 className="text-center text-success fw-bold category-title">
        {categoryIcons[category]} {title}
      </h3>
      <Row className="justify-content-center">
        {currentProducts.map((product) => (
          <Col key={product.id} lg={4} md={6} sm={12} className="mb-4 d-flex align-items-stretch">
            <Card className="shadow-lg w-100 border-0 product-card">
              <Card.Img variant="top" src={product.image} className="product-img" />
              <Card.Body className="d-flex flex-column text-center">
                <Card.Title className="text-dark fw-bold">{product.name}</Card.Title>
                <Card.Text className="text-danger fs-5 fw-bold">{product.price}</Card.Text>
                <div className="mt-auto">
                  <Button variant="outline-primary" className="m-2 btn-custom" onClick={() => navigate(`/product/${product.id}`)}>
                    🔍 Details
                  </Button>
                  <Button variant="success" className="m-2 btn-custom" onClick={() => navigate(`/product/${product.id}`)}>
                    🛒 Buy
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination className="justify-content-center mt-3">
        <Pagination.Prev disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} />
      </Pagination>
    </div>
  );
};

const Products = () => {
  return (
    <>
      <NavbarComponent />
      <div className="products-container">
        <div className="sidebar">
          <h4 className="text-center text-black fw-bold py-3"> Product catalog</h4>
          <ListGroup variant="flush">
            {categories.map(({ key, title }) => (
              <ListGroup.Item key={key} action className="sidebar-item" onClick={() => document.getElementById(key).scrollIntoView({ behavior: "smooth" })}>
                {title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        <Container className="mt-4 product-content">
          <h2 className="text-center text-primary fw-bold"> Air conditioner list </h2>
          {categories.map(({ key, title }) => (
            <ProductSection key={key} title={title} category={key} />
          ))}
        </Container>
      </div>

      {/* Thêm Footer ở đây */}
      <Footer />

      <style>
        {`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: #ffffff;
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
        }

        .products-container {
          display: flex;
          margin-top: 70px;
        }

        .sidebar {
          position: fixed;
          top: 70px;
          left: 0;
          width: 18%;
          height: calc(100vh - 70px);
          background-color: #f8f9fa;
          padding: 20px;
          color: #333;
          overflow-y: auto;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
          border-right: 2px solid #ddd;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
          }
          100% {
            transform: scale(1);
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }
        }
        .product-card {
          animation: pulse 3s infinite ease-in-out;
          transition: all 0.3s ease-in-out;
        }

        .product-card:hover {
          transform: scale(1.05);
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
          animation: none;
        }

        .product-content {
          margin-left: 20%;
          width: 80%;
          padding: 20px;
        }
        `}
      </style>
    </>
  );
};

export default Products;
