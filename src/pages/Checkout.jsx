import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card, Tabs, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";

const Checkout = ({ cartItems = [] }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", address: "", phone: "" });
  const [activeTab, setActiveTab] = useState("cart");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Đặt hàng thành công!");
    navigate("/");
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <NavbarComponent />
      <Container className="mt-5">
        <h2 className="text-center mb-4">Thanh toán</h2>
        <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
          <Tab eventKey="cart" title="Đơn hàng của bạn">
            <Row>
              <Col md={8} className="mx-auto">
                {cartItems.map((item) => (
                  <Card key={item.id} className="mb-3 p-2">
                    <Row>
                      <Col md={4}>
                        <Card.Img src={item.image} alt={item.name} className="img-fluid" />
                      </Col>
                      <Col md={8}>
                        <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>Giá: ${item.price}</Card.Text>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                ))}
                <h5 className="mt-3">Tổng tiền: ${totalAmount.toFixed(2)}</h5>
                <Button variant="primary" onClick={() => setActiveTab("info")} className="mt-3 w-100">
                  Tiếp tục
                </Button>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="info" title="Thông tin giao hàng">
            <Row>
              <Col md={6} className="mx-auto">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Họ và Tên</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Địa chỉ</Form.Label>
                    <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                  </Form.Group>
                  <Button variant="success" type="submit" className="mt-3 w-100">
                    Xác nhận đặt hàng
                  </Button>
                </Form>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
      <Footer />
    </>
  );
};

export default Checkout;
