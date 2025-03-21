import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Container, Table, Button, Alert, Card, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import { FaTrashAlt } from "react-icons/fa"; 

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Hiển thị modal xác nhận
  const handleShowConfirm = (item) => {
    setSelectedItem(item);
    setShowConfirm(true);
  };

  // Xác nhận xóa sản phẩm
  const handleConfirmRemove = () => {
    if (selectedItem) {
      removeFromCart(selectedItem.id);
    }
    setShowConfirm(false);
  };

  // Tính tổng giá tiền
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <NavbarComponent />

      <Container className="mt-5">
      <h2 className="text-center fw-bold text-dark">🛒 Your Shopping Cart</h2>


        {cart.length === 0 ? (
          <Alert variant="warning" className="text-center mt-4">
            Your cart is empty.{" "}
            <Button variant="link" onClick={() => navigate("/products")}>
              Continue Shopping
            </Button>
          </Alert>
        ) : (
          <div className="cart-layout">
            {/* Bảng sản phẩm */}
            <div className="cart-table">
              <Table bordered hover responsive className="mt-4 text-center">
                <thead className="table-dark text-white">
                  <tr>
                    <th>#</th>
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
                      <td>{index + 1}</td>
                      <td>
                        <img src={item.image} alt={item.name} className="cart-img" />
                      </td>
                      <td>{item.name}</td>
                      <td className="text-danger fw-bold">${item.price}</td>
                      <td>
                        <div className="quantity-control">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </Button>
                          <span className="mx-2">{item.quantity}</span>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td className="text-success fw-bold">${(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <Button className="remove-btn" size="sm" onClick={() => handleShowConfirm(item)}>
                          <FaTrashAlt />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            {/* Tổng kết đơn hàng */}
            <div className="order-summary">
              <Card className="p-3 shadow">
                <Card.Body>
                  <h4 className="fw-bold">Order Summary</h4>
                  <hr />
                  <p>
                    Subtotal: <span className="fw-bold">${totalPrice.toFixed(2)}</span>
                  </p>
                  <p>
                    Shipping: <span className="text-success">Free</span>
                  </p>
                  <h5 className="fw-bold text-success">Total: ${totalPrice.toFixed(2)}</h5>
                  <Button
                    variant="dark"
                    className="w-100 mt-3 checkout-btn"
                    onClick={() => navigate("/checkout")}
                  >
                    🛍️ Proceed to Checkout
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        )}
      </Container>

      <Footer />

      {/* Modal xác nhận xóa */}
      <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
        <Modal.Header closeButton className="border-0 modal-header-custom">
          <Modal.Title className="text-white fw-bold">Confirm Removal</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center modal-body-custom">
          <p className="mb-4 text-light">
            Are you sure you want to remove <strong className="text-white">{selectedItem?.name}</strong> from your cart?
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="light" className="btn-cancel" onClick={() => setShowConfirm(false)}>
              Cancel
            </Button>
            <Button variant="dark" className="btn-remove" onClick={handleConfirmRemove}>
              Remove
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* CSS */}
      <style>
        {`
        .cart-layout {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }

        .cart-table {
          flex: 2;
        }

        .order-summary {
          flex: 1;
        }

        .cart-img {
          width: 70px;
          height: 70px;
          object-fit: cover;
          border-radius: 8px;
          border: 1px solid #ddd;
        }

        .quantity-control {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .checkout-btn {
          font-size: 18px;
          font-weight: bold;
          padding: 10px;
        }

        @media (max-width: 768px) {
          .cart-layout {
            flex-direction: column;
          }

          .order-summary {
            width: 100%;
            margin-top: 20px;
          }
        }

        .remove-btn {
          background-color:rgb(9, 9, 9);
          border: none;
          color: white;
          font-size: 16px;
          border-radius: 6px;
          transition: background 0.3s ease, transform 0.2s ease;
          padding: 5px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .remove-btn:hover {
          background-color:rgb(18, 16, 16);
          transform: scale(1.05);
        }

        .remove-btn:active {
          background-color:rgb(20, 20, 20);
          transform: scale(0.95);
        }
          /* Modal Custom */
            .modal-content {
              border-radius: 12px;
              background: #222; /* Nền xám đậm */
              color: #fff;
              border: 1px solid #444;
            }

            /* Header */
            .modal-header-custom {
              background: #111;
              border-bottom: 1px solid #444;
            }

            /* Body */
            .modal-body-custom {
              font-size: 16px;
              background: #222;
            }

            /* Nút */
            .btn-cancel {
              background: #f8f9fa;
              color: #222;
              border: 1px solid #ccc;
              padding: 8px 20px;
              font-weight: bold;
              transition: 0.3s ease-in-out;
            }

            .btn-remove {
              background: #000;
              color: #fff;
              border: 1px solid #666;
              padding: 8px 20px;
              font-weight: bold;
              transition: 0.3s ease-in-out;
            }

            .btn-cancel:hover {
              background: #e0e0e0;
            }

            .btn-remove:hover {
              background: #333;
            }

            /* Hiệu ứng mờ nền modal */
            .modal-backdrop {
              background: rgba(0, 0, 0, 0.6);
            }


        `}
      </style>
    </>
  );
};

export default CartPage;