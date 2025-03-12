import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaFire, FaHome, FaSnowflake, FaBuilding } from "react-icons/fa";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
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
  const filteredProducts = products.filter((product) => product.category === category);
  const displayedProducts = filteredProducts.slice(0, 3);

  return (
    <div className="mt-5" id={category}>
     <h3 className="text-center fw-bold category-title" style={{ color: "#555555" }}>
        {categoryIcons[category]} {title}
      </h3>
      <Row className="justify-content-center">
        {displayedProducts.map((product) => (
          <Col key={product.id} lg={4} md={6} sm={12} className="mb-4 d-flex align-items-stretch">
            <Card className="shadow-lg w-100 border-0 product-card">
              <Card.Img variant="top" src={product.image} className="product-img" />
              <Card.Body className="d-flex flex-column text-center">
                <Card.Title className="text-dark fw-bold">{product.name}</Card.Title>
                <Card.Text className="text-danger fs-5 fw-bold">${product.price}</Card.Text>
                <div className="mt-auto">
                  <Button variant="outline-primary" className="m-2 btn-custom" onClick={() => navigate(`/product/${product.id}`)}>
                    🔍 Details
                  </Button>
                  <Button variant="success" className="m-2 btn-custom" onClick={() => navigate(`/product/${product.id}`)}>
                    🛒 Add To Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-3">
        <Button variant="success" className="btn-view-all" onClick={() => navigate(`/products/${category}`)}>
           View All
        </Button>
      </div>
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
          <h2 className="text-center text-black fw-bold"> Air Conditioner List </h2>
          {categories.map(({ key, title }) => (
            <ProductSection key={key} title={title} category={key} />
          ))}
        </Container>
      </div>

      <Footer />

      <style>
        {`
        .products-container {
          display: flex;
          min-height: 100vh;
          margin-top: 70px;
        }

        .sidebar {
          position: sticky;
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
          display: flex;
          flex-direction: column;
        }

        .product-card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }

        .product-card:hover {
          transform: scale(1.1);
          box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.3);
        }

        .btn-view-all {
          font-size: 16px;
          font-weight: bold;
          padding: 10px 20px;
          border-radius: 5px;
          background-color: #C0C0C0;
          color: white;
          border: none;
          transition: background-color 0.3s ease-in-out, transform 0.2s;
        }

        .btn-view-all:hover {
          background-color: #808080;
          transform: scale(1.05);
        }
        `}
      </style>
    </>
  );
};

export default Products;
