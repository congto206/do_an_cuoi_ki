import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import useCart
import NavbarComponent from "../components/NavbarComponent";

const products = [
  { id: 1, name: "Daikin Inverter 1.5 HP", image: "/images/daikin-1.5hp.jpg", price: 500, description: "Công nghệ Inverter tiết kiệm điện, làm lạnh nhanh." },
  { id: 2, name: "Panasonic Inverter 1HP", image: "/images/panasonic-1hp.jpg", price: 450, description: "Kháng khuẩn, khử mùi, vận hành êm ái." },
  { id: 3, name: "LG DualCool 2HP", image: "/images/lg-2hp.jpg", price: 600, description: "Làm lạnh nhanh, tiết kiệm điện tối ưu." }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Lấy hàm addToCart từ context
  const product = products.find((p) => p.id === parseInt(id));

  if (!product)
    return (
      <Container className="mt-5 text-center">
        <h2 className="text-danger">❌ Sản phẩm không tồn tại</h2>
        <Button variant="primary" onClick={() => navigate(-1)}>⬅️ Quay lại</Button>
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
        <Card className="shadow-lg border-0 mx-auto text-center product-detail-card">
          <div className="product-detail-img-wrapper">
            <Card.Img variant="top" src={product.image} className="product-detail-img" />
          </div>
          <Card.Body>
            <Card.Title className="text-primary fw-bold fs-4">{product.name}</Card.Title>
            <Card.Text className="text-muted">{product.description}</Card.Text>
            <Card.Text className="text-danger fs-3 fw-bold">{product.price} VND</Card.Text>
            <div className="d-flex justify-content-center">
              <Button variant="outline-secondary" className="m-2" onClick={() => navigate(-1)}>
                ⬅️ Quay lại
              </Button>
              <Button variant="success" className="m-2" onClick={handleBuyNow}>
                🛒 Mua ngay
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ProductDetail;
