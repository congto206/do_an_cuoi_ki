import React, { useState, useEffect } from "react";
import { Container, Button, Card, ListGroup, Row, Col, Image, Table } from "react-bootstrap";
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
        .slice(0, 4); // Lấy 4 sản phẩm liên quan
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

  const handleReplaceSuggestedProduct = (index) => {
    const remainingProducts = products.filter(
      (p) => p.category === product.category &&
             p.id !== product.id &&
             !suggestedProducts.some(sp => sp.id === p.id)
    );
    if (remainingProducts.length > 0) {
      const newProduct = remainingProducts[Math.floor(Math.random() * remainingProducts.length)];
      setSuggestedProducts((prev) => {
        const updated = [...prev];
        updated[index] = newProduct;
        return updated;
      });
    }
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
              <Button variant="outline-dark" onClick={() => navigate("/products")}>⬅️ Back</Button>
              <Button variant="dark" onClick={handleBuyNow}>🛒 Add To Cart</Button>

            </div>
          </Col>
        </Row>

        {/* Thêm Bảng Thông Tin Chi Tiết */}
        <Card className="mt-4">
          <Card.Body>
            <Card.Title className="fw-bold"> Product Specifications</Card.Title>
            <Table striped bordered hover responsive className="mt-2">
              <tbody>
              <tr><td>🔹 <strong>Type:</strong></td><td>1-way (cooling only)</td></tr>
              <tr><td>🔹 <strong>Inverter:</strong></td><td>Yes, Inverter</td></tr>
              <tr><td>🔹 <strong>Cooling Power:</strong></td><td>1.5 HP - 12,300 BTU</td></tr>
              <tr><td>🔹 <strong>Room Size:</strong></td><td>15 - 20m² (40 - 60m³)</td></tr>
              <tr><td>🔹 <strong>Noise Level:</strong></td><td>Indoor: 20/37 dB, Outdoor: 40/47 dB</td></tr>
              <tr><td>🔹 <strong>Manufacturing Year:</strong></td><td>2024</td></tr>
              <tr><td>🔹 <strong>Made in:</strong></td><td>Vietnam</td></tr>
              <tr><td>🔹 <strong>Warranty:</strong></td><td>1 year (Indoor) / 5 years (Compressor)</td></tr>
              <tr><td>🔹 <strong>Heat Exchanger Material:</strong></td><td>Copper tubing, Aluminum fins</td></tr>
              <tr><td>🔹 <strong>Refrigerant Type:</strong></td><td>R-32</td></tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        {/* Danh sách sản phẩm đề xuất */}
        <h4 className="mt-5">Related Products</h4>
        <Row className="g-4">  
            {suggestedProducts.map((related, index) => (
              <Col key={related.id} xs={6} md={3}>
                <Card className="shadow-sm border-0 h-100 d-flex flex-column align-items-center text-center">
                  <div style={{ width: "100%", height: "180px", overflow: "hidden" }}>
                    <Card.Img 
                      variant="top" 
                      src={related.image} 
                      style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }} 
                      onClick={() => handleReplaceSuggestedProduct(index)} 
                    />
                  </div>
                  <Card.Body className="d-flex flex-column justify-content-between w-100">
                    <Card.Title className="fs-6 text-truncate">{related.name}</Card.Title>
                    <Card.Text className="text-success fw-bold">{related.price} $</Card.Text> 
                    <Button variant="dark" size="sm" onClick={() => navigate(`/product/${related.id}`)}>
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
