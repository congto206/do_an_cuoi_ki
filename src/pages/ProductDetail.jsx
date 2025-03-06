import React from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import useCart
import NavbarComponent from "../components/NavbarComponent";
import products from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Lấy hàm addToCart từ context
  const product = products.find((p) => p.id === parseInt(id));

  if (!product)
    return (
      <Container className="mt-5 text-center">
        <h2 className="text-danger">❌ Sản phẩm không tồn tại</h2>
        <Button variant="primary" onClick={() => navigate(-1)}>⬅️ Back</Button>
      </Container>
    );

  const handleBuyNow = () => {
    addToCart({ ...product, quantity: 1 }); // Thêm sản phẩm vào giỏ hàng
    navigate("/cart"); // Điều hướng đến trang giỏ hàng
  };

  return (
    <>
      <NavbarComponent />
      <Container className="mt-5">
        <Card className="shadow-lg border-0 mx-auto p-4 product-detail-card">
          <Row className="align-items-center">
            {/* Ảnh sản phẩm */}
            <Col md={4} className="d-flex justify-content-center">
              <Card.Img
                variant="top"
                src={product.image}
                className="product-detail-img"
              />
            </Col>

            {/* Thông tin sản phẩm */}
            <Col md={8}>
              <Card.Body>
                <Card.Title className="text-primary fw-bold fs-4">{product.name}</Card.Title>
                <Card.Text className="text-muted mt-2">{product.description}</Card.Text>
                <Card.Text className="text-muted mt-2">⚡ {product.power_consumption}</Card.Text>
                <Card.Text className="text-muted mt-2">⭐ {product.rating}</Card.Text>
                <Card.Text className="text-muted mt-2">🏢 {product.brand}</Card.Text>
                <Card.Text className="text-muted mt-2">📦 {product.stock} sản phẩm có sẵn</Card.Text>
                <Card.Text className="text-danger fs-3 fw-bold mt-3">{product.price} $</Card.Text>

                {/* Nút hành động */}
                <div className="d-flex mt-3">
                  <Button variant="outline-secondary" className="me-3" onClick={() => navigate(-1)}>
                    ⬅️ Back
                  </Button>
                  <Button variant="warning" className="me-3" onClick={() => addToCart({ ...product, quantity: 1 })}>
                    🛒 Thêm vào giỏ hàng
                  </Button>
                  <Button variant="success" onClick={handleBuyNow}>
                    🛍️ Mua ngay
                  </Button>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default ProductDetail;
