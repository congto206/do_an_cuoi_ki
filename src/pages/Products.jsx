import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Pagination, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaFire, FaHome, FaSnowflake, FaBuilding } from "react-icons/fa";
import NavbarComponent from "../components/NavbarComponent";

const categoryIcons = {
  best: <FaFire className="category-icon" />, 
  window: <FaHome className="category-icon" />, 
  split: <FaSnowflake className="category-icon" />, 
  ceiling: <FaBuilding className="category-icon" />,
};

const categories = [
  { key: "best", title: "🔥 Điều hòa bán chạy nhất" },
  { key: "window", title: "🏠 Điều hòa cửa sổ" },
  { key: "split", title: "❄ Điều hòa treo tường" },
  { key: "ceiling", title: "🏢 Điều hòa âm trần" },
];

const products = [
  { id: 1, name: "Daikin Inverter 1.5 HP", category: "split", image: "/images/daikin1.jpg", price: "$500" },
  { id: 2, name: "Panasonic Inverter 1HP", category: "split", image: "/images/daikin2.jpg", price: "$450" },
  { id: 3, name: "LG DualCool 2HP", category: "split", image: "/images/daikin3.jpg", price: "$600" },
  { id: 4, name: "Mitsubishi Electric 2 HP", category: "split", image: "/images/lg1.jpg", price: "$520" },
  { id: 5, name: "Toshiba Inverter 1HP", category: "split", image: "/images/lg2.jpg", price: "$430" },
  { id: 6, name: "Daikin Inverter 1.5 HP", category: "split", image: "/images/lg3.jpg", price: "$500" },
  { id: 7, name: "Panasonic Inverter 1HP", category: "window", image: "/images/maylanhcua1.jpg", price: "$450" },
  { id: 8, name: "LG DualCool 2HP", category: "window", image: "/images/maylanhcua2.jpg", price: "$600" },
  { id: 9, name: "Mitsubishi Electric 2 HP", category: "split", image: "/images/panasonic1.jpg", price: "$520" },
  { id: 10, name: "Toshiba Inverter 1HP", category: "split", image: "/images/panasonic2.jpg", price: "$430" },
  { id: 11, name: "Daikin Inverter 1.5 HP", category: "split", image: "/images/panasonic3.jpg", price: "$500" },
  { id: 12, name: "Panasonic Inverter 1HP", category: "ceiling", image: "/images/sanphamamtuong1.jpg", price: "$450" },
  { id: 13, name: "LG DualCool 2HP", category: "ceiling", image: "/images/sanphamamtuong2.jpg", price: "$600" },
  { id: 14, name: "Mitsubishi Electric 2 HP", category: "ceiling", image: "/images/sanphamamtuong3.jpg", price: "$520" },
  { id: 15, name: "Toshiba Inverter 1HP", category: "best", image: "/images/panasonic1.jpg", price: "$430" },
  { id: 16, name: "Toshiba Inverter 1HP", category: "window", image: "/images/maylanhcua3.jpg", price: "$430" },
  { id: 17, name: "Toshiba Inverter 1HP", category: "best", image: "/images/panasonic1.jpg", price: "$430" },
  { id: 18, name: "Toshiba Inverter 1HP", category: "best", image: "/images/sanphamamtuong3.jpg", price: "$430" },
  { id: 19, name: "Toshiba Inverter 1HP", category: "best", image: "/images/lg3.jpg", price: "$430" },
  { id: 20, name: "Toshiba Inverter 1HP", category: "best", image: "/images/maylanhcua3.jpg", price: "$430" },

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
                    🔍 Xem chi tiết
                  </Button>
                  <Button variant="success" className="m-2 btn-custom" onClick={() => navigate(`/product/${product.id}`)}>
                    🛒 Mua ngay
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
          <h4 className="text-center text-black fw-bold py-3">📌 Danh mục sản phẩm</h4>
          <ListGroup variant="flush">
            {categories.map(({ key, title }) => (
              <ListGroup.Item key={key} action className="sidebar-item" onClick={() => document.getElementById(key).scrollIntoView({ behavior: "smooth" })}>
                {title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        <Container className="mt-4 product-content">
          <h2 className="text-center text-primary fw-bold">❄️ Danh sách điều hòa ❄️</h2>
          {categories.map(({ key, title }) => (
            <ProductSection key={key} title={title} category={key} />
          ))}
        </Container>
      </div>

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
                    /* Hiệu ứng rung nhẹ liên tục */
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

          /* Kết hợp hiệu ứng hover */
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