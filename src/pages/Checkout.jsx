import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Table, Tabs, Tab, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", address: "", phone: "" });
  const [activeTab, setActiveTab] = useState("cart");

  // Calculate total cart amount accurately based on quantity
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Order placed successfully! Total amount: $${totalAmount.toFixed(2)}`);
    clearCart();
    navigate("/products"); // Redirect to products page instead of home
  };

  return (
    <>
      <NavbarComponent />
      <Container className="mt-5">
        <h2 className="text-center mb-4">🛍️ Checkout</h2>

        {cart.length === 0 ? (
          <Alert variant="warning" className="text-center">
            🛒 Your cart is empty. {" "}
            <Button variant="link" onClick={() => navigate("/products")}>
              Continue Shopping
            </Button>
          </Alert>
        ) : (
          <>
            <h4 className="text-end text-success fw-bold">
              🏷️ Total Amount: <span className="text-danger">${totalAmount.toFixed(2)}</span>
            </h4>

            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
              {/* Order Details Tab */}
              <Tab eventKey="cart" title="🛒 Your Order">
                <Row>
                  <Col md={10} className="mx-auto">
                    <Table striped bordered hover>
                      <thead className="text-center bg-light">
                        <tr>
                          <th>#</th>
                          <th>Image</th>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        {cart.map((item, index) => (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>
                              <img src={item.image} alt={item.name} width="50" height="50" className="rounded" />
                            </td>
                            <td>{item.name}</td>
                            <td className="text-danger fw-bold">${item.price.toFixed(2)}</td>
                            <td>{item.quantity}</td>
                            <td className="text-success fw-bold">${(item.price * item.quantity).toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <Button variant="primary" onClick={() => setActiveTab("info")} className="mt-3 w-100">
                      ➡ Continue
                    </Button>
                  </Col>
                </Row>
              </Tab>

              {/* Shipping Information Tab */}
              <Tab eventKey="info" title="🚚 Shipping Information">
                <Row>
                  <Col md={6} className="mx-auto">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>🧑 Full Name</Form.Label>
                        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>🏠 Address</Form.Label>
                        <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>📞 Phone Number</Form.Label>
                        <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                      </Form.Group>
                      <Button variant="success" type="submit" className="mt-3 w-100">
                        ✅ Confirm Order (${totalAmount.toFixed(2)})
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Checkout;
