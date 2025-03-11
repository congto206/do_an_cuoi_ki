import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import productsData from "../data/products.json";
import Footer from "../components/Footer";

const SplitAC= () => {
    const navigate = useNavigate();
    const [showButton, setShowButton] = useState(false);
    const [searchName, setSearchName] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("all");

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const priceFilters = {
        all: Infinity,
        "500": 500,
        "750": 750,
        "1000": 1000,
    };

    const filteredProducts = productsData.filter(product => {
        const productPrice = Number(product.price);
        const maxPrice = priceFilters[selectedPrice] || Infinity;

        return (
            product.category === "split" &&
            product.name.toLowerCase().includes(searchName.toLowerCase()) &&
            productPrice <= maxPrice
        );
    });

    return (
        <>
            <NavbarComponent />
            <Container className="mt-5">
            <h2 className="text-center fw-bold mb-4" style={{ color: "#6c757d" }}>Split AC</h2>
                <Row className="mb-4">
                    <Col md={6} className="mb-2">
                        <Form.Control
                            type="text"
                            placeholder="🔍 Search products..."
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />
                    </Col>
                    <Col md={6}>
                        <Form.Select value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
                            <option value="all">All Prices</option>
                            <option value="500">Up to $500</option>
                            <option value="750">Up to $750</option>
                            <option value="1000">Up to $1000</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    {filteredProducts.map((product) => (
                        <Col key={product.id} lg={4} md={6} sm={12} className="mb-4">
                            <Card className="product-card border-0 shadow-sm">
                                <div className="card-img-container">
                                    <Card.Img variant="top" src={product.image} className="product-img" />
                                </div>
                                <Card.Body className="text-center d-flex flex-column">
                                    <Card.Title className="fw-bold text-dark flex-grow-1">{product.name}</Card.Title>
                                    <Card.Text className="text-danger fs-5 fw-bold">${product.price}</Card.Text>
                                    <div className="d-flex justify-content-center gap-2 mt-auto">
                                        <Button variant="outline-primary" className="btn-animate" onClick={() => navigate(`/product/${product.id}`)}>
                                            🔍 Details
                                        </Button>
                                        <Button variant="success" className="btn-animate" onClick={() => navigate(`/product/${product.id}`)}>
                                            🛒 Buy
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    ⬆️
                </button>
            )}

            <style>
                {`
                .product-card {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border-radius: 10px;
                    overflow: hidden;
                }

                .product-card:hover {
                    transform: scale(1.05);
                    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);
                }

                /* Hình ảnh phóng to nhẹ khi hover */
                .card-img-container {
                    height: 250px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }

                .product-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease-in-out, opacity 0.3s ease-in-out;
                }

                .product-card:hover .product-img {
                    transform: scale(1.1);
                    opacity: 0.9;
                }

                /* Nút chung */
                .btn-animate {
                    transition: all 0.3s ease-in-out;
                    border-radius: 8px;
                    font-weight: bold;
                    padding: 10px 16px;
                }

                /* Nút "Details" */
                .btn-animate.btn-outline-primary {
                    border: 2px solid #007bff;
                    color: #007bff;
                    background: white;
                }

                .btn-animate.btn-outline-primary:hover {
                    background: rgba(0, 123, 255, 0.1);
                    color: #0056b3;
                    border-color: #0056b3;
                    transform: scale(1.08);
                    box-shadow: 0px 4px 12px rgba(0, 123, 255, 0.3);
                }

                /* Nút "Buy" */
                .btn-animate.btn-success {
                    background: #28a745;
                    border: 2px solid #28a745;
                    color: white;
                }

                .btn-animate.btn-success:hover {
                    background: #218838;
                    border-color: #1e7e34;
                    transform: scale(1.08);
                    box-shadow: 0px 4px 12px rgba(40, 167, 69, 0.4);
                }


                /* Nút quay lại đầu trang */
                .back-to-top {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: linear-gradient(135deg, #007bff, #0056b3);
                    color: white;
                    border: none;
                    padding: 12px 16px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 16px;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                }

                .back-to-top:hover {
                    transform: scale(1.2);
                    box-shadow: 0px 6px 15px rgba(0, 91, 187, 0.5);
                }
                    

                `}
            </style>
            <Footer />
        </>
    );
};

export default SplitAC;
