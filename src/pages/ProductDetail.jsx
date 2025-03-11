import React, { useState } from "react";
import { Container, Button, Card, ListGroup, Row, Col, Image } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import NavbarComponent from "../components/NavbarComponent";
import products from "../data/products.json";
import Footer from "../components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product?.image);

  if (!product)
    return (
      <Container className="mt-5 text-center">
        <h2 className="text-danger">❌ Product not found</h2>
        <Button variant="primary" onClick={() => navigate(-1)}>⬅️ Back</Button>
      </Container>
    );

  const handleBuyNow = () => {
    addToCart({ ...product, quantity: 1 });
    navigate("/cart");
  };

  return (
    <>
      <NavbarComponent />
      <Container className="mt-4">
        <Row>
          {/* Ảnh sản phẩm */}
          <Col md={6} className="text-center">
            <Image
              src={selectedImage}
              className="rounded shadow"
              fluid
              style={{ maxHeight: "400px" }}
            />
            <Row className="mt-3">
              {product.extraImages && product.extraImages.length > 0 ? (
                product.extraImages.map((img, index) => (
                  <Col key={index} xs={3} className="text-center">
                    <Image
                      src={img}
                      className="border rounded"
                      fluid
                      style={{ maxHeight: "80px", cursor: "pointer" }}
                      onClick={() => setSelectedImage(img)}
                    />
                  </Col>
                ))
              ) : (
                <Col xs={3} className="text-center">
                  <Image src={product.image} className="border rounded" fluid style={{ maxHeight: "80px" }} />
                </Col>
              )}
            </Row>
          </Col>

          {/* Thông tin sản phẩm */}
          <Col md={6}>
            <h2 className="fw-bold">{product.name}</h2>
            <p className="text-muted">{product.description}</p>
            <h3 className="text-success fw-bold">{product.price} $</h3>
            <ListGroup variant="flush" className="mb-3">
              <ListGroup.Item><strong>Brand:</strong> {product.brand}</ListGroup.Item>
              <ListGroup.Item><strong>Warranty:</strong> {product.warranty}</ListGroup.Item>
              <ListGroup.Item><strong>Power Consumption:</strong> {product.power_consumption}</ListGroup.Item>
              <ListGroup.Item><strong>Stock:</strong> {product.stock} units</ListGroup.Item>
              <ListGroup.Item><strong>Rating:</strong> ⭐ {product.rating}/5</ListGroup.Item>
            </ListGroup>
            <div className="d-flex gap-3">
              <Button variant="outline-dark" onClick={() => navigate(-1)}>⬅️ Back</Button>
              <Button variant="success" onClick={handleBuyNow}>🛒 Buy Now</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetail;
