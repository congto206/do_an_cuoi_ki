import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import products from "../data/products.json"; // ✅ Import dữ liệu từ file JSON

const SplitAC = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("All");
    const [showButton, setShowButton] = useState(false);

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

    // ✅ Lọc sản phẩm theo từ khóa và giá
    const filteredProducts = products
        .filter(product => product.category === "split")
        .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(product => {
            if (selectedPrice === "All") return true;
            return (typeof product.price === "string" ? parseFloat(product.price.replace("$", "")) : product.price) 
       <= parseFloat(selectedPrice);
        });

    return (
        <>
            <NavbarComponent />
            <Container className="mt-4">
                <h2 className="text-center text-primary fw-bold">Split AC</h2>

                {/* ✅ Ô tìm kiếm sản phẩm & Lọc theo giá */}
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Control
                            type="text"
                            placeholder="🔍 Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-bar"
                        />
                    </Col>
                    <Col md={6}>
                        <Form.Select
                            value={selectedPrice}
                            onChange={(e) => setSelectedPrice(e.target.value)}
                            className="filter-dropdown"
                        >
                            <option value="All">All Prices</option>
                            <option value="500">Up to $500</option>
                            <option value="750">Up to $750</option>
                            <option value="1000">Up to $1000</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Row className="mt-4">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <Col key={product.id} lg={4} md={6} sm={12} className="mb-4">
                                <Card className="shadow-lg border-0 product-card">
                                    <Card.Img variant="top" src={product.image} className="product-img" />
                                    <Card.Body className="text-center d-flex flex-column justify-content-between">
                                        <div>
                                            <Card.Title className="fw-bold">{product.name}</Card.Title>
                                            <Card.Text className="text-danger fs-5 fw-bold">${product.price}</Card.Text>
                                        </div>
                                        <div className="d-flex justify-content-center mt-auto">
                                            <Button 
                                                variant="primary" 
                                                className="m-1 btn-hover-detail"
                                                onClick={() => navigate(`/product/${product.id}`)}
                                            >
                                                🔍 Details
                                            </Button>
                                            <Button 
                                                variant="success" 
                                                className="m-1 btn-hover-buy"
                                                onClick={() => navigate(`/product/${product.id}`)}
                                            >
                                                🛒 Buy
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <p className="text-center text-muted">No products found.</p>
                    )}
                </Row>
            </Container>

            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">⬆️</button>
            )}

            <style>
                {`
                .search-bar, .filter-dropdown {
                    width: 100%;
                    padding: 10px;
                    font-size: 16px;
                    border-radius: 8px;
                    border: 1px solid #ccc;
                    outline: none;
                    transition: border 0.3s;
                }
                .search-bar:focus, .filter-dropdown:focus {
                    border: 2px solid #7a5af5;
                    box-shadow: 0 0 8px rgba(122, 90, 245, 0.5);
                }
                .product-img {
                    height: 250px;
                    object-fit: cover;
                    border-radius: 10px;
                }
                .product-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    min-height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .product-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    min-height: 100%;
                    display: flex;
                    flex-direction: column;
                    border-radius: 10px;
                    overflow: hidden;
                }

                .product-card:hover {
                    transform: scale(1.05);
                    box-shadow: 0px 8px 20px rgba(122, 90, 245, 0.4);
                }

                /* Ảnh sản phẩm */
                .product-img {
                    height: 250px;
                    object-fit: cover;
                    border-radius: 10px;
                    transition: transform 0.3s ease, filter 0.3s ease;
                }

                .product-card:hover .product-img {
                    transform: scale(1.1);
                    filter: brightness(1.2);
                }

                /* Nút hover với hiệu ứng gradient */
                .btn-hover-detail, .btn-hover-buy {
                    transition: all 0.3s ease-in-out;
                    border-radius: 8px;
                    font-weight: bold;
                    padding: 10px 18px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                /* Hover - đổi màu gradient + tăng kích thước */
                .btn-hover-detail:hover {
                    background: linear-gradient(135deg, #007bff, #0056b3);
                    transform: translateY(-3px) scale(1.05);
                    box-shadow: 0px 5px 15px rgba(0, 86, 179, 0.4);
                    color: #fff;
                }

                .btn-hover-buy:hover {
                    background: linear-gradient(135deg, #28a745, #1e7e34);
                    transform: translateY(-3px) scale(1.05);
                    box-shadow: 0px 5px 15px rgba(30, 126, 52, 0.4);
                    color: #fff;
                }

                /* Hiệu ứng khi bấm */
                .btn-hover-detail:active, .btn-hover-buy:active {
                    transform: scale(0.95);
                    box-shadow: none;
                }
                `}
            </style>
            <Footer />
        </>
    );
};

export default SplitAC;
