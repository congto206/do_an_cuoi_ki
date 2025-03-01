import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import useCart
import NavbarComponent from "../components/NavbarComponent";

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
