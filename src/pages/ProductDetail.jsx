import React, { useState, useEffect } from "react";
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
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  useEffect(() => {
    if (product) {
      const related = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);
      setSuggestedProducts(related);
    }
  }, [product]);

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
          <Col md={6} className="text-center">
            <Image src={selectedImage} className="rounded shadow" fluid style={{ maxHeight: "400px" }} />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold">{product.name}</h2>
            <h3 className="text-success fw-bold">${product.price}</h3>
            <ListGroup variant="flush" className="mb-3">
              <ListGroup.Item><strong>Brand:</strong> {product.brand}</ListGroup.Item>
              <ListGroup.Item><strong>Stock:</strong> {product.stock} units</ListGroup.Item>
              <ListGroup.Item><strong>Rating:</strong> ⭐ {product.rating}/5</ListGroup.Item>
            </ListGroup>
            <Button variant="success" onClick={handleBuyNow}>🛒 Add To Cart</Button>
          </Col>
        </Row>

        <h4 className="mt-5">Related Products</h4>
        <Row>
          {suggestedProducts.map((related) => (
            <Col key={related.id} xs={6} md={3} className="text-center">
              <Card className="shadow-sm border-0 d-flex flex-column h-100">
                <Card.Img variant="top" src={related.image} style={{ maxHeight: "150px", objectFit: "contain" }} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fs-6">{related.name}</Card.Title>
                  <h6 className="text-danger fw-bold">${related.price}</h6>
                  <Button variant="outline-primary" size="sm" onClick={() => navigate(`/product/${related.id}`)}>
                    View
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetail;
