import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", address: "", phone: "" });
  const [shippingMethod, setShippingMethod] = useState("fixed");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.name || !formData.address || !formData.phone) {
      alert("⚠️ Please fill in all required fields.");
      return;
    }
    alert(`✅ Order placed successfully! Total amount: $${totalAmount.toFixed(2)}`);
    clearCart();
    navigate("/products");
  };

  return (
    <>
      <NavbarComponent />
      <Container className="mt-4">
        <h2 className="text-center mb-4">🔥 FireCheckout</h2>
        <Row>
          <Col md={6}>
            <Card className="p-3 mb-3">
              <h5>📍 Shipping Address</h5>
              <Form>
                <Form.Group className="mb-2">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                </Form.Group>
              </Form>
            </Card>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={12}>
                <Card className="p-3 mb-3">
                  <h5>🚚 Shipping Methods</h5>
                  <Form>
                    <Form.Check type="radio" label="$5.00 - Fixed Rate" name="shipping" value="fixed" checked={shippingMethod === "fixed"} onChange={() => setShippingMethod("fixed")} />
                    <Form.Check type="radio" label="$15.00 - Best Way" name="shipping" value="bestway" checked={shippingMethod === "bestway"} onChange={() => setShippingMethod("bestway")} />
                  </Form>
                </Card>
              </Col>
              <Col md={12}>
                <Card className="p-3 mb-3">
                  <h5>💳 Payment Method</h5>
                  <Form>
                    <Form.Check type="radio" label="Cash on Delivery" name="payment" value="cod" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                    <Form.Check type="radio" label="Bank Transfer" name="payment" value="bank" checked={paymentMethod === "bank"} onChange={() => setPaymentMethod("bank")} />
                  </Form>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card className="p-3 mb-3">
              <h5>🛒 Order Summary</h5>
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div key={item.id} className="d-flex align-items-center border-bottom py-2">
                    <Image src={item.image} alt={item.name} width={50} height={50} className="me-3" rounded />
                    <div className="flex-grow-1">
                      <span>{item.name}</span>
                      <div className="text-muted">Qty: {item.quantity}</div>
                    </div>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted">No items in cart</p>
              )}
              <h5 className="text-end mt-3">Total: <span className="text-danger">${totalAmount.toFixed(2)}</span></h5>
              <Button variant="primary" onClick={handleSubmit} className="mt-3 w-100">Place Order</Button>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Checkout;