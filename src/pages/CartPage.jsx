import React from "react";
import { useCart } from "../context/CartContext";
import { Container, Table, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calculate total cart price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container className="mt-5">
      <h2 className="text-center fw-bold text-primary">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <Alert variant="warning" className="text-center mt-4">
          Your cart is empty.{" "}
          <Button variant="link" onClick={() => navigate("/products")}>
            Continue Shopping
          </Button>
        </Alert>
      ) : (
        <>
          {/* Cart Table */}
          <Table bordered hover responsive className="mt-4 text-center">
            <thead className="table-primary">
              <tr>
                <th>#</th> {/* Index column */}
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td> {/* Display index */}
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-img"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td className="text-danger fw-bold">${item.price}</td>
                  <td>
                    <Button variant="secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button variant="secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                  </td>
                  <td className="text-success fw-bold">${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ❌ Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Total Price */}
          <div className="total-container">
            <h4>
              Total: <span className="total-price">${totalPrice.toFixed(2)}</span>
            </h4>
          </div>

          {/* Checkout Button */}
          <div className="text-center mt-3">
            <Button
              variant="success"
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              🛍️ Proceed to Checkout
            </Button>
          </div>
        </>
      )}

      {/* Inline CSS */}
      <style>
        {`
        /* Product Image */
        .cart-img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 8px;
        }

        /* Total Price */
        .total-container {
          text-align: right;
          margin-top: 15px;
          font-size: 20px;
          font-weight: bold;
          padding-right: 10px;
        }

        .total-price {
          color: #28a745;
        }

        /* Checkout Button */
        .checkout-btn {
          border-radius: 10px;
          padding: 10px 20px;
          font-size: 18px;
        }
        `}
      </style>
    </Container>
  );
};

export default CartPage;
