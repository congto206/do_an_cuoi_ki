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
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [extraImages, setExtraImages] = useState([]);
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.image);
      setExtraImages(foundProduct.extraImages ? [...foundProduct.extraImages] : []);
      
      const related = products
        .filter((p) => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setSuggestedProducts(related);
    }
  }, [id]);

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

  const handleImageClick = (newImage) => {
    setExtraImages((prev) => {
      const updatedImages = prev.filter((img) => img !== newImage);
      return [selectedImage, ...updatedImages];
    });
    setSelectedImage(newImage);
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
              {extraImages.length > 0 ? (
                extraImages.map((img, index) => (
                  <Col key={index} xs={3} className="text-center">
                    <Image
                      src={img}
                      className="border rounded"
                      fluid
                      style={{ maxHeight: "80px", cursor: "pointer" }}
                      onClick={() => handleImageClick(img)}
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
            <Button variant="outline-dark" onClick={() => navigate("/products")}>⬅️ Back</Button>
            <Button variant="success" onClick={handleBuyNow}>🛒 Add To Cart</Button>
            </div>
          </Col>
        </Row>

        {/* Danh sách sản phẩm đề xuất */}
        <h4 className="mt-5">Related Products</h4>
        <Row>
          {suggestedProducts.map((related) => (
            <Col key={related.id} xs={6} md={3} className="text-center">
              <Card className="shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={related.image}
                  style={{ maxHeight: "150px", objectFit: "contain", cursor: "pointer" }}
                  onClick={() => navigate(`/product/${related.id}`)}
                />
                <Card.Body>
                  <Card.Title className="fs-6">{related.name}</Card.Title>
                  <Button variant="outline-primary" size="sm" onClick={() => navigate(`/product/${related.id}`)}>View</Button>
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
