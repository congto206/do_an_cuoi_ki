import React from "react";
import { Container, Button, Card, ListGroup } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import useCart
import NavbarComponent from "../components/NavbarComponent";
import products from "../data/products.json"; // Import dữ liệu từ JSON

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Lấy hàm addToCart từ context
  const product = products.find((p) => p.id === parseInt(id));

  if (!product)
    return (
      <Container className="mt-5 text-center">
        <h2 className="text-danger">❌ Product not found</h2>
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
      <Container className="mt-5 d-flex justify-content-center">
        <Card className="shadow-lg border-0 text-center product-detail-card p-3" style={{ maxWidth: "500px" }}>
          <div className="product-detail-img-wrapper">
            <Card.Img variant="top" src={product.image} className="product-detail-img rounded" style={{ maxHeight: "300px", objectFit: "contain" }} />
          </div>
          <Card.Body>
            <Card.Title className="text-dark fw-bold fs-4">{product.name}</Card.Title>
            <Card.Text className="text-muted">{product.description}</Card.Text>
            <Card.Text className="text-success fs-3 fw-bold">{product.price} VND</Card.Text>
            <ListGroup variant="flush" className="text-start">
              <ListGroup.Item><strong>Brand:</strong> {product.brand}</ListGroup.Item>
              <ListGroup.Item><strong>Warranty:</strong> {product.warranty}</ListGroup.Item>
              <ListGroup.Item><strong>Power Consumption:</strong> {product.power_consumption}</ListGroup.Item>
              <ListGroup.Item><strong>Stock:</strong> {product.stock} units</ListGroup.Item>
              <ListGroup.Item><strong>Rating:</strong> ⭐ {product.rating}/5</ListGroup.Item>
            </ListGroup>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <Button variant="outline-dark" className="px-4" onClick={() => navigate(-1)}>
                ⬅️ Back
              </Button>
              <Button variant="success" className="px-4" onClick={handleBuyNow}>
                🛒 Buy Now
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ProductDetail;
